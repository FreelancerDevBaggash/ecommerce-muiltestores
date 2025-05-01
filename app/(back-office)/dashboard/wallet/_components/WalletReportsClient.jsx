'use client'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function WithdrawFormClient() {
  const { data, error } = useSWR('/api/wallet/store_balance', fetcher)
  const [amount, setAmount] = useState('')
  const [bankDetails, setBankDetails] = useState('')
  const [msg, setMsg] = useState('')

  if (error) return <p className="text-red-600">خطأ في جلب البيانات</p>
  if (!data) return <p>جاري التحميل…</p>

  const max = data.wallet.balance

  const handle = async e => {
    e.preventDefault()
    setMsg('')
    const val = parseFloat(amount)
    if (!val || val > max) return setMsg(`الحد الأقصى ${max.toFixed(2)}`)
    const res = await fetch('/api/wallet/store_balance/withdraw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: val, bankDetails })
    })
    const json = await res.json()
    if (res.ok) {
      setMsg('تم إرسال الطلب')
      mutate('/api/wallet/store_balance')
    } else {
      setMsg(json.error || 'خطأ في الطلب')
    }
  }

  return (
    <form onSubmit={handle} className="space-y-4">
      {msg && <p className="text-blue-600">{msg}</p>}
      <div>
        <label>المبلغ (≤ {max.toFixed(2)})</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div>
        <label>تفاصيل الحساب البنكي</label>
        <textarea
          value={bankDetails}
          onChange={e => setBankDetails(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button className="px-4 py-2 bg-green-600 text-white rounded">إرسال طلب</button>
    </form>
  )
}
