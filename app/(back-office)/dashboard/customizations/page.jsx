// import PageHeader from "../../../../components/backoffice/PageHeader";
// import React from "react"
// import DataTable from "../../../../components/data-table-components/DataTable";
// import { getData } from '../../../../lib/getData';
// import { columns } from "./columns";
// import { getServerSession } from "next-auth";
// import { authOptions } from '../../../../lib/authOptions';

// export default async function page() {
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
//     console.log("Sssssssssssssssssssssssssssss",userId)
//     let customizations = [];

//     if (userId) {
//         try {
//             // استرداد المتجر المرتبط بالمستخدم
//             const storeData = await getData(`stores?vendorId=${userId}`);
            
//             if (storeData && storeData.length > 0) {
//                 const storeId = storeData[0].id;

//                 // استرداد التخصيصات الخاصة بالمتجر بناءً على storeId
//                 customizations = await getData(`customizations?storeId=${storeId}`);

//                 if (customizations && customizations.length > 0) {
//                     console.log("Customizations of store:", customizations);
//                 } else {
//                     console.log("No customizations found for the store.");
//                 }
//             } else {
//                 console.log("No store found for the user.");
//             }
//         } catch (error) {
//             console.log("Error fetching store or customizations:", error);
//         }
//     } else {
//         console.log("User session not found.");
//     }

//     return (
//         <div>
//             {/*Header*/}
//             <PageHeader heading="Store Customizations" href="/dashboard/customizations/new" linkTitle="Add Customization" />

//             <div className="py-8">
//                 {/* عرض الجدول للتخصيصات */}
//                 <DataTable data={customizations} columns={columns} />
//             </div>
//         </div>
//     );
// }
import PageHeader from "../../../../components/backoffice/PageHeader";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "../../../../lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  console.log("معرف المستخدم:", userId);
  let customizations = [];

  if (userId) {
    try {
      // استرداد المتجر المرتبط بالمستخدم
      const storeData = await getData(`stores?vendorId=${userId}`, {mode: 'real-time'});

      if (storeData && storeData.length > 0) {
        const storeId = storeData[0].id;

        // استرداد التخصيصات الخاصة بالمتجر بناءً على storeId
        customizations = await getData(`customizations?storeId=${storeId}`, {mode: 'real-time'});

        if (customizations && customizations.length > 0) {
          console.log("التخصيصات الخاصة بالمتجر:", customizations);
        } else {
          console.log("لم يتم العثور على تخصيصات للمتجر.");
        }
      } else {
        console.log("لم يتم العثور على متجر مرتبط بالمستخدم.");
      }
    } catch (error) {
      console.log("حدث خطأ أثناء جلب بيانات المتجر أو التخصيصات:", error);
    }
  } else {
    console.log("جلسة المستخدم غير موجودة.");
  }

  return (
    <div>
      {/* العنوان الرئيسي للصفحة */}
      <PageHeader
        heading="تخصيصات المتجر"
        href="/dashboard/customizations/new"
        linkTitle="إضافة تخصيص"
      />

      <div className="py-8">
        {/* عرض الجدول للتخصيصات */}
        <DataTable data={customizations} columns={columns} />
      </div>
    </div>
  );
}
