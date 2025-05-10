import PageHeader from "../../../../../components/backoffice/PageHeader"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '../../../../../lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from '../../../../../lib/authOptions'



// export default async function page(){
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
//     let products=[];
//     if (userId) { 
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' });
        
//         if (storeData && storeData.length > 0) {
//             const storeId = storeData[0].id;
    
//             // استرداد جميع المنتجات
//              products = await getData(`products?storeId=${storeId}`, { mode: 'real-time' });
    
//             // تصفية المنتجات حسب معرف المتجر
//             if (products && products.length > 0) {
//                 console.log("products of store:", products);
//               } else {
//                 console.log("No products found for the store.");
//               }
//         } else {
//             console.log("No store found for the user.");
//         }
//     } else {
//         console.log("User session not found.");
//     }
     
   

 
//     return(
    
//     <div>
// {/*Header*/}
// <PageHeader heading="المنتجات"  href="/dashboard/products/new" linkTitle="اضافة منتج"/>


// <div className="py-8">
 
//      <DataTable data={products} columns={columns} />
// </div>
//     </div>
    
    
//     )
//     }



export default async function page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const userRole = session?.user?.role; // تأكد أن الدور محفوظ داخل الجلسة

  let products = [];
  let allowAddProduct = false;
  let alertMessage = "";

  // ✅ إذا كان المستخدم أدمن، جلب كل المنتجات بدون حدود
  if (userRole === 'ADMIN') {
    products = await getData(`products`, { mode: 'real-time' });
    allowAddProduct = true; // يمكنه دائمًا الإضافة
  } 
  
  // ✅ إذا كان بائع عادي
  else if (userId) {
    const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' });

    if (storeData && storeData.length > 0) {
      const store = storeData[0];
      const storeId = store.id;

      // جلب المنتجات المرتبطة بالمتجر
      products = await getData(`products?storeId=${storeId}`, { mode: 'real-time' });

      const productCount = products?.length || 0;
      const subscription = store.subscription;
      const planId = subscription?.planId;

      // تحديد الحد حسب الباقة
      let productLimit = 0;
      if (planId === 1) productLimit = 5;
      else if (planId === 2) productLimit = 1000;
      else if (planId === 3) productLimit = 10000;

      allowAddProduct = productCount < productLimit;

      if (!allowAddProduct) {
        alertMessage = `لقد وصلت للحد الأقصى للمنتجات (${productLimit}) حسب باقتك.`;
      }
    }
  }

  return (
    <div>
      <PageHeader
        heading="المنتجات"
        linkTitle="إضافة منتج جديد"
        href="/dashboard/products/new"
        disabled={!allowAddProduct}
        alertMessage={alertMessage}
      />
      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}