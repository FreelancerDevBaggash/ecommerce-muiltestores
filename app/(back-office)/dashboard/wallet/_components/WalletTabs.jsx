// 'use client'
// import React, { useState } from 'react'
// import WalletSummaryClient from './WalletSummaryClient'
// import WithdrawFormClient from './WithdrawFormClient'
// import WalletReportsClient from './WalletReportsClient'

// const tabs = [
//   { key: 'summary', label: 'الملخص' },
//   { key: 'withdraw', label: 'طلب سحب' },
//   { key: 'reports', label: 'التقارير' },
// ]

// export default function WalletTabs() {
//   const [active, setActive] = useState('summary')
//   return (
//     <div className="bg-white dark:bg-slate-700 shadow rounded">
//       <nav className="flex border-b">
//         {tabs.map(tab => (
//           <button
//             key={tab.key}
//             onClick={() => setActive(tab.key)}
//             className={`px-4 py-2 -mb-px font-medium ${
//               active === tab.key
//                 ? 'border-b-2 border-blue-600 dark:text-slate-200 text-blue-600'
//                 : 'text-gray-600 dark:text-slate-400 hover:text-gray-800'
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </nav>
//       <div className="p-6">
//         {active === 'summary' && <WalletSummaryClient />}
//         {active === 'withdraw' && <WithdrawFormClient />}
//         {active === 'reports' && <WalletReportsClient />}
//       </div>
//     </div>
//   )
// }

// WalletTabs.jsx
'use client'
import React, { useState } from 'react'
import WalletSummaryClient from './WalletSummaryClient'
import WithdrawFormClient from './WithdrawFormClient'
import WalletReportsClient from './WalletReportsClient'
import { RiWallet3Line, RiMoneyDollarCircleLine, RiFileChartLine } from 'react-icons/ri'

const tabs = [
  { key: 'summary', label: 'الملخص المالي', icon: <RiWallet3Line className="ml-2" /> },
  { key: 'withdraw', label: 'طلبات السحب', icon: <RiMoneyDollarCircleLine className="ml-2" /> },
  { key: 'reports', label: 'التقارير المالية', icon: <RiFileChartLine className="ml-2" /> },
]

export default function WalletTabs({storeId }) {
  const [active, setActive] = useState('summary')
  
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
      <nav className="border-b border-slate-100 dark:border-slate-700">
        <div className="flex px-4">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center px-6 py-4 font-medium transition-all ${
                active === tab.key 
                  ? 'text-green-600 border-b-2 border-green-500'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      
      <div className="p-6 bg-slate-50/50 dark:bg-slate-900 min-h-[500px]">
        {active === 'summary' && <WalletSummaryClient />}
        {active === 'withdraw' && <WithdrawFormClient />}
        {active === 'reports' && <WalletReportsClient storeId={storeId} />}
      </div>
    </div>
  )
}