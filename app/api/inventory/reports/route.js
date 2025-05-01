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
    const searchQuery = searchParams.get('search') || ''
    const categoryId = searchParams.get('categoryId')
    const status = searchParams.get('status')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    // بناء استعلام البحث
    const where = { 
      storeId,
      ...(searchQuery && {
        OR: [
          { title: { contains: searchQuery, mode: 'insensitive' } },
          { sku: { contains: searchQuery, mode: 'insensitive' } }
        ]
      }),
      ...(categoryId && categoryId !== 'all' && { categoryId }),
      ...(status === 'low' && { productStock: { lt: 10 } }),
      ...(status === 'out' && { productStock: 0 }),
      ...(status === 'available' && { productStock: { gt: 0 } }),
      ...(startDate || endDate ? { 
        createdAt: {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) })
        }
      } : {})
    }

    // جلب البيانات مع الإحصائيات
    const [products, totalProducts, lowStockCount, inventoryValue] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          category: { select: { title: true } },
          subCategory: { select: { title: true } }
        },
        orderBy: { productStock: 'asc' }
      }),
      db.product.count({ where }),
      db.product.count({ 
        where: { 
          ...where, 
          productStock: { lt: 10, gt: 0 } 
        } 
      }),
      db.product.aggregate({
        where,
        _sum: { 
          productPrice: true
        },
        _avg: {
          productPrice: true
        }
      })
    ])

    return NextResponse.json({
      success: true,
      data: {
        products,
        totalProducts,
        lowStockCount,
        outOfStockCount: await db.product.count({ 
          where: { ...where, productStock: 0 } 
        }),
        totalInventoryValue: inventoryValue._sum.productPrice || 0,
        averageProductPrice: inventoryValue._avg.productPrice || 0
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء جلب تقرير المخزون" },
      { status: 500 }
    )
  }
}