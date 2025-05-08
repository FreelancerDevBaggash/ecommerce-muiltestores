// app/api/sales/weekly/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'                // عميل Prisma مضبوط على Mongo
import { ObjectId } from 'mongodb'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')
    if (!storeId) {
      return NextResponse.json({ error: 'معرّف المتجر مطلوب' }, { status: 400 })
    }

    // ننفذ Aggregation Pipeline لحساب المجاميع الأسبوعية
    const result = await db.$runCommandRaw({
      aggregate: 'Sale',       // اسم collection في Mongo
      pipeline: [
        { $match: { storeId: new ObjectId(storeId) } },
        {
          $group: {
            _id: { 
              $dateTrunc: { date: '$createdAt', unit: 'week' }
            },
            total:      { $sum: '$invoiceTotal' },
            ordersCount:{ $sum: 1 }
          }
        },
        { $sort: { '_id': 1 } },
        { $limit: 8 }
      ],
      cursor: {}
    })

    // البيانات ترجع داخل firstBatch
    const weeklySales = result.cursor.firstBatch

    // ننسّقها للواجهة
    const formatted = weeklySales.map(item => ({
      week: new Date(item._id).toLocaleDateString('ar-SA', {
        month: 'short',
        day:   'numeric'
      }),
      total:      item.total,
      ordersCount:item.ordersCount
    }))

    return NextResponse.json({ success: true, data: formatted })
  } catch (err) {
    console.error('Error in /api/sales/weekly:', err)
    return NextResponse.json(
      { error: 'فشل جلب بيانات المبيعات الأسبوعية', details: err.message },
      { status: 500 }
    )
  }
}
