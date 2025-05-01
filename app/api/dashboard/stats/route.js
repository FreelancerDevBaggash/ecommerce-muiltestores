import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')

    if (!storeId) {
      return NextResponse.json(
        { error: 'معرف المتجر مطلوب' },
        { status: 400 }
      )
    }

    // إجمالي المبيعات
    const totalSales = await db.sale.aggregate({
      _sum: { invoiceTotal: true },
      where: { storeId }
    })

    // عدد الطلبات
    const totalOrders = await db.order.count({ where: { storeId } })

    // عدد المنتجات
    const totalProducts = await db.product.count({ where: { storeId } })

    // عدد العملاء
    const totalCustomers = await db.customerStore.count({ 
      where: { 
        storeId
       // فقط العملاء الذين لديهم طلبات
      }
    })

    // حساب التغيرات مقارنة بالأسبوع الماضي
    const now = new Date()
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const currentWeekSales = await db.sale.aggregate({
      _sum: { invoiceTotal: true },
      where: { 
        storeId,
        createdAt: { gte: lastWeek }
      }
    })

    const previousWeekSales = await db.sale.aggregate({
      _sum: { invoiceTotal: true },
      where: { 
        storeId,
        createdAt: { 
          lt: lastWeek,
          gte: new Date(lastWeek.getTime() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    })

    const salesChange = previousWeekSales._sum.invoiceTotal 
      ? ((currentWeekSales._sum.invoiceTotal - previousWeekSales._sum.invoiceTotal) / previousWeekSales._sum.invoiceTotal * 100).toFixed(1)
      : 0

    return NextResponse.json({
      success: true,
      data: {
        totalSales: totalSales._sum.invoiceTotal || 0,
        totalOrders,
        totalProducts,
        totalCustomers,
        salesChange: salesChange > 0 ? `+${salesChange}%` : `${salesChange}%`,
        salesTrend: salesChange > 0 ? 'up' : salesChange < 0 ? 'down' : 'neutral'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'فشل في جلب الإحصائيات', details: error.message },
      { status: 500 }
    )
  }
}