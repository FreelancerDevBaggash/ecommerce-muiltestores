import { NextResponse } from 'next/server'
import db from '@/lib/db'
import excel from 'exceljs'

export async function POST(request) {
  try {
    const { type, storeId, filters } = await request.json()

    if (!storeId) {
      return NextResponse.json(
        { success: false, message: 'معرف المتجر مطلوب' },
        { status: 400 }
      )
    }

    let data
    switch (type) {
      case 'overview':
        data = await getOverviewData(storeId, filters)
        break
      case 'revenue':
        data = await getRevenueData(storeId, filters)
        break
      case 'expenses':
        data = await getExpensesData(storeId, filters)
        break
      case 'profit':
        data = await getProfitData(storeId, filters)
        break
      default:
        return NextResponse.json(
          { success: false, message: 'نوع التقرير غير صالح' },
          { status: 400 }
        )
    }

    const workbook = new excel.Workbook()
    const worksheet = workbook.addWorksheet('التقرير المالي')

    // إضافة البيانات إلى ملف Excel حسب النوع
    addDataToWorksheet(worksheet, type, data)

    const buffer = await workbook.xlsx.writeBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename=financial_report_${type}_${new Date().toISOString().split('T')[0]}.xlsx`
      }
    })

  } catch (error) {
    console.error('[FINANCIAL_EXPORT]', error)
    return NextResponse.json(
      { success: false, message: 'خطأ في الخادم الداخلي' },
      { status: 500 }
    )
  }
}

function addDataToWorksheet(worksheet, type, data) {
  switch (type) {
    case 'overview':
      worksheet.addRow(['المؤشر', 'القيمة'])
      worksheet.addRow(['إجمالي الإيرادات', data.totalRevenue])
      worksheet.addRow(['إجمالي المصروفات', data.totalExpenses])
      worksheet.addRow(['صافي الأرباح', data.netProfit])
      worksheet.addRow(['عدد الطلبات', data.totalOrders])
      worksheet.addRow(['عدد المبيعات', data.totalSales])
      break
    case 'revenue':
      worksheet.addRow(['التاريخ', 'الإيرادات الكلية', 'المبيعات الإلكترونية', 'المبيعات النقدية'])
      data.forEach(item => {
        worksheet.addRow([item.date, item.total, item.online, item.cash])
      })
      break
    case 'expenses':
      worksheet.addRow(['الفئة', 'المبلغ', 'النسبة المئوية'])
      data.forEach(item => {
        worksheet.addRow([item.category, item.amount, `${item.percentage}%`])
      })
      break
    case 'profit':
      worksheet.addRow(['الشهر', 'الإيرادات', 'المصروفات', 'الأرباح', 'هامش الربح'])
      data.forEach(item => {
        worksheet.addRow([item.month, item.revenue, item.expenses, item.profit, `${item.margin}%`])
      })
      break
  }
}

async function getOverviewData(storeId, filters) {
  const match = {
    storeId,
    ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
    ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } }),
    ...(filters.status && filters.status !== 'all' && { orderStatus: filters.status.toUpperCase() }),
    ...(filters.searchQuery && {
      $or: [
        { 'orderItems.productTitle': { $regex: filters.searchQuery, $options: 'i' } },
        { 'orderItems.productCode': { $regex: filters.searchQuery, $options: 'i' } }
      ]
    }),
    ...(filters.category && filters.category !== 'all' && { 'orderItems.categoryId': filters.category })
  }

  const [totalOrders, totalSales, totalRevenue, totalExpenses] = await Promise.all([
    db.Order.countDocuments(match),
    db.Sale.countDocuments(match),
    db.Sale.aggregate([
      { $match: match },
      { $group: { _id: null, total: { $sum: "$invoiceTotal" } } }
    ]),
    db.PaymentTransaction.aggregate([
      { 
        $match: {
          storeId,
          status: 'COMPLETED',
          ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
          ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } })
        }
      },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ])
  ])

  return {
    totalOrders,
    totalSales,
    totalRevenue: totalRevenue[0]?.total || 0,
    totalExpenses: totalExpenses[0]?.total || 0,
    netProfit: (totalRevenue[0]?.total || 0) - (totalExpenses[0]?.total || 0)
  }
}

async function getRevenueData(storeId, filters) {
  const match = {
    storeId,
    ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
    ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } }),
    ...(filters.status && filters.status !== 'all' && { 'order.orderStatus': filters.status.toUpperCase() }),
    ...(filters.searchQuery && {
      $or: [
        { 'orderItems.productTitle': { $regex: filters.searchQuery, $options: 'i' } },
        { 'orderItems.productCode': { $regex: filters.searchQuery, $options: 'i' } }
      ]
    }),
    ...(filters.category && filters.category !== 'all' && { 'orderItems.categoryId': filters.category })
  }

  const revenueData = await db.Sale.aggregate([
    { $match: match },
    { $unwind: "$orderItems" },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
          paymentMethod: "$paymentMethod"
        },
        total: { $sum: "$orderItems.productPrice" }
      }
    },
    {
      $group: {
        _id: {
          year: "$_id.year",
          month: "$_id.month"
        },
        total: { $sum: "$total" },
        online: {
          $sum: {
            $cond: [{ $ne: ["$_id.paymentMethod", "CASH"] }, "$total", 0]
          }
        },
        cash: {
          $sum: {
            $cond: [{ $eq: ["$_id.paymentMethod", "CASH"] }, "$total", 0]
          }
        }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 }
    }
  ])

  return revenueData.map(item => ({
    date: `${item._id.year}-${String(item._id.month).padStart(2, '0')}`,
    total: item.total,
    online: item.online,
    cash: item.cash
  }))
}

async function getExpensesData(storeId, filters) {
  const expenses = await db.PaymentTransaction.aggregate([
    { 
      $match: {
        storeId,
        ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
        ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } }),
        ...(filters.status && filters.status !== 'all' && { status: filters.status.toUpperCase() })
      }
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ])

  const totalExpenses = expenses.reduce((sum, item) => sum + (item.total || 0), 0)

  return expenses.map((item) => ({
    category: item._id || 'أخرى',
    amount: item.total || 0,
    percentage: totalExpenses > 0 ? Math.round(((item.total || 0) / totalExpenses) * 100) : 0
  }))
}

async function getProfitData(storeId, filters) {
  const revenueMatch = {
    storeId,
    ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
    ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } }),
    ...(filters.searchQuery && {
      $or: [
        { 'orderItems.productTitle': { $regex: filters.searchQuery, $options: 'i' } },
        { 'orderItems.productCode': { $regex: filters.searchQuery, $options: 'i' } }
      ]
    }),
    ...(filters.category && filters.category !== 'all' && { 'orderItems.categoryId': filters.category })
  }

  const expensesMatch = {
    storeId,
    status: 'COMPLETED',
    ...(filters.dateRange?.from && { createdAt: { $gte: new Date(filters.dateRange.from) } }),
    ...(filters.dateRange?.to && { createdAt: { $lte: new Date(filters.dateRange.to) } })
  }

  const [revenueData, expensesData] = await Promise.all([
    db.Sale.aggregate([
      { $match: revenueMatch },
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          total: { $sum: "$orderItems.productPrice" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]),
    db.PaymentTransaction.aggregate([
      { $match: expensesMatch },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ])
  ])

  return revenueData.map((revItem) => {
    const expItem = expensesData.find(
      (exp) => exp._id.year === revItem._id.year && exp._id.month === revItem._id.month
    )
    const revenue = revItem.total || 0
    const expenses = expItem?.total || 0
    const profit = revenue - expenses

    return {
      month: `${revItem._id.year}-${String(revItem._id.month).padStart(2, '0')}`,
      revenue,
      expenses,
      profit,
      margin: revenue > 0 ? Math.round((profit / revenue) * 100) : 0
    }
  })
}