// app/api/customerAuth/session/route.js
import { NextResponse } from "next/server";
import { getCustomerSession } from "@/lib/getCustomerSession";

export async function GET(req) {
  const session = getCustomerSession(); // ✅ بدون await لأن cookies() تُستخدم هنا بشكل مباشر
  if (!session) {
    return NextResponse.json({ session: null }, { status: 401 });
  }
  return NextResponse.json({ session });
}
