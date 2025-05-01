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
    const categoryId = searchParams.get('categoryId')
    const status = searchParams.get('status')
    const searchQuery = searchParams.get('search') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    // بناء استعلام البحث
    const where = { 
      storeId,
      ...(searchQuery && {
        OR: [
          { title: { contains: searchQuery, mode: 'insensitive' } },
          { sku: { contains: searchQuery, mode: 'insensitive' } }
        ]
      }),
      ...(categoryId && { categoryId }),
      ...(status === 'low' && { productStock: { lt: 10 } }),
      ...(status === 'out' && { productStock: 0 })
    }

    // جلب المنتجات مع معلومات الفئة
    const [products, totalProducts, lowStockCount, outOfStockCount, inventoryValue] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          category: { select: { title: true } },
          subCategory: { select: { title: true } }
        },
        skip,
        take: limit,
        orderBy: { productStock: 'asc' }
      }),
      db.product.count({ where }),
      db.product.count({ where: { ...where, productStock: { lt: 10 } } }),
      db.product.count({ where: { ...where, productStock: 0 } }),
      db.product.aggregate({
        where,
        _sum: { 
          productPrice: true
        }
      })
    ])

    return NextResponse.json({
      success: true,
      data: {
        products,
        stats: {
          totalProducts,
          lowStockCount,
          outOfStockCount,
          totalInventoryValue: inventoryValue._sum.productPrice || 0
        },
        pagination: {
          total: totalProducts,
          page,
          limit,
          totalPages: Math.ceil(totalProducts / limit)
        }
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء جلب بيانات المخزون" },
      { status: 500 }
    )
  }
}