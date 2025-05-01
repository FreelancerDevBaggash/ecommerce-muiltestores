'use client'
import React from 'react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function WalletSummaryClient() {
  const { data: storeData, error: storeErr } = useSWR('/api/wallet/store_balance', fetcher)
  const { data: epayData, error: epayErr } = useSWR('/api/wallet/electronic_payments', fetcher)
  const { data: codData, error: codErr } = useSWR('/api/wallet/cod_payments', fetcher)

  if (storeErr || epayErr || codErr) return <p className="text-red-600">خطأ في جلب البيانات</p>
  if (!storeData || !epayData || !codData) return <p>جاري التحميل…</p>

  return (
    <div className="grid  grid-cols-3 gap-6">
      <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
        <h3 className="font-semibold">رصيد المتجر</h3>
        <p className="text-3xl">{storeData.wallet.balance.toFixed(2)} ر.ي</p>
        <p className="text-sm text-gray-500">جاهز للسحب</p>
      </div>
      <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
        <h3 className="font-semibold">المدفوعات الإلكترونية</h3>
        <p className="text-3xl">{epayData.wallet.balance.toFixed(2)} ر.ي</p>
        <p className="text-sm text-gray-500">قيد التصفية</p>
      </div>
      <div className="p-4 dark:bg-slate-800 bg-gray-100 rounded">
        <h3 className="font-semibold">رصيد الدفع عند الاستلام</h3>
        <p className="text-3xl">{codData.wallet.balance.toFixed(2)} ر.ي</p>
        <p className="text-sm text-gray-500">بعد التأكيد</p>
      </div>
    </div>
  )
}
