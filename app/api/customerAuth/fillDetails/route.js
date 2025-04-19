import { NextResponse } from "next/server";
import db from "@/lib/db";

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

  return NextResponse.json({ message: "تم حفظ البيانات، تحقق من الهاتف", code: phoneCode });
}
