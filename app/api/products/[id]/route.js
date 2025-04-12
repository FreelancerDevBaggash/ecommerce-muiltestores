import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const product = await db.product.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(product)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Product",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingProduct = await db.product.findUnique({
                where:{
                    id
                }
            });
            if(!existingProduct){
                return NextResponse.json({
                    data:null,
                    message:"Product Not Found"
                },
                {status:404})
            }
            const deletedProduct =await db.product.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedProduct)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete Product",
                error,
            },{status:500}
            
                )
        
        }
        
        }
        export async function PUT(request, { params: { id } }) {
            try {
              // استلام البيانات من الطلب
              const data = await request.json();
          
              // تحقق من وجود المنتج في قاعدة البيانات باستخدام الـ id
              const existingProduct = await db.product.findUnique({
                where: { id: id }, // تأكد من أن الـ id هو رقم
              });
          
              if (!existingProduct) {
                return NextResponse.json(
                  { message: "Product Not Found" },
                  { status: 404 }
                );
              }
          
              // تحديث المنتج في قاعدة البيانات
              const updatedProduct = await db.product.update({
                where: { id: id }, // تأكد من أن الـ id هو رقم
                data: {
                  title: data.title,
                  sku: data.sku,
                  barcode: data.barcode,
                  productPrice: data.productPrice,
                  salePrice: data.salePrice,
                  productStock: data.productStock,
                  unit: data.unit,
                  categoryId: data.categoryId,
                  isActive: data.isActive,
                  isWholesale: data.isWholesale,
                  wholesalePrice: data.wholesalePrice,
                  wholesaleQty: data.wholesaleQty,
                  tags: data.tags,
                  productImages: data.productImages,
                  description: data.description,
                  productCode: data.productCode,
                  slug: data.slug,
                  storeId: data.storeId,
                  qty: data.qty,
                },
              });
          
              // إرجاع المنتج المحدث
              return NextResponse.json(updatedProduct);
          
            } catch (error) {
              console.log(error);
              return NextResponse.json(
                { message: "Failed to Update Product", error },
                { status: 500 }
              );
            }
          }