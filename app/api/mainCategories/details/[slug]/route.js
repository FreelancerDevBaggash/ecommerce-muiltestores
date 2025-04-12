import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{slug}}){
    try{
        const mainCategory = await db.mainCategory.findUnique({
            where:{
                slug
            },
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

