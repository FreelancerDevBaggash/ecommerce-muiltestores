import { NextResponse } from "next/server";
import db from "../../../lib/db";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { 
      orderId,
      productQty,
      username,
      invoiceTotal,
      customerStoreId,
      storeId,
      saleItems, // تأكد من تمرير saleItems من الطلب
    } = await request.json();

    // توليد رقم الطلب
    function generateOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    }

    // استخدام الـ Prisma transaction لإنشاء البيانات
    const result = await db.$transaction(async (prisma) => {
      // إنشاء عملية البيع (Sale)
      const newSale = await prisma.sale.create({
        data: {
          orderId,
          productQty,
          username,
          invoiceTotal,
          customerStoreId,
          storeId,
        //  orderNumber: generateOrderNumber(10), // إضافة رقم الطلب
        },
      });

      // إنشاء عناصر البيع (SaleItems)
      const newSaleItems = await prisma.saleItem.createMany({
        data: saleItems.map((item) => ({
          productId: item.productId, // تأكد من أن لديك `productId` في العناصر
          saleId: newSale.id,        // استخدام `newSale.id` بدلاً من `newOrder.id`
       //   vendorId: item.vendorId,   // تأكد من أن لديك `vendorId` في العناصر         
          productTitle: item.productTitle,  // تأكد من أن لديك `productTitle` في العناصر
          productImage: item.productImage,
          productPrice: parseFloat(item.productPrice),
          productQty: parseInt(item.productQty),
        })),
      });

      return newSale; // أو يمكنك إرجاع `newSaleItems` حسب الحاجة
    });

    return NextResponse.json({ message: "Sale created successfully", data: result });
  } catch (error) {
    console.error("Error creating sale:", error);
    return NextResponse.json({ message: "Failed to create sale", error: error.message }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import  db  from "../../../lib/db";
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// export async function POST(request) {
//     try {
//       const {       
//         orderId,
//         productQty,
//         username,
//         invoiceTotal,
//         customersId,
//         storeId,
//     } = await request.json();

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
  
//       // Use the Prisma transaction
//       const result = await db.$transaction(async (prisma) => {
//         // Create order and order items within the transaction
//         const newSale = await prisma.sale.create({
//         data:{
//             orderId,
//             productQty,
//             username,
//             invoiceTotal,
//             customersId,
//             storeId,
           
//         }
//         });
  
//         const newSaleItems = await prisma.saleItem.createMany({
//             data: saleItems.map((item) => ({
//                 productId:item.id,
//                 vendorId:item.id,
//                 quantity:parseInt(item.qty),
//                 price:parseFloat(item.salePrice),
//                 orderId: newOrder.id,
//                 imageUrl:item.imageUrl,
//                 title:item.title,
//                 // Assuming you have a productId field in each item, adjust as needed
//               })),
//         });
  


        // const newSale = await prisma.sale.create({
        //   data:{
        //     orderId: newOrder.id,
        //     productQty,
        //      firstName ,
        //      lastName ,
        //      email ,
        //      phone ,
        //      streetAddress , 
        //      city  ,
        //      orderNumber:generateOrderNumber(8),
        //      country ,
        //      district ,
        //      shippingCost :parseFloat(shippingCost),
        //      paymentMethod  
        //   }
        //   });
        // // Calculate total amount for each product and create a sale for each
        // const sales = await Promise.all(
        //   orderItems.map(async (item) => {
        //     const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);
  
        //     const newSale = await prisma.sale.create({
        //       data: {
        //         orderId: newOrder.id,
        //         productTitle: item.title,
        //         productImage: item.imageUrl,
        //         productPrice: parseFloat(item.salePrice),
        //         productQty: parseInt(item.qty),
        //         productId: item.id,
        //         vendorId: item.vendorId,
        //         total: totalAmount,
        //       },
        //     });
  
        //     return newSale;
        //   })
        // );
  
//         return { newOrder, newOrderItems };
//       });
  
//       console.log(result.newOrder, result.newOrderItems, );
  
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



export async function GET(request){
    try{
        const sales = await db.sale.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                saleItems:true
            }
        })
        return NextResponse.json(sales)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Sales",
            error,
        },{status:500}
        
            )
    
    }
    
    }