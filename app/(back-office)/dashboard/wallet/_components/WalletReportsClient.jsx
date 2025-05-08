
// export default WalletReportsClient

// 'use client'
// import React, { useState, useMemo } from 'react'
// import useSWR from 'swr'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { format, parseISO } from 'date-fns'
// import { ar } from 'date-fns/locale'
// import { Button } from '@/components/ui/button'
// import { Download, Printer } from 'lucide-react'

// const fetcher = url => fetch(url).then(res => res.json())

// const isValidDate = date =>
//   date instanceof Date && !isNaN(date)

// export default function WalletReportsClient({ storeId }) {
//   const [activeTab, setActiveTab] = useState('')
//   const [dateRange, setDateRange] = useState({
//     start: new Date(),
//     end: new Date(),
//   })

//   const queryParams = useMemo(() => {
//     const params = new URLSearchParams()
//     params.set('storeId', storeId)
//     if (activeTab) params.set('type', activeTab)
//     if (isValidDate(dateRange.start)) params.set('start', dateRange.start.toISOString())
//     if (isValidDate(dateRange.end))   params.set('end',   dateRange.end.toISOString())
//     return params.toString()
//   }, [storeId, activeTab, dateRange])

//   const { data: transactions = [], error, isLoading } = useSWR(
//     `/api/wallet/reports?${queryParams}`,
//     fetcher
//   )

//   const processedData = useMemo(() =>
//     transactions.map(tx => {
//       const parsed = tx.date ? parseISO(tx.date) : new Date()
//       return {
//         ...tx,
//         date: isValidDate(parsed) ? parsed : new Date(),
//         amount: parseFloat(tx.amount) || 0,
//       }
//     }),
//     [transactions]
//   )

//   const formatDateSafe = date => {
//     try {
//       return isValidDate(date)
//         ? format(date, 'dd MMMM yyyy', { locale: ar })
//         : '--/--/----'
//     } catch {
//       return 'تاريخ غير صالح'
//     }
//   }

//   const handleExportCSV = () => {
//     try {
//       const header = ['التاريخ','المحفظة','نوع العملية','المبلغ','الوصف','المزود','العملة']
//       const rows = processedData.map(t => [
//         t.date.toISOString(),
//         t.walletType,
//         t.txType,
//         t.amount.toFixed(2),
//         t.description || 'لا يوجد وصف',
//         t.provider    || 'غير محدد',
//         t.currency    || 'ر.ي'
//       ])
//       const csv = [header, ...rows]
//         .map(r => r.join(','))
//         .join('\n')
//       const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv' })
//       const link = document.createElement('a')
//       link.href = URL.createObjectURL(blob)
//       link.download = `كشف_المحفظة_${new Date().toISOString().slice(0,10)}.csv`
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch {
//       alert('حدث خطأ أثناء التصدير')
//     }
//   }

//   return (
//     <div className="space-y-6 p-6">
//       <header className="border-b pb-4">
//         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//           تقارير حركات المحفظة المالية
//         </h1>
//       </header>

//       <nav className="flex flex-wrap gap-2">
//         {[
//           { id: '',                  label: 'الكل' },
//           { id: 'STORE_BALANCE',     label: 'رصيد المتجر' },
//           { id: 'ELECTRONIC_PAYMENTS', label: 'مدفوعات إلكترونية' },
//           { id: 'COD_PAYMENTS',      label: 'الدفع عند الاستلام' },
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

//       <section className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//         <div className="flex gap-2 items-center">
//           <div>
//             <label className="block text-sm mb-1">من</label>
//             <input
//               type="date"
//               value={format(dateRange.start, 'yyyy-MM-dd')}
//               onChange={e =>
//                 setDateRange(r => ({
//                   ...r,
//                   start: parseISO(e.target.value)
//                 }))
//               }
//               className="border rounded px-2 py-1"
//             />
//           </div>
//           <div>
//             <label className="block text-sm mb-1">إلى</label>
//             <input
//               type="date"
//               value={format(dateRange.end, 'yyyy-MM-dd')}
//               onChange={e =>
//                 setDateRange(r => ({
//                   ...r,
//                   end: parseISO(e.target.value)
//                 }))
//               }
//               className="border rounded px-2 py-1"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <Button onClick={handleExportCSV} variant="outline" className="gap-2">
//             <Download size={18} />
//             تصدير كـ CSV
//           </Button>
//           <Button onClick={() => window.print()} variant="outline" className="gap-2">
//             <Printer size={18} />
//             طباعة التقرير
//           </Button>
//         </div>
//       </section>

//       {isLoading ? (
//         <div className="text-center p-4 text-gray-500 animate-pulse space-y-4">
//           <div className="h-8 bg-gray-200 rounded"></div>
//           <div className="h-8 bg-gray-200 rounded"></div>
//           <div className="h-8 bg-gray-200 rounded"></div>
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
//               {processedData.map(tx => (
//                 <TableRow key={tx.id}>
//                   <TableCell className="font-medium">
//                     {formatDateSafe(tx.date)}
//                   </TableCell>
//                   <TableCell>{tx.walletType}</TableCell>
//                   <TableCell>{tx.txType}</TableCell>
//                   <TableCell className="text-right">
//                     {tx.amount.toFixed(2)}
//                   </TableCell>
//                   <TableCell className="max-w-[300px] truncate">
//                     {tx.description || 'لا يوجد وصف'}
//                   </TableCell>
//                   <TableCell>{tx.provider || 'غير محدد'}</TableCell>
//                   <TableCell>{tx.currency || 'ر.ي'}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   )
// }

// app/back-office/dashboard/wallet_components/WalletReportsClient.jsx
'use client'

import React, { useState, useMemo } from 'react'
import useSWR from 'swr'
import { format, parseISO } from 'date-fns'
import { ar } from 'date-fns/locale'
import { ibmPlexArabic } from '@/lib/arabicFont'  // الناتج من الخطوة السابقة

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Download, Printer, FileText } from 'lucide-react'

import { walletTypeLabels, txTypeLabels } from '@/lib/labels'

// تأكد أن main.scss يستورد في app/layout.js ويحتوي على قواعد @media print

const fetcher = url => fetch(url).then(res => res.json())

const isValidDate = date => date instanceof Date && !isNaN(date)

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
    if (isValidDate(dateRange.end)) params.set('end', dateRange.end.toISOString())
    return params.toString()
  }, [storeId, activeTab, dateRange])

  const { data: transactions = [], error, isLoading } = useSWR(
    `/api/wallet/reports?${queryParams}`,
    fetcher
  )

  const processedData = useMemo(
    () =>
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
      const header = ['التاريخ','المحفظة','نوع العملية','المبلغ','العملة','الوصف','المزود'];
  
      const rows = processedData.map(t => [
        formatDateSafe(t.date),
        walletTypeLabels[t.walletType] || t.walletType,
        txTypeLabels[t.txType] || t.txType,
        t.amount.toFixed(2),
        t.currency || 'ر.ي',
        (t.description || 'لا يوجد وصف').replace(/[\n\r]/g, ' '),
        t.provider || 'غير محدد',
      ]);
  
      // استخدم ; كفاصل لأن Excel بالعربية يستخدمه غالبًا
      const escapeCell = val => `"${String(val).replace(/"/g, '""')}"`;
      const csvContent = [
        header.map(escapeCell).join(';'),
        ...rows.map(row => row.map(escapeCell).join(';'))
      ].join('\r\n');
  
      const blob = new Blob(["\uFEFF" + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
  
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `كشف_المحفظة_${new Date().toISOString().slice(0,10)}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      console.error('فشل تصدير CSV:', e);
      alert('حدث خطأ أثناء التصدير');
    }
  };
  

  const handleExportPDF = async () => {
    try {
      // استيراد ديناميكي لضمان التنفيذ في المتصفح فقط
      const { jsPDF } = await import('jspdf')
      const autoTableModule = await import('jspdf-autotable')

      jsPDF.API.events.push(['addFonts', function () {
        this.addFileToVFS('IBMPlexArabic-Regular.ttf', ibmPlexArabic)
        this.addFont('IBMPlexArabic-Regular.ttf', 'IBMPlexArabic', 'normal')
      }])

      const doc = new jsPDF({ unit: 'pt', format: 'a4' })
      doc.setFont('IBMPlexArabic')
      doc.setFontSize(16)

      doc.text('تقرير حركات المحفظة المالية', doc.internal.pageSize.getWidth() - 40, 40, {
        align: 'right',
      })

      const rows = processedData.map(t => [
        formatDateSafe(t.date),
        walletTypeLabels[t.walletType] || t.walletType,
        txTypeLabels[t.txType] || t.txType,
        t.amount.toFixed(2),
        t.currency || 'ر.ي',
        t.description || 'لا يوجد وصف',
        t.provider || 'غير محدد',
      ])

      autoTableModule.default(doc, {
        head: [[
          'التاريخ', 'المحفظة', 'نوع العملية', 'المبلغ', 'العملة', 'الوصف', 'المزود'
        ]],
        body: rows,
        startY: 70,
        styles: {
          font: 'IBMPlexArabic',
          fontStyle: 'normal',
          halign: 'right',
          cellPadding: 4,
        },
        headStyles: {
          font: 'IBMPlexArabic',
          halign: 'right',
          fillColor: [230, 230, 230],
        },
        margin: { left: 40, right: 40 },
        didDrawCell: (data) => {
          // لأي تخصيص إضافي
        }
      })

      doc.save(`تقرير_المحفظة_${new Date().toISOString().slice(0, 10)}.pdf`)
    } catch (e) {
      console.error(e)
      alert('فشل تصدير PDF')
    }
  }

  return (
    <div id="wallet-report-printable" className="space-y-6 p-6 ">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          تقارير حركات المحفظة المالية
        </h1>
      </header>

      <nav className="flex flex-wrap gap-2 no-print">
        {[
          { id: '', label: 'الكل' },
          { id: 'STORE_BALANCE', label: 'رصيد المتجر' },
          { id: 'ELECTRONIC_PAYMENTS', label: 'مدفوعات إلكترونية' },
          { id: 'COD_PAYMENTS', label: 'الدفع عند الاستلام' },
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

      <section className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between no-print">
        <div className="flex gap-2 items-center">
          <div>
            <label className="block text-sm mb-1">من</label>
            <input
              type="date"
              value={format(dateRange.start, 'yyyy-MM-dd')}
              onChange={e =>
                setDateRange(r => ({ ...r, start: parseISO(e.target.value) }))
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
                setDateRange(r => ({ ...r, end: parseISO(e.target.value) }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <Download size={18} /> CSV
          </Button>
          <Button onClick={handleExportPDF} variant="outline" className="gap-2">
            <FileText size={18} /> PDF
          </Button>
          <Button onClick={() => window.print()} variant="outline" className="gap-2 no-print">
            <Printer size={18} /> طباعة
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
              <TableRow className="text-right">
                <TableHead>التاريخ</TableHead>
                <TableHead>المحفظة</TableHead>
                <TableHead>نوع العملية</TableHead>
                <TableHead className="text-right">المبلغ (ر.ي)</TableHead>
                <TableHead>العملة</TableHead>
                <TableHead>الوصف</TableHead>
                <TableHead>المزود</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedData.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell>{formatDateSafe(tx.date)}</TableCell>
                  <TableCell>
                    {walletTypeLabels[tx.walletType] || tx.walletType}
                  </TableCell>
                  <TableCell>
                    {txTypeLabels[tx.txType] || tx.txType}
                  </TableCell>
                  <TableCell className="text-right">
                    {tx.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>{tx.currency || 'ر.ي'}</TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {tx.description || 'لا يوجد وصف'}
                  </TableCell>
                  <TableCell>{tx.provider || 'غير محدد'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
