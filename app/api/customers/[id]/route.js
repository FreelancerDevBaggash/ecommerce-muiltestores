import db from "@/lib/db"
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