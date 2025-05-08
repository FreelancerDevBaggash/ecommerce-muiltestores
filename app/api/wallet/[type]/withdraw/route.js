// app/api/wallet/[type]/withdraw/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import db from '@/lib/db';
import { authOptions } from '@/lib/authOptions';

// export async function POST(request, { params }) {
//   const session = await getServerSession(authOptions);
//   if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

//   const { amount, bankDetails } = await request.json();
//   if (params.type !== 'store_balance') {
//     return NextResponse.json({ error: 'Withdrawal not allowed for this wallet' }, { status: 400 });
//   }
//   if (amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });

//   const vendor = await db.vendor.findUnique({
//     where: { email: session.user.email },
//     include: { store: true }
//   });
//   if (!vendor?.store) return NextResponse.json({ error: 'No store' }, { status: 400 });

//   const wallet = await db.wallet.findUnique({
//     where: { storeId_type: { storeId: vendor.store.id, type: 'STORE_BALANCE' } }
//   });
//   if (!wallet || wallet.balance < amount) {
//     return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
//   }

//   const tx = await db.walletTransaction.create({
//     data: {
//       walletId: wallet.id,
//       type: 'WITHDRAW',
//       amount,
//       description: 'سحب أرباح',
//       metadata: { bankDetails }
//     }
//   });
//   const updated = await db.wallet.update({
//     where: { id: wallet.id },
//     data: { balance: { decrement: amount } }
//   });

//   return NextResponse.json({ wallet: updated, tx });
// }



export async function POST(request, { params , url}) {

  const urlParams = new URLSearchParams(new URL(request.url).search);

  const planId = urlParams.get('plan');
  const cycle = urlParams.get('cycle');
  
  if (!planId || !cycle) {
    return NextResponse.json({ error: 'Missing plan or cycle' }, { status: 400 });
  }
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized or invalid session' }, { status: 401 });
  }

  // العثور على التاجر و متجره
  const vendor = await db.vendor.findUnique({
    where: { email: session.user.email },
    include: { store: true }
  });

  if (!vendor || !vendor.store) {
    return NextResponse.json({ error: 'Vendor or associated store not found' }, { status: 404 });
  }

  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const {  bankDetails } = body;

  if (!planId || !cycle) {
    return NextResponse.json({ error: 'Missing plan or cycle' }, { status: 400 });
  }

  // الحصول على الخطة المحددة من قاعدة البيانات
  const plan = await db.subscriptionPlan.findUnique({
    where: { id: planId },
  });

  if (!plan) {
    return NextResponse.json({ error: 'Subscription plan not found' }, { status: 404 });
  }

  // تحديد المبلغ بناءً على الدورة
  let amount = 0;
  if (cycle === 'monthly') {
    amount = plan.monthlyPrice;
  } else if (cycle === 'yearly') {
    amount = plan.yearlyPrice;
  } else {
    return NextResponse.json({ error: 'Invalid cycle' }, { status: 400 });
  }

  // تحقق من الرصيد في المحفظة
  const wallet = await db.wallet.findUnique({
    where: {
      storeId_type: {
        storeId: vendor.store.id,
        type: 'STORE_BALANCE',
      },
    },
  });

  if (!wallet || wallet.balance < amount) {
    return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
  }

  // إنشاء المعاملة (السحب)
  const tx = await db.walletTransaction.create({
    data: {
      walletId: wallet.id,
      type: 'WITHDRAW',
      amount,
      description: 'سحب اشتراك',
      metadata: { bankDetails },
    },
  });

  // تحديث الرصيد بعد السحب
// تحديث الرصيد بعد السحب (بديل أكثر توافقًا مع MongoDB)
const updated = await db.wallet.update({
  where: { id: wallet.id },
  data: {
    balance: wallet.balance - amount,
  },
});

  return NextResponse.json({
    message: 'Withdrawal successful',
    wallet: updated,
    transaction: tx,
  });
}
