import PageHeader from "@/components/backoffice/PageHeader";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  // console.log(
  //   "user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :",
  //   userId
  // );

  let vendorCategories = [];

  if (userId) {
    // استرداد المتجر المرتبط بالمستخدم
    const storeData = await getData(`stores?vendorId=${userId}`);
    // console.log(
    //   "user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :",
    //   storeData
    // );

    if (storeData && storeData.length > 0) {
      const storeId = storeData[0].id;

      // استرداد جميع الفئات المرتبطة بالمتجر مباشرة
      vendorCategories = await getData(`categories?storeId=${storeId}`);

      if (vendorCategories && vendorCategories.length > 0) {
        console.log("Categories of store:", vendorCategories);
      } else {
        console.log("No categories found for the store.");
      }
    } else {
      console.log("No store found for the user.");
    }
  } else {
    console.log("User session not found.");
  }

  return (
    <div>
      {/*Header*/}
      <PageHeader heading="Templates" href="/dashboard/templates/new" linkTitle="Add Template" />

      <div className="py-8">
        <DataTable data={vendorCategories} columns={columns} />
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