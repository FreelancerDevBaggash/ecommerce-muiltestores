import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request){
  try{
  
  
     /* {code, 
      contactPerson, 
      whatsappPhone,
          email, 
          name, 
          notes,
           phone,
            physicalAddress,
             terms, 
             isActive,
           profileImageUrl,
            products,
             landSize,
              mainCrop,
              userId }*/
           //   const newStore = await db.store.create({
            //     data:{
            //       code, businessName, contactPerson, whatsappPhone, profileImageUrl,
            //       notes, phone, physicalAddress, isActive, slugDomain, userId, mainCategoryId
            //     }  
            // });
   //Update the verification in the user           
  const  vendorData = await request.json();
   //Check if the user Already exists in the db
//    const existingUser = await db.user.findUnique({
//           where:{
//               id:vendorData.userId,
//           }
//       });
//       if(!existingUser){
   
//           return NextResponse.json({
//               data:null,
//               message:"No User Found"
//           },{status:404});
        
//       }
  
   //Update emailVerified
    // const updatedUser = await db.user.update({
    //  where:{
    //    id:vendorData.userId,
    //      },
    //   data:{
    //    emailVerified:true
    //        }4
    //     });
  const newStore = await db.store.create({
      data:{
          code  :vendorData.code,
          businessName : vendorData.businessName,
          businessNameEn : vendorData.businessNameEn,
          contactPerson :vendorData.contactPerson,
          whatsappPhone :vendorData.whatsappPhone,
          storeType :vendorData.storeType,
          profileImageUrl :vendorData.profileImageUrl,
          entityType :vendorData.entityType,
          //email :vendorData.email,
          notes :vendorData.notes,
          phone :vendorData.phone,
          physicalAddress :vendorData.physicalAddress,
          isActive :vendorData.isActive,
          slugDomain: vendorData.slugDomain,
          templateId: vendorData.templateId,
          vendorId :vendorData.vendorId,
          mainCategoryId: vendorData.mainCategoryId
      }  
  });
  console.log(newStore);
  return NextResponse.json(newStore);
  }catch(error){
      console.log(error);
      return NextResponse.json(
  {
      message: "Failed to create Store",
      error,
  },{status:500}
  
      )
  }
  
  
  }


  // export async function GET(request) {
  //   try {
  //     const { searchParams } = new URL(request.url);
  //     const vendorId = searchParams.get('vendorId'); // جلب userId من الـ request
  //     const storeId = searchParams.get('storeId');
  //     // إذا لم يتم تمرير userId، اجلب جميع المتاجر
  //     let stores;
  //     if (!vendorId || vendorId === "undefined") {
  //       stores = await db.store.findMany({
            
  //         orderBy: {
  //           createdAt: "desc",
  //         },
  //         include: {
  //           categories: true,
  //           products: true,
  //           orders: true,
  //           sales: true,
  //           coupons: true,
  //           banners: true,
  //           customerStores:true
  //         },
  //       });
  //     }
  //      else if (storeId) {
  //       stores = await db.store.findMany({
            
  //         orderBy: {
  //           createdAt: "desc",
  //         },
  //         where: {
  //           storeId: storeId,
  //         },
  //         // include: {
  //         //   categories: true,
  //         //   products: true,
  //         //   orders: true,
  //         //   sales: true,
  //         //   coupons: true,
  //         //   banners: true,
  //         //   customerStores:true
  //         // },
  //       });
  //     }
  //      else  {
  //       // إذا تم تمرير userId، ابحث عن المتجر الخاص بهذا المستخدم
  //       stores = await db.store.findMany({
            
  //         orderBy: {
  //           createdAt: "desc",
  //         },
  //         where: {
  //           vendorId: vendorId,
  //         },
  //         include: {
  //           categories: true,
  //           products: true,
  //           orders: true,
  //           sales: true,
  //           coupons: true,
  //           banners: true,
  //           customerStores:true
            
  //         }
  //       });
  //     }
  
  //     if (!stores || stores.length === 0) {
  //       return NextResponse.json({ message: "No stores found" }, { status: 404 });
  //     }
  
  //     return NextResponse.json(stores);
  //   } catch (error) {
  //     console.log(error);
  //     return NextResponse.json(
  //       {
  //         message: "Failed to fetch stores",
  //         error,
  //       },
  //       { status: 500 }
  //     );
  //   }
  // }
  


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const vendorId = searchParams.get('vendorId');
    const storeId = searchParams.get('storeId');

    // مثال للترقيم (Pagination)
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 20;
    const skip = (page - 1) * limit;

    // بناء شرط البحث بناءً على المعاملات المرسلة
    let where = {};
    if (storeId) {
      where.id = storeId;
    } else if (vendorId) {
      where = {
        vendorId: vendorId
      };
    }
    // إذا لم يتم تمرير أي معامل يتم جلب جميع المتاجر

    // جلب بيانات المتجر باستخدام خاصية select لتحديد الحقول المطلوبة فقط
    const stores = await db.store.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        code: true,
        businessName: true,
        businessNameEn: true,
        contactPerson: true,
        whatsappPhone: true,
        storeType: true,
        entityType: true,
        profileImageUrl: true,
        notes: true,
        phone: true,
        physicalAddress: true,
        isActive: true,
        slugDomain: true,
        vendorId: true,
        mainCategoryId: true,
        templateId: true,
        createdAt: true,
        updatedAt: true,
        currencies: true,

      },
      skip,
      take: limit,
    });

    if (!stores || stores.length === 0) {
      return NextResponse.json({ message: "No stores found" }, { status: 404 });
    }

    return NextResponse.json(stores);
  } catch (error) {
    console.error("Error fetching stores:", error);
    // لا يتم إرسال تفاصيل الخطأ للمستخدم للحفاظ على الأمان
    return NextResponse.json({ message: "Failed to fetch stores" }, { status: 500 });
  }
}















  // export async function GET(request){
  //     try{
  //         const vendors = await db.user.findMany({
  //             orderBy:{
  //                 createdAt:"desc"
  //             },
  //             where:{
  //                 role:"VENDOR"
  //             },
  //             include:{
  //                 store:true
  //             }
  //         })
  //         return NextResponse.json(vendors)
  //     }catch(error){
  //             console.log(error);
  //             return NextResponse.json(
  //         {
  //             message: "Failed to Fetch vendors",
  //             error,
  //         },{status:500}
          
  //             )
      
  //     }
      
  //     }
  
