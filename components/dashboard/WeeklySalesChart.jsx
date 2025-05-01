"use client"
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const tabs = [
  {
    title: "المبيعات",
    type: "sales",
    data: {
      labels,
      datasets: [
        {
          label: 'المبيعات',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: '#f97316',
          backgroundColor: 'rgba(249, 115, 22, 0.3)',
          tension: 0.4,
          pointRadius: 5,
          fill: true
        },
      ],
    },
  },
  {
    title: "الطلبات",
    type: "orders",
    data: {
      labels,
      datasets: [
        {
          label: 'الطلبات',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: '#0e7490',
          backgroundColor: 'rgba(14, 116, 144, 0.3)',
          tension: 0.4,
          pointRadius: 5,
          fill: true
        },
      ],
    },
  },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#64748b'
      }
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: '#64748b' },
      grid: { color: '#e5e7eb' }
    },
    y: {
      ticks: { color: '#64748b' },
      grid: { color: '#e5e7eb' }
    },
  },
};

export default function WeeklySalesChart() {
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6 tracking-tight">إحصائيات أسبوعية</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setChartToDisplay(tab.type)}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold text-sm
              ${chartToDisplay === tab.type
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-white hover:bg-orange-400 hover:text-white'}
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full max-w-4xl mx-auto">
        {tabs.map((tab, i) =>
          chartToDisplay === tab.type ? (
            <Line key={i} options={options} data={tab.data} />
          ) : null
        )}
      </div>
    </div>
  );
}
