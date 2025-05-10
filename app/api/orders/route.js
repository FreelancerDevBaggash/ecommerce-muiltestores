// import { NextResponse } from "next/server";
// import  db  from "../../../lib/db";
// const { dbClient } = require('@db/client');
// const db = new dbClient();
// export async function POST(request) {
//     try {
//       const { checkoutFormData, orderItems } = await request.json();
//       const {
//         city,
//         country,
//         district,
//         email,
//         firstName,
//         lastName,
//         paymentMethod,
//         phone,
//         shippingCost,
//         streetAddress,
//         storeId,
//         location,
//         CustomerStoreId,
//     }= checkoutFormData;

//       // Create orderNumber function
//       function generateOrderNumber(length) {
//         const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         let orderNumber = "";
  
//         for (let i = 0; i < length; i++) {
//           const randomIndex = Math.floor(Math.random() * characters.length);
//           orderNumber += characters.charAt(randomIndex);
//         }
  
//         return orderNumber;
//       }
  
//       // Use the db transaction
//       const result = await db.$transaction(async (db) => {
//         // Create order and order items within the transaction
//         const newOrder = await db.order.create({
//         data:{
//            firstName ,
//            lastName ,
//            email ,
//            phone ,
//            streetAddress , 
//            city  ,
//            orderNumber:generateOrderNumber(8),
//            country ,
//            district ,
//            shippingCost :parseFloat(shippingCost),
//            paymentMethod  ,      
//           storeId,
//            location,
//            CustomerStoreId,
//           },
           
        
//         });
  
//         const newOrderItems = await db.orderItem.createMany({
//             data: orderItems.map((item) => ({
//                 productId:item.id,
//                 vendorId:newOrder.storeId,
//                 quantity:parseInt(item.qty),
//                 price:parseFloat(item.salePrice),
//                 orderId: newOrder.id,
//                 imageUrl:item.imageUrl,
//                 title:item.title,
//                 // Assuming you have a productId field in each item, adjust as needed
//               })),
//         });

//          // جلب معرف البائع (vendorId) من جدول Store
//       const store = await db.store.findUnique({
//         where: { id: storeId },
//         select: { vendorId: true },
//       });

//       // إنشاء إشعار "ORDER_NEW" للبائع
//       if (store?.vendorId) {
//         await db.notification.create({
//           data: {
//             title: 'طلب جديد',
//             body: `وصلك طلب جديد برقم ${newOrder.orderNumber}`,
//             type: 'ORDER_NEW',
//             userId: store.vendorId,
//             orderId: newOrder.id,
//             storeId: storeId,
//           },
//         });
//       }
  

//         return { newOrder, newOrderItems };
//       });
  
//      // console.log(result.newOrder, result.newOrderItems, );
  
//       // Return the response
//       return NextResponse.json(result.newOrder);
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json(
//         {
//             message: "Failed to create Order",
//             error,
//         },{status:500}
        
//             )
//     }
//   }



// export async function GET(request){
//     try{
//         const orders = await db.order.findMany({
//             orderBy:{
//                 createdAt:"desc"
//             },
//             include:{
//                 orderItems:true
//             }
//         })
//         return NextResponse.json(orders)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch Orders",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }

    

//     export async function PATCH(request) {
//       try {
//         const { id, status } = await request.json(); // جلب معرف الطلب والحالة الجديدة من الطلب
    
//         if (!id || !status) {
//           return NextResponse.json(
//             { message: "Order ID and status are required" },
//             { status: 400 }
//           );
//         }
    
//         // تحديث حالة الطلب في قاعدة البيانات
//         const updatedOrder = await db.order.update({
//           where: { id },
//           data: { orderStatus: status },
//         });
    
//         return NextResponse.json(updatedOrder); // إرجاع الطلب المحدث
//       } catch (error) {
//         console.error("Failed to update order status:", error);
//         return NextResponse.json(
//           {
//             message: "Failed to update order status",
//             error,
//           },
//           { status: 500 }
//         );
//       }
//     }



    // export async function POST(request) {
    //   try {
    //     const { checkoutFormData, orderItems } = await request.json();
    //     const {
    //       city,
    //       country,
    //       district,
    //       email,
    //       firstName,
    //       lastName,
    //       paymentMethod,
    //       phone,
    //       shippingCost,
    //       streetAddress,
    //    //   storeId,
    //     //  customersId,
    //     } = checkoutFormData;
    
    //     function generateOrderNumber(length) {
    //       const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //       let orderNumber = "";
    //       for (let i = 0; i < length; i++) {
    //         const randomIndex = Math.floor(Math.random() * characters.length);
    //         orderNumber += characters.charAt(randomIndex);
    //       }
    //       return orderNumber;
    //     }
    
    //     const result = await db.$transaction(async (db) => {
    //       const newOrder = await db.order.create({
    //         data: {
    //        //   storeId,
    //         //  customersId,
    //           firstName,
    //           lastName,
    //           email,
    //           phone,
    //           streetAddress,
    //           city,
    //           orderNumber: generateOrderNumber(8),
    //           country,
    //           district,
    //           shippingCost: parseFloat(shippingCost),
    //           paymentMethod,
    //           store: {
    //             connect: { id: "6785679689368d5590d7495b" }, // الربط بالمتجر الموجود
    //           },
    //           customer: {
    //             connect: { id: "678c0b657e290bb4ec0976c2" }, // الربط بالمتجر الموجود
    //           },
    //         },
    //       });
    
    //       const newOrderItems = await db.orderItem.createMany({
    //         data: orderItems.map((item) => ({
    //           productId: item.id,
    //           vendorId: item.id,
    //           quantity: parseInt(item.qty),
    //           price: parseFloat(item.salePrice),
    //           orderId: newOrder.id,
    //           imageUrl: item.imageUrl,
    //           title: item.title,
    //         })),
    //       });
    
    //       return { newOrder, newOrderItems };
    //     });
    
    //     return NextResponse.json(result.newOrder);
    //   } catch (error) {
    //     console.error(error);
    //     return NextResponse.json(
    //       {
    //         message: "Failed to create Order",
    //         error,
    //       },
    //       { status: 500 }
    //     );
    //   }
    // }
    

    import { NextResponse } from 'next/server'
import db from '@/lib/db'

/**
 * دالة مساعدة لتوليد رقم طلب عشوائي مكوّن من أحرف وأرقام
 */
function generateOrderNumber(length = 8) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let str = ""
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return str
}

/**
 * POST /api/orders
 * - يتوقع جسم الطلب: { checkoutFormData, orderItems }
 * - ينشئ سجل Order و OrderItem داخل معاملة واحدة
 * - يعيد { id, total } إلى العميل
 */
export async function POST(request) {
  try {
    const body = await request.json()
    const { checkoutFormData, orderItems } = body

    console.log("rrrrr", checkoutFormData)
    // التحقق من وجود البيانات المطلوبة
    if (!checkoutFormData || !Array.isArray(orderItems) || orderItems.length === 0) {
      return NextResponse.json(
        { error: 'البيانات غير مكتملة: checkoutFormData و orderItems مطلوبان' },
        { status: 400 }
      )
    }
    // استخراج بيانات الشحن والعميل من checkoutFormData
    const {
      firstName,
      lastName,
      email,
      phone,
      streetAddress,
      city,
      district,
      country,
      description,
      shippingCost = 0,
      paymentMethod,
      storeId,
      CustomerStoreId,
      location
    } = checkoutFormData

    // حساب المجموع
    const subTotal = orderItems.reduce((sum, it) => sum + it.salePrice * it.qty, 0)
    const total = subTotal + parseFloat(shippingCost)

    // إنشاء الطلب والمعاملات داخل tx واحدة
    const [newOrder] = await db.$transaction([
      db.order.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          streetAddress,
          city,
          district,
          country,
          description,
          shippingCost: parseFloat(shippingCost),
          orderNumber: generateOrderNumber(8),
          paymentMethod,                                      // 'COD' أو 'ELECTRONIC'
          paymentStatuse: paymentMethod === 'COD' ? 'UNPAID' : 'PAID',
          orderStatus: 'PENDING',
          location,
          storeId,
          CustomerStoreId,
          orderItems: {
            create: orderItems.map(item => ({
              productId: item.id,
              vendorId: item.vendorId || storeId,
              quantity: parseInt(item.qty, 10),
              price: parseFloat(item.salePrice),
              title: item.title,
              imageUrl: item.imageUrl || ''
            }))
          }
        }
      })
    ])

    // (اختياري) إنشاء إشعار للبائع
    const store = await db.store.findUnique({
      where: { id: storeId },
      select: { vendorId: true }
    })
    if (store?.vendorId) {
      await db.notification.create({
        data: {
          title: 'طلب جديد',
          body: `وصلتك طلبية برقم ${newOrder.orderNumber}`,
          type: 'ORDER_NEW',
          userId: store.vendorId,
          orderId: newOrder.id,
          storeId
        }
      })
    }

    // إعادة المعرّف والمجموع للعميل
    return NextResponse.json({ id: newOrder.id, total })
  } catch (err) {
    console.error('خطأ في POST /api/orders:', err)
    return NextResponse.json(
      { error: 'فشل إنشاء الطلب' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/orders
 * - يعيد جميع الطلبات مع عناصرها
 */
export async function GET() {
  try {
    const orders = await db.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: { orderItems: true }
    })
    return NextResponse.json(orders)
  } catch (err) {
    console.error('خطأ في GET /api/orders:', err)
    return NextResponse.json(
      { error: 'فشل جلب الطلبات' },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/orders
 * - يتوقع جسم الطلب: { id, status }
 * - يحدث حالة الطلب (orderStatus)
 */
export async function PATCH(request) {
  try {
    const { id, status } = await request.json()
    if (!id || !status) {
      return NextResponse.json(
        { error: 'مطلوب معرّف الطلب والحالة الجديدة' },
        { status: 400 }
      )
    }
    const updated = await db.order.update({
      where: { id },
      data: { orderStatus: status }
    })
    return NextResponse.json(updated)
  } catch (err) {
    console.error('خطأ في PATCH /api/orders:', err)
    return NextResponse.json(
      { error: 'فشل تحديث حالة الطلب' },
      { status: 500 }
    )
  }
}
