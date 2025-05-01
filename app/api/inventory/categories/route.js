import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')

    if (!storeId) {
      return NextResponse.json(
        { success: false, message: "معرف المتجر مطلوب" },
        { status: 400 }
      )
    }

    const categories = await db.category.findMany({
      where: { storeId },
      select: {
        id: true,
        title: true,
        isActive: true,
        subCategories: {
          select: {
            id: true,
            title: true
          }
        }
      },
      orderBy: { title: 'asc' }
    })

    return NextResponse.json({
      success: true,
      data: categories
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "حدث خطأ أثناء جلب التصنيفات" },
      { status: 500 }
    )
  }
}