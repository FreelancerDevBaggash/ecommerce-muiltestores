// import { NextResponse } from "next/server";
// import db from "../../../lib/db";
// import { Resend } from "resend";

// export async function POST(request) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   const { email, storeId } = await request.json();

//   if (!email || !storeId) {
//     return NextResponse.json({ message: "Email and Store ID required" }, { status: 400 });
//   }

//   const code = Math.floor(1000 + Math.random() * 9000).toString();

//   let customer = await db.customer.findUnique({
//     where: { email },
//     include: { customerStores: true },
//   });

//   if (!customer) {
//     // عميل جديد
//     customer = await db.customer.create({
//       data: {
//         email,
//         verificationCode: code,
//       },
//     });
//   } else {
//     // عميل موجود → تحديث رمز التحقق
//     await db.customer.update({
//       where: { id: customer.id },
//       data: { verificationCode: code },
//     });
//   }

//   // الربط بالمتجر إن لم يكن مرتبطًا
//   const alreadyLinked = customer.customerStores.some(store => store.storeId === storeId);
//   if (!alreadyLinked) {
//     await db.customerStore.create({
//       data: {
//         customerId: customer.id,
//         storeId,
//       },
//     });
//   }

//   // إرسال الرمز بالبريد
//   await resend.emails.send({
//     from: "Etjer <no_reply@etjer.com>",
//     to: email,
//     subject: "رمز التحقق",
//     text: `رمز التحقق الخاص بك هو: ${code}`,
//   });

//   return NextResponse.json({ message: "تم إرسال رمز التحقق", customerId: customer.id });
// }

import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const { email, storeId } = await request.json();

    if (!email || !storeId) {
      return NextResponse.json(
        { message: "البريد الإلكتروني ومعرّف المتجر مطلوبان" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    let customer = await db.customer.findUnique({
      where: { email },
      include: { customerStores: true },
    });

    if (!customer) {
      // عميل جديد
      customer = await db.customer.create({
        data: {
          email,
          verificationToken: code,
        },
      });
    } else {
      // تحديث رمز التحقق
      await db.customer.update({
        where: { id: customer.id },
        data: { verificationToken: code },
      });
    }

    // تأكيد الربط مع المتجر
    const alreadyLinked = customer.customerStores?.some(
      (store) => store.storeId === storeId
    );

    if (!alreadyLinked) {
      await db.customerStore.create({
        data: {
          customerId: customer.id,
          storeId,
        },
      });
    }

    // إرسال البريد
    await resend.emails.send({
      from: "Etjer <no_reply@etjer.store>",
      to: email,
      subject: "رمز التحقق",
      text: `رمز التحقق الخاص بك هو: ${code}`,
    });

    return NextResponse.json({
      message: "تم إرسال رمز التحقق",
      customerId: customer.id,
    });

  } catch (error) {
    console.error("خطأ في إرسال رمز التحقق:", error);
    return NextResponse.json(
      { message: "حدث خطأ غير متوقع أثناء إرسال الرمز" },
      { status: 500 }
    );
  }
}
