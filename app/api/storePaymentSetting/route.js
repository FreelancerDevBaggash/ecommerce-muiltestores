import { NextResponse } from "next/server";
import prisma from "@/lib/db";  // تأكد من أن المسار صحيح بناءً على مكان ملف prisma.js
export async function POST(request) {
  try {
    const body = await request.json();
    const { isActive, storeId, paymentProvidersId } = body;

    // تحقق من وجود المتجر والمزود
    const storeExists = await prisma.store.findUnique({
      where: { id: storeId },
    });

    const providerExists = await prisma.paymentProvider.findUnique({
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
    const newSetting = await prisma.storePaymentSetting.create({
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
    const storePaymentSettings = await prisma.storePaymentSetting.findMany({
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

    await prisma.storePaymentSetting.deleteMany({
      where: {
        storeId: storeId,
        paymentProvidersId: providerId,  // تأكد من أن الاسم يتوافق مع الحقل في Prisma
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
