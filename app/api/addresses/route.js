import { NextResponse } from "next/server";
// import { db } from "../../../lib/db";
import db from'../../../lib/db';
export async function POST(request) {
  const body = await request.json();
  const { customerId, addressName, streetAddress, city, district, country, description, location } = body;

  if (!customerId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

  const address = await db.address.create({
    data: {
      customerId,
      addressName,
      streetAddress,
      city,
      district,
      country,
      description,
      location,
    },
  });

  return NextResponse.json(address);
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get("customerId");

  if (!customerId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

  const addresses = await db.address.findMany({
    where: { customerId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(addresses);
}
