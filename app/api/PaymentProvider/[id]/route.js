// import db from "@/lib/db"
// import { NextResponse } from "next/server";

// export async function GET(request, {params:{id}}){
//     try{
//         const PaymentProvider = await db.PaymentProvider.findUnique({
//             where:{
//                 id
//             },
//             include:{
//                 paymentTransactions:true,
//                 storePaymentSettings:true
//                }
//         });
//         return NextResponse.json(PaymentProvider)
//     }catch(error){
//             console.log(error);
//             return NextResponse.json(
//         {
//             message: "Failed to Fetch PaymentProvider",
//             error,
//         },{status:500}
        
//             )
    
//     }
    
//     }



//     export async function DELETE(request, {params:{id}}){
//         try{
//             const existingPaymentProvider = await db.PaymentProvider.findUnique({
//                 where:{
//                     id
//                 }
//             });
//             if(!existingPaymentProvider){
//                 return NextResponse.json({
//                     data:null,
//                     message:"MainCategory Not Found"
//                 },
//                 {status:404})
//             }
//             const deletedPaymentProvider=await db.PaymentProvider.delete({
//                 where:{
//                     id
//                 },
//               });

//             return NextResponse.json(deletedPaymentProvider)
//         }catch(error){
//                 console.log(error);
//                 return NextResponse.json(
//             {
//                 message: "Failed to Delete PaymentProvider",
//                 error,
//             },{status:500}
            
//                 )
        
//         }
        
//         }
import db from "@/lib/db";
import { NextResponse } from "next/server";

// جلب مزود دفع بناءً على الـ ID
export async function GET(request, { params: { id } }) {
  try {
    // البحث عن مزود الدفع باستخدام المعرف (ID)
    const paymentProvider = await db.PaymentProvider.findUnique({
      where: {
        id, // البحث حسب الـ ID
      },
      include: {
        paymentTransactions: true,  // تضمين المعاملات المتعلقة بمزود الدفع
        storePaymentSettings: true, // تضمين إعدادات الدفع للبائعين
      },
    });

    // إذا تم العثور على مزود الدفع، يتم إرجاعه
    return NextResponse.json(paymentProvider);
  } catch (error) {
    console.log(error);
    // في حالة حدوث خطأ، يتم إرسال رسالة الخطأ مع حالة 500
    return NextResponse.json(
      {
        message: "Failed to Fetch PaymentProvider",
        error,
      },
      { status: 500 }
    );
  }
}

// حذف مزود دفع بناءً على الـ ID
export async function DELETE(request, { params: { id } }) {
  try {
    // البحث عن مزود الدفع باستخدام المعرف (ID)
    const existingPaymentProvider = await db.PaymentProvider.findUnique({
      where: {
        id, // البحث حسب الـ ID
      },
    });

    // إذا لم يتم العثور على مزود الدفع، يتم إرجاع رسالة بأن المزود غير موجود
    if (!existingPaymentProvider) {
      return NextResponse.json(
        {
          data: null,
          message: "PaymentProvider Not Found", // تعديل الرسالة لتكون مناسبة
        },
        { status: 404 }
      );
    }

    // إذا تم العثور على مزود الدفع، يتم حذفه من قاعدة البيانات
    const deletedPaymentProvider = await db.PaymentProvider.delete({
      where: {
        id, // حذف بناءً على الـ ID
      },
    });

    // إرجاع معلومات مزود الدفع المحذوف
    return NextResponse.json(deletedPaymentProvider);
  } catch (error) {
    console.log(error);
    // في حالة حدوث خطأ أثناء الحذف، يتم إرسال رسالة الخطأ مع حالة 500
    return NextResponse.json(
      {
        message: "Failed to Delete PaymentProvider",
        error,
      },
      { status: 500 }
    );
  }
}
// تحديث مزود الدفع بناءً على الـ ID
export async function PUT(request, { params: { id } }) {
    try {
        const { name, apiUrl, apiKey, apiSecret, isActive, imageUrl } = await request.json();

    //   const  = await request.json(); // الحصول على البيانات المرسلة في الطلب
  
      // البحث عن مزود الدفع باستخدام المعرف (ID)
      const existingPaymentProvider = await db.PaymentProvider.findUnique({
        where: {
          id, // البحث حسب الـ ID
        },
      });
  
      // إذا لم يتم العثور على مزود الدفع، يتم إرجاع رسالة بأن المزود غير موجود
      if (!existingPaymentProvider) {
        return NextResponse.json(
          {
            data: null,
            message: "PaymentProvider Not Found", // تعديل الرسالة لتكون مناسبة
          },
          { status: 404 }
        );
      }
  
      // تحديث مزود الدفع بالبيانات الجديدة
      const updatedPaymentProvider = await db.PaymentProvider.update({
        where: {
          id, // تحديد الـ ID لتحديثه
        },
        data:{ name, apiUrl, apiKey, apiSecret, isActive, imageUrl }, // إرسال البيانات التي تم الحصول عليها من الطلب لتحديث السجل
      });
  
      // إرجاع مزود الدفع بعد التحديث
      return NextResponse.json(updatedPaymentProvider);
    } catch (error) {
      console.log(error);
      // في حالة حدوث خطأ أثناء التحديث، يتم إرسال رسالة الخطأ مع حالة 500
      return NextResponse.json(
        {
          message: "Failed to Update PaymentProvider",
          error,
        },
        { status: 500 }
      );
    }
  }