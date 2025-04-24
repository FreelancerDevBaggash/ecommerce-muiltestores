import { NextResponse } from "next/server";
import db from "@/lib/db";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(request) {
  const { email, code } = await request.json();

  const customer = await db.customer.findUnique({ where: { email } });

  if (!customer || customer.verificationCode !== code) {
    return NextResponse.json({ message: "رمز غير صحيح" }, { status: 401 });
  }

  await db.customer.update({
    where: { id: customer.id },
    data: {
      phoneVerified: true,
      verificationCode: null,
    },
  });

    // إنشاء جلسة JWTبعد التحقق من رقم الجوال 
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

  return NextResponse.json({ message: "تم التحقق من رقم الجوال" });
}
