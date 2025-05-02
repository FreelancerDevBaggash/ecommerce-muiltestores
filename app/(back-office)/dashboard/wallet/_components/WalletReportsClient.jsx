// // 'use client'
// // import React, { useState } from 'react'
// // import useSWR, { mutate } from 'swr'

// // const fetcher = url => fetch(url).then(res => res.json())

// // export default function WithdrawFormClient() {
// //   const { data, error } = useSWR('/api/wallet/store_balance', fetcher)
// //   const [amount, setAmount] = useState('')
// //   const [bankDetails, setBankDetails] = useState('')
// //   const [msg, setMsg] = useState('')

// //   if (error) return <p className="text-red-600">خطأ في جلب البيانات</p>
// //   if (!data) return <p>جاري التحميل…</p>

// //   const max = data.wallet.balance

// //   const handle = async e => {
// //     e.preventDefault()
// //     setMsg('')
// //     const val = parseFloat(amount)
// //     if (!val || val > max) return setMsg(`الحد الأقصى ${max.toFixed(2)}`)
// //     const res = await fetch('/api/wallet/store_balance/withdraw', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ amount: val, bankDetails })
// //     })
// //     const json = await res.json()
// //     if (res.ok) {
// //       setMsg('تم إرسال الطلب')
// //       mutate('/api/wallet/store_balance')
// //     } else {
// //       setMsg(json.error || 'خطأ في الطلب')
// //     }
// //   }

// //   return (
// //     <form onSubmit={handle} className="space-y-4">
// //       {msg && <p className="text-blue-600">{msg}</p>}
// //       <div>
// //         <label>المبلغ (≤ {max.toFixed(2)})</label>
// //         <input
// //           type="number"
// //           step="0.01"
// //           value={amount}
// //           onChange={e => setAmount(e.target.value)}
// //           className="w-full border rounded p-2"
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>تفاصيل الحساب البنكي</label>
// //         <textarea
// //           value={bankDetails}
// //           onChange={e => setBankDetails(e.target.value)}
// //           className="w-full border rounded p-2"
// //           required
// //         />
// //       </div>
// //       <button className="px-4 py-2 bg-green-600 text-white rounded">إرسال طلب</button>
// //     </form>
// //   )
// // }

// // WalletReportsClient.jsx
// 'use client'
// import React, { useState } from 'react'
// import useSWR from 'swr'
// import { DatePicker } from "../../../../../components/ui/date-picker"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
// import { format } from 'date-fns'
// import { arSA } from 'date-fns/locale'
// import { Button } from '@/components/ui/button'

// const fetcher = url => fetch(url).then(res => res.json())

// const TransactionTable = ({ data, isLoading }) => {
//   if (isLoading) return (
//     <div className="space-y-4">
//       {[...Array(5)].map((_, i) => (
//         <Skeleton key={i} className="h-12 w-full" />
//       ))}
//     </div>
//   )

//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>التاريخ</TableHead>
//           <TableHead>نوع العملية</TableHead>
//           <TableHead>المبلغ</TableHead>
//           <TableHead>الحالة</TableHead>
//           <TableHead>الوصف</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data?.map((transaction) => (
//           <TableRow key={transaction.id}>
//             <TableCell>
//               {format(new Date(transaction.date), 'dd MMM yyyy', { locale: arSA })}
//             </TableCell>
//             <TableCell>{transaction.type}</TableCell>
//             <TableCell className="font-numbers">
//               {transaction.amount.toFixed(2)} ر.ي
//             </TableCell>
//             <TableCell>
//               <span className={`px-2 py-1 rounded-full text-sm ${
//                 transaction.status === 'completed' 
//                   ? 'bg-green-100 text-green-700'
//                   : 'bg-amber-100 text-amber-700'
//               }`}>
//                 {transaction.status}
//               </span>
//             </TableCell>
//             <TableCell className="max-w-[300px] truncate">
//               {transaction.description}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   )
// }

// export default function WalletReportsClient() {
//   const [dateRange, setDateRange] = useState({
//     start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
//     end: new Date()
//   })
  
//   const { data, error, isLoading } = useSWR(
//     `/api/wallet/reports?start=${dateRange.start.toISOString()}&end=${dateRange.end.toISOString()}`,
//     fetcher
//   )

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
//         <h3 className="text-lg font-semibold">كشف الحساب</h3>
//         <DatePicker
//           mode="range"
//           selected={dateRange}
//           onSelect={setDateRange}
//           locale={arSA}
//         />
//       </div>

//       {error ? (
//         <div className="p-4 bg-red-50 text-red-700 rounded-lg">
//           فشل في تحميل البيانات
//         </div>
//       ) : (
//         <TransactionTable data={data} isLoading={isLoading} />
//       )}

//       <div className="flex justify-end gap-3">
//         <Button variant="outline">
//           تصدير إلى Excel
//         </Button>
//         <Button variant="outline">
//           طباعة التقرير
//         </Button>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import React, { useState, useEffect, useMemo } from 'react'
// import useSWR from 'swr'
// import { DatePicker } from '@/components/ui/date-picker'
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow
// } from '@/components/ui/table'
// import { format } from 'date-fns'
// import { arSA } from 'date-fns/locale'
// import { Button } from '@/components/ui/button'
// import { Download, Printer } from 'lucide-react'

// const fetcher = url => fetch(url).then(res => res.json())

// const WalletReportsClient = ({storeId}) => {
//   const id = storeId
//   const [tab, setTab] = useState('') // ''=الكل, أو أحد القيم أدناه
//   const [range, setRange] = useState({
//     start: new Date(new Date().setMonth(new Date().getMonth() - 1)),
//     end:   new Date()
//   })

//   // بناء رابط الـ API مع المعايير
//   const params = useMemo(() => {
//     const p = new URLSearchParams()
//     p.set('storeId', id)
//     if (tab)   p.set('type', tab)
//     if (range.start) p.set('start', range.start.toISOString())
//     if (range.end)   p.set('end',   range.end.toISOString())
//     return p.toString()
//   }, [id, tab, range])

//   const { data: txs = [], error } = useSWR(
//     `/api/wallet/reports?${params}`, fetcher
//   )

//   // حساب المجاميع لكل محفظة
//   const summary = useMemo(() => {
//     const acc = { STORE_BALANCE: 0, ELECTRONIC_PAYMENTS: 0, COD_PAYMENTS: 0 }
//     txs.forEach(t => {
//       // مثال: نضيف للمجموع إن كانت حركة TOPUP
//       if (t.txType === 'TOPUP') {
//         acc[t.walletType] += t.amount
//       } else if (t.txType === 'WITHDRAW') {
//         acc[t.walletType] -= t.amount
//       }
//       // PAYMENT و REFUND حسب الحاجة...
//     })
//     return acc
//   }, [txs])

//   // تصدير CSV عبر إنشاء Blob
//   const exportCSV = () => {
//     const header = ['التاريخ','المحفظة','نوع العملية','المبلغ','الوصف','المزوّد','العملة']
//     const rows = txs.map(t => [
//       format(new Date(t.date), 'yyyy-MM-dd HH:mm', { locale: arSA }),
//       t.walletType,
//       t.txType,
//       t.amount.toFixed(2),
//       t.description || '',
//       t.provider || '',
//       t.currency || ''
//     ])
//     const csv = [header, ...rows].map(r => r.join(',')).join('\n')
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `wallet-report-${tab||'all'}.csv`
//     a.click()
//   }

//   return (
//     <div className="space-y-6 p-6">
//       <h1 className="text-2xl font-bold">تقارير حركات المحافظ</h1>

//       {/* Tabs */}
//       <div className="flex gap-4">
//         {[
//           { key: '',   label: 'الكل' },
//           { key: 'STORE_BALANCE',        label: 'رصيد المتجر' },
//           { key: 'ELECTRONIC_PAYMENTS',  label: 'مدفوعات إلكترونية' },
//           { key: 'COD_PAYMENTS',         label: 'COD' }
//         ].map(tabDef => (
//           <button
//             key={tabDef.key}
//             onClick={() => setTab(tabDef.key)}
//             className={`px-4 py-2 rounded ${
//               tab === tabDef.key
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//           >
//             {tabDef.label}
//           </button>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="p-4 bg-white shadow rounded">
//           <h3 className="font-medium">رصيد المتجر</h3>
//           <p className="text-2xl font-semibold">{summary.STORE_BALANCE.toFixed(2)} ر.ي</p>
//         </div>
//         <div className="p-4 bg-white shadow rounded">
//           <h3 className="font-medium">المدفوعات الإلكترونية</h3>
//           <p className="text-2xl font-semibold">{summary.ELECTRONIC_PAYMENTS.toFixed(2)} ر.ي</p>
//         </div>
//         <div className="p-4 bg-white shadow rounded">
//           <h3 className="font-medium">COD</h3>
//           <p className="text-2xl font-semibold">{summary.COD_PAYMENTS.toFixed(2)} ر.ي</p>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
//         <DatePicker
//           mode="range"
//           selected={range}
//           onSelect={setRange}
//           locale={arSA}
//         />
//         <Button onClick={exportCSV} variant="outline" className="flex items-center gap-2">
//           <Download /> تصدير Excel
//         </Button>
//         <Button onClick={() => window.print()} variant="outline" className="flex items-center gap-2">
//           <Printer /> طباعة
//         </Button>
//       </div>

//       {/* Table */}
//       {error ? (
//         <div className="p-4 bg-red-50 text-red-700 rounded">فشل في تحميل البيانات</div>
//       ) : (
//         <div className="overflow-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>التاريخ</TableHead>
//                 <TableHead>المحفظة</TableHead>
//                 <TableHead>نوع العملية</TableHead>
//                 <TableHead>المبلغ</TableHead>
//                 <TableHead>الوصف</TableHead>
//                 <TableHead>المزوّد</TableHead>
//                 <TableHead>العملة</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {txs.map((t, i) => (
//                 <TableRow key={t.id}>
//                   <TableCell>
//                     {format(new Date(t.date), 'dd MMM yyyy HH:mm', { locale: arSA })}
//                   </TableCell>
//                   <TableCell>{t.walletType}</TableCell>
//                   <TableCell>{t.txType}</TableCell>
//                   <TableCell className="font-numbers">{t.amount.toFixed(2)}</TableCell>
//                   <TableCell className="max-w-xs truncate">{t.description}</TableCell>
//                   <TableCell>{t.provider}</TableCell>
//                   <TableCell>{t.currency}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   )
// }

// // export default WalletReportsClient

// 'use client'
// import React, { useState, useEffect, useMemo } from 'react'
// import useSWR from 'swr'
// import { DatePicker } from '@/components/ui/date-picker'
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow
// } from '@/components/ui/table'
// import { format, parseISO } from 'date-fns'
// import { arSA } from 'date-fns/locale'
// import { Button } from '@/components/ui/button'
// import { Download, Printer } from 'lucide-react'

// const fetcher = url => fetch(url).then(res => res.json())

// const WalletReportsClient = ({ storeId }) => {
//   const [tab, setTab] = useState('')
//   const [range, setRange] = useState({
//     start: new Date(),
//     end: new Date()
//   })

//   // بناء رابط API مع التواريخ المنسقة
//   const params = useMemo(() => {
//     const p = new URLSearchParams()
//     p.set('storeId', storeId)
//     if (tab) p.set('type', tab)
//     p.set('start', range.start.toISOString())
//     p.set('end', range.end.toISOString())
//     return p.toString()
//   }, [storeId, tab, range])

//   const { data: txs = [], error, isLoading } = useSWR(
//     `/api/wallet/reports?${params}`,
//     fetcher
//   )

//   // معالجة البيانات مع التواريخ
//   const processedData = useMemo(() => {
//     return txs.map(tx => ({
//       ...tx,
//       date: tx.date ? parseISO(tx.date) : new Date()
//     }))
//   }, [txs])

//   // دالة تنسيق التاريخ الآمنة
//   const safeDateFormat = (date) => {
//     try {
//       return format(date, 'dd MMM yyyy HH:mm', { locale: arSA })
//     } catch (error) {
//       console.error('تاريخ غير صالح:', date)
//       return '--/--/---- --:--'
//     }
//   }

//   // تصدير CSV مع التواريخ المنسقة
//   const exportCSV = () => {
//     const header = ['التاريخ','المحفظة','نوع العملية','المبلغ','الوصف','المزوّد','العملة']
//     const rows = processedData.map(t => [
//       t.date.toISOString(),
//       t.walletType,
//       t.txType,
//       t.amount.toFixed(2),
//       t.description || '',
//       t.provider || '',
//       t.currency || ''
//     ])
    
//     const csvContent = [header, ...rows]
//       .map(row => row.join(','))
//       .join('\n')

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
//     const url = URL.createObjectURL(blob)
//     const link = document.createElement('a')
//     link.href = url
//     link.download = `wallet-report-${new Date().toISOString()}.csv`
//     link.click()
//   }

//   return (
//     <div className="space-y-6 p-6">
//       <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//         تقارير حركات المحافظ
//       </h1>

//       {/* فلاتر التبويب */}
//       <div className="flex flex-wrap gap-2">
//         {[
//           { key: '', label: 'الكل' },
//           { key: 'STORE_BALANCE', label: 'رصيد المتجر' },
//           { key: 'ELECTRONIC_PAYMENTS', label: 'مدفوعات إلكترونية' },
//           { key: 'COD_PAYMENTS', label: 'COD' }
//         ].map((tabDef) => (
//           <Button
//             key={tabDef.key}
//             variant={tab === tabDef.key ? 'default' : 'outline'}
//             onClick={() => setTab(tabDef.key)}
//           >
//             {tabDef.label}
//           </Button>
//         ))}
//       </div>

//       {/* اختيار النطاق الزمني */}
//       <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
//         <DatePicker
//           mode="range"
//           selected={{
//             start: new Date(range.start),
//             end: new Date(range.end)
//           }}
//           onSelect={(newRange) => {
//             if (newRange?.start && newRange?.end) {
//               setRange({
//                 start: new Date(newRange.start),
//                 end: new Date(newRange.end)
//               })
//             }
//           }}
//           locale={arSA}
//         />
        
//         <div className="flex gap-2">
//           <Button onClick={exportCSV} variant="outline">
//             <Download className="mr-2 h-4 w-4" /> تصدير CSV
//           </Button>
//           <Button onClick={() => window.print()} variant="outline">
//             <Printer className="mr-2 h-4 w-4" /> طباعة
//           </Button>
//         </div>
//       </div>

//       {/* الجدول */}
//       {isLoading ? (
//         <div className="text-center p-4 text-gray-500">جاري تحميل البيانات...</div>
//       ) : error ? (
//         <div className="bg-red-100 text-red-700 p-4 rounded-lg">
//           خطأ في تحميل البيانات: {error.message}
//         </div>
//       ) : (
//         <div className="overflow-x-auto rounded-lg border">
//           <Table className="min-w-[800px]">
//             <TableHeader className="bg-gray-50 dark:bg-gray-800">
//               <TableRow>
//                 <TableHead className="w-[180px]">التاريخ</TableHead>
//                 <TableHead>المحفظة</TableHead>
//                 <TableHead>النوع</TableHead>
//                 <TableHead>المبلغ</TableHead>
//                 <TableHead>الوصف</TableHead>
//                 <TableHead>المزود</TableHead>
//                 <TableHead>العملة</TableHead>
//               </TableRow>
//             </TableHeader>
            
//             <TableBody>
//               {processedData.map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell className="font-medium">
//                     {safeDateFormat(t.date)}
//                   </TableCell>
//                   <TableCell>{t.walletType}</TableCell>
//                   <TableCell>{t.txType}</TableCell>
//                   <TableCell className="text-right">
//                     {parseFloat(t.amount).toFixed(2)} ر.ي
//                   </TableCell>
//                   <TableCell className="max-w-[300px] truncate">
//                     {t.description}
//                   </TableCell>
//                   <TableCell>{t.provider}</TableCell>
//                   <TableCell>{t.currency}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   )
// }

// // export default WalletReportsClient

// 'use client'
// import React, { useState, useMemo } from 'react'
// import useSWR from 'swr'
// import { DatePicker } from '@/components/ui/date-picker'
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow
// } from '@/components/ui/table'
// import { format, parseISO } from 'date-fns'
// import { arSA } from 'date-fns/locale'
// import { Button } from '@/components/ui/button'
// import { Download, Printer } from 'lucide-react'

// const fetcher = url => fetch(url).then(res => res.json())

// const isValidDate = (date) => {
//   return date && date instanceof Date && !isNaN(date)
// }

// const WalletReportsClient = ({ storeId }) => {
//   const [activeTab, setActiveTab] = useState('')
//   const [dateRange, setDateRange] = useState({
//     start: new Date(),
//     end: new Date()
//   })

//   // توليد معلمات البحث مع التحقق من التواريخ
//   const queryParams = useMemo(() => {
//     const params = new URLSearchParams()
//     params.set('storeId', storeId)
    
//     if (activeTab) params.set('type', activeTab)
    
//     if (isValidDate(dateRange.start)) {
//       params.set('start', dateRange.start.toISOString())
//     }
    
//     if (isValidDate(dateRange.end)) {
//       params.set('end', dateRange.end.toISOString())
//     }
    
//     return params.toString()
//   }, [storeId, activeTab, dateRange])

//   const { data: transactions = [], error, isLoading } = useSWR(
//     `/api/wallet/reports?${queryParams}`,
//     fetcher
//   )

//   // معالجة البيانات مع التحقق من صحة التواريخ
//   const processedData = useMemo(() => {
//     return transactions.map(tx => {
//       const parsedDate = tx.date ? parseISO(tx.date) : new Date()
//       return {
//         ...tx,
//         date: isValidDate(parsedDate) ? parsedDate : new Date(),
//         amount: parseFloat(tx.amount) || 0
//       }
//     })
//   }, [transactions])

//   // تنسيق التاريخ بشكل آمن
//   const formatDateSafe = (date) => {
//     try {
//       return isValidDate(date) 
//         ? format(date, 'dd MMM yyyy HH:mm', { locale: arSA })
//         : '--/--/---- --:--'
//     } catch (error) {
//       console.error('خطأ في تنسيق التاريخ:', date)
//       return 'تاريخ غير صالح'
//     }
//   }

//   // تصدير البيانات إلى CSV
//   const handleExportCSV = () => {
//     try {
//       const csvHeader = ['التاريخ', 'المحفظة', 'نوع العملية', 'المبلغ', 'الوصف', 'المزود', 'العملة']
//       const csvRows = processedData.map(t => [
//         t.date.toISOString(),
//         t.walletType,
//         t.txType,
//         t.amount.toFixed(2),
//         t.description || 'لا يوجد وصف',
//         t.provider || 'غير محدد',
//         t.currency || 'ر.ي'
//       ])

//       const csvContent = [csvHeader, ...csvRows]
//         .map(row => row.join(','))
//         .join('\n')

//       const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' })
//       const downloadLink = document.createElement('a')
//       downloadLink.href = URL.createObjectURL(blob)
//       downloadLink.download = `كشف_المحفظة_${new Date().toISOString().slice(0,10)}.csv`
//       document.body.appendChild(downloadLink)
//       downloadLink.click()
//       document.body.removeChild(downloadLink)
//     } catch (error) {
//       console.error('فشل في التصدير:', error)
//       alert('حدث خطأ أثناء محاولة التصدير')
//     }
//   }

//   // معالجة تغيير النطاق الزمني
//   const handleDateRangeChange = (newRange) => {
//     if (newRange?.start && newRange?.end) {
//       setDateRange({
//         start: new Date(newRange.start),
//         end: new Date(newRange.end)
//       })
//     }
//   }

//   return (
//     <div className="space-y-6 p-6">
//       <header className="border-b pb-4">
//         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//           تقارير حركات المحفظة المالية
//         </h1>
//       </header>

//       {/* فلاتر التبويب */}
//       <nav className="flex flex-wrap gap-2">
//         {[
//           { id: '', label: 'الكل' },
//           { id: 'STORE_BALANCE', label: 'رصيد المتجر' },
//           { id: 'ELECTRONIC_PAYMENTS', label: 'مدفوعات إلكترونية' },
//           { id: 'COD_PAYMENTS', label: 'الدفع عند الاستلام' }
//         ].map(tab => (
//           <Button
//             key={tab.id}
//             variant={activeTab === tab.id ? 'default' : 'outline'}
//             onClick={() => setActiveTab(tab.id)}
//             className="min-w-[120px]"
//           >
//             {tab.label}
//           </Button>
//         ))}
//       </nav>

//       {/* أدوات التحكم */}
//       <section className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//         <div className="flex-1">
//           <DatePicker
//             mode="range"
//             selected={{
//               start: isValidDate(dateRange.start) ? dateRange.start : new Date(),
//               end: isValidDate(dateRange.end) ? dateRange.end : new Date()
//             }}
//             onSelect={handleDateRangeChange}
//             locale={arSA}
//             placeholderText="اختر نطاقًا زمنيًا"
//           />
//         </div>
        
//         <div className="flex gap-2">
//           <Button 
//             onClick={handleExportCSV} 
//             variant="outline"
//             className="gap-2"
//           >
//             <Download size={18} />
//             تصدير كـ CSV
//           </Button>
//           <Button 
//             onClick={() => window.print()}
//             variant="outline"
//             className="gap-2"
//           >
//             <Printer size={18} />
//             طباعة التقرير
//           </Button>
//         </div>
//       </section>

//       {/* جدول البيانات */}
//       {isLoading ? (
//         <div className="text-center p-4 text-gray-500">
//           <div className="animate-pulse space-y-4">
//             <div className="h-8 bg-gray-200 rounded"></div>
//             <div className="h-8 bg-gray-200 rounded"></div>
//             <div className="h-8 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       ) : error ? (
//         <div className="bg-red-50 text-red-700 p-4 rounded-lg">
//           <p className="font-medium">خطأ في تحميل البيانات:</p>
//           <p className="text-sm mt-2">{error.message}</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto rounded-lg border shadow-sm">
//           <Table className="min-w-[800px]">
//             <TableHeader className="bg-gray-50 dark:bg-gray-800">
//               <TableRow>
//                 <TableHead className="w-[200px]">التاريخ</TableHead>
//                 <TableHead>نوع المحفظة</TableHead>
//                 <TableHead>نوع العملية</TableHead>
//                 <TableHead className="text-right">المبلغ (ر.ي)</TableHead>
//                 <TableHead>الوصف</TableHead>
//                 <TableHead>المزود</TableHead>
//                 <TableHead>العملة</TableHead>
//               </TableRow>
//             </TableHeader>
            
//             <TableBody>
//               {processedData.map((transaction) => (
//                 <TableRow key={transaction.id}>
//                   <TableCell className="font-medium">
//                     {formatDateSafe(transaction.date)}
//                   </TableCell>
//                   <TableCell>{transaction.walletType}</TableCell>
//                   <TableCell>{transaction.txType}</TableCell>
//                   <TableCell className="text-right">
//                     {transaction.amount.toFixed(2)}
//                   </TableCell>
//                   <TableCell className="max-w-[300px] truncate">
//                     {transaction.description || 'لا يوجد وصف'}
//                   </TableCell>
//                   <TableCell>{transaction.provider || 'غير محدد'}</TableCell>
//                   <TableCell>{transaction.currency || 'ر.ي'}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   )
// }

// export default WalletReportsClient

'use client'
import React, { useState, useMemo } from 'react'
import useSWR from 'swr'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { format, parseISO } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import { Download, Printer } from 'lucide-react'

const fetcher = url => fetch(url).then(res => res.json())

const isValidDate = date =>
  date instanceof Date && !isNaN(date)

export default function WalletReportsClient({ storeId }) {
  const [activeTab, setActiveTab] = useState('')
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  })

  const queryParams = useMemo(() => {
    const params = new URLSearchParams()
    params.set('storeId', storeId)
    if (activeTab) params.set('type', activeTab)
    if (isValidDate(dateRange.start)) params.set('start', dateRange.start.toISOString())
    if (isValidDate(dateRange.end))   params.set('end',   dateRange.end.toISOString())
    return params.toString()
  }, [storeId, activeTab, dateRange])

  const { data: transactions = [], error, isLoading } = useSWR(
    `/api/wallet/reports?${queryParams}`,
    fetcher
  )

  const processedData = useMemo(() =>
    transactions.map(tx => {
      const parsed = tx.date ? parseISO(tx.date) : new Date()
      return {
        ...tx,
        date: isValidDate(parsed) ? parsed : new Date(),
        amount: parseFloat(tx.amount) || 0,
      }
    }),
    [transactions]
  )

  const formatDateSafe = date => {
    try {
      return isValidDate(date)
        ? format(date, 'dd MMMM yyyy', { locale: ar })
        : '--/--/----'
    } catch {
      return 'تاريخ غير صالح'
    }
  }

  const handleExportCSV = () => {
    try {
      const header = ['التاريخ','المحفظة','نوع العملية','المبلغ','الوصف','المزود','العملة']
      const rows = processedData.map(t => [
        t.date.toISOString(),
        t.walletType,
        t.txType,
        t.amount.toFixed(2),
        t.description || 'لا يوجد وصف',
        t.provider    || 'غير محدد',
        t.currency    || 'ر.ي'
      ])
      const csv = [header, ...rows]
        .map(r => r.join(','))
        .join('\n')
      const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `كشف_المحفظة_${new Date().toISOString().slice(0,10)}.csv`
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch {
      alert('حدث خطأ أثناء التصدير')
    }
  }

  return (
    <div className="space-y-6 p-6">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          تقارير حركات المحفظة المالية
        </h1>
      </header>

      <nav className="flex flex-wrap gap-2">
        {[
          { id: '',                  label: 'الكل' },
          { id: 'STORE_BALANCE',     label: 'رصيد المتجر' },
          { id: 'ELECTRONIC_PAYMENTS', label: 'مدفوعات إلكترونية' },
          { id: 'COD_PAYMENTS',      label: 'الدفع عند الاستلام' },
        ].map(tab => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab.id)}
            className="min-w-[120px]"
          >
            {tab.label}
          </Button>
        ))}
      </nav>

      <section className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <label className="block text-sm mb-1">من</label>
            <input
              type="date"
              value={format(dateRange.start, 'yyyy-MM-dd')}
              onChange={e =>
                setDateRange(r => ({
                  ...r,
                  start: parseISO(e.target.value)
                }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">إلى</label>
            <input
              type="date"
              value={format(dateRange.end, 'yyyy-MM-dd')}
              onChange={e =>
                setDateRange(r => ({
                  ...r,
                  end: parseISO(e.target.value)
                }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <Download size={18} />
            تصدير كـ CSV
          </Button>
          <Button onClick={() => window.print()} variant="outline" className="gap-2">
            <Printer size={18} />
            طباعة التقرير
          </Button>
        </div>
      </section>

      {isLoading ? (
        <div className="text-center p-4 text-gray-500 animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p className="font-medium">خطأ في تحميل البيانات:</p>
          <p className="text-sm mt-2">{error.message}</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border shadow-sm">
          <Table className="min-w-[800px]">
            <TableHeader className="bg-gray-50 dark:bg-gray-800">
              <TableRow>
                <TableHead className="w-[200px]">التاريخ</TableHead>
                <TableHead>نوع المحفظة</TableHead>
                <TableHead>نوع العملية</TableHead>
                <TableHead className="text-right">المبلغ (ر.ي)</TableHead>
                <TableHead>الوصف</TableHead>
                <TableHead>المزود</TableHead>
                <TableHead>العملة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedData.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">
                    {formatDateSafe(tx.date)}
                  </TableCell>
                  <TableCell>{tx.walletType}</TableCell>
                  <TableCell>{tx.txType}</TableCell>
                  <TableCell className="text-right">
                    {tx.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {tx.description || 'لا يوجد وصف'}
                  </TableCell>
                  <TableCell>{tx.provider || 'غير محدد'}</TableCell>
                  <TableCell>{tx.currency || 'ر.ي'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
