// 'use client'
// import React from 'react'
// import useSWR from 'swr'

// const fetcher = url => fetch(url).then(res => res.json())

// export default function WalletSummaryClient() {
//   const { data: storeData, error: storeErr } = useSWR('/api/wallet/store_balance', fetcher)
//   const { data: epayData, error: epayErr } = useSWR('/api/wallet/electronic_payments', fetcher)
//   const { data: codData, error: codErr } = useSWR('/api/wallet/cod_payments', fetcher)

//   if (storeErr || epayErr || codErr) return <p className="text-red-600">خطأ في جلب البيانات</p>
//   if (!storeData || !epayData || !codData) return <p>جاري التحميل…</p>

//   return (
//     <div className="grid  grid-cols-3 gap-6">
//       <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
//         <h3 className="font-semibold">رصيد المتجر</h3>
//         <p className="text-3xl">{storeData.wallet.balance.toFixed(2)} ر.ي</p>
//         <p className="text-sm text-gray-500">جاهز للسحب</p>
//       </div>
//       <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
//         <h3 className="font-semibold">المدفوعات الإلكترونية</h3>
//         <p className="text-3xl">{epayData.wallet.balance.toFixed(2)} ر.ي</p>
//         <p className="text-sm text-gray-500">قيد التصفية</p>
//       </div>
//       <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
//         <h3 className="font-semibold">رصيد الدفع عند الاستلام</h3>
//         <p className="text-3xl">{codData.wallet.balance.toFixed(2)} ر.ي</p>
//         <p className="text-sm text-gray-500">بعد التأكيد</p>
//       </div>
//     </div>
//   )
// }

// WalletSummaryClient.jsx
'use client'
import React from 'react'
import useSWR from 'swr'
import { Skeleton } from '@/components/ui/skeleton'
import { FiAlertTriangle } from 'react-icons/fi'

const fetcher = url => fetch(url).then(res => res.json())

const BalanceCard = ({ title, value, status, loading, error }) => (
  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</h3>
    
    {loading ? (
      <Skeleton className="h-8 w-3/4 mt-2" />
    ) : error ? (
      <div className="flex items-center mt-2 text-red-500">
        <FiAlertTriangle className="mr-2" />
        <span>خطأ في التحميل</span>
      </div>
    ) : (
      <>
        <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mt-2">
          {value.toFixed(2)} ر.ي
        </p>
        <div className="flex items-center mt-3">
          <span className={`text-sm ${status.color}`}>
            {status.text}
          </span>
        </div>
      </>
    )}
  </div>
)

export default function WalletSummaryClient() {
  const { data: storeData, error: storeErr, isLoading: storeLoading } = useSWR('/api/wallet/store_balance', fetcher)
  const { data: epayData, error: epayErr, isLoading: epayLoading } = useSWR('/api/wallet/electronic_payments', fetcher)
  const { data: codData, error: codErr, isLoading: codLoading } = useSWR('/api/wallet/cod_payments', fetcher)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BalanceCard
        title="رصيد المتجر"
        value={storeData?.wallet?.balance || 0}
        status={{ text: 'جاهز للسحب', color: 'text-green-500' }}
        loading={storeLoading}
        error={storeErr}
      />
      
      <BalanceCard
        title="المدفوعات الإلكترونية"
        value={epayData?.wallet?.balance || 0}
        status={{ text: 'قيد التصفية', color: 'text-amber-500' }}
        loading={epayLoading}
        error={epayErr}
      />
      
      <BalanceCard
        title="الدفع عند الاستلام"
        value={codData?.wallet?.balance || 0}
        status={{ text: 'بعد التأكيد', color: 'text-blue-500' }}
        loading={codLoading}
        error={codErr}
      />
    </div>
  )
}