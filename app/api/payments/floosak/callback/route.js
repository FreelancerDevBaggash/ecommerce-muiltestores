// app/api/payments/floosak/callback/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // 1) استخرج معلمات الاستعلام
    const params = request.nextUrl.searchParams
    const orderId = params.get('orderId')
    const amount = parseFloat(params.get('amount') || '0')
    const currency = params.get('currency') || 'YER'
   const slugDomain = params.get('slugDomain') || '/'
    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 })
    }

    // 2) تحقق من وجود الطلب
    const order = await db.order.findUnique({
      where: { id: orderId }
    })
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    const storeId = order.storeId

    // 3) شحن محفظة المدفوعات الإلكترونية للتاجر
    const wallet = await db.wallet.upsert({
      where: {
        storeId_type: { storeId, type: 'ELECTRONIC_PAYMENTS' }
      },
      update: {},
      create: {
        storeId,
        type: 'ELECTRONIC_PAYMENTS',
        balance: 0
      }
    })

    // 4) تسجيل حركة TOPUP
    await db.walletTransaction.create({
      data: {
        walletId: wallet.id,
        type: 'TOPUP',
        amount,
        description: `طلب #${order.orderNumber}`,
        provider: 'floosak',
        currency
      }
    })

    // 5) تحديث رصيد المحفظة
    await db.wallet.update({
      where: { id: wallet.id },
      data: { balance: { increment: amount } }
    })

    // 6) اقتطاع عمولة المنصة (5% كمثال)
    const commissionPercent = 0.05
    const commission = amount * commissionPercent
    // احصل أو أنشئ محفظة المنصة
    const pWallet = await db.platformWallet.upsert({
      where: { id: (await db.platformWallet.findFirst())?.id || '' },
      update: {},
      create: { balance: 0 }
    })
    // سجل حركة COMMISSION
    await db.platformTx.create({
      data: {
        walletId: pWallet.id,
        type: 'COMMISSION',
        amount: commission,
        metadata: { orderId, commissionPercent }
      }
    })
    // حدّث رصيد المنصة
    await db.platformWallet.update({
      where: { id: pWallet.id },
      data: { balance: { increment: commission } }
    })

    // 7) تحديث حالة الطلب إلى مدفوع ومعالجة
    await db.order.update({
      where: { id: orderId },
      data: {
        paymentStatuse: 'PAID',
        orderStatus: 'PROCESSING'
      }
    })

    // 8) إعادة توجيه المستخدم إلى صفحة تتبع الطلب
    return NextResponse.redirect(`${baseUrl}/${slugDomain}/order-confirmation/${orderId}`)
  } catch (err) {
    console.error('خطأ في callback:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
