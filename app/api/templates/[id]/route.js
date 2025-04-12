import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const template = await db.template.findUnique({
            where:{
                id
            },
            include:{
                stores:true
               }
        });
        return NextResponse.json(template)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch template",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingTemplate = await db.template.findUnique({
                where:{
                    id
                }
            });
            if(!existingTemplate){
                return NextResponse.json({
                    data:null,
                    message:"Template Not Found"
                },
                {status:404})
            }
            const deletedTemplate =await db.template.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedTemplate)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete Template",
                error,
            },{status:500}
            
                )
        
        }
        
        }