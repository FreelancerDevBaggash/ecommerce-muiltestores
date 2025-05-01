// app/api/platform/wallet/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  let wallet = await db.platformWallet.findFirst({
    include: { transactions: { orderBy: { createdAt: 'desc' } } }
  });
  if (!wallet) {
    wallet = await db.platformWallet.create({ data: {} });
  }
  return NextResponse.json({ wallet });
}
