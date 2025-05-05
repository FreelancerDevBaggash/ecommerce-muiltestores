import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request){
try{
const{title,mainCategoryId, storeId, slug, imageUrl, description, isActive} = await request.json();
//للتحقق من وجود الفئة او لا 
const existingCategory = await db.category.findUnique({
    where:{
        slug,
    }
});
if(existingCategory){
    return NextResponse.json(
        {
            data:null,
            message:"Category already exists"
        },
        {status: 409}
    );
}
const newCategory = {title,mainCategoryId, storeId, slug, imageUrl, description, isActive};
const categories = await db.category.create({
    data:newCategory,
});
// console.log(newCategory);
return NextResponse.json(categories);
}catch(error){
    console.log(error);
    return NextResponse.json(
{
    message: "Failed to create Category",
    error,
},{status:500}

    )
}


}

export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const storeId = searchParams.get('storeId');

      console.log("Received storeId:", storeId); // للتحقق من الـ storeId
      let categories;
      if (!storeId || storeId === "undefined") {
        categories = await db.category.findMany({
            
          orderBy: {
            createdAt: "desc",
          },  include: {
            products: true,
            subCategories: true,
         
          },
        });
      } else {
        // إذا تم تمرير userId، ابحث عن المتجر الخاص بهذا المستخدم
        categories = await db.category.findMany({
            
          orderBy: {
            createdAt: "desc",
          },
          where: {
            storeId: storeId,
          },  include: {
            products: true,
            subCategories: true,
         
          },
        });
      }
      if (!categories || categories.length === 0) {
        return NextResponse.json({ message: "No categories found" }, { status: 404 });
      }
    //   if (!storeId || storeId === "undefined") {
    //     return NextResponse.json(
    //       { message: "Invalid or missing Store ID" },
    //       { status: 400 }
    //     );
    //   }

  
      return NextResponse.json(categories);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          message: "Failed to fetch categories",
          error,
        },
        { status: 500 }
      );
    }
  }