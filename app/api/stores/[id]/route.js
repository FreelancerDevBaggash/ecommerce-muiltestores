import db from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(request, { params: { userId } }) {
  try {
    const store = await db.store.findUnique({
      where: {
        vendorId: userId,
      },
      include: {
        categories: true,
        products: true,
        orders: true,
        sales: true,
        coupons: true,
        banners: true,
        storeCurrencies: true,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Vendor",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    // استلام البيانات من الطلب
    const data = await request.json();

    // تحقق من وجود المتجر في قاعدة البيانات باستخدام الـ id
    const existingStore = await db.store.findUnique({
      where: { id: id },
    });

    if (!existingStore) {
      return NextResponse.json({ message: "Store Not Found" }, { status: 404 });
    }

    // تحديث بيانات المتجر بما في ذلك روابط التواصل الاجتماعي
    const updatedStore = await db.store.update({
      where: { id: id },
      data: {
        businessName: data.businessName,
        storeType: data.storeType,
        profileImageUrl: data.profileImageUrl,
        phone: data.phone,
        physicalAddress: data.physicalAddress,
        // إضافة تحديث حقل روابط التواصل الاجتماعي
        socialLinks: data.socialLinks,
      },
    });

    // إرجاع المتجر المحدث
    return NextResponse.json(updatedStore);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Update Store", error },
      { status: 500 }
    );
  }
}



// import { NextResponse } from "next/server";

// export async function GET(request, {params:{userId}}){
//     try{
//         const store = await db.store.findUnique({
//             where:{
//                 vendorId:userId
//             },
//             include:{
//                 categories:true,
//                 products:true,
//                 orders:true,
//                 sales:true,
//                 coupons:true,
//                 banners:true,
//                 storeCurrencies: true,
//             }
//         });
//         return NextResponse.json(store)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch Vendor",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }

 
// export async function PUT(request, { params: { id } }) {
//   try {
//     // استلام البيانات من الطلب
//     const data = await request.json();

//     // تحقق من وجود المتجر في قاعدة البيانات باستخدام الـ id
//     const existingStore = await db.store.findUnique({
//       where: { id: id },
//     });

//     if (!existingStore) {
//       return NextResponse.json(
//         { message: "Store Not Found" },
//         { status: 404 }
//       );
//     }

//     // تحديث بيانات المتجر
//     const updatedStore = await db.store.update({
//       where: { id: id },
//       data: {
//         businessName: data.businessName,
//         storeType: data.storeType,
//         // entityType: data.entityType,
//         profileImageUrl: data.profileImageUrl,
//         phone: data.phone,
//         physicalAddress: data.physicalAddress,
//         // isActive: data.isActive,
//       },
//     });

//     // إرجاع المتجر المحدث
//     return NextResponse.json(updatedStore);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Failed to Update Store", error },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request, {params:{id}}){
//     try{
//         const market = await db.market.findUnique({
//             where:{
//                 id
//             },
//         });
//         return NextResponse.json(market)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch Market",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }



//     export async function DELETE(request, {params:{id}}){
//         try{
//             const existingMarket = await db.market.findUnique({
//                 where:{
//                     id
//                 }
//             });
//             if(!existingMarket){
//                 return NextResponse.json({
//                     data:null,
//                     message:"Market Not Found"
//                 },
//                 {status:404})
//             }
//             const deletedMarket =await db.market.delete({
//                 where:{
//                     id
//                 },
//               });

//             return NextResponse.json(deletedMarket)
//         }catch(error){
//                 console.log(error);
//                 return NextResponse.json(
//             {
//                 message: "Failed to Delete Market",
//                 error,
//             },{status:500}
            
//                 )
        
//         }
        
//         }