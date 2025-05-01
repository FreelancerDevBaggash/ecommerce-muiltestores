// "use client"

// import { useState } from "react"
// import { Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js"
// import { faker } from "@faker-js/faker"

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// interface SalesChartProps {
//   sales: any[]
// }

// export default function SalesChart({ sales }: SalesChartProps) {
//   const months = [
//     "يناير",
//     "فبراير",
//     "مارس",
//     "أبريل",
//     "مايو",
//     "يونيو",
//     "يوليو",
//     "أغسطس",
//     "سبتمبر",
//     "أكتوبر",
//     "نوفمبر",
//     "ديسمبر",
//   ]

//   const [activeTab, setActiveTab] = useState("sales")

//   // Chart options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top" as const,
//         align: "end" as const,
//         labels: {
//           boxWidth: 10,
//           usePointStyle: true,
//           pointStyle: "circle",
//         },
//       },
//       title: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           drawBorder: false,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//       },
//       point: {
//         radius: 4,
//         hitRadius: 10,
//         hoverRadius: 6,
//       },
//     },
//   }

//   // Generate sample data
//   const salesData = {
//     labels: months,
//     datasets: [
//       {
//         label: "المبيعات",
//         data: months.map(() => faker.number.int({ min: 500, max: 3000 })),
//         borderColor: "rgb(59, 130, 246)",
//         backgroundColor: "rgba(59, 130, 246, 0.5)",
//         fill: false,
//       },
//     ],
//   }

//   const ordersData = {
//     labels: months,
//     datasets: [
//       {
//         label: "الطلبات",
//         data: months.map(() => faker.number.int({ min: 10, max: 100 })),
//         borderColor: "rgb(16, 185, 129)",
//         backgroundColor: "rgba(16, 185, 129, 0.5)",
//         fill: false,
//       },
//     ],
//   }

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
//       <div className="p-4 border-b border-gray-100 dark:border-gray-700">
//         <h3 className="text-lg font-bold text-gray-800 dark:text-white">مخططات أسبوعية</h3>

//         <div className="flex mt-3 border-b border-gray-200 dark:border-gray-700">
//           <button
//             onClick={() => setActiveTab("sales")}
//             className={`px-4 py-2 text-sm font-medium -mb-px ${
//               activeTab === "sales"
//                 ? "text-primary border-b-2 border-primary"
//                 : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//             }`}
//           >
//             المبيعات
//           </button>
//           <button
//             onClick={() => setActiveTab("orders")}
//             className={`px-4 py-2 text-sm font-medium -mb-px ${
//               activeTab === "orders"
//                 ? "text-primary border-b-2 border-primary"
//                 : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//             }`}
//           >
//             الطلبات
//           </button>
//         </div>
//       </div>

//       <div className="p-4 h-80">
//         {activeTab === "sales" && <Line options={options} data={salesData} />}
//         {activeTab === "orders" && <Line options={options} data={ordersData} />}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { faker } from "@faker-js/faker"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function SalesChart({ sales }) {
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]

  const [activeTab, setActiveTab] = useState("sales")

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 6,
      },
    },
  }

  // Generate sample data
  const salesData = {
    labels: months,
    datasets: [
      {
        label: "المبيعات",
        data: months.map(() => faker.number.int({ min: 500, max: 3000 })),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        fill: false,
      },
    ],
  }

  const ordersData = {
    labels: months,
    datasets: [
      {
        label: "الطلبات",
        data: months.map(() => faker.number.int({ min: 10, max: 100 })),
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        fill: false,
      },
    ],
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">مخططات شهرية</h3>

        <div className="flex mt-3 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("sales")}
            className={`px-4 py-2 text-sm font-medium -mb-px ${
              activeTab === "sales"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            المبيعات
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 text-sm font-medium -mb-px ${
              activeTab === "orders"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            الطلبات
          </button>
        </div>
      </div>

      <div className="p-4 h-80">
        {activeTab === "sales" && <Line options={options} data={salesData} />}
        {activeTab === "orders" && <Line options={options} data={ordersData} />}
      </div>
    </div>
  )
}
