import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request){
    


try{
const {
    barcode,
categoryId,
descripti,
productImages,
isActive,
isWholesale,
productCode,
productPrice,
salePrice,
sku,
slug,
tags,
title,
unit,
storeId,
wholesalePrice,
wholesaleQty,
productStock, 
qty,


} = await request.json();
//للتحقق من وجود المنتج او لا 
const existingProduct = await db.product.findUnique({
    where:{
        slug
    }
});
if(existingProduct){
    return NextResponse.json(
        {
            data:null,
            message:"Product already exists"
        },
        {status: 409}
    );
}
//   end
const newProduct = await db.product.create({
    data:{
  barcode,
categoryId,
descripti,
productImages,
imageUrl:productImages[0],
isActive,
isWholesale,
productCode,
productPrice:parseFloat(productPrice),
salePrice:parseFloat(salePrice),
sku,
slug,
tags,
title,
unit,
storeId,
wholesalePrice:parseFloat(wholesalePrice),
wholesaleQty:parseInt(wholesaleQty),
productStock :parseInt(productStock),
qty:parseInt(qty),

},
});

console.log(newProduct);
return NextResponse.json(newProduct);
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


export async function GET(request ){
    const { searchParams } = new URL(request.url);
    const storeId = searchParams.get('storeId');

    console.log("Received storeId:", storeId);
    const categoryId = request.nextUrl.searchParams.get("catId");
    const sortBy = request.nextUrl.searchParams.get("sort");
    const min = request.nextUrl.searchParams.get("min");
    const max = request.nextUrl.searchParams.get("max");
    const searchTerm = request.nextUrl.searchParams.get("search");
    const page = request.nextUrl.searchParams.get("page") || 1 ;
    const pageSize = 3;
    console.log(sortBy, categoryId)
    let where = {
        categoryId
    };
    if(min && max ){
      where.salePrice= {
        gte:parseFloat(min),
        lte:parseFloat(max)
      }
    }else if(min){
        where.salePrice={
            gte:parseFloat(min),
        }
    }else if(max){
        where.salePrice={
            lte: parseFloat(max)
        }
    }
    let products;
    try{
        if(searchTerm){
            products = await db.product.findMany({
                where:{
                    OR: [
                        {title: {contains: searchTerm,mode: 'insensitive'} }
                    ]
                } 
              
                },
            )
        }else  if (categoryId && page){
        products = await db.product.findMany({
            where,   
            skip: (parseInt(page) - 1) * parseInt(pageSize),
            take: parseInt(pageSize),
             orderBy:{
                createdAt: "desc",
            },
        })
      }else  if(categoryId && sortBy){
         products = await db.product.findMany({
            where,   
             orderBy:{
                salePrice: sortBy === "asc" ? "asc" : "desc",
            },
        })
       }else if(categoryId){
        products = await db.product.findMany({
            where,
           orderBy:{
               createdAt:"desc"
           },
       })
      } 
       else if(!storeId || storeId === "undefined") {
         products = await db.product.findMany({
            orderBy: {
                createdAt: "desc",
              },  
                include: {
                orderItems: true,
                saleItems :true
              },  
        });
       } else {
        products = await db.product.findMany({
            where: {
                storeId: storeId,
              }, 
            orderBy: {
                createdAt: "desc",
              },  include: {
                orderItems: true,
                saleItems:true
              },     
        });     
       }
        return NextResponse.json(products)
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