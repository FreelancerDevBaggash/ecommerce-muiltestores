import { NextResponse } from "next/server";
import db from "@/lib/db";

// فقط نقبل طلبات PUT هنا
export async function PUT(request, { params }) {
  const storeId = params.id;
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "غير قادر على قراءة جسم الطلب" },
      { status: 400 }
    );
  }

  const { templateId } = body;
  if (!templateId) {
    return NextResponse.json(
      { message: "templateId مطلوب في جسم الطلب" },
      { status: 400 }
    );
  }

  try {
    const updatedStore = await db.store.update({
      where: { id: storeId },
      data: { templateId },
    });
    return NextResponse.json(updatedStore, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "فشل في تحديث القالب" },
      { status: 500 }
    );
  }
}

// إذا أردت أن ترفض باقي الميثودات صراحة:
export async function GET() {
  return NextResponse.json(
    { message: "Method Not Allowed" },
    { status: 405 }
  );
}
