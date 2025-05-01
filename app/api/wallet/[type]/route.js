// app/api/wallet/[type]/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import  db  from '@/lib/db';
import { authOptions } from '@/lib/authOptions';

const TYPE_MAP = {
  store_balance: 'STORE_BALANCE',
  electronic_payments: 'ELECTRONIC_PAYMENTS',
  cod_payments: 'COD_PAYMENTS',
};

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const vendor = await db.vendor.findUnique({
    where: { email: session.user.email },
    include: { store: true }
  });
  if (!vendor?.store) return NextResponse.json({ error: 'No store' }, { status: 400 });

  const type = TYPE_MAP[params.type];
  const wallet = await db.wallet.findUnique({
    where: { storeId_type: { storeId: vendor.store.id, type } },
    include: { transactions: { orderBy: { createdAt: 'desc' } } }
  });

  return NextResponse.json({ wallet });
}

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { amount, description } = await request.json();
  if (amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });

  const vendor = await db.vendor.findUnique({
    where: { email: session.user.email },
    include: { store: true }
  });
  if (!vendor?.store) return NextResponse.json({ error: 'No store' }, { status: 400 });

  const type = TYPE_MAP[params.type];
  let wallet = await db.wallet.upsert({
    where: { storeId_type: { storeId: vendor.store.id, type } },
    update: {},
    create: { storeId: vendor.store.id, type }
  });

  const tx = await db.walletTransaction.create({
    data: { walletId: wallet.id, type: 'TOPUP', amount, description }
  });
  wallet = await db.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: amount } }
  });

  return NextResponse.json({ wallet, tx });
}

export async function PATCH(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { amount, description } = await request.json();
  const vendor = await db.vendor.findUnique({
    where: { email: session.user.email },
    include: { store: true }
  });
  if (!vendor?.store) return NextResponse.json({ error: 'No store' }, { status: 400 });

  const type = TYPE_MAP[params.type];
  const wallet = await db.wallet.findUnique({
    where: { storeId_type: { storeId: vendor.store.id, type } }
  });
  if (!wallet || wallet.balance < amount) {
    return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
  }

  const tx = await db.walletTransaction.create({
    data: { walletId: wallet.id, type: 'PAYMENT', amount, description }
  });
  const updated = await db.wallet.update({
    where: { id: wallet.id },
    data: { balance: { decrement: amount } }
  });

  return NextResponse.json({ wallet: updated, tx });
}
