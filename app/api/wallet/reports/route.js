// app/api/wallet/reports/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

// GET /api/wallet/reports?storeId=...&start=...&end=...&type=...
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const storeId = searchParams.get('storeId')
  const start   = searchParams.get('start')
  const end     = searchParams.get('end')
  const type    = searchParams.get('type')  // STORE_BALANCE | ELECTRONIC_PAYMENTS | COD_PAYMENTS

  if (!storeId) {
    return NextResponse.json({ error: 'storeId مطلوب' }, { status: 400 })
  }

  const walletFilter = { storeId }
  if (type) walletFilter.type = type

  // جلب المحفظة مع الحركات في النطاق الزمني
  const wallets = await db.wallet.findMany({
    where: walletFilter,
    include: {
      transactions: {
        where: {
          createdAt: {
            gte: start ? new Date(start) : undefined,
            lte: end   ? new Date(end)   : undefined
          }
        },
        orderBy: { createdAt: 'desc' }
      }
    }
  })

  // مسحّط: دمج نوع المحفظة مع كل حركة
  const txs = wallets.flatMap(w =>
    w.transactions.map(t => ({
      id: t.id,
      date: t.createdAt,
      walletType: w.type,
      txType: t.type,
      amount: t.amount,
      description: t.description,
      provider: t.provider,
      currency: t.currency,
    }))
  )

  return NextResponse.json(txs)
}
