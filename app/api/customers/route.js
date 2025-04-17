import { NextResponse } from "next/server";
import  db  from "../../../lib/db";
import bcrypt from 'bcrypt';
import {v4 as uuidv4}from "uuid";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/EmailTemplate";
import base64url from "base64url"

export async function POST(request) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { email, isBlocked, password, storeId } = await request.json();
  
      const existingCustomer = await db.customer.findUnique({
        where: { email },
        include: {
          customerStores: true,
        },
      });
  
      // العميل موجود بالبريد
      if (existingCustomer) {
        const isLinkedToStore = existingCustomer.customerStores.some(
          (relation) => relation.storeId === storeId
        );
  
        if (isLinkedToStore) {
          return NextResponse.json({
            message: "Customer already exists and is linked to this store",
          }, { status: 409 });
        } else {
          // العميل موجود لكن غير مرتبط بهذا المتجر → فقط أنشئ العلاقة
          await db.customerStore.create({
            data: {
              customerId: existingCustomer.id,
              storeId,
            },
          });
  
          return NextResponse.json({
            message: "Customer already existed. Linked to new store successfully.",
            id: existingCustomer.id,
          }, { status: 200 });
        }
      }
  
      // إنشاء عميل جديد إذا لم يكن موجودًا نهائيًا
      const hashedPassword = await bcrypt.hash(password, 10);
      // const rawToken = uuidv4();
      // const token = base64url.encode(rawToken);

      const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
      console.log("Verification Code:", verificationCode);
    
      const newCustomer = await db.customer.create({
        data: {
          email,
          isBlocked,
          password: hashedPassword,
          verificationToken: verificationCode,
        },
      });
  
      await db.customerStore.create({
        data: {
          customerId: newCustomer.id,
          storeId,
        },
      });
  
      // إرسال الإيميل
      // const redirectUrl = `onboarding/${newCustomer.id}`;
      // const description = "Thank you, for creating an account...";
      // const subject = "Account Verification - Lime ECOMMERCE";
      // await resend.emails.send({
      //   from: "Desishub <info@muiltiecommercevendor.com>",
      //   to: email,
      //   subject,
      //   react: EmailTemplate({ redirectUrl, linkText: "Verify Account", description, subject }),
      // });
  

      const subject = "Your Verification Code";
      const emailBody = `
  Hello ${email},
  
  Your verification code is: ${verificationCode}
  
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
    
      return NextResponse.json(newCustomer);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Failed to create customer", error },
        { status: 500 }
      );
    }
  }
  
export async function GET(request){
    try{
        const customers = await db.customer.findMany({
            // where:{
            //     email,
            // },
            orderBy:{
                createdAt:"desc"
            },
            include:{
                customerStores:true,
                orders:true
            }
        })
        return NextResponse.json(customers)
    }catch(error){
            console.log(error);
            return NextResponse.json(
        {
            message: "Failed to Fetch Customers",
            error,
        },{status:500}
        
            )
    
    }
    
    }