import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get('storeId')
    const limit = parseInt(searchParams.get('limit')) || 5

    if (!storeId) {
      return NextResponse.json(
        { error: 'معرف المتجر مطلوب' },
        { status: 400 }
      )
    }

    // اجلب المنتجات مع حساب عدد مرات بيع كل منتج
    const products = await db.product.findMany({
      where: { storeId },
      include: {
        category: true,
        subCategory: true,
        saleItems: true, // عشان نعد المبيعات
      }
    })

    // حساب مبيعات كل منتج
    const productsWithSales = products.map(product => ({
      ...product,
      salesCount: product.saleItems.length
    }))

    // ترتيب المنتجات حسب عدد المبيعات ونختار أعلى المنتجات
    const topProducts = productsWithSales
      .filter(product => product.salesCount > 0)
      .sort((a, b) => b.salesCount - a.salesCount)
      .slice(0, limit)

    // تنسيق الإخراج
    const formattedProducts = topProducts.map(product => ({
      id: product.id,
      title: product.title,
      category: product.category?.title || 'غير مصنف',
      subCategory: product.subCategory?.title || '',
      productPrice: product.productPrice,
      salePrice: product.salePrice,
      stock: product.productStock || 0,
      salesCount: product.salesCount,
      imageUrl: product.imageUrl
    }))

    return NextResponse.json({
      success: true,
      data: formattedProducts
    })
  } catch (error) {
    console.error('فشل في جلب المنتجات الأكثر مبيعاً:', error)
    return NextResponse.json(
      { error: 'فشل في جلب المنتجات الأكثر مبيعاً', details: error.message },
      { status: 500 }
    )
  }
}
