import { NextResponse } from "next/server";
import db from "@/lib/db";  // تأكد من أن المسار صحيح بناءً على مكان ملف db.js
export async function POST(request) {
  try {
    const body = await request.json();
    const { isActive, storeId, paymentProvidersId } = body;

    // تحقق من وجود المتجر والمزود
    const storeExists = await db.store.findUnique({
      where: { id: storeId },
    });

    const providerExists = await db.paymentProvider.findUnique({
      where: { id: paymentProvidersId },
    });

    if (!storeExists || !providerExists) {
      return new NextResponse(
        JSON.stringify({
          message: "Store or PaymentProvider not found",
        }),
        { status: 404 }
      );
    }

    // إنشاء إعداد الدفع الجديد
    const newSetting = await db.storePaymentSetting.create({
      data: {
        isActive,
        store: { connect: { id: storeId } },  // ربط المتجر
        paymentProvider: { connect: { id: paymentProvidersId } },  // ربط المزود
      },
    });

    return new NextResponse(JSON.stringify(newSetting), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating StorePaymentSetting:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to create StorePaymentSetting",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get("storeId");

    if (!storeId) {
      return new NextResponse(
        JSON.stringify({ message: "storeId is required" }),
        { status: 400 }
      );
    }
    const storePaymentSettings = await db.storePaymentSetting.findMany({
      where: {
        storeId: storeId,
        
      },
      include: {
        store: true,  // جلب بيانات المتجر
        paymentProvider: true,  // جلب بيانات مزود الخدمة
      },
      orderBy: {
        createdAt: "desc",  // ترتيب النتائج بناءً على تاريخ الإنشاء
      },
    });

    return new NextResponse(JSON.stringify(storePaymentSettings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching StorePaymentSettings:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to fetch StorePaymentSettings",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
export async function DELETE(request) {
  try {
    const { providerId, storeId } = await request.json(); // تأكد من إرسال providerId و storeId

    await db.storePaymentSetting.deleteMany({
      where: {
        storeId: storeId,
        paymentProvidersId: providerId,  // تأكد من أن الاسم يتوافق مع الحقل في db
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "StorePaymentSetting deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting StorePaymentSetting:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to delete StorePaymentSetting",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}

// PATCH: لتحديث حالة isActive لإعداد الدفع
export async function PATCH(request) {
  try {
    const { settingId, isActive } = await request.json();

    // تحقق من المدخلات
    if (!settingId || typeof isActive !== "boolean") {
      return new NextResponse(
        JSON.stringify({ message: "settingId و isActive مطلوبان وصحيحان" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // تحديث السجل
    const updatedSetting = await db.storePaymentSetting.update({
      where: { id: settingId },
      data: { isActive },
      include: {
        paymentProvider: true,
        store: true,
      },
    });

    return new NextResponse(JSON.stringify(updatedSetting), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating StorePaymentSetting:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to update StorePaymentSetting",
        error: error.message || error,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}