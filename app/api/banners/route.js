import { NextResponse } from "next/server";
import  db  from "../../../lib/db";

export async function POST(request){
try{
const{title, link, imageUrl,storeId,expiryDate, isActive} = await request.json();
const newBanner = await db.banner.create({
    data:{
        title, link, imageUrl,storeId,expiryDate, isActive
    }
})
console.log(newBanner);
return NextResponse.json(newBanner);
}catch(error){
    console.log(error);
    return NextResponse.json(
{
    error: "Failed to create Banner",
    
},{status:500}

    )
}


}

// export async function GET(request){
//     try{
//         const banners = await db.banner.findMany({
//             orderBy:{
//                 createdAt:"desc"
//             },
//         })
//         return NextResponse.json(banners)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch Banner",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }

export async function GET(request){
    try{
        const { searchParams } = new URL(request.url);
        const storeId = searchParams.get('storeId');
  
        console.log("Received storeId:", storeId); // للتحقق من الـ storeId
        let banners;
        if (!storeId || storeId === "undefined") {
            banners = await db.banner.findMany({
              
            orderBy: {
              createdAt: "desc",
            },  
        include: {
          store: {
            select: {
              businessName: true,
            },
          },
        },
          });
        } else {
          // إذا تم تمرير userId، ابحث عن المتجر الخاص بهذا المستخدم
          banners = await db.banner.findMany({
              
            where: {
              storeId: storeId,
            },
            orderBy: {
              createdAt: "desc",
            },
            include: {
              store: {
                select: {
                  businessName: true,
                },
              },
            },
          });
        }
        if (!banners || banners.length === 0) {
            return NextResponse.json({ message: "No banners found" }, { status: 404 });
          }
        return NextResponse.json(banners)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Banner",
            error,
        },{status:500}
        
            )
    
    }
    
    }