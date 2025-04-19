import db from "../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const customer = await db.customer.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(customer)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch customer",
            error,
        },{status:500}
        
            )
    
    }
    
    }

    export async function PUT(request, { params: { id } }) {
        try {
          const body = await request.json();
      
          // تحقق من وجود العميل أولاً
          const existingCustomer = await db.customer.findUnique({
            where: { id },
          });
      
          if (!existingCustomer) {
            return NextResponse.json(
              {
                message: "العميل غير موجود",
              },
              { status: 404 }
            );
          }
      
          // تحديث العميل
          const updatedCustomer = await db.customer.update({
            where: { id },
            data: {
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email,
              phone: body.phone,
              profileImage: body.profileImage,
              emailVerified: body.emailVerified,
              phoneVerified: body.phoneVerified,
              isBlocked: body.isBlocked,
            },
          });
      
          return NextResponse.json({
            message: "تم تحديث بيانات العميل بنجاح",
            data: updatedCustomer,
          });
      
        } catch (error) {
          console.error("فشل التحديث:", error);
          return NextResponse.json(
            {
              message: "حدث خطأ أثناء تحديث بيانات العميل",
              error,
            },
            { status: 500 }
          );
        }
      }

export async function DELETE(request, {params:{id}}){
        try{
            const existingCustomer = await db.customer.findUnique({
                where:{
                    id
                }
            });
            if(!existingCustomer){
                return NextResponse.json({
                    data:null,
                    message:"Customer Not Found"
                },
                {status:404})
            }
            const deletedCustomer =await db.vendor.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedCustomer)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete Customer",
                error,
            },{status:500}
            
                )
        
        }
        
        }