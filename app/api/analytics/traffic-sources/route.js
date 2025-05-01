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

    // جلب مصادر الزيارات
    const trafficSources = await db.storeVisit.groupBy({
      by: ['source'],
      _count: { source: true },
      where: { storeId },
      orderBy: { _count: { source: 'desc' } }
    })

    // تنسيق البيانات للرسم البياني
    const formattedData = trafficSources.map(item => ({
      source: item.source || 'مباشر',
      visits: item._count.source,
      percentage: 0 // سيتم حسابها في الواجهة الأمامية
    }))
    
    // حساب النسب المئوية
    const totalVisits = formattedData.reduce((sum, item) => sum + item.visits, 0)
    formattedData.forEach(item => {
      item.percentage = totalVisits > 0 
        ? Math.round((item.visits / totalVisits) * 100)
        : 0
    })

    return NextResponse.json({
      success: true,
      data: formattedData
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'فشل في جلب مصادر الزيارات', details: error.message },
      { status: 500 }
    )
  }
}