// app/dashboard/wallet/page.jsx
import React, { Suspense } from 'react'
import WalletTabs from './_components/WalletTabs'

export default function WalletPage() {
  return (
    <div className="min-h-screen dark:bg-slate-800 bg-gray-50">
      <header className="bg-white dark:bg-slate-700 shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">المحفظة المالية</h1>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <Suspense fallback={<p>جاري تحميل بيانات المحفظة…</p>}>
          <WalletTabs />
        </Suspense>
      </main>
    </div>
  )
}
