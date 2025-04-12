import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{slug}}){
    try{
        const product = await db.product.findUnique({
            where:{
                slug
            },
        });
        return NextResponse.json(product)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Product",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingProduct = await db.product.findUnique({
                where:{
                    id
                }
            });
            if(!existingCategory){
                return NextResponse.json({
                    data:null,
                    message:"Product Not Found"
                },
                {status:404})
            }
            const deletedProduct =await db.product.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedProduct)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete Product",
                error,
            },{status:500}
            
                )
        
        }
        
        }