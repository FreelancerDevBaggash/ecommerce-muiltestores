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
// app/dashboard/customizations/page.tsx
// app/(back-office)/dashboard/customizations/page.jsx

// app/(back-office)/dashboard/customizations/page.jsx
import PageHeader from "../../../../components/backoffice/PageHeader";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "../../../../lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

export default async function page() {
  const session  = await getServerSession(authOptions);
  const userId   = session?.user?.id;
  const userRole = session?.user?.role;

  if (!userId) {
    console.log("User session not found.");
    return null;
  }

  // دالة مساعدة لتحويل المخرجات إلى مصفوفة
  function extractArray(res) {
    if (Array.isArray(res)) return res;
    if (res && Array.isArray(res.data)) return res.data;
    return [];
  }

  let customizations = [];

  if (userRole === "ADMIN") {
    // ADMIN: نجلب كل المتاجر والتخصيصات
    const resStores = await getData("stores", { mode: "real-time" });
    const stores    = extractArray(resStores);

    const storeMap = Object.fromEntries(stores.map(s => [s.id, s.businessName]));

    const resCust = await getData("customizations", { mode: "real-time" });
    const allCust = extractArray(resCust);

    customizations = allCust.map(c => ({
      ...c,
      storeName: storeMap[c.storeId] || "—"
    }));
  } else {
    // VENDOR: نجلب متجره أولاً
    const resStores = await getData(`stores?vendorId=${userId}`, { mode: "real-time" });
    const stores    = extractArray(resStores);

    if (!stores.length) {
      console.log("No store found for the user.");
      return null;
    }

    const store = stores[0];

    // ثم تخصيصات هذا المتجر
    const resCust      = await getData(`customizations?storeId=${store.id}`, { mode: "real-time" });
    const storeCustArr = extractArray(resCust);

    customizations = storeCustArr.map(c => ({
      ...c,
      storeName: store.businessName
    }));
  }

  return (
    <div>
      <PageHeader
        heading="تخصيصات المتجر"
        href="/dashboard/customizations/new"
        linkTitle="إضافة تخصيص"
      />

      <div className="py-8">
        <DataTable data={customizations} columns={columns} />
      </div>
    </div>
  );
}







