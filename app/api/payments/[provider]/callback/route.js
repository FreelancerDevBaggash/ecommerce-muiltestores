// app/api/payments/[provider]/callback/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request, { params }) {
  const body = await request.json();
  // TODO: تحقق من signature حسب المزود
  const { orderId, amount, currency, status } = body;
  if (status !== 'SUCCESS') {
    return NextResponse.json({ ok: true });
  }

  const order = await db.order.findUnique({
    where: { id: orderId },
    include: { customerStore: true }
  });
  if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });

  // 1) شحن E-Payments
  let wallet = await db.wallet.upsert({
    where: { storeId_type: { storeId: order.storeId, type: 'ELECTRONIC_PAYMENTS' } },
    update: {},
    create: { storeId: order.storeId, type: 'ELECTRONIC_PAYMENTS' }
  });
  await db.walletTransaction.create({
    data: {
      walletId: wallet.id,
      type: 'TOPUP',
      amount,
      description: `طلب #${order.orderNumber}`,
      provider: params.provider,
      currency
    }
  });
  await db.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: amount } }
  });

  // 2) اقتطاع عمولة المنصة
  const commissionPercent = 0.05;
  const commission = amount * commissionPercent;
  let pWallet = await db.platformWallet.findFirst();
  if (!pWallet) pWallet = await db.platformWallet.create({ data: {} });

  await db.platformTx.create({
    data: {
      walletId: pWallet.id,
      type: 'COMMISSION',
      amount: commission,
      metadata: { orderId, commissionPercent }
    }
  });
  await db.platformWallet.update({
    where: { id: pWallet.id },
    data: { balance: { increment: commission } }
  });

  // 3) تحديث حالة الطلب
  await db.order.update({
    where: { id: orderId },
    data: { paymentStatuse: 'PAID' }
  });

  return NextResponse.json({ ok: true });
}
