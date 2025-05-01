import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')
    const limit = parseInt(searchParams.get('limit')) || 5

    if (!storeId) {
      return NextResponse.json(
        { error: 'معرف المتجر مطلوب' },
        { status: 400 }
      )
    }

    const orders = await db.order.findMany({
      where: { storeId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        customerStore: {
          include: {
            customer: true
          }
        },
        orderItems: {
          include: {
            product: true
          }
        }
      }
    })

    const formattedOrders = orders.map(order => ({
      id: order.id,
      orderNumber: order.orderNumber || `ORD-${order.id.slice(-6).toUpperCase()}`,
      customerName: order.customerStore?.customer?.firstName 
        ? `${order.customerStore.customer.firstName} ${order.customerStore.customer.lastName || ''}`.trim()
        : 'عميل',
total: order.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) + order.shippingCost,
      status: order.orderStatus,
      createdAt: order.createdAt,
      items: order.orderItems.map(item => ({
        productName: item.product?.title || 'منتج محذوف',
        quantity: item.quantity,
        price: item.price
      }))
    }))

    return NextResponse.json({
      success: true,
      data: formattedOrders
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'فشل في جلب الطلبات الأخيرة', details: error.message },
      { status: 500 }
    )
  }
}