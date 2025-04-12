import { NextResponse } from "next/server";
import db from "@/lib/db"
export async function POST(request) {
  try {
    // الحصول على البيانات من الطلب
    const { primaryColor, secondaryColor, accentColor, backgroundColor, fontFamily, isActive, storeId } = await request.json();

    const data = {
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      fontFamily,
      isActive,
      storeId,
    };
console.log("data:",data )
    // على سبيل المثال، تخزين البيانات في قاعدة البيانات (يمكنك تخصيصها حسب طريقة الاتصال بقاعدة البيانات لديك)
    const customizations = await db.customization.create({
       data,
    });
    console.log("ddddddddddsnjmkdfndddddddddd", customizations);

    return NextResponse.json(customizations);
  } catch (error) {
    console.error("Error creating customization:", error);
    return NextResponse.json({ error: "Failed to create customization" }, { status: 500 });
  }
}

// دالة GET لاسترجاع التخصيصات بناءً على storeId
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
      const storeId = searchParams.get('storeId');
    // جلب التخصيصات بناءً على storeId
    const customizations = await db.customization.findMany({
      where: { storeId },
    });

    return NextResponse.json(customizations);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to fetch customizations",
      },
      { status: 500 }
    );
  }
}
