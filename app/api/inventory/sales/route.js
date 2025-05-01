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
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // بناء استعلام البحث
    const where = { 
      storeId,
      ...(startDate || endDate ? { 
        createdAt: {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) })
        }
      } : {})
    }

    const [sales, totalSales, revenueStats, topProducts] = await Promise.all([
      db.sale.findMany({
        where,
        include: {
          order: {
            include: {
              orderItems: {
                include: {
                  product: { select: { title: true, sku: true } }
                }
              }
            }
          },
          saleItems: {
            include: {
              product: { select: { title: true } }
            }
          }
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      db.sale.count({ where }),
      db.sale.aggregate({
        where,
        _sum: { invoiceTotal: true },
        _avg: { invoiceTotal: true }
      }),
      db.saleItem.groupBy({
        by: ['productId'],
        where: { sale: where },
        _sum: { productQty: true },
        orderBy: { _sum: { productQty: 'desc' } },
        take: 5
      })
    ])

    return NextResponse.json({
      success: true,
      data: {
        sales,
        stats: {
          totalSales,
          totalRevenue: revenueStats._sum.invoiceTotal || 0,
          averageSale: revenueStats._avg.invoiceTotal || 0,
          topProducts
        },
        pagination: {
          total: totalSales,
          page,
          limit,
          totalPages: Math.ceil(totalSales / limit)
        }
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء جلب بيانات المبيعات" },
      { status: 500 }
    )
  }
}