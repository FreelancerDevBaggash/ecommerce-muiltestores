// app/api/wallet/[type]/withdraw/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import db from '@/lib/db';
import { authOptions } from '@/lib/authOptions';

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { amount, bankDetails } = await request.json();
  if (params.type !== 'store_balance') {
    return NextResponse.json({ error: 'Withdrawal not allowed for this wallet' }, { status: 400 });
  }
  if (amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });

  const vendor = await db.vendor.findUnique({
    where: { email: session.user.email },
    include: { store: true }
  });
  if (!vendor?.store) return NextResponse.json({ error: 'No store' }, { status: 400 });

  const wallet = await db.wallet.findUnique({
    where: { storeId_type: { storeId: vendor.store.id, type: 'STORE_BALANCE' } }
  });
  if (!wallet || wallet.balance < amount) {
    return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
  }

  const tx = await db.walletTransaction.create({
    data: {
      walletId: wallet.id,
      type: 'WITHDRAW',
      amount,
      description: 'سحب أرباح',
      metadata: { bankDetails }
    }
  });
  const updated = await db.wallet.update({
    where: { id: wallet.id },
    data: { balance: { decrement: amount } }
  });

  return NextResponse.json({ wallet: updated, tx });
}
