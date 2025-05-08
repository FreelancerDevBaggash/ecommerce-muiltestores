import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
    try{
        const subscription = await db.subscription.findUnique({
            where:{
                id
            },
        });
        return NextResponse.json(subscription)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch subscription",
            error,
        },{status:500}
        
            )
    
    }
    
    }




