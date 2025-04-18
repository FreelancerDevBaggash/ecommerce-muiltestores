import { NextResponse } from "next/server";
import  db  from "../../../lib/db";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function GET(request){
    try{
        const customerStores = await db.customerStore.findMany({
           
            orderBy:{
                createdAt:"desc"
            },
            
        })
        return NextResponse.json(customerStores)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch CustomerStore",
            error,
        },{status:500}
        
            )
    
    }
    
    }

    // export async function handler(req, res) {
    //     const { storeId, customerId } = req.query;
      
    //     try {
    //       const customerStore = await db.customerStore.findUnique({
    //         where: {
    //           storeId_customerId: {
    //             storeId: storeId,
    //             customerId: customerId,
    //           },
    //           include: {
    //             customer: true,
    //           },
    //         },
    //       });
      
    //       if (customerStore) {
    //         res.status(200).json(customerStore);
    //       } else {
    //         res.status(404).json({ error: "CustomerStore not found" });
    //       }
    //     } catch (error) {
    //       console.error("Error fetching customer store:", error);
    //       res.status(500).json({ error: "Server error" });
    //     }
    //   }
      