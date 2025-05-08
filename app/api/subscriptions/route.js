// app/api/subscriptions/route.ts
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { getServerSession } from "next-auth";  
import { authOptions } from "../../../lib/authOptions";  // تأكد من المسار الصحيح


export async function POST(request) {
  try {
    // 1. اقرأ بيانات الطلب
    const {
      storeId,
      subscriptionPlanId,
      planId,
      billingCycle,
      paymentMethod,
    } = await request.json();

    // 2. تحقق من الحقول المطلوبة
    if (!storeId || !subscriptionPlanId || !planId || !billingCycle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. حساب تواريخ البداية والنهاية
    const startDate = new Date();
    const endDate = new Date(startDate);
    if (billingCycle === "monthly") {
      endDate.setDate(endDate.getDate() + 30);
    } else if (billingCycle === "yearly") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      return NextResponse.json(
        { error: "Invalid billingCycle" },
        { status: 400 }
      );
    }

    // 4. إنشاء سجل الاشتراك في قاعدة البيانات
    const subscription = await db.subscription.create({
      data: {
        store: {
  connect: { id: "67fa545f6971a95b3e78f49b" }
},
        subscriptionPlan: { connect: { id: subscriptionPlanId } },
        planId,
        billingCycle,
        startDate,
        endDate,
        status: "active",
        paymentMethod,
      },
    });

    // 5. إعادة الاشتراك المنشأ
    return NextResponse.json(subscription, { status: 201 });
  } catch (error) {
    console.error("Error creating subscription:", error);
    return NextResponse.json(
      { error: "Failed to create subscription" },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    // استرجاع المتجر المرتبط بالمستخدم (التاجر)
    const storeData = await fetch(`/api/stores?vendorId=${userId}`);
    const store = await storeData.json();
    console.log("Store Data:", store);  // تأكد من بيانات المتجر

    if (!store || !store.storeId) {
      return NextResponse.json({ error: 'لا يوجد متجر مرتبط بالمستخدم' }, { status: 404 });
    }

    const subscription = await db.subscription.findFirst({
      where: {
        store: {
          some: { storeId: store.storeId },
        },
        status: 'active',
      },
      orderBy: { createdAt: 'desc' },
    });
    
    console.log("Fetched Subscription:", subscription);  // تحقق من الاشتراك المسترجع

    if (!subscription || !subscription.endDate) {
      console.log("No active subscription found or endDate is missing");
      return NextResponse.json({ error: 'لا يوجد اشتراك فعال' }, { status: 404 });
    }

    return NextResponse.json({ endDate: subscription.endDate });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json({ error: 'فشل في جلب الاشتراك' }, { status: 500 });
  }
}
