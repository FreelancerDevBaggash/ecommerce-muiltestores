import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request){
try{
const{title, slug, thumbnail, description, isActive, isDefault} = await request.json();
//للتحقق من وجود الفئة او لا 
const existingTemplate = await db.template.findUnique({
    where:{
        slug,
    }
});
if(existingTemplate){
    return NextResponse.json(
        {
            data:null,
            message:"Template already exists"
        },
        {status: 409}
    );
}
const newTemplate = await db.template.create({
    data:{
        title, slug, thumbnail, description, isActive, isDefault

    },
});
// console.log(newTemplate);
return NextResponse.json(newTemplate);
}catch(error){
    console.log(error);
    return NextResponse.json(
{
    message: "Failed to create Template",
    error,
},{status:500}
   )}
}


export async function GET(request){
    try{
        const templates = await db.template.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                stores:true,
               }
        })
        return NextResponse.json(templates)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Template",
            error,
        },{status:500}
        
            )
    
    }
    
    }