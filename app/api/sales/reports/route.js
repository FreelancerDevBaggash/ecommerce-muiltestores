import { NextResponse } from 'next/server'
import db from '@/lib/db'

async function getStoreName(storeId) {
  const store = await db.store.findUnique({
    where: { id: storeId },
    select: { businessName: true },
  })
  return store?.businessName || 'غير معروف'
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const fromDate = new Date(searchParams.get('from'))
    const toDate = new Date(searchParams.get('to'))
    const storeId = searchParams.get('store')

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
      return NextResponse.json({ error: 'تواريخ غير صالحة' }, { status: 400 })
    }

    const whereClause = {
      createdAt: { gte: fromDate, lte: toDate },
      ...(storeId && { storeId }),
    }

    const previousWhereClause = {
      ...whereClause,
      createdAt: {
        gte: new Date(fromDate.getTime() - (toDate - fromDate)),
        lt: fromDate,
      },
    }

    const [currentOrders, previousOrders] = await Promise.all([
      db.order.findMany({
        where: whereClause,
        include: {
          orderItems: {
            include: { product: { select: { title: true, productPrice: true, salePrice: true } } }
          },
          store: { select: { businessName: true } }
        }
      }),
      db.order.findMany({
        where: previousWhereClause,
        include: {
          orderItems: {
            include: { product: { select: { title: true, productPrice: true, salePrice: true } } }
          }
        }
      })
    ])

    // حساب التوتالات
    const calculateTotals = (orders) => {
      return orders.reduce((acc, order) => {
        const orderTotal = order.orderItems.reduce((sum, item) => {
          const price = item.product.salePrice || item.product.productPrice || 0
          return sum + price * item.quantity
        }, 0)
        return {
          total: acc.total + orderTotal,
          count: acc.count + order.orderItems.length,
        }
      }, { total: 0, count: 0 })
    }

    const currentTotals = calculateTotals(currentOrders)
    const previousTotals = calculateTotals(previousOrders)

    const totalOrders = currentOrders.length
    const totalSales = currentTotals.total
    const totalItems = currentTotals.count

    const netRevenue = totalSales
    const averageOrderValue = totalOrders ? totalSales / totalOrders : 0
    const averageItemsPerOrder = totalOrders ? totalItems / totalOrders : 0
    const cogs = totalSales * 0.6 // افتراضيًا 60% تكلفة

    const ordersChange = previousOrders.length
      ? Math.round(((currentOrders.length - previousOrders.length) / previousOrders.length) * 1000) / 10
      : 0

    const salesChange = previousTotals.total
      ? Math.round(((currentTotals.total - previousTotals.total) / previousTotals.total) * 1000) / 10
      : 0

    // تجميع التقارير اليومية
    const dailySalesMap = new Map()

    currentOrders.forEach(order => {
      const dateKey = order.createdAt.toISOString().split('T')[0]
      const orderTotal = order.orderItems.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.productPrice || 0
        return sum + price * item.quantity
      }, 0)

      if (!dailySalesMap.has(dateKey)) {
        dailySalesMap.set(dateKey, {
          id: `${dateKey}-${order.store?.businessName || 'Store'}`,
          date: new Date(dateKey),
          store: order.store?.businessName || 'غير معروف',
          orders: 0,
          revenue: 0,
          items: 0,
        })
      }

      const dailyData = dailySalesMap.get(dateKey)
      dailyData.orders += 1
      dailyData.revenue += orderTotal
      dailyData.items += order.orderItems.length
    })

    const dailySales = Array.from(dailySalesMap.values())

    return NextResponse.json({
      success: true,
      dailySales,
      totalOrders,
      totalSales,
      totalItems,
      netRevenue,
      averageOrderValue,
      averageItemsPerOrder,
      cogs,
      ordersChange,
      salesChange,
      revenueChange: salesChange,
      aovChange: ordersChange > 0 ? salesChange - ordersChange : 0,
      cogsChange: salesChange
    })
  } catch (error) {
    console.error('Error in sales report:', error)
    return NextResponse.json(
      { error: 'فشل في جلب تقارير المبيعات', details: error.message },
      { status: 500 }
    )
  }
}
