// app/api/platform/wallet/payout/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request) {
  const { amount, description } = await request.json()
  if (!amount || amount <= 0) 
    return NextResponse.json({ error:'مبلغ غير صالح' }, { status:400 })

  return db.$transaction(async tx => {
    const wallet = await tx.platformWallet.findFirst()
    if (wallet.balance < amount) {
      throw new Error('الرصيد غير كافٍ')
    }
    // سجل المعاملة
    await tx.platformTx.create({
      data: {
        walletId: wallet.id,
        type: 'PAYOUT',
        amount,
        metadata: { description }
      }
    })
    // خصم الرصيد
    await tx.platformWallet.update({
      where: { id: wallet.id },
      data: { balance: { decrement: amount } }
    })
    return NextResponse.json({ ok: true })
  })
  .catch(err => NextResponse.json({ error: err.message }, { status: 400 }))
}
