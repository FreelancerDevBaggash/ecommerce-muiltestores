import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const mainCategory = await db.mainCategory.findUnique({
            where:{
                id
            },
            include:{
                categories:true,
                stores:true
               }
        });
        return NextResponse.json(mainCategory)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch MainCategory",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingMainCategory = await db.mainCategory.findUnique({
                where:{
                    id
                }
            });
            if(!existingMainCategory){
                return NextResponse.json({
                    data:null,
                    message:"MainCategory Not Found"
                },
                {status:404})
            }
            const deletedMainCategory =await db.mainCategory.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedMainCategory)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete MainCategory",
                error,
            },{status:500}
            
                )
        
        }
        
        }