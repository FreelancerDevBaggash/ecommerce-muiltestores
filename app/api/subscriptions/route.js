// app/api/subscriptions/route.ts
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { getServerSession } from "next-auth";  
import { authOptions } from "../../../lib/authOptions";

// أداة لحساب التاريخ
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export async function POST(request) {
  try {
    const {
      storeId,
      subscriptionPlanId,
      planId,
      billingCycle,
      paymentMethod,
    } = await request.json();

    if (!storeId || !subscriptionPlanId || !planId || !billingCycle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. تحقق من وجود اشتراك حالي نشط
    const existingSubscription = await db.subscription.findFirst({
      where: {
        store: {
          
            id: storeId,
          
        },
        endDate: {
          gt: new Date(), // الاشتراك لم ينتهِ بعد
        },
        status: "active",
      },
    });

    // 2. احسب الأيام المتبقية (إن وُجد اشتراك حالي)
    let remainingDays = 0;
    if (existingSubscription) {
      const now = new Date();
      const endDate = new Date(existingSubscription.endDate);
      remainingDays = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    }

    // 3. احسب عدد الأيام الجديدة حسب خطة الاشتراك
    const newDurationDays = billingCycle === "monthly" ? 30 : billingCycle === "yearly" ? 365 : 0;
    if (newDurationDays === 0) {
      return NextResponse.json(
        { error: "Invalid billingCycle" },
        { status: 400 }
      );
    }

    const totalDays = remainingDays + newDurationDays;
    const newStartDate = new Date();
    const newEndDate = addDays(newStartDate, totalDays);

    let subscription;

    if (existingSubscription) {
      // 4. تحديث الاشتراك الحالي
      subscription = await db.subscription.update({
        where: { id: existingSubscription.id },
        data: {
          subscriptionPlan: { connect: { id: subscriptionPlanId } },
          planId,
          billingCycle,
          startDate: newStartDate,
          endDate: newEndDate,
          paymentMethod,
          status: "active",
        },
      });
    } else {
      // 5. إنشاء اشتراك جديد
      subscription = await db.subscription.create({
        data: {
          store: { connect: { id: storeId } },
          subscriptionPlan: { connect: { id: subscriptionPlanId } },
          planId,
          billingCycle,
          startDate: newStartDate,
          endDate: newEndDate,
          status: "active",
          paymentMethod,
        },
      });
    }

    return NextResponse.json(subscription, { status: 201 });

  } catch (error) {
    console.error("Error creating/updating subscription:", error);
    return NextResponse.json(
      { error: "فشل إنشاء أو تحديث الاشتراك." },
      { status: 500 }
    );
  }
}



export async function GET(req) {
  try {
    // الحصول على الجلسة باستخدام authOptions
    const session = await getServerSession(authOptions);

    console.log("Session:", session); // متابعة الجلسة

    // التحقق من وجود session و userId
    const userId = session?.user?.id;
    if (!userId) {
      console.log("User not authorized, no userId found");
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 });
    }

    // استرجاع المتجر المرتبط بالمستخدم (التاجر)
    const storeData = await fetch(`https://your-api-url/stores?vendorId=${userId}`);
    const store = await storeData.json();

    console.log("Store Data:", store); // متابعة استرجاع بيانات المتجر

    if (!store || !store.storeId) {
      console.log("Store not found or storeId is missing");
      return NextResponse.json({ error: 'لا يوجد متجر مرتبط بالمستخدم' }, { status: 404 });
    }

    // استرجاع الاشتراك المرتبط بالـ storeId
    const subscription = await db.subscription.findFirst({
      where: { storeId: store.storeId },
      orderBy: { createdAt: 'desc' },
    });

    console.log("Subscription:", subscription); // متابعة الاشتراك

    if (!subscription || !subscription.endDate) {
      console.log("No active subscription found or endDate is missing");
      return NextResponse.json({ error: 'لا يوجد اشتراك فعال' }, { status: 404 });
    }

    return NextResponse.json({ endDate: subscription.endDate });
  } catch (error) {
    console.error('Error fetching subscription:', error); // طباعة تفاصيل الخطأ
    return NextResponse.json({ error: 'فشل في جلب الاشتراك' }, { status: 500 });
  }
}

