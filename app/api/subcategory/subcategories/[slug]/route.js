import db from "../../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{slug}}){
    try{
        const subcategories = await db.SubCategory.findUnique({
            where:{
                slug
            },
        });
        return NextResponse.json(subcategories)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch subcategories",
            error,
        },{status:500}
        
            )
    
    }
    
    }



    export async function DELETE(request, {params:{id}}){
        try{
            const existingsubcategories = await db.SubCategory.findUnique({
                where:{
                    id
                }
            });
            if(!existingCategory){
                return NextResponse.json({
                    data:null,
                    message:"SubCategory Not Found"
                },
                {status:404})
            }
            const deletedsubcategories =await db.SubCategory.delete({
                where:{
                    id
                },
              });

            return NextResponse.json(deletedsubcategories)
        }catch(error){
                console.log(error);
                return NextResponse.json(
            {
                message: "Failed to Delete subCategory",
                error,
            },{status:500}
            
                )
        
        }
        
        }