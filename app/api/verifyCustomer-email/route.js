import { NextResponse } from "next/server";
import db from "@/lib/db";

// تأكيد البريد
export async function POST(request) {
  try {
    const { customerId } = await request.json();

    const updatedCustomer = await db.customer.update({
      where: { id: customerId },
      data: { emailVerified: true }, // تأكد من تصحيح الاسم إذا كان فيه خطأ مطبعي
    });

    return NextResponse.json({
      message: "تم تأكيد البريد بنجاح",
      data: updatedCustomer,
    });
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { message: "apic حدث خطأ أثناء تأكيد البريد." },
      { status: 500 }
    );
  }
}

// إعادة إرسال رمز تحقق
export async function PUT(request) {
  try {
    const { customerId } = await request.json();

    // توليد رمز تحقق جديد عشوائي (4 أرقام)
    const newToken = Math.floor(1000 + Math.random() * 9000).toString();

    // حفظ التوكن الجديد في قاعدة البيانات
    const updatedCustomer = await db.customer.update({
      where: { id: customerId },
      data: { verificationToken: newToken },
    });

    // هنا يمكنك إرسال الرمز للبريد الإلكتروني (لو مفعّل)

    return NextResponse.json({
      message: "تم إنشاء رمز تحقق جديد",
      verificationToken: newToken, // ممكن ترسليه للواجهة لو حابة تحدثيه
    });
  } catch (error) {
    console.error("Error resending code:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء إعادة إرسال رمز التحقق." },
      { status: 500 }
    );
  }
}
