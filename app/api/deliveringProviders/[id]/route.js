import db from "@/lib/db";
import { NextResponse } from "next/server";

// GET: لجلب مزود خدمة الشحن بناءً على المعرف
export async function GET(request, { params: { id } }) {
  try {
    const deliveringProvider = await db.deliveringProvider.findUnique({
      where: {
        id,
      },
      include: {
        deliveringTransactions: true,
        storeDeliveringSettings: true,
      },
    });

    if (!deliveringProvider) {
      return NextResponse.json(
        {
          data: null,
          message: "Delivering Provider Not Found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(deliveringProvider);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Delivering Provider",
        error,
      },
      { status: 500 }
    );
  }
}

// DELETE: لحذف مزود خدمة الشحن بناءً على المعرف
export async function DELETE(request, { params: { id } }) {
  try {
    const existingDeliveringProvider = await db.deliveringProvider.findUnique({
      where: {
        id,
      },
    });

    if (!existingDeliveringProvider) {
      return NextResponse.json(
        {
          data: null,
          message: "Delivering Provider Not Found",
        },
        { status: 404 }
      );
    }

    const deletedDeliveringProvider = await db.deliveringProvider.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deletedDeliveringProvider);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Delivering Provider",
        error,
      },
      { status: 500 }
    );
  }

}

// PUT: لتحديث مزود خدمة الشحن بناءً على المعرف
export async function PUT(request, { params: { id } }) {
  try {
    const body = await request.json();
    
    const { name, apiUrl, apiKey, apiSecret, isActive, logoUrl } = body;

    // التحقق إذا كان مزود الخدمة موجوداً أم لا
    const existingDeliveringProvider = await db.deliveringProvider.findUnique({
      where: {
        id,
      },
    });

    if (!existingDeliveringProvider) {
      return NextResponse.json(
        {
          data: null,
          message: "Delivering Provider Not Found",
        },
        { status: 404 }
      );
    }

    // تحديث مزود الخدمة
    const updatedDeliveringProvider = await db.deliveringProvider.update({
      where: { id },
      data: {
        name,
        apiUrl,
        apiKey,
        apiSecret,
        isActive,
        logoUrl,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedDeliveringProvider);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Delivering Provider",
        error,
      },
      { status: 500 }
    );
  }
}
