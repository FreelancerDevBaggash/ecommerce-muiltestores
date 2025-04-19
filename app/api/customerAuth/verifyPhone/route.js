import { NextResponse } from "next/server";
import db from "@/lib/db";

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

  return NextResponse.json({ message: "تم التحقق من رقم الجوال" });
}
