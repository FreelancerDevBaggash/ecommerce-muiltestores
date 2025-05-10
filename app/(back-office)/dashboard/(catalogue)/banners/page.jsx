import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from '../../../../../lib/authOptions'

// export default async function page(){
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
//     let banners=[];
//     if (userId) { 
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' } );
        
//         if (storeData && storeData.length > 0) {
//             const storeId = storeData[0].id;

//      banners = await getData(`banners?storeId=${storeId}` , { mode: 'real-time' })
//         }}
//     return(
    
//     <div>
// {/*Header*/}
// <PageHeader heading="الافتات (بانرات)"  href="/dashboard/banners/new" linkTitle="إضافة لافتة"/>



// <div className="py-8">
// <DataTable data={banners} columns={columns} />
// </div>
//     </div>
    
    
//     )
//     }


export default async function page() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const userRole = session?.user?.role; // ← نتأكد من نوع المستخدم
  
    if (!userId) {
      console.log("User session not found.");
      return null;
    }
  
    let banners = [];
  
    if (userRole === "ADMIN") {
      // Admin: جلب كل البانرات + كل المتاجر عشان نحصل على أسمائها
      banners = await getData("banners", { mode: "real-time" });
      const stores = await getData("stores", { mode: "real-time" });
      const storeMap = Object.fromEntries(stores.map((s) => [s.id, s.businessName]));
  
      // أضفنا لكل بانر الخاصية storeName
      banners = banners.map((b) => ({
        ...b,
        storeName: storeMap[b.storeId] || "—",
      }));
  
      console.log("✅ Admin - All banners with storeName:", banners);
    } else {
      // Vendor: جلب بانرات متجره فقط + اسم متجره
      const storeData = await getData(`stores?vendorId=${userId}`, {
        mode: "real-time",
      });
  
      if (!storeData || storeData.length === 0) {
        console.log("No store found for the user.");
        return null;
      }
  
      const store = storeData[0];
      banners = await getData(`banners?storeId=${store.id}`, { mode: "real-time" });
  
      banners = banners.map((b) => ({
        ...b,
        storeName: store.businessName,
      }));
  
      console.log("✅ Vendor - Store banners with storeName:", banners);
    }
  
    return (
      <div>
        {/* Header */}
        <PageHeader
          heading="لافتة اعلانية"
          href="/dashboard/banners/new"
          linkTitle="اضافة لافتة "
        />
  
        <div className="py-8">
          <DataTable data={banners} columns={columns} />
        </div>
      </div>
    );
  }