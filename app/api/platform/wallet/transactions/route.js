// app/api/platform/wallet/transactions/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  const txs = await db.platformTx.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(txs)
}
