// app/api/platform/wallet/withdraw/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
  const { amount, bankDetails } = await request.json();
  if (amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });

  let wallet = await db.platformWallet.findFirst();
  if (!wallet) {
    wallet = await db.platformWallet.create({ data: {} });
  }
  if (wallet.balance < amount) {
    return NextResponse.json({ error: 'Insufficient platform balance' }, { status: 400 });
  }

  const tx = await db.platformTx.create({
    data: {
      walletId: wallet.id,
      type: 'PAYOUT',
      amount,
      metadata: { bankDetails }
    }
  });
  const updated = await db.platformWallet.update({
    where: { id: wallet.id },
    data: { balance: { decrement: amount } }
  });

  return NextResponse.json({ wallet: updated, tx });
}
