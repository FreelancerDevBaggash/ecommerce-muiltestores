import { NextResponse } from "next/server";
import db from "../../../lib/db";  // تأكد من أن المسار صحيح بناءً على مكان ملف prisma.js
export async function POST(request) {
  try {
    const body = await request.json();
    const { isActive, storeId, deliveringProviderId } = body;

    // تحقق من وجود المتجر والمزود
    const storeExists = await db.store.findUnique({
      where: { id: storeId },
    });

    const providerExists = await db.deliveringProviders.findUnique({
      where: { id: deliveringProviderId },
    });

    if (!storeExists || !providerExists) {
      return new NextResponse(
        JSON.stringify({
          message: "Store or deliveringProviders not found",
        }),
        { status: 404 }
      );
    }

    // إنشاء إعداد الدفع الجديد
    const newSetting = await db.storeDeliveringSetting.create({
      data: {
        isActive,
        store: { connect: { id: storeId } },  // ربط المتجر
        DeliveringProvider: { connect: { id: deliveringProviderId } },  // ربط المزود
      },
    });

    return new NextResponse(JSON.stringify(newSetting), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating StoreDeliveringSetting:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to create StoreDeliveringSetting",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}



export async function GET(request) {
  try {
    const StoreDeliveringSettings = await db.storeDeliveringSetting.findMany({
      include: {
        store: true,  // جلب بيانات المتجر
        deliveringProvider: true,  // جلب بيانات مزود الخدمة
      },
      orderBy: {
        createdAt: "desc",  // ترتيب النتائج بناءً على تاريخ الإنشاء
      },
    });

    return new NextResponse(JSON.stringify(StoreDeliveringSettings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching StoreDeliveringSettings:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to fetch StoreDeliveringSettings",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
export async function DELETE(request) {
  try {
    const { deliveringProviderId, storeId } = await request.json(); // تأكد من إرسال providerId و storeId

    await db.storeDeliveringSetting.deleteMany({
      where: {
        storeId: storeId,
        deliveringProviderId: deliveringProviderId,  // تأكد من أن الاسم يتوافق مع الحقل في Prisma
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "StoreDeliveringSetting deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting StoreDeliveringSetting:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to delete StoreDeliveringSetting",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
