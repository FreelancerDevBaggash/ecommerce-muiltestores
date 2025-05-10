// import PageHeader from "@/components/backoffice/PageHeader"
// import TableActions from "@/components/backoffice/TableActions"
// app/(back-office)/dashboard/coupons/page.jsx

// app/(back-office)/dashboard/coupons/page.jsx

import React from "react";
import DataTable from "../../../../../components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns"; // تأكد أن الأعمدة تشمل id: "storeName"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import PageHeader from "@/components/backoffice/PageHeader";

export default async function Coupons() {
  const session = await getServerSession(authOptions);
  const userId  = session?.user?.id;
  const role    = session?.user?.role;

  if (!userId) return null;

  function extractArray(res) {
    if (Array.isArray(res)) return res;
    if (res && Array.isArray(res.data)) return res.data;
    return [];
  }

  // 1. جلب كل الكوبونات
  const resAll = await getData("coupons", { mode: "real-time" });
  const allCoupons = extractArray(resAll);

  // 2. جلب المتاجر اللازمة
  let stores = [];
  if (role === "ADMIN") {
    const resStores = await getData("stores", { mode: "real-time" });
    stores = extractArray(resStores);
  } else {
    const resMyStores = await getData(`stores?vendorId=${userId}`, { mode: "real-time" });
    stores = extractArray(resMyStores);
  }

  // 3. بناء خريطة id -> businessName
  const storeMap = Object.fromEntries(stores.map(s => [s.id, s.businessName]));

  // 4. فلترة الكوبونات وبناء حقل storeName
  let dataToShow = allCoupons
    // إذا بائع، حصرها
    .filter(coupon => role === "ADMIN" || coupon.storeId === stores[0]?.id)
    // ثم ضم اسم المتجر
    .map(coupon => ({
      ...coupon,
      storeName: storeMap[coupon.storeId] || "—",
    }));

  return (
    <div>
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      />

      <div className="py-8">
        <DataTable data={dataToShow} columns={columns} />
      </div>
    </div>
  );
}


