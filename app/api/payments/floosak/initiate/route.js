// app/api/payments/mock/initiate/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

// هذا المسار يحاكي إنشاء دفعة في البوابة الوهمية ويعيد رابط الدفع
export async function POST(request) {
  const { id, amount, currency ,slugDomain } = await request.json();

  // تجد الـ order وتتأكد منه
  const order = await db.order.findUnique({ where: { id: id } });
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  // توليد معرف دفعة وهمي
  const paymentRef = `FloosakPAY-${Date.now()}`;

  // سجل المعاملة الوهمية في PaymentTransaction
  await db.paymentTransaction.create({
    data: {
      transactionNumber: paymentRef,
      amount,
      currency,
      status: 'PENDING',
      storeId: order.storeId,
      paymentProvidersId: (await db.paymentProvider.findFirst({ where: { name: 'floosak' } })).id,
    }
  });

  // إعادة رابط وهمي؛ في الحقيقة سيظهر زر “اكمل الدفع”
  const paymentUrl = `/api/payments/floosak/callback?orderId=${id}&amount=${amount}&currency=${currency}&slugDomain=${slugDomain}`;

  return NextResponse.json({ paymentUrl, paymentRef });
}
