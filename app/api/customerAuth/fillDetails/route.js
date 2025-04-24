import { NextResponse } from "next/server";
import db from "@/lib/db";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(request) {
  const { email, firstName, lastName, phone } = await request.json();

  if (!email || !firstName || !lastName || !phone) {
    return NextResponse.json({ message: "البيانات غير مكتملة" }, { status: 400 });
  }

  const customer = await db.customer.findUnique({ where: { email } });
  if (!customer) return NextResponse.json({ message: "العميل غير موجود" }, { status: 404 });

  const phoneCode = Math.floor(1000 + Math.random() * 9000).toString();

  await db.customer.update({
    where: { email },
    data: {
      firstName,
      lastName,
      phone,
      verificationCode: phoneCode,
    },
  });

  // هنا يمكنك إرسال SMS (أو عرض الكود مؤقتًا للتجربة)
  console.log("Phone Verification Code:", phoneCode);

  //هذا كود مؤقت لانشاء جلسه بدون تحقق من كود التلفون  
  //  إنشاء جلسة JWT
  const token = sign(
    {
      id: customer.id,
      email: customer.email,
      role: "CUSTOMER",
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  cookies().set("customer_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 أيام
  });
  
  return NextResponse.json({ message: "تم حفظ البيانات، تحقق من الهاتف", code: phoneCode });
}
