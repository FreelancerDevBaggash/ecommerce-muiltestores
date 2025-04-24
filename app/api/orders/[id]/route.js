import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const order = await db.order.findUnique({
            where:{
              id
            },
            include:{
                orderItems:true
            }
        })
        return NextResponse.json(order)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch an Order",
            error,
        },{status:500}
        
            )
    
    }
    
    }

    export async function PATCH(request, { params }) {
        const { id } = params
      
        try {
          const body = await request.json()
          const { orderStatus } = body
      
          // تحقق من صحة القيمة المدخلة
          const validStatuses = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELED"]
          if (!validStatuses.includes(orderStatus)) {
            return NextResponse.json(
              { message: `الحالة غير صالحة. القيم المسموحة: ${validStatuses.join(", ")}` },
              { status: 400 }
            )
          }
      
          const existingOrder = await db.order.findUnique({ where: { id } })
      
          if (!existingOrder) {
            return NextResponse.json({ message: "الطلب غير موجود" }, { status: 404 })
          }
      
          const updatedOrder = await db.order.update({
            where: { id },
            data: {
              orderStatus, // تحديث حالة الطلب فقط
            },
          })
          
          if (orderStatus === 'DELIVERED') {
            await db.notification.create({
              data: {
                title: 'تم توصيل طلبك',
                body: `تم توصيل طلبك رقم ${updatedOrder.orderNumber}. نرجو تقييم تجربتك.`,
                type: 'ORDER_STATUS_CHANGED',
                userId: updatedOrder.CustomerStoreId,
                orderId: updatedOrder.id,
              },
            })
          }
      
          return NextResponse.json(updatedOrder)
        } catch (error) {
          console.error("خطأ في تحديث الطلب:", error)
          return NextResponse.json(
            { message: "فشل في تحديث الطلب", error: error.message },
            { status: 500 }
          )
        }
      }

    export async function DELETE(request, {params:{id}}){
        try{
            const existingOrder = await db.order.findUnique({
                where:{
                    id
                }
            });
            if(!existingOrder){
                return NextResponse.json({
                    data:null,
                    message:"Order Not Found"
                },
                {status:404})
            }
            const deletedOrder =await db.order.delete({
                where:{
                    id
                },
                include:{
                    orderItems: true,
                }
              });

            return NextResponse.json(deletedOrder)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete an Order",
                error,
            },{status:500}
            
                )
        
        }
        
        }