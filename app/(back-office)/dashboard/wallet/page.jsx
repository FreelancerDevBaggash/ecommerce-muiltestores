// app/dashboard/wallet/page.jsx
import React, { Suspense } from 'react'
import WalletTabs from './_components/WalletTabs'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";

export default async function WalletPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
 

  let storeId ;

  if (userId) {
    // استرداد المتجر المرتبط بالمستخدم
    // const storeData = await getData(`stores?vendorId=${userId}`);
    const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' });

    

    if (storeData && storeData.length > 0) {
       storeId = storeData[0].id;
    }
  }

  return (
    <div className="min-h-screen dark:bg-slate-800 bg-gray-50">
      <header className="bg-white dark:bg-slate-700 shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">المحفظة المالية</h1>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <Suspense fallback={<p>جاري تحميل بيانات المحفظة…</p>}>
          <WalletTabs storeId={storeId} />
        </Suspense>
      </main>
    </div>
  )
}
