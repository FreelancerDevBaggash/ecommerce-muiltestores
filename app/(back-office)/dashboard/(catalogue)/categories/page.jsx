
import PageHeader from "@/components/backoffice/PageHeader";
import React from "react";
import DataTable from "../../../../../components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const userRole = session?.user?.role;

  let categories = [];
  let allowAddCategory = false;
  let alertMessage = "";

  if (!userId) {
    console.log("User session not found.");
    return null;
  }

  if (userRole === "ADMIN") {
    // جلب كل الفئات والمتاجر
    categories = await getData("categories", { mode: "real-time" });
    const stores = await getData("stores", { mode: "real-time" });
    const storeMap = Object.fromEntries(stores.map((s) => [s.id, s.businessName]));

    categories = categories.map((c) => ({
      ...c,
      storeName: storeMap[c.storeId] || "—",
    }));

    allowAddCategory = true; // الأدمن يمكنه دائمًا الإضافة
  } else {
    // VENDOR
    const storeData = await getData(`stores?vendorId=${userId}`, { mode: "real-time" });

    if (!storeData || storeData.length === 0) {
      console.log("No store found for the user.");
      return null;
    }

    const store = storeData[0];
    const storeId = store.id;


    const subscription = store.subscription;
    const planId = subscription?.planId;
console.log("planIdplanIdplanId",planId)
    // جلب فئات المتجر
    categories = await getData(`categories?storeId=${storeId}`, { mode: "real-time" });
   
    categories = categories.map((c) => ({
      ...c,
      storeName: store.businessName,
    }));

    const categoryCount = categories.length;


    let categoryLimit = 0;
    if (planId === 1) categoryLimit = 5;
    else if (planId === 2) categoryLimit = 50;
    else if (planId === 3) categoryLimit = 1000;


    allowAddCategory = categoryCount < categoryLimit;

    if (!allowAddCategory) {
      alertMessage = `لقد وصلت للحد الأقصى للفئات (${categoryLimit}) حسب باقتك.`;
    }
  }

  return (
    <div>
      <PageHeader
        heading="الفئات"
        href="/dashboard/categories/new"
        linkTitle="إضافة فئة"
        disabled={!allowAddCategory}
        alertMessage={alertMessage}
      />

      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}





// import PageHeader from "@/components/backoffice/PageHeader"
// import React from "react"
// import DataTable from "../../../../../components/data-table-components/DataTable"
// import { getData } from '@/lib/getData'
// import {columns} from "./columns"
// import { getServerSession } from "next-auth"
// import { authOptions } from '../../../../../lib/authOptions'

// export default async function page(){

//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
    
//     let vendorcategor=[];
//     if (userId) { 
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores/${userId}`);
//         const storeId = storeData[0].id;
//         console.log(storeId);
//         if (storeData && storeData.length > 0) {
//             const storeId = storeData[0].id;
//             console.log("user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :", storeId);
//             // استرداد جميع المنتجات
//             const allcategories = await getData("categories");
    
//             // تصفية المنتجات حسب معرف المتجر
//             vendorcategor = allcategories.filter((category) => category.storeId === storeId);
            
//             console.log("category of store:", vendorcategor);
//         } else {
//             console.log("No store found for the user.");
//         }
//     } else {
//         console.log("User session not found.");
//     }
     
   
//     return(
    
//     <div>
// {/*Header*/}
// <PageHeader heading="Categories"  href="/dashboard/categories/new" linkTitle="Add Category"/>


// <div className="py-8">
// <DataTable data={vendorcategor} columns={columns} />
// </div>
//     </div>
    
    
//     )
//     }