import { NextResponse } from "next/server";
import db from "@/lib/db";

// POST: لإنشاء مزود خدمة شحن جديد
export async function POST(request) {
  try {
    const { name, apiUrl, apiKey, apiSecret, isActive ,logoUrl } = await request.json();

    // للتحقق من وجود مزود الشحن بالفعل
    // const existingDeliveringProvider = await db.deliveringProvider.findUnique({
    //   where: {
    //     id,
    //   },
    // });

    // if (existingDeliveringProvider) {
    //   return NextResponse.json(
    //     {
    //       data: null,
    //       message: "Delivering Provider already exists",
    //     },
    //     { status: 409 }
    //   );
    // }

    // إنشاء مزود الشحن الجديد
    const newDeliveringProvider = await db.deliveringProvider.create({
      data: {
        name,
        apiUrl,
        apiKey,
        apiSecret,
        isActive,
        logoUrl,
      },
    });

    console.log(newDeliveringProvider);
    return NextResponse.json(newDeliveringProvider);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Delivering Provider",
        error,
      },
      { status: 500 }
    );
  }
}

// GET: لجلب قائمة مزودي الشحن
export async function GET(request) {
  try {
    const deliveringProviders = await db.deliveringProvider.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        deliveringTransactions: true,
        storeDeliveringSettings: true,
      },
    });

    return NextResponse.json(deliveringProviders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch Delivering Providers",
        error,
      },
      { status: 500 }
    );
  }
}
