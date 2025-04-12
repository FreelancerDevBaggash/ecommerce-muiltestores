// import  db  from "../../../../../lib/db";

// export async function GET({ params }) {
//   const { storeId } = params;
//   try {
//     const storeCurrencies = await db.storeCurrency.findMany({
//       where: { storeId },
//       include: { currency: true },
//     });
//     return new Response(JSON.stringify(storeCurrencies), { status: 200 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch store currencies" }),
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req, { params }) {
//   const { storeId } = params;
//   const { currencyId, isDefault } = await req.json();
//   try {
//     const storeCurrency = await db.storeCurrency.create({
//       data: {
//         storeId,
//         currencyId,
//         isDefault,
//       },
//     });
//     return new Response(JSON.stringify(storeCurrency), { status: 201 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Failed to add currency to store" }),
//       { status: 500 }
//     );
//   }
// }

// export async function PATCH(req, { params }) {
//   const { storeId } = params;
//   const { currencyId, isDefault } = await req.json();
//   try {
//     const storeCurrency = await prisma.storeCurrency.updateMany({
//       where: { storeId, currencyId },
//       data: { isDefault },
//     });
//     return new Response(JSON.stringify(storeCurrency), { status: 200 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Failed to update store currency" }),
//       { status: 500 }
//     );
//   }
// }

import  db  from "../../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  console.log("params:", params); // هذا يساعدنا نعرف محتويات params

  try {
    const storeCurrencies = await db.storeCurrency.findMany({
      where: { storeId : id },
      // include: { currency: true },
    });
    return new Response(JSON.stringify(storeCurrencies), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch store currencies" }),
      { status: 500 }
    );
  }
}


export async function POST(req, { params }) {
 // const { id: storeId } = params;
 
 const { id } = params;

  const { currencyId, isDefault } = await req.json();
  try {
    const storeCurrency = await db.storeCurrency.create({
      data: {
        storeId : id,
        currencyId,
        isDefault,
        isActive : true,
      },
    });
    return new Response(JSON.stringify(storeCurrency), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to add currency to store" }),
      { status: 500 }
    );
  }
}
export async function PATCH(req, { params }) {
  const { id } = params;
  const { storeCurrencyId, isDefault } = await req.json();

  try {
    // 1. إلغاء الافتراضية عن جميع العملات الخاصة بالمتجر
    await db.storeCurrency.updateMany({
      where: { storeId: id },
      data: { isDefault: false },
    });

    // 2. تعيين العملة المحددة كافتراضية
    await db.storeCurrency.update({
      where: { id: storeCurrencyId },
      data: { isDefault },
    });

    // 3. جلب القائمة المحدثة
    const updatedList = await db.storeCurrency.findMany({
      where: { storeId: id },
    });

    return new Response(JSON.stringify(updatedList), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "حدث خطأ أثناء تحديث العملة الافتراضية" }),
      { status: 500 }
    );
  }
}


export async function PUT(request, { params: { id } }) {
  try {
    // استلام البيانات من الطلب
    const {  isActive , storeCurrencyId } = await request.json();

    // تحقق من وجود المتجر في قاعدة البيانات باستخدام الـ id
    const existingStore = await db.storeCurrency.findUnique({
      where: { id: storeCurrencyId },
    });

    if (!existingStore) {
      return NextResponse.json(
        { message: "storeCurrency Not Found" },
        { status: 404 }
      );
    }

    // تحديث بيانات المتجر
    const updatedStoreCurrency = await db.storeCurrency.update({
      where: { id: storeCurrencyId },
      data: {
        isActive: isActive,
      },
    });

    // إرجاع المتجر المحدث
    // return NextResponse.json(updatedStoreCurrency);
    return new Response(JSON.stringify(updatedStoreCurrency), { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Update Store Currency", error },
      { status: 500 }
    );
  }
}