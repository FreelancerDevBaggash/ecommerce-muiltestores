// import { NextResponse } from "next/server";
// import db from "@/lib/db";

// // إنشاء مزود دفع جديد
// export async function POST(request) {
//   try {
//     const { name, apiUrl, apiKey, apiSecret, isActive } = await request.json();

//     // التحقق من وجود الاسم مسبقًا
//     const existingPaymentProvider = await db.PaymentProvider.findUnique({
//       where: {
//         name, // افترض أن الاسم فريد لكل مزود
//       },
//     });

//     if (existingPaymentProvider) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: "PaymentProvider already exists",
//         },
//         { status: 409 }
//       );
//     }

//     // إنشاء مزود دفع جديد
//     const newPaymentProvider = await db.PaymentProvider.create({
//       data: {
//         name,
//         apiUrl,
//         apiKey,
//         apiSecret,
//         isActive,
//       },
//     });

//     console.log(newPaymentProvider);
//     return NextResponse.json(newPaymentProvider, { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       {
//         message: "Failed to create PaymentProvider",
//         error: error.message || error,
//       },
//       { status: 500 }
//     );
//   }
// }

// // جلب قائمة مزودي الدفع
// export async function GET(request) {
//   try {
//     const paymentProviders = await db.PaymentProvider.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         paymentTransactions: true,
//         storePaymentSettings: true,
//       },
//     });

//     return NextResponse.json(paymentProviders, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       {
//         message: "Failed to fetch PaymentProvider",
//         error: error.message || error,
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import db from "@/lib/db";

// إنشاء مزود دفع جديد
export async function POST(request) {
  try {
    const { name, apiUrl, apiKey, apiSecret, isActive, imageUrl } = await request.json();

    // التحقق من وجود الاسم مسبقًا
    // const existingPaymentProvider = await db.PaymentProvider.findUnique({
    //   where: {
    //     name, // افترض أن الاسم فريد لكل مزود
    //   },
    // });

    // if (existingPaymentProvider) {
    //   return NextResponse.json(
    //     {
    //       data: null,
    //       message: "PaymentProvider already exists",
    //     },
    //     { status: 409 }
    //   );
    // }

    // إنشاء مزود دفع جديد
    const newPaymentProvider = await db.PaymentProvider.create({
      data: {
        name,
        apiUrl,
        apiKey,
        apiSecret,
        isActive,
        imageUrl, // إضافة صورة الشعار
      },
    });

    console.log(newPaymentProvider);
    return NextResponse.json(newPaymentProvider);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create PaymentProvider",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}

// جلب قائمة مزودي الدفع
export async function GET(request) {
  try {
    const paymentProviders = await db.PaymentProvider.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        paymentTransactions: true,
        storePaymentSettings: true,
      },
    });

    return NextResponse.json(paymentProviders, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to fetch PaymentProvider",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}
