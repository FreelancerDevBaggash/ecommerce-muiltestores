// app/api/wallets/[storeId]/transactions/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request, { params }) {
  const { storeId } = params
  const { type, from, to } = Object.fromEntries(request.nextUrl.searchParams)

  // نحدد فلتر النوع (STORE_BALANCE, ELECTRONIC_PAYMENTS, COD_PAYMENTS)
  const walletFilter = { storeId }
  if (type) walletFilter.type = type

  // نجيب المحافظ حسب النوع
  const wallets = await db.wallet.findMany({
    where: walletFilter,
    include: {
      transactions: {
        where: {
          createdAt: {
            gte: from ? new Date(from) : undefined,
            lte: to ? new Date(to) : undefined,
          }
        },
        orderBy: { createdAt: 'desc' }
      }
    }
  })

  // نبسط البيانات إلى array مسطح
  const txs = wallets.flatMap(w => 
    w.transactions.map(t => ({
      ...t,
      walletType: w.type
    }))
  )

  return NextResponse.json(txs)
}
