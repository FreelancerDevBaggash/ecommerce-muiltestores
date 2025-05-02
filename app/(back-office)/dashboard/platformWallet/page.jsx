'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'react-hot-toast'

const fetcher = url => fetch(url).then(r => r.json())

export default function PlatformWalletDashboard() {
  const { data: balData, mutate: refreshBalance } = useSWR('/api/platform/wallet', fetcher)
  const { data: txs = [] } = useSWR('/api/platform/wallet/transactions', fetcher)
  const [payoutAmt, setPayoutAmt] = useState('')
  const [desc, setDesc] = useState('')

  const handlePayout = async () => {
    try {
      const res = await fetch('/api/platform/wallet/payout', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ amount: parseFloat(payoutAmt), description: desc })
      })
      const result = await res.json()
      if (res.ok) {
        toast.success('تم السحب بنجاح')
        setPayoutAmt(''); setDesc('')
        refreshBalance()
      } else {
        toast.error(result.error)
      }
    } catch {
      toast.error('خطأ غير متوقع')
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">محفظة المنصة</h1>

      {/* رصيد المنصة */}
      <div className="p-4 bg-white shadow rounded">
        <h2>الرصيد الحالي</h2>
        <p className="text-3xl">{balData?.wallet?.balance?.toFixed(2) || '–'} ر.ي</p>
      </div>

      {/* استمارة السحب */}
      <div className="p-4 bg-white shadow rounded space-y-3">
        <h2 className="font-medium">سحب رصيد المنصة</h2>
        <Input 
          placeholder="المبلغ" 
          type="number" 
          value={payoutAmt} 
          onChange={e => setPayoutAmt(e.target.value)} 
        />
        <Input 
          placeholder="الوصف (اختياري)" 
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
        />
        <Button onClick={handlePayout}>تنفيذ السحب</Button>
      </div>

      {/* جدول معاملات المنصة */}
      <div className="overflow-auto bg-white shadow rounded p-4">
        <h2 className="font-medium mb-3">سجل معاملات المنصة</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>التاريخ</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>المبلغ</TableHead>
              <TableHead>الوصف</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {txs.map(tx => (
              <TableRow key={tx.id}>
                <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.amount.toFixed(2)}</TableCell>
                <TableCell>{tx.metadata?.description || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
