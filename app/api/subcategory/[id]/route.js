import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const subcategory = await db.SubCategory.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(subcategory)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch subCategory",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingsubcategory = await db.SubCategory.findUnique({
                where:{
                    id
                }
            });
            if(!existingsubcategory){
                return NextResponse.json({
                    data:null,
                    message:"subcategories Not Found"
                },
                {status:404})
            }
            const deletedsubcategory =await db.SubCategory.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedsubcategory)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete subcategories",
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
              const existingsubcategory = await db.SubCategory.findUnique({
                where: { id: id }, // تأكد من أن الـ id هو رقم
              });
          
              if (!existingsubcategory) {
                return NextResponse.json(
                  { message: "subcategories Not Found" },
                  { status: 404 }
                );
              }
          
              // تحديث المنتج في قاعدة البيانات
              const updatedsubcategory = await db.SubCategory.update({
                where: { id: id }, // تأكد من أن الـ id هو رقم
                data: {
                  title: data.title,
                  slug: data.slug,
                  imageUrl: data.imageUrl,
                  description: data.description,
                  isActive: data.isActive,
                  categoryId: data.categoryId,
                  storeId: data.storeId
                },
              });
          
              // إرجاع المنتج المحدث
              return NextResponse.json(updatedsubcategory);
          
            } catch (error) {
              console.log(error);
              return NextResponse.json(
                { message: "Failed to Update SubCategory", error },
                { status: 500 }
              );
            }
          }