import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const storeId = searchParams.get('storeId');
  const customerId = searchParams.get('customerId');

  if (!storeId || !customerId) {
    return NextResponse.json(
      { error: 'يرجى تمرير كل من storeId و customerId في query string' },
      { status: 400 }
    );
  }

  try {
    const customerStore = await prisma.customerStore.findMany({
      where: {
        storeId,
        customerId,
      },
      include: {
        customer: true,
      },
    });

    if (!customerStore) {
      return NextResponse.json(
        { error: 'CustomerStore غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json(customerStore);
  } catch (error) {
    console.error('Error fetching customer store:', error);
    return NextResponse.json(
      { error: 'خطأ في الخادم' },
      { status: 500 }
    );
  }
}
