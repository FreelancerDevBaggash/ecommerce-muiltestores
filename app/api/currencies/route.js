import { NextResponse } from "next/server";
import  db  from "../../../lib/db";

export async function GET() {
  try {
    const currencies = await db.currency.findMany({
      where: {
        isActive: true,
      },
    });
    return NextResponse.json(currencies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch currencies" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { code, name, symbol, isDefault, rateToDefault } = await request.json();

    const currency = await db.currency.create({
      data: {
        code,
        name,
        symbol,
        isDefault,
        rateToDefault,
        isActive: true,
      },
    });
    return NextResponse.json(currency, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create currency" }, { status: 500 });
  }
}
