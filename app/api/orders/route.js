import { NextResponse } from "next/server";
import  db  from "../../../lib/db";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export async function POST(request) {
    try {
      const { checkoutFormData, orderItems } = await request.json();
      const {
        city,
        country,
        district,
        email,
        firstName,
        lastName,
        paymentMethod,
        phone,
        shippingCost,
        streetAddress,
        storeId,
        customersId,
    }= checkoutFormData;

      // Create orderNumber function
      function generateOrderNumber(length) {
        const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let orderNumber = "";
  
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          orderNumber += characters.charAt(randomIndex);
        }
  
        return orderNumber;
      }
  
      // Use the Prisma transaction
      const result = await db.$transaction(async (prisma) => {
        // Create order and order items within the transaction
        const newOrder = await prisma.order.create({
        data:{
           firstName ,
           lastName ,
           email ,
           phone ,
           streetAddress , 
           city  ,
           orderNumber:generateOrderNumber(8),
           country ,
           district ,
           shippingCost :parseFloat(shippingCost),
           paymentMethod  ,      
          storeId,
           customersId,
           
        }
        });
  
        const newOrderItems = await prisma.orderItem.createMany({
            data: orderItems.map((item) => ({
                productId:item.id,
                vendorId:newOrder.storeId,
                quantity:parseInt(item.qty),
                price:parseFloat(item.salePrice),
                orderId: newOrder.id,
                imageUrl:item.imageUrl,
                title:item.title,
                // Assuming you have a productId field in each item, adjust as needed
              })),
        });
  


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
  
        return { newOrder, newOrderItems };
      });
  
      console.log(result.newOrder, result.newOrderItems, );
  
      // Return the response
      return NextResponse.json(result.newOrder);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
            message: "Failed to create Order",
            error,
        },{status:500}
        
            )
    }
  }



export async function GET(request){
    try{
        const orders = await db.order.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                orderItems:true
            }
        })
        return NextResponse.json(orders)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Orders",
            error,
        },{status:500}
        
            )
    
    }
    
    }
    export async function PATCH(request) {
      try {
        const { id, status } = await request.json(); // جلب معرف الطلب والحالة الجديدة من الطلب
    
        if (!id || !status) {
          return NextResponse.json(
            { message: "Order ID and status are required" },
            { status: 400 }
          );
        }
    
        // تحديث حالة الطلب في قاعدة البيانات
        const updatedOrder = await db.order.update({
          where: { id },
          data: { orderStatus: status },
        });
    
        return NextResponse.json(updatedOrder); // إرجاع الطلب المحدث
      } catch (error) {
        console.error("Failed to update order status:", error);
        return NextResponse.json(
          {
            message: "Failed to update order status",
            error,
          },
          { status: 500 }
        );
      }
    }



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
    
    //     const result = await db.$transaction(async (prisma) => {
    //       const newOrder = await prisma.order.create({
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
    
    //       const newOrderItems = await prisma.orderItem.createMany({
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
    