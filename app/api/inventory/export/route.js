import { NextResponse } from 'next/server'
import db from '@/lib/db'
import { Workbook } from 'exceljs'

export async function POST(request) {
  try {
    // التحقق من أن الطلب يحتوي على بيانات JSON
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { success: false, message: "نوع المحتوى غير مدعوم" },
        { status: 400 }
      )
    }

    const { storeId, filters } = await request.json()

    if (!storeId) {
      return NextResponse.json(
        { success: false, message: "معرف المتجر مطلوب" },
        { status: 400 }
      )
    }

    const products = await db.product.findMany({
      where: {
        storeId,
        ...(filters?.searchQuery && {
          OR: [
            { title: { contains: filters.searchQuery, mode: 'insensitive' } },
            { sku: { contains: filters.searchQuery, mode: 'insensitive' } }
          ]
        }),
        ...(filters?.category && filters.category !== 'all' && {
          categoryId: filters.category
        }),
        ...(filters?.status === 'low' && { productStock: { lt: 10 } }),
        ...(filters?.status === 'out' && { productStock: 0 })
      },
      include: {
        category: { select: { title: true } },
        subCategory: { select: { title: true } }
      }
    })
    
    // إنشاء ملف Excel
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('تقرير المخزون' , {
      views: [{ rightToLeft: true }]})

    // تعريف الأعمدة
    worksheet.columns = [
      { header: 'المنتج', key: 'product', width: 30 },
      { header: 'SKU', key: 'sku', width: 15 },
      { header: 'التصنيف', key: 'category', width: 20 },
      { header: 'المخزون', key: 'stock', width: 15, style: { numFmt: '#,##0' } },
      { header: 'سعر الشراء', key: 'price', width: 15, style: { numFmt: '#,##0.00' } },
      { header: 'حالة المخزون', key: 'status', width: 15 }
    ]

    // إضافة البيانات
    products.forEach(product => {
      worksheet.addRow({
        product: product.title,
        sku: product.sku || '-',
        category: product.category?.title || '-',
        stock: product.productStock,
        price: product.productPrice,
        status: product.productStock === 0 ? 'نفذ' : 
               product.productStock < 10 ? 'منخفض' : 'متوفر'
      })
    })

    // تنسيق الرأس
    worksheet.getRow(1).eachCell(cell => {
      cell.font = { bold: true }
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFD9D9D9' }
      }
    })

    // إنشاء buffer
    const buffer = await workbook.xlsx.writeBuffer()

    // إرجاع الاستجابة
    return new Response(buffer, {
      status: 200,
      headers: new Headers({
        'Content-Disposition': `attachment; filename=inventory_report_${new Date().getTime()}.xlsx`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
    })

  } catch (error) {
    console.error('Excel export error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: "حدث خطأ أثناء تصدير البيانات",
        error: error.message 
      },
      { status: 500 }
    )
  }
}