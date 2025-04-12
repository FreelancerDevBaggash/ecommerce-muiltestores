import { NextResponse } from "next/server";
import db from "../../../lib/db"; // المسار حسب مشروعك

export async function POST(request) {
  try {
    const body = await request.json();
    const { storeId, customerId, rating, comment } = body;

    // تحقق من وجود تقييم مسبق
    // const existing = await db.storeReview.findFirst({
    //   where: { storeId, userId },
    // });

    // if (existing) {
    //   return new NextResponse(
    //     JSON.stringify({ message: "تم تقييم هذا المتجر مسبقًا. يمكنك فقط تعديل التقييم." }),
    //     { status: 409 }
    //   );
    // }

    const newReview = await db.review.create({
      data: {
        storeId,
        customerId,
        rating,
        comment,
        
      },
    });

    return new NextResponse(JSON.stringify(newReview), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating store review:", error);
    return new NextResponse(JSON.stringify({ message: "Error", error }), {
      status: 500,
    });
  }
}


export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const storeId = searchParams.get("storeId");
      const userId = searchParams.get("userId");
  
      let where = {};
  
      if (storeId) where.storeId = storeId;
      if (userId) where.customerId = userId;
  
      const reviews = await db.review.findMany({
        where,
        include: {
          customer: true,
          store: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      return new NextResponse(JSON.stringify(reviews), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching store reviews:", error);
      return new NextResponse(JSON.stringify({ message: "Error", error }), {
        status: 500,
      });
    }
  }
  