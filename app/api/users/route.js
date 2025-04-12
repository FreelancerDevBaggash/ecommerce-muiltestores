import  db  from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

import {v4 as uuidv4}from "uuid";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import base64url from "base64url"

export async function POST(request){
try{
    const resend = new Resend(process.env.RESEND_API_KEY);

    //extract the creddentials
const{email, name, password
    //,plan
} = await request.json();
    //Check if the user Already exists in the db
const existingVendor = await db.vendor.findUnique({
    where:{
        email
    }
});
if(existingVendor){
    return NextResponse.json({
        data:null,
        message:"Vendor Already exists"
    },{status:409});
  
}

//Encrypt the password => bcrypt
const hashedPassword = await bcrypt.hash(password,10);
 //Generate Token
    // Generate a random UUID (version 4)
    const rawToken = uuidv4();
    console.log(rawToken);
    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);
    // Create a User in the DB

const newVendor = await db.vendor.create({
    data:{
        name,
        email,
        password: hashedPassword,
      //  plan,
        verificationToken: token,
    }
});
console.log(newVendor);
//SEND the email if USER role == VENDOR
// if(role === "VENDOR"){
    const vendorId = newVendor.id;
    const linkText = "Verify Account";
    // const redirectUrl = `onboarding/${userId}?token=${token}`;
    const redirectUrl = `onboarding/${vendorId}`;
    const description =
    "  Thank you, for Creating annAccount with Us. We request you to click on the link Below in order to Complete your Account. Thankyou ";
    const subject ="Account Verification Lime ECOOMMERE"
    const sendMail = await resend.emails.send({
      from: "Desishub <info@muiltiecommercevendor.com>",
      to: email,
      subject: subject ,
      react: EmailTemplate({ name, redirectUrl, linkText, description, subject  }),
    });
    console.log(sendMail);
    //Upon Click redirect them to the login
//}
return NextResponse.json({
    data: newUser,
    message:"Vendor Created Successfully"
},{status:201});

}catch(error){
    console.log(error);
    return NextResponse.json({
        error,
        message:"Server Error: Somthing went wrong"
    },{status:500} 
    );
}


}
export async function GET(request){
    try{
        const users = await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(users)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch User",
            error,
        },{status:500}
        
            )
    
    }
    
    }