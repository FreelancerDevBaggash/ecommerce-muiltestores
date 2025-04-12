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
const{email, name, password, isBloked
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
    // // Generate a random UUID (version 4)
    // const rawToken = uuidv4();
    // console.log(rawToken);
    // // Encode the token using Base64 URL-safe format
    // const token = base64url.encode(rawToken);
    // // Create a User in the DB
  // Generate a 4-digit verification code
  const verificationToken = Math.floor(1000 + Math.random() * 9000).toString();
  const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  console.log("Verification Code:", verificationCode);

const newVendor = await db.vendor.create({
    data:{
        name,
        email,
        password: hashedPassword,
        isBloked,
      //  plan,
        verificationToken: verificationToken,
        phone,
        verificationCode : verificationCode, 
    }
});
console.log(newVendor);
//SEND the email if USER role == VENDOR
// if(role === "VENDOR"){
    // const vendorId = newVendor.id;
    // const linkText = "Verify Account";
    // // const redirectUrl = `onboarding/${userId}?token=${token}`;
    // const redirectUrl = `onboarding/${vendorId}`;
    // const description =
    // "  Thank you, for Creating annAccount with Us. We request you to click on the link Below in order to Complete your Account. Thankyou ";
    // const subject ="Account Verification Lime ECOOMMERE"

    console.log("New Vendor:", newVendor);

    // Send email with the verification code
    const subject = "Your Verification Code";
    const emailBody = `
Hello ${name},

Your verification code is: ${verificationToken}

Please enter this code in the app to verify your account.

Thank you!
`;
const sendMail = await resend.emails.send({
    from: "Desishub <info@muiltiecommercevendor.com>",
    to: email,
    subject: subject,
    text: emailBody,
  });

   console.log("Email Sent:", sendMail);
//     const sendMail = await resend.emails.send({
//       from: "Desishub <info@muiltiecommercevendor.com>",
//       to: email,
//       subject: subject ,
//       react: EmailTemplate({ name, redirectUrl, linkText, description, subject  }),
//     });

    //Upon Click redirect them to the login
//}
return NextResponse.json({
    data: newVendor,
    message:"Vendor Created Successfully"
},{status:201});

}catch(error){
    console.log(error);
    return NextResponse.json({
        error,
        message:"Server Error: Somthing went wrong"
    },{status:500} 
    );
}}
export async function GET(request){
    try{
        const vendors = await db.vendor.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                store:true,
                SaleItem:true,
               }
        })
        return NextResponse.json(vendors)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch vendor",
            error,
        },{status:500}
        
            )
    
    }
    
    }


// import { NextResponse } from "next/server";
// import  db  from "../../../lib/db";

// export async function POST(request){
// try{


//    /* {code, 
//     contactPerson, 
//     contactPersonPhone,
//         email, 
//         name, 
//         notes,
//          phone,
//           physicalAddress,
//            terms, 
//            isActive,
//          profileImageUrl,
//           products,
//            landSize,
//             mainCrop,
//             userId }*/

//  //Update the verification in the user           
// const  vendorData = await request.json();
//  //Check if the user Already exists in the db
//  const existingUser = await db.user.findUnique({
//         where:{
//             id:vendorData.userId,
//         }
//     });
//     if(!existingUser){
 
//         return NextResponse.json({
//             data:null,
//             message:"No User Found"
//         },{status:404});
      
//     }

//  //Update emailVerified
// //   const updatedUser = await db.user.update({
// //    where:{
// //      id:vendorData.userId,
// //        },
// //     data:{
// //      emailVerified:true
// //          }
// //       });
// const newStore = await db.store.create({
//     data:{
//         code  :vendorData.code,
//         businessName : vendorData.businessName,
//         contactPerson :vendorData.contactPerson,
//         contactPersonPhone :vendorData.contactPersonPhone,
//       //  storeType :vendorData.code,
//         profileImageUrl :vendorData.profileImageUrl,
//         notes :vendorData.notes,
//         phone :vendorData.phone,
//         physicalAddress :vendorData.physicalAddress,
//         isActive :vendorData.isActive,
//         slugDomain: vendorData.slugDomain,
//         userId :vendorData.userId,
//         mainCategoryId: vendorData.mainCategoryId
//     }  
// });
// console.log(newStore);
// return NextResponse.json(newStore);
// }catch(error){
//     console.log(error);
//     return NextResponse.json(
// {
//     message: "Failed to create Store",
//     error,
// },{status:500}

//     )
// }


// }
// export async function GET(request){
//     try{
//         const vendors = await db.user.findMany({
//                         orderBy:{
//                             createdAt:"desc"
//                         },
//                         where:{
//                             role:"VENDOR"
//                         },
//                         include:{
//                             store:true
//                         }
//                     })
//         const stores = await db.store.findMany({
//             orderBy:{
//                 createdAt:"desc"
//             },
//             include:{
//                 categories:true,
//                 products:true,
//                 orders:true,
//                 sales:true,
//                 coupons:true,
//                 banners:true
//             }
//         })
//         return NextResponse.json(stores)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch vendors",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }

// // export async function GET(request){
// //     try{
// //         const vendors = await db.user.findMany({
// //             orderBy:{
// //                 createdAt:"desc"
// //             },
// //             where:{
// //                 role:"VENDOR"
// //             },
// //             include:{
// //                 store:true
// //             }
// //         })
// //         return NextResponse.json(vendors)
// //     }catch(error){
// //             console.log(error);
// //             return NextResponse.json(
// //         {
// //             message: "Failed to Fetch vendors",
// //             error,
// //         },{status:500}
        
// //             )
    
// //     }
    
// //     }