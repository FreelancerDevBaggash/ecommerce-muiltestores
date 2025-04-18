import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

// دالة DELETE لحذف جميع العملاء
export async function DELETE(req) {
  try {
    await db.customer.deleteMany();
    return NextResponse.json({ message: "تم حذف جميع العملاء بنجاح" });
  } catch (error) {
    console.error("فشل في حذف العملاء:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء حذف العملاء", error },
      { status: 500 }
    );
  }
}
