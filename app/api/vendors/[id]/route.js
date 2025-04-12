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