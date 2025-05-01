'use client'
import React, { useState } from 'react'
import WalletSummaryClient from './WalletSummaryClient'
import WithdrawFormClient from './WithdrawFormClient'
import WalletReportsClient from './WalletReportsClient'

const tabs = [
  { key: 'summary', label: 'الملخص' },
  { key: 'withdraw', label: 'طلب سحب' },
  { key: 'reports', label: 'التقارير' },
]

export default function WalletTabs() {
  const [active, setActive] = useState('summary')
  return (
    <div className="bg-white dark:bg-slate-700 shadow rounded">
      <nav className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 -mb-px font-medium ${
              active === tab.key
                ? 'border-b-2 border-blue-600 dark:text-slate-200 text-blue-600'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="p-6">
        {active === 'summary' && <WalletSummaryClient />}
        {active === 'withdraw' && <WithdrawFormClient />}
        {active === 'reports' && <WalletReportsClient />}
      </div>
    </div>
  )
}
