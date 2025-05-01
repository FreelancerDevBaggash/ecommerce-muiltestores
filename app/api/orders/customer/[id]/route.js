import db from "../../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { id } = params;  // id هنا هو customerStoreId

    if (!id) {
        return NextResponse.json(
          { error: 'Missing customerStoreId parameter' },
          { status: 400 }
        );
      }
    try{
        const order = await db.order.findMany({
            where:{
                CustomerStoreId: id,
            },
            include:{
                orderItems:true
            },
            orderBy: { createdAt: 'desc' },      // اختياري: لترتيب الطلبات من الأحدث للأقدم

        });
        return NextResponse.json(order)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch an Order",
            error,
        },{status:500}
        
            )
    
    }
    
    }

