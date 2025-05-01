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

    // جلب بيانات المبيعات الأسبوعية
    const weeklySales = await db.$queryRaw`
      SELECT 
        DATE_TRUNC('week', o."createdAt") as week,
        SUM(o.total) as total,
        COUNT(o.id) as ordersCount
      FROM "Order" o
      WHERE o."storeId" = ${storeId}
      AND o."orderStatus" = 'COMPLETED'
      GROUP BY week
      ORDER BY week DESC
      LIMIT 8
    `

    // تنسيق البيانات للرسم البياني
    const formattedData = weeklySales.map(item => ({
      week: new Date(item.week).toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' }),
      total: Number(item.total),
      ordersCount: Number(item.ordersCount)
    })).reverse() // عكس الترتيب ليكون من الأقدم للأحدث

    return NextResponse.json({
      success: true,
      data: formattedData
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'فشل في جلب المبيعات الأسبوعية', details: error.message },
      { status: 500 }
    )
  }
}