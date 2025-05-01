import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')

    if (!storeId) {
      return NextResponse.json(
        { success: false, message: "معرف المتجر مطلوب" },
        { status: 400 }
      )
    }

    // استخراج معاملات البحث
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const productId = searchParams.get('productId')
    const type = searchParams.get('type') // 'in', 'out', 'all'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // بناء استعلام البحث
    const where = { 
      storeId,
      ...(productId && { productId }),
      ...(type === 'in' && { quantity: { gt: 0 } }),
      ...(type === 'out' && { quantity: { lt: 0 } }),
      ...(startDate || endDate ? { 
        createdAt: {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) })
        }
      } : {})
    }

    const [movements, total] = await Promise.all([
      db.inventoryMovement.findMany({
        where,
        include: {
          product: { select: { title: true, sku: true } },
          order: { select: { orderNumber: true } }
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      db.inventoryMovement.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        movements,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit)
        }
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء جلب حركة المخزون" },
      { status: 500 }
    )
  }
}