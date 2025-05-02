import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const vendor = await db.vendor.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(vendor)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Vendor",
            error,
        },{status:500}
        
            )
    
    }
    
    }

    
export async function PUT(request, { params }) {
    const id = params.id;
  
    try {
      const { name, email, phone, profileImage } = await request.json();
  
      // 1. التحقق من وجود المستخدم
      const existing = await db.vendor.findUnique({ where: { id } });
      if (!existing) {
        return NextResponse.json(
          { message: "المستخدم غير موجود" },
          { status: 404 }
        );
      }
  
      // 2. (اختياري) التحقق من فريدية البريد إذا تغيّر
      if (email && email !== existing.email) {
        const conflict = await db.vendor.findUnique({ where: { email } });
        if (conflict) {
          return NextResponse.json(
            { message: "البريد الإلكتروني مستخدم مسبقاً" },
            { status: 409 }
          );
        }
      }
  
      // 3. تحديث الحقول
      const updated = await db.vendor.update({
        where: { id },
        data: {
          name,
          email,
          phone,
          profileImage,
        },
      });
  
      return NextResponse.json(
        { message: "تم تحديث المعلومات الشخصية بنجاح", data: updated },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating profile:", error);
      return NextResponse.json(
        { message: "فشل في تحديث البيانات", error: error.message },
        { status: 500 }
      );
    }
  }



export async function DELETE(request, {params:{id}}){
        try{
            const existingVendor = await db.vendor.findUnique({
                where:{
                    id
                }
            });
            if(!existingVendor){
                return NextResponse.json({
                    data:null,
                    message:"Vendor Not Found"
                },
                {status:404})
            }
            const deletedVendor =await db.vendor.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedVendor)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete Vendor",
                error,
            },{status:500}
            
                )
        
        }
        
        }