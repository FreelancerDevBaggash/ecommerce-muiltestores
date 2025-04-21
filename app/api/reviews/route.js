// import { NextResponse } from "next/server";
// import db from "../../../lib/db"; // المسار حسب مشروعك

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { storeId, customerId, rating, comment } = body;

//     // تحقق من وجود تقييم مسبق
//     // const existing = await db.storeReview.findFirst({
//     //   where: { storeId, userId },
//     // });

//     // if (existing) {
//     //   return new NextResponse(
//     //     JSON.stringify({ message: "تم تقييم هذا المتجر مسبقًا. يمكنك فقط تعديل التقييم." }),
//     //     { status: 409 }
//     //   );
//     // }

//     const newReview = await db.review.create({
//       data: {
//         storeId,
//         customerId,
//         rating,
//         comment,
        
//       },
//     });

//     return new NextResponse(JSON.stringify(newReview), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error creating store review:", error);
//     return new NextResponse(JSON.stringify({ message: "Error", error }), {
//       status: 500,
//     });
//   }
// }


// export async function GET(request) {
//     try {
//       const { searchParams } = new URL(request.url);
//       const storeId = searchParams.get("storeId");
//       const userId = searchParams.get("userId");
  
//       let where = {};
  
//       if (storeId) where.storeId = storeId;
//       if (userId) where.customerId = userId;
  
//       const reviews = await db.review.findMany({
//         where,
//         include: {
//           customer: true,
//           store: true,
//         },
//         orderBy: {
//           createdAt: "desc",
//         },
//       });
  
//       return new NextResponse(JSON.stringify(reviews), {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       });
//     } catch (error) {
//       console.error("Error fetching store reviews:", error);
//       return new NextResponse(JSON.stringify({ message: "Error", error }), {
//         status: 500,
//       });
//     }
//   }
  

import { NextResponse } from "next/server";
import db from "@/lib/db"; // تأكد من المسار الصحيح حسب مشروعك

// ------------------ [POST] إنشاء تقييم جديد ------------------
export async function POST(request) {
  try {
    const body = await request.json();
    const { storeId, customerStoreId, rating, comment } = body;

    if (!storeId || !customerStoreId || !rating) {
      return NextResponse.json(
        { message: "البيانات ناقصة" },
        { status: 400 }
      );
    }

    // تحقق من وجود تقييم سابق
    const existing = await db.review.findFirst({
      where: {
        storeId,
        customerStoreId,
      },
    });

    if (existing) {
      return NextResponse.json(
        { message: "لقد قمت بتقييم هذا المتجر من قبل." },
        { status: 409 }
      );
    }

    // إنشاء تقييم جديد
    const newReview = await db.review.create({
      data: {
        storeId,
        customerStoreId,
        rating: parseInt(rating),
        comment: comment || "",
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء إرسال التقييم", error },
      { status: 500 }
    );
  }
}

// ------------------ [GET] جلب التقييمات الخاصة بالمتجر ------------------
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get("storeId");
    const customerStoreId = searchParams.get("customerStoreId");

    if (!storeId) {
      return NextResponse.json(
        { message: "معرف المتجر مفقود" },
        { status: 400 }
      );
    }

    let where = { storeId }; // نبحث بناءً على معرّف المتجر أولًا
    if (customerStoreId) {
      where.customerStoreId = customerStoreId; // إذا كان موجودًا نضيف تصفية بواسطة العميل
    }

    const reviews = await db.review.findMany({
      where,
      include: {
        store: true, // تضمين معلومات المتجر
        customerStore: true, // تضمين معلومات العميل إذا لزم الأمر
      },
      orderBy: {
        createdAt: "desc", // ترتيب التقييمات من الأحدث إلى الأقدم
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء جلب التقييمات", error },
      { status: 500 }
    );
  }
}

// ------------------ [PATCH] تحديث تقييم موجود ------------------
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { reviewId, rating, comment } = body;

    if (!reviewId || !rating) {
      return NextResponse.json(
        { message: "البيانات ناقصة" },
        { status: 400 }
      );
    }

    // التحقق من وجود التقييم
    const existingReview = await db.review.findUnique({
      where: { id: reviewId },
    });

    if (!existingReview) {
      return NextResponse.json(
        { message: "التقييم غير موجود" },
        { status: 404 }
      );
    }

    // تحديث التقييم
    const updatedReview = await db.review.update({
      where: { id: reviewId },
      data: {
        rating: parseInt(rating),
        comment: comment || existingReview.comment,
      },
    });

    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء تحديث التقييم", error },
      { status: 500 }
    );
  }
}

// ------------------ [DELETE] حذف تقييم ------------------
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const reviewId = searchParams.get("reviewId");

    if (!reviewId) {
      return NextResponse.json(
        { message: "معرف التقييم مفقود" },
        { status: 400 }
      );
    }

    // التحقق من وجود التقييم
    const existingReview = await db.review.findUnique({
      where: { id: reviewId },
    });

    if (!existingReview) {
      return NextResponse.json(
        { message: "التقييم غير موجود" },
        { status: 404 }
      );
    }

    // حذف التقييم
    await db.review.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({ message: "تم حذف التقييم بنجاح" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء حذف التقييم", error },
      { status: 500 }
    );
  }
}
