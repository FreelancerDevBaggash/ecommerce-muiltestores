// 'use client'
// import React, { useState } from 'react'
// import useSWR, { mutate } from 'swr'

// const fetcher = url => fetch(url).then(res => res.json())

// export default function WithdrawFormClient() {
//   const { data, error } = useSWR('/api/wallet/store_balance', fetcher)
//   const [amount, setAmount] = useState('')
//   const [bankDetails, setBankDetails] = useState('')
//   const [msg, setMsg] = useState('')

//   if (error) return <p className="text-red-600">خطأ في جلب البيانات</p>
//   if (!data) return <p>جاري التحميل…</p>

//   const max = data.wallet.balance

//   const handle = async e => {
//     e.preventDefault()
//     setMsg('')
//     const val = parseFloat(amount)
//     if (!val || val > max) return setMsg(`الحد الأقصى ${max.toFixed(2)}`)
//     const res = await fetch('/api/wallet/store_balance/withdraw', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount: val, bankDetails })
//     })
//     const json = await res.json()
//     if (res.ok) {
//       setMsg('تم إرسال الطلب')
//       mutate('/api/wallet/store_balance')
//     } else {
//       setMsg(json.error || 'خطأ في الطلب')
//     }
//   }

//   return (
//     <form onSubmit={handle} className="space-y-4">
//       {msg && <p className="text-blue-600">{msg}</p>}
//       <div>
//         <label>المبلغ (≤ {max.toFixed(2)})</label>
//         <input
//           type="number"
//           step="0.01"
//           value={amount}
//           onChange={e => setAmount(e.target.value)}
//           className="w-full border rounded p-2"
//           required
//         />
//       </div>
//       <div>
//         <label>تفاصيل الحساب البنكي</label>
//         <textarea
//           value={bankDetails}
//           onChange={e => setBankDetails(e.target.value)}
//           className="w-full border rounded p-2"
//           required
//         />
//       </div>
//       <button className="px-4 py-2 bg-green-600 text-white rounded">إرسال طلب</button>
//     </form>
//   )
// }

// WithdrawFormClient.jsx
'use client'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton";

const fetcher = url => fetch(url).then(res => res.json())

export default function WithdrawFormClient() {
  const { data, error, isLoading } = useSWR('/api/wallet/store_balance', fetcher)
  const [amount, setAmount] = useState('')
  const [bankDetails, setBankDetails] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'loading', message: '' })

    try {
      const val = parseFloat(amount)
      if (!val || val > data.wallet.balance) {
        throw new Error(`الحد الأقصى للسحب ${data.wallet.balance.toFixed(2)} ر.ي`)
      }

      const res = await fetch('/api/wallet/store_balance/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: val, bankDetails })
      })

      if (!res.ok) throw new Error(await res.text())

      setStatus({ type: 'success', message: 'تم تقديم طلب السحب بنجاح' })
      mutate('/api/wallet/store_balance')
      setAmount('')
      setBankDetails('')
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'حدث خطأ غير متوقع' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (error) return (
    <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
      <AlertCircle className="mr-2" />
      فشل في تحميل بيانات الرصيد
    </div>
  )

  if (isLoading) return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          المبلغ المراد سحبه
        </label>
        <Input
          type="number"
          step="0.01"
          min="0"
          max={data?.wallet?.balance || 0}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          dir="ltr"
          className="text-lg font-numbers"
          suffix="ر.ي"
        />
        <p className="text-sm text-slate-500 mt-1">
          الرصيد المتاح: {data?.wallet?.balance.toFixed(2)} ر.ي
        </p>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          تفاصيل الحساب البنكي
        </label>
        <Textarea
          value={bankDetails}
          onChange={(e) => setBankDetails(e.target.value)}
          rows={4}
          placeholder="اسم البنك، رقم الحساب، IBAN ..."
        />
      </div>

      {status.message && (
        <div className={`p-4 rounded-lg flex items-center ${
          status.type === 'error' 
            ? 'bg-red-50 text-red-700' 
            : 'bg-green-50 text-green-700'
        }`}>
          {status.type === 'error' ? (
            <AlertCircle className="mr-2" />
          ) : (
            <CheckCircle2 className="mr-2" />
          )}
          {status.message}
        </div>
      )}

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="gap-2"
      >
        {isSubmitting && <Loader2 className="animate-spin" />}
        {isSubmitting ? 'جاري المعالجة...' : 'إرسال طلب السحب'}
      </Button>
    </form>
  )
}