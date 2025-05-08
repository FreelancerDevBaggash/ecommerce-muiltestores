import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // نفحص وجود query param planId
    const url = new URL(request.url);
    const planId = url.searchParams.get('planId');

    if (planId) {
      // جلب خطة واحدة حسب المعرف
      const plan = await db.subscriptionPlan.findUnique({ where: { id: planId } });
      if (!plan) {
        return NextResponse.json({ error: "Plan not found" }, { status: 404 });
      }
      return NextResponse.json(plan, { status: 200 });
    }

    // إذا لم يُحدد planId، جلب جميع الخطط
    const plans = await db.subscriptionPlan.findMany();
    return NextResponse.json(plans, { status: 200 });
  } catch (error) {
    console.error("Error fetching Subscription Plans:", error);
    return NextResponse.json(
      { error: "Failed to fetch Subscription Plans" },
      { status: 500 }
    );
  }
}


