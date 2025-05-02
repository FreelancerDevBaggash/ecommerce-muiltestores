// import db from "../../../../lib/db";
// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// export async function PUT(request) {
//   try {
//     const { password, id } = await request.json();
//     const user = await db.vendor.findUnique({
//       where: {
//         id,
//       },
//     });
//     if (!user) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: "No User Found",
//         },
//         { status: 404 }
//       );
//     }
//     // Encrypt the Password =>bcrypt
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const updatedUser = await db.vendor.update({
//       where: {
//         id,
//       },
//       data: {
//         password: hashedPassword,
//       },
//     });
//     return NextResponse.json(updatedUser);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Update User",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }


// app/api/vendors/[id]/change-password/route.ts
import db from "../../../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PUT(request, { params }) {
  const id = params.id;

  try {
    const { oldPassword, newPassword } = await request.json();

    // 1. جلب المستخدم
    const user = await db.vendor.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json(
        { message: "المستخدم غير موجود" },
        { status: 404 }
      );
    }

    // 2. التحقق من تطابق كلمة المرور القديمة
    const match = await bcrypt.compare(oldPassword, user.password);
    if (!match) {
      return NextResponse.json(
        { message: "كلمة المرور الحالية غير صحيحة" },
        { status: 401 }
      );
    }

    // 3. تشفير كلمة المرور الجديدة
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 4. تحديث كلمة المرور
    await db.vendor.update({
      where: { id },
      data: { password: hashedPassword },
    });

    return NextResponse.json(
      { message: "تم تغيير كلمة المرور بنجاح" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in change-password:", error);
    return NextResponse.json(
      {
        message: "فشل في تغيير كلمة المرور",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
