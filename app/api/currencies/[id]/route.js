import db from "../../../../lib/db";
import { NextResponse } from "next/server";

// جلب عملة محددة باستخدام المعرف
export async function GET(request, { params: { id } }) {
  try {
    const currency = await db.currency.findUnique({
      where: { id },
    });
    return NextResponse.json(currency);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "فشل استرجاع بيانات العملة",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// حذف عملة محددة باستخدام المعرف
export async function DELETE(request, { params: { id } }) {
  try {
    const existingCurrency = await db.currency.findUnique({
      where: { id },
    });
    if (!existingCurrency) {
      return NextResponse.json(
        {
          data: null,
          message: "العملة غير موجودة",
        },
        { status: 404 }
      );
    }
    const deletedCurrency = await db.currency.delete({
      where: { id },
    });
    return NextResponse.json(deletedCurrency);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "فشل حذف العملة",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// تحديث بيانات العملة باستخدام المعرف
export async function PUT(request, { params: { id } }) {
  try {
    // استلام البيانات من الطلب
    const data = await request.json();
    // التحقق من وجود العملة في قاعدة البيانات
    const existingCurrency = await db.currency.findUnique({
      where: { id },
    });
    if (!existingCurrency) {
      return NextResponse.json(
        { message: "العملة غير موجودة" },
        { status: 404 }
      );
    }
    // تحديث العملة بالبيانات الجديدة
    const updatedCurrency = await db.currency.update({
      where: { id },
      data: {
        code: data.code,
        name: data.name,
        symbol: data.symbol,
        rateToDefault: parseFloat(data.rateToDefault),
        isDefault: data.isDefault,
        isActive: data.isActive,
      },
    });
    return NextResponse.json(updatedCurrency);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "فشل تحديث العملة", error: error.message },
      { status: 500 }
    );
  }
}
