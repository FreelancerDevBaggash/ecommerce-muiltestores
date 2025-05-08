import PageHeader from "../../../../../components/backoffice/PageHeader"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '../../../../../lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from '../../../../../lib/authOptions'


export default async function page() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const userRole = session?.user?.role;
  
    if (!userId) {
      console.log("User session not found.");
      return null;
    }
  
    let subcategory = [];
  
    if (userRole === "ADMIN") {
      // ADMIN: جلب كل الفئات الفرعية وكل المتاجر للحصول على أسمائها
      subcategory = await getData("subcategory", { mode: "real-time" });
      const stores = await getData("stores", { mode: "real-time" });
  
      const storeMap = Object.fromEntries(stores.map((s) => [s.id, s.businessName]));
  
      subcategory = subcategory.map((s) => ({
        ...s,
        storeName: storeMap[s.storeId] || "—",
      }));
  
      console.log("✅ Admin - All subcategories with storeName:", subcategory);
    } else {
      // VENDOR: جلب الفئات الفرعية المرتبطة بمتجره فقط
      const storeData = await getData(`stores?vendorId=${userId}`, { mode: "real-time" });
  
      if (!storeData || storeData.length === 0) {
        console.log("No store found for the user.");
        return null;
      }
  
      const store = storeData[0];
  
      subcategory = await getData(`subcategory?storeId=${store.id}`, { mode: "real-time" });
  
      subcategory = subcategory.map((s) => ({
        ...s,
        storeName: store.businessName,
      }));
  
      console.log("✅ Vendor - Store subcategories with storeName:", subcategory);
    }
  
    return (
      <div>
        {/* Header */}
        <PageHeader heading="الفئات الفرعية" href="/dashboard/subcategory/new" linkTitle="اضافة فئة فرعية" />
  
        <div className="py-8">
          <DataTable data={subcategory} columns={columns} />
        </div>
      </div>
    );
  }
  