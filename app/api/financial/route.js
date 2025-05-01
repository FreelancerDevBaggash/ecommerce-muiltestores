// import { NextResponse } from 'next/server'
// import db from '@/lib/db'

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url)
    
//     // التحقق من وجود storeId
//     const storeId = searchParams.get('storeId')
//     if (!storeId) {
//       return NextResponse.json(
//         { success: false, message: 'معرف المتجر مطلوب' },
//         { status: 400 }
//       )
//     }

//     // معالجة التواريخ
//     const from = validateDate(searchParams.get('from'))
//     const to = validateDate(searchParams.get('to'))
//     if (!from || !to) {
//       return NextResponse.json(
//         { success: false, message: 'تنسيق التاريخ غير صالح' },
//         { status: 400 }
//       )
//     }

//     // معالجة المعلمات
//     const params = {
//       storeId,
//       search: searchParams.get('search') || '',
//       categoryId: searchParams.get('categoryId') === 'all' ? null : searchParams.get('categoryId'),
//       status: searchParams.get('status') === 'all' ? null : searchParams.get('status'),
//       from,
//       to,
//       granularity: searchParams.get('granularity') || 'month'
//     }

//     // جلب البيانات
//     const [overview, revenue, expenses, profit] = await Promise.all([
//       getOverviewData(params),
//       getRevenueData(params),
//       getExpensesData(params),
//       getProfitData(params)
//     ])

//     return NextResponse.json({
//       success: true,
//       data: { overview, revenue, expenses, profit }
//     })

//   } catch (error) {
//     console.error('[FINANCIAL_API_ERROR]', error)
//     return NextResponse.json(
//       { 
//         success: false, 
//         message: error.message || 'خطأ في الخادم',
//         stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//       },
//       { status: 500 }
//     )
//   }
// }

// // الدوال المساعدة
// function validateDate(dateString) {
//   if (!dateString) return null
//   const date = new Date(dateString)
//   return isNaN(date) ? null : date
// }

// async function getOverviewData({ storeId, from, to, status }) {
//   const where = {
//     storeId,
//     createdAt: { gte: from, lte: to },
//     ...(status && { status: status.toUpperCase() })
//   }

//   const [totalOrders, totalSales, revenue, expenses] = await Promise.all([
//     db.order.count({ where }),
//     db.sale.count({ where }),
//     db.sale.aggregate({
//       _sum: { total: true },
//       where
//     }),
//     db.paymentTransaction.aggregate({
//       _sum: { amount: true },
//       where: { ...where, type: 'EXPENSE' }
//     })
//   ])

//   return {
//     totalOrders,
//     totalSales,
//     totalRevenue: revenue._sum.total || 0,
//     totalExpenses: expenses._sum.amount || 0,
//     netProfit: (revenue._sum.total || 0) - (expenses._sum.amount || 0)
//   }
// }

// pages/api/financial.js
import { NextResponse } from 'next/server'
import { format } from 'date-fns'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    // 1. معرف المتجر
    const storeId = searchParams.get('storeId')
    if (!storeId) {
      return NextResponse.json(
        { success: false, message: 'معرف المتجر مطلوب' },
        { status: 400 }
      )
    }

    // 2. التواريخ
    const from = parseDate(searchParams.get('from'))
    const to   = parseDate(searchParams.get('to'))
    if (!from || !to) {
      return NextResponse.json(
        { success: false, message: 'التواريخ غير صالحة أو مفقودة' },
        { status: 400 }
      )
    }

    // 3. حالة الطلب (اختياري)
    const statusParam = searchParams.get('status')
    const status = statusParam && statusParam !== 'all'
      ? statusParam.toUpperCase()
      : null

    // 4. granularity
    const granularity = searchParams.get('granularity') || 'month'
    const bucketFormat = {
      day:   'yyyy-MM-dd',
      week:  'RR-YYYY',
      month: 'yyyy-MM',
      year:  'yyyy'
    }[granularity] || 'yyyy-MM'

    const params = { storeId, from, to, status, bucketFormat }

    // 5. جلب البيانات بالتوازي
    const [overview, revenue, expenses, profit] = await Promise.all([
      getOverviewData(params),
      getRevenueData(params),
      getExpensesData(params),
      getProfitData(params)
    ])

    return NextResponse.json({
      success: true,
      data: { overview, revenue, expenses, profit }
    })
  } catch (error) {
    console.error('[FINANCIAL_API_ERROR]', error.stack ?? error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'خطأ في الخادم',
        stack: error.stack
      },
      { status: 500 }
    )
  }
}

// تحويل نص إلى Date أو null
function parseDate(str) {
  if (!str) return null
  const d = new Date(str)
  return isNaN(d.getTime()) ? null : d
}

// ===== نظرة عامة =====
async function getOverviewData({ storeId, from, to, status }) {
  // 1) الطلبات
  const orderWhere = {
    storeId,
    createdAt: { gte: from, lte: to },
    ...(status && { orderStatus: status })
  }
  const totalOrders = await db.Order.count({ where: orderWhere })

  // 2) المبيعات الكاملة
  const saleWhere = { storeId, createdAt: { gte: from, lte: to } }
  const sales = await db.Sale.findMany({
    where: saleWhere,
    select: {
      invoiceTotal: true,
      order: { select: { paymentMethod: true } }
    }
  })

  // 3) المدفوعات (مصروفات)
  const payWhere = { storeId, createdAt: { gte: from, lte: to } }
  const payments = await db.PaymentTransaction.findMany({
    where: payWhere,
    select: { amount: true }
  })

  // إجماليات النظرة العامة
  const totalSales = sales.length
  const totalRevenue  = sales.reduce((sum, s) => sum + s.invoiceTotal, 0)
  const totalExpenses = payments.reduce((sum, p) => sum + p.amount, 0)

  return {
    totalOrders,
    totalSales,
    totalRevenue,
    totalExpenses,
    netProfit: totalRevenue - totalExpenses
  }
}

// ===== بيانات الإيرادات المفصّلة =====
async function getRevenueData({ storeId, from, to, bucketFormat }) {
  // جلب المبيعات مع طريقة الدفع والتاريخ
  const sales = await db.Sale.findMany({
    where: { storeId, createdAt: { gte: from, lte: to } },
    select: {
      invoiceTotal: true,
      createdAt: true,
      order: { select: { paymentMethod: true } }
    }
  })

  // تجميع حسب الفترة المحددة
  const map = new Map()
  sales.forEach(s => {
    const period = format(s.createdAt, bucketFormat)
    const entry = map.get(period) || { date: period, cash: 0, online: 0 }
    if (s.order.paymentMethod === 'cash') {
      entry.cash += s.invoiceTotal
    } else {
      entry.online += s.invoiceTotal
    }
    map.set(period, entry)
  })

  // تحويل لـ array مرتبة
  return Array.from(map.values())
    .sort((a, b) => a.date.localeCompare(b.date))
}

// ===== بيانات المصروفات المفصّلة =====
async function getExpensesData({ storeId, from, to, bucketFormat }) {
  // جلب المصروفات
  const payments = await db.PaymentTransaction.findMany({
    where: { storeId, createdAt: { gte: from, lte: to } },
    select: { amount: true, createdAt: true }
  })

  // تجميع حسب الفترة
  const map = new Map()
  payments.forEach(p => {
    const period = format(p.createdAt, bucketFormat)
    const entry = map.get(period) || { date: period, amount: 0 }
    entry.amount += p.amount
    map.set(period, entry)
  })

  return Array.from(map.values())
    .sort((a, b) => a.date.localeCompare(b.date))
}

// ===== بيانات الأرباح =====
async function getProfitData({ storeId, from, to, bucketFormat }) {
  const rev = await getRevenueData({ storeId, from, to, bucketFormat })
  const exp = await getExpensesData({ storeId, from, to, bucketFormat })

  // افتراضيًّا، الفترات قد تختلف بين rev و exp، لذلك ننشئ خريطة مؤقتة
  const map = new Map()
  rev.forEach(r => map.set(r.date, { revenue: r.cash + r.online, expenses: 0 }))
  exp.forEach(e => {
    const prev = map.get(e.date) || { revenue: 0, expenses: 0 }
    prev.expenses = e.amount
    map.set(e.date, prev)
  })

  // بناء المصفوفة
  return Array.from(map.entries())
    .map(([date, { revenue, expenses }]) => ({
      month: date,
      revenue,
      expenses,
      profit: revenue - expenses,
      margin: revenue ? Math.round(((revenue - expenses) / revenue) * 100) : 0
    }))
    .sort((a, b) => a.month.localeCompare(b.month))
}

// import { NextResponse } from 'next/server'
// import db from '@/lib/db'

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url)
//     const from = searchParams.get('from')
//     const to = searchParams.get('to')
//     const storeId = searchParams.get('storeId')
//     const granularity = searchParams.get('granularity') || 'month'
//     const search = searchParams.get('search')
//     const categoryId = searchParams.get('categoryId')
//     const status = searchParams.get('status')

//     if (!storeId) {
//       return NextResponse.json(
//         { success: false, message: 'معرف المتجر مطلوب' },
//         { 
//           status: 400,
//           headers: { 'Content-Type': 'application/json' }
//         }
//       )
//     }

//     // التحقق من صحة التواريخ
//     if (from && isNaN(new Date(from))) {
//       return NextResponse.json(
//         { success: false, message: 'تاريخ البداية غير صالح' },
//         { 
//           status: 400,
//           headers: { 'Content-Type': 'application/json' }
//         }
//       )
//     }

//     if (to && isNaN(new Date(to))) {
//       return NextResponse.json(
//         { success: false, message: 'تاريخ النهاية غير صالح' },
//         { 
//           status: 400,
//           headers: { 'Content-Type': 'application/json' }
//         }
//       )
//     }

//     const params = {
//       from: from ? new Date(from) : undefined,
//       to: to ? new Date(to) : undefined,
//       storeId,
//       granularity,
//       search,
//       categoryId,
//       status
//     }

//     const [overview, revenue, expenses, profit] = await Promise.all([
//       getOverviewData(params),
//       getRevenueData(params),
//       getExpensesData(params),
//       getProfitData(params)
//     ])

//     return NextResponse.json({
//       success: true,
//       data: {
//         overview,
//         revenue,
//         expenses,
//         profit
//       }
//     }, {
//       headers: { 'Content-Type': 'application/json' }
//     })

//   } catch (error) {
//     console.error('[FINANCIAL_REPORTS_GET]', error)
//     return NextResponse.json(
//       { 
//         success: false, 
//         message: error.message || 'خطأ في الخادم الداخلي' 
//       },
//       { 
//         status: 500,
//         headers: { 'Content-Type': 'application/json' }
//       }
//     )
//   }
// }

// async function getOverviewData(params) {
//   try {
//     const orderMatch = {
//       storeId: params.storeId,
//       ...(params.from && { createdAt: { $gte: params.from } }),
//       ...(params.to && { createdAt: { $lte: params.to } }),
//       ...(params.status && params.status !== 'all' && { orderStatus: params.status.toUpperCase() })
//     }

//     const saleMatch = {
//       storeId: params.storeId,
//       ...(params.from && { createdAt: { $gte: params.from } }),
//       ...(params.to && { createdAt: { $lte: params.to } }),
//       ...(params.search && {
//         $or: [
//           { 'orderItems.productTitle': { $regex: params.search, $options: 'i' } },
//           { 'orderItems.productCode': { $regex: params.search, $options: 'i' } }
//         ]
//       }),
//       ...(params.categoryId && params.categoryId !== 'all' && { 'orderItems.categoryId': params.categoryId })
//     }

//     const [totalOrders, totalSales, totalRevenue, totalExpenses] = await Promise.all([
//       db.Order.countDocuments(orderMatch),
//       db.Sale.countDocuments(saleMatch),
//       db.Sale.aggregate([
//         { $match: saleMatch },
//         { $group: { _id: null, total: { $sum: "$invoiceTotal" } } }
//       ]),
//       db.PaymentTransaction.aggregate([
//         { 
//           $match: {
//             storeId: params.storeId,
//             status: 'COMPLETED',
//             ...(params.from && { createdAt: { $gte: params.from } }),
//             ...(params.to && { createdAt: { $lte: params.to } })
//           }
//         },
//         { $group: { _id: null, total: { $sum: "$amount" } } }
//       ])
//     ])

//     return {
//       totalOrders,
//       totalSales,
//       totalRevenue: totalRevenue[0]?.total || 0,
//       totalExpenses: totalExpenses[0]?.total || 0,
//       netProfit: (totalRevenue[0]?.total || 0) - (totalExpenses[0]?.total || 0)
//     }
//   } catch (error) {
//     console.error('Error in getOverviewData:', error)
//     throw new Error('فشل في جلب البيانات العامة')
//   }
// }

// async function getRevenueData(params) {
//   try {
//     let groupBy = {}
//     if (params.granularity === 'month') {
//       groupBy = {
//         year: { $year: "$createdAt" },
//         month: { $month: "$createdAt" }
//       }
//     } else if (params.granularity === 'day') {
//       groupBy = {
//         year: { $year: "$createdAt" },
//         month: { $month: "$createdAt" },
//         day: { $dayOfMonth: "$createdAt" }
//       }
//     } else if (params.granularity === 'year') {
//       groupBy = {
//         year: { $year: "$createdAt" }
//       }
//     }

//     const matchStage = {
//       storeId: params.storeId,
//       ...(params.from && { createdAt: { $gte: params.from } }),
//       ...(params.to && { createdAt: { $lte: params.to } }),
//       ...(params.search && {
//         $or: [
//           { 'orderItems.productTitle': { $regex: params.search, $options: 'i' } },
//           { 'orderItems.productCode': { $regex: params.search, $options: 'i' } }
//         ]
//       }),
//       ...(params.categoryId && params.categoryId !== 'all' && { 'orderItems.categoryId': params.categoryId }),
//       ...(params.status && params.status !== 'all' && { 'order.orderStatus': params.status.toUpperCase() })
//     }

//     const revenueData = await db.Sale.aggregate([
//       { $match: matchStage },
//       { $unwind: "$orderItems" },
//       {
//         $group: {
//           _id: {
//             ...groupBy,
//             paymentMethod: "$paymentMethod"
//           },
//           total: { $sum: "$orderItems.productPrice" }
//         }
//       },
//       {
//         $sort: Object.keys(groupBy).reduce((acc, key) => {
//           acc[`_id.${key}`] = 1
//           return acc
//         }, {})
//       }
//     ])

//     const formattedData = revenueData.reduce((acc, item) => {
//       const dateParts = []
//       if (item._id.year) dateParts.push(item._id.year)
//       if (item._id.month) dateParts.push(String(item._id.month).padStart(2, '0'))
//       if (item._id.day) dateParts.push(String(item._id.day).padStart(2, '0'))
      
//       const dateKey = dateParts.join('-')

//       if (!acc[dateKey]) {
//         acc[dateKey] = {
//           date: dateKey,
//           total: 0,
//           online: 0,
//           cash: 0
//         }
//       }

//       acc[dateKey].total += item.total || 0
//       if (item._id.paymentMethod === 'CASH') {
//         acc[dateKey].cash += item.total || 0
//       } else {
//         acc[dateKey].online += item.total || 0
//       }

//       return acc
//     }, {})

//     return Object.values(formattedData)
//   } catch (error) {
//     console.error('Error in getRevenueData:', error)
//     throw new Error('فشل في جلب بيانات الإيرادات')
//   }
// }

// async function getExpensesData(params) {
//   try {
//     const expenses = await db.PaymentTransaction.aggregate([
//       { 
//         $match: {
//           storeId: params.storeId,
//           ...(params.from && { createdAt: { $gte: params.from } }),
//           ...(params.to && { createdAt: { $lte: params.to } }),
//           ...(params.status && params.status !== 'all' && { status: params.status.toUpperCase() })
//         }
//       },
//       {
//         $group: {
//           _id: "$category",
//           total: { $sum: "$amount" }
//         }
//       }
//     ])

//     const totalExpenses = expenses.reduce((sum, item) => sum + (item.total || 0), 0)

//     return expenses.map((item) => ({
//       category: item._id || 'أخرى',
//       amount: item.total || 0,
//       percentage: totalExpenses > 0 ? Math.round(((item.total || 0) / totalExpenses) * 100) : 0
//     }))
//   } catch (error) {
//     console.error('Error in getExpensesData:', error)
//     throw new Error('فشل في جلب بيانات المصروفات')
//   }
// }

// async function getProfitData(params) {
//   try {
//     let groupBy = {}
//     if (params.granularity === 'month') {
//       groupBy = {
//         year: { $year: "$createdAt" },
//         month: { $month: "$createdAt" }
//       }
//     }

//     const revenueMatch = {
//       storeId: params.storeId,
//       ...(params.from && { createdAt: { $gte: params.from } }),
//       ...(params.to && { createdAt: { $lte: params.to } }),
//       ...(params.search && {
//         $or: [
//           { 'orderItems.productTitle': { $regex: params.search, $options: 'i' } },
//           { 'orderItems.productCode': { $regex: params.search, $options: 'i' } }
//         ]
//       }),
//       ...(params.categoryId && params.categoryId !== 'all' && { 'orderItems.categoryId': params.categoryId })
//     }

//     const expensesMatch = {
//       storeId: params.storeId,
//       status: 'COMPLETED',
//       ...(params.from && { createdAt: { $gte: params.from } }),
//       ...(params.to && { createdAt: { $lte: params.to } })
//     }

//     const [revenueData, expensesData] = await Promise.all([
//       db.Sale.aggregate([
//         { $match: revenueMatch },
//         { $unwind: "$orderItems" },
//         {
//           $group: {
//             _id: groupBy,
//             total: { $sum: "$orderItems.productPrice" }
//           }
//         },
//         {
//           $sort: Object.keys(groupBy).reduce((acc, key) => {
//             acc[`_id.${key}`] = 1
//             return acc
//           }, {})
//         }
//       ]),
//       db.PaymentTransaction.aggregate([
//         { $match: expensesMatch },
//         {
//           $group: {
//             _id: groupBy,
//             total: { $sum: "$amount" }
//           }
//         },
//         {
//           $sort: Object.keys(groupBy).reduce((acc, key) => {
//             acc[`_id.${key}`] = 1
//             return acc
//           }, {})
//         }
//       ])
//     ])

//     const profitData = revenueData.map((revItem) => {
//       const expItem = expensesData.find(
//         (exp) => exp._id.year === revItem._id.year && exp._id.month === revItem._id.month
//       )
//       const revenue = revItem.total || 0
//       const expenses = expItem?.total || 0
//       const profit = revenue - expenses

//       return {
//         month: `${revItem._id.year}-${String(revItem._id.month).padStart(2, '0')}`,
//         revenue,
//         expenses,
//         profit,
//         margin: revenue > 0 ? Math.round((profit / revenue) * 100) : 0
//       }
//     })

//     return profitData
//   } catch (error) {
//     console.error('Error in getProfitData:', error)
//     throw new Error('فشل في جلب بيانات الأرباح')
//   }
// }