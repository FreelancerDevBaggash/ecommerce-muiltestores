import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const admin = await db.admin.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(admin)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Admin",
            error,
        },{status:500}
        
            )
    
    }
    
    }



