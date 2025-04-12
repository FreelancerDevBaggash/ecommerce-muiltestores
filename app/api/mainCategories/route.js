import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request){
try{
const{title, slug, logoUrl, description, isActive} = await request.json();
//للتحقق من وجود الفئة او لا 
const existingMainCategory = await db.mainCategory.findUnique({
    where:{
        slug,
    }
});
if(existingMainCategory){
    return NextResponse.json(
        {
            data:null,
            message:"MainCategory already exists"
        },
        {status: 409}
    );
}
const newMainCategory = await db.mainCategory.create({
    data:{
        title, slug, logoUrl, description, isActive

    },
});
console.log(newMainCategory);
return NextResponse.json(newMainCategory);
}catch(error){
    console.log(error);
    return NextResponse.json(
{
    message: "Failed to create MainCategory",
    error,
},{status:500}
   )}
}


export async function GET(request){
    try{
        const mainCategories = await db.mainCategory.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                categories:true,
                stores:true,
               }
        })
        return NextResponse.json(mainCategories)
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