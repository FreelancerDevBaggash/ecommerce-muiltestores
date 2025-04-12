import { NextResponse } from "next/server";
import db from "@/lib/db";

// تأكيد البريد
export async function POST(request) {
  try {
    const { vendorId } = await request.json();

    const updatedVendor = await db.vendor.update({
      where: { id: vendorId },
      data: { phoneVerified: true }, // تأكد من تصحيح الاسم إذا كان فيه خطأ مطبعي
    });

    return NextResponse.json({
      message: "تم تأكيد البريد بنجاح",
      data: updatedVendor,
    });
  } catch (error) {
    console.error("Error verifying phone:", error);
    return NextResponse.json(
      { message: "api حدث خطأ أثناء تأكيد البريد." },
      { status: 500 }
    );
  }
}

// إعادة إرسال رمز تحقق
export async function PUT(request) {
  try {
    const { vendorId } = await request.json();

    // توليد رمز تحقق جديد عشوائي (4 أرقام)
    const newToken = Math.floor(1000 + Math.random() * 9000).toString();

    // حفظ التوكن الجديد في قاعدة البيانات
    const updatedVendor = await db.vendor.update({
      where: { id: vendorId },
      data: { verificationCode: newToken },
    });

    // هنا يمكنك إرسال الرمز للبريد الإلكتروني (لو مفعّل)

    return NextResponse.json({
      message: "تم إنشاء رمز تحقق جديد",
      verificationCode: newToken, // ممكن ترسليه للواجهة لو حابة تحدثيه
    });
  } catch (error) {
    console.error("Error resending code:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء إعادة إرسال رمز التحقق." },
      { status: 500 }
    );
  }
}
