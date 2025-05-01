// import { NextResponse } from 'next/server'
// import db from '@/lib/db'

// export async function POST(request) {
//   try {
//     const { orderId } = await request.json()
//     if (!orderId) {
//       return NextResponse.json({ error: 'مطلوب orderId' }, { status: 400 })
//     }

//     // 1) تأكيد وجود الطلب وجلب بياناته
//     const order = await db.order.findUnique({
//       where: { id: orderId }
//     })
//     if (!order) {
//       return NextResponse.json({ error: 'الطلب غير موجود' }, { status: 404 })
//     }
//     const { storeId, paymentStatuse, orderStatus } = order
//     // إذا لم يكن COD أو لم يصل بعد "PROCESSING"
//     if (order.paymentMethod !== 'COD' || orderStatus !== 'PROCESSING') {
//       return NextResponse.json({ error: 'لا يمكن تأكيد هذا الطلب' }, { status: 400 })
//     }

//     // نفترض أنّ المبلغ الإجمالي = subtotal + shippingCost
//     const items = await db.orderItem.findMany({ where: { orderId } })
//     const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
//     const total = subTotal + order.shippingCost

//     // 2) شحن محفظة COD للمتجر داخل معاملة
//     await db.$transaction(async tx => {
//       // upsert محفظة COD
//       const wallet = await tx.wallet.upsert({
//         where: { storeId_type: { storeId, type: 'COD_PAYMENTS' } },
//         update: {},
//         create: { storeId, type: 'COD_PAYMENTS', balance: 0 }
//       })

//       // سجل حركة TOPUP
//       await tx.walletTransaction.create({
//         data: {
//           walletId: wallet.id,
//           type: 'TOPUP',
//           amount: total,
//           description: `COD تأكيد طلب #${order.orderNumber}`,
//           provider: 'COD',
//           currency: 'YER'
//         }
//       })
//       // حدّث الرصيد
//       await tx.wallet.update({
//         where: { id: wallet.id },
//         data: { balance: { increment: total } }
//       })

//       // اقتطاع عمولة المنصة (مثلاً 5%)
//       const commissionPercent = 0.05
//       const commission = total * commissionPercent

//       const pWallet = await tx.platformWallet.upsert({
//         where: { id: (await tx.platformWallet.findFirst())?.id || '' },
//         update: {},
//         create: { balance: 0 }
//       })
//       await tx.platformTx.create({
//         data: {
//           walletId: pWallet.id,
//           type: 'COMMISSION',
//           amount: commission,
//           metadata: { orderId, commissionPercent }
//         }
//       })
//       await tx.platformWallet.update({
//         where: { id: pWallet.id },
//         data: { balance: { increment: commission } }
//       })

//       // 3) حدّث حالة الطلب إلى DELIVERED وPAID
//       await tx.order.update({
//         where: { id: orderId },
//         data: {
//           orderStatus: 'DELIVERED',
//           paymentStatuse: 'PAID'
//         }
//       })
//     })

//     return NextResponse.json({ ok: true, message: 'تم إضافة المبلغ إلى محفظة COD' })
//   } catch (err) {
//     console.error('خطأ في /api/payments/cod/confirm:', err)
//     return NextResponse.json({ error: 'فشل في تأكيد COD' }, { status: 500 })
//   }
// }


// // app/api/payments/cod/confirm/route.js
// import { NextResponse } from 'next/server'
// import db from '@/lib/db'

// export async function POST(request) {
//   try {
//     // 1) استقبل الـ orderId من جسم الطلب
//     const { orderId } = await request.json()
//     if (!orderId) {
//       return NextResponse.json({ error: 'مطلوب orderId' }, { status: 400 })
//     }

//     // 2) جلب الطلب والتأكد من وجوده
//     const order = await db.order.findUnique({
//       where: { id: orderId },
//       select: {
//         id: true,
//         storeId: true,
//         orderNumber: true,
//         shippingCost: true,
//         orderItems: { select: { price: true, quantity: true } },
//         paymentMethod: true,
//         orderStatus: true
//       }
//     })
//     if (!order) {
//       return NextResponse.json({ error: 'الطلب غير موجود' }, { status: 404 })
//     }

//     // 3) تحقق أنّ طريقة الدفع COD وحالته PROCESSING
//     if (order.paymentMethod !== 'COD') {
//       return NextResponse.json({ error: 'لا يمكن تأكيد هذا الطلب' }, { status: 400 })
//     }

//     // 4) حساب المجموع (أصناف + شحن)
//     const subTotal = order.orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0)
//     const total = subTotal + order.shippingCost

//     // 5) نفّذ كل العمليات ضمن معاملة واحدة
//     await db.$transaction(async tx => {
//       // A) شحن محفظة COD للمتجر (upsert)
//       const wallet = await tx.wallet.upsert({
//         where: { storeId_type: { storeId: order.storeId, type: 'COD_PAYMENTS' } },
//         update: {},
//         create: {
//           storeId: order.storeId,
//           type: 'COD_PAYMENTS',
//           balance: 0
//         }
//       })

//       // B) تسجيل حركة TOPUP في WalletTransaction
//       await tx.walletTransaction.create({
//         data: {
//           walletId: wallet.id,
//           type: 'TOPUP',
//           amount: total,
//           description: `COD تأكيد طلب #${order.orderNumber}`,
//           provider: 'COD',
//           currency: 'YER',
//           metadata: { orderId }
//         }
//       })

//       // C) تحديث رصيد المحفظة
//       await tx.wallet.update({
//         where: { id: wallet.id },
//         data: { balance: { increment: total } }
//       })

//       // D) اقتطاع عمولة المنصة (مثلاً 5%)
//       const commissionPercent = 0.05
//       const commission = total * commissionPercent

//       // E) إيجاد أو إنشاء محفظة المنصة
//       let pWallet = await tx.platformWallet.findFirst()
//       if (!pWallet) {
//         pWallet = await tx.platformWallet.create({ data: { balance: 0 } })
//       }

//       // F) تسجيل حركة COMMISSION في PlatformTx
//       await tx.platformTx.create({
//         data: {
//           walletId: pWallet.id,
//           type: 'COMMISSION',
//           amount: commission,
//           metadata: { storeId: order.storeId, orderId, commissionPercent }
//         }
//       })

//       // G) تحديث رصيد محفظة المنصة
//       await tx.platformWallet.update({
//         where: { id: pWallet.id },
//         data: { balance: { increment: commission } }
//       })

//       // H) تحديث حالة الطلب إلى DELIVERED و PAID
//       await tx.order.update({
//         where: { id: orderId },
//         data: {
//           orderStatus: 'DELIVERED',
//           paymentStatuse: 'PAID'
//         }
//       })
//     })

//     // 6) إرجاع النجاح
//     return NextResponse.json({ ok: true, message: 'تم تأكيد COD وتم شحن المحفظة' })
//   } catch (err) {
//     console.error('خطأ في /api/payments/cod/confirm:', err)
//     return NextResponse.json({ error: 'فشل في تأكيد COD' }, { status: 500 })
//   }
// }


// app/api/payments/cod/confirm/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request) {
  try {
    const { orderId } = await request.json()
    if (!orderId) {
      return NextResponse.json({ error: 'مطلوب orderId' }, { status: 400 })
    }

    // 1) جلب الطلب والتأكد
    const order = await db.order.findUnique({
      where: { id: orderId },
      select: {
        storeId: true,
        orderNumber: true,
        shippingCost: true,
        orderItems: { select: { price: true, quantity: true } },
        paymentMethod: true,
        orderStatus: true
      }
    })
    if (!order) {
      return NextResponse.json({ error: 'الطلب غير موجود' }, { status: 404 })
    }
    if (order.paymentMethod !== 'COD') {
      return NextResponse.json({ error: 'لا يمكن تأكيد هذا الطلب' }, { status: 400 })
    }

    // 2) حساب المجموع
    const subTotal = order.orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const total = subTotal + order.shippingCost

    // 3) معاملة شحن محفظة COD + تحديث الطلب
    await db.$transaction(async tx => {
      // A) upsert محفظة COD
      const wallet = await tx.wallet.upsert({
        where: { storeId_type: { storeId: order.storeId, type: 'COD_PAYMENTS' } },
        update: {},
        create: {
          storeId: order.storeId,
          type: 'COD_PAYMENTS',
          balance: 0
        }
      })
      // B) تسجيل حركة TOPUP
      await tx.walletTransaction.create({
        data: {
          walletId: wallet.id,
          type: 'TOPUP',
          amount: total,
          description: `COD تأكيد طلب #${order.orderNumber}`,
          provider: 'COD',
          currency: 'YER',
          metadata: { orderId }
        }
      })
      // C) تحديث رصيد المحفظة
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: total } }
      })
      // D) تحديث حالة الطلب
      await tx.order.update({
        where: { id: orderId },
        data: {
          orderStatus: 'DELIVERED',
          paymentStatuse: 'PAID'
        }
      })
    })

    // 4) الآن اقتطاع عمولة المنصة (خارج المعاملة السابقة)
    const commissionPercent = 0.05
    const commission = total * commissionPercent

    // A) إيجاد أو إنشاء محفظة المنصة
    let pWallet = await db.platformWallet.findFirst()
    if (!pWallet) {
      pWallet = await db.platformWallet.create({ data: { balance: 0 } })
    }
    // B) تسجيل حركة COMMISSION
    await db.platformTx.create({
      data: {
        walletId: pWallet.id,
        type: 'COMMISSION',
        amount: commission,
        metadata: { storeId: order.storeId, orderId, commissionPercent }
      }
    })
    // C) تحديث رصيد محفظة المنصة
    await db.platformWallet.update({
      where: { id: pWallet.id },
      data: { balance: { increment: commission } }
    })

    return NextResponse.json({ ok: true, message: 'تم تأكيد COD وشحن المحفظة' })
  } catch (err) {
    console.error('خطأ في /api/payments/cod/confirm:', err)
    return NextResponse.json({ error: 'فشل في تأكيد COD' }, { status: 500 })
  }
}
