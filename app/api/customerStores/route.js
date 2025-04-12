import { NextResponse } from "next/server";
import  db  from "../../../lib/db";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function GET(request){
    try{
        const customerStores = await db.customerStore.findMany({
            orderBy:{
                createdAt:"desc"
            }
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