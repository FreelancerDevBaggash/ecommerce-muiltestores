import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const {
      name,
      description,
      monthlyPrice,
      yearlyPrice,
      features,
      limitations,
    } = await request.json();

    // تحقق من أن features مصفوفة
    if (!Array.isArray(features)) {
      return NextResponse.json(
        { error: "Features must be an array." },
        { status: 400 }
      );
    }

    const newPlan = await db.subscriptionPlan.create({
      data: {
        name,
        description,
        monthlyPrice: parseFloat(monthlyPrice),
        yearlyPrice: parseFloat(yearlyPrice),
        features, // يجب أن يكون هذا حقل JSON[] في قاعدة البيانات
        limitations,
      },
    });

    console.log("Created Subscription Plan:", newPlan);
    return NextResponse.json(newPlan);
  } catch (error) {
    console.error("Error creating Subscription Plan:", error);
    return NextResponse.json(
      { error: "Failed to create Subscription Plan" },
      { status: 500 }
    );
  }
}

// export async function GET(request){
//     try{
//         const banners = await db.banner.findMany({
//             orderBy:{
//                 createdAt:"desc"
//             },
//         })
//         return NextResponse.json(banners)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch Banner",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }

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