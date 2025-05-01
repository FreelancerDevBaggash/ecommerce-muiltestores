import db from "../../../../../lib/db"
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { id } = params;  // id هنا هو customerStoreId

    console.log('aaaaaaaa', id)
    if (!id) {
        return NextResponse.json(
          { error: 'Missing customerStoreId parameter' },
          { status: 400 }
        );
      }
    try{
        const order = await db.order.findMany({
            where:{
                storeId: id
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



    // export async function DELETE(request, {params:{id}}){
    //     try{
    //         const existingOrder = await db.order.findUnique({
    //             where:{
    //                 id
    //             }
    //         });
    //         if(!existingOrder){
    //             return NextResponse.json({
    //                 data:null,
    //                 message:"Order Not Found"
    //             },
    //             {status:404})
    //         }
    //         const deletedOrder =await db.order.delete({
    //             where:{
    //                 id
    //             },
    //             include:{
    //                 orderItems: true,
    //             }
    //           });

    //         return NextResponse.json(deletedOrder)
    //     }catch(error){
    //             console.log(error);
    //             return NextResponse.json(
    //         {
    //             message: "Failed to Delete an Order",
    //             error,
    //         },{status:500}
            
    //             )
        
    //     }
        
    //     }