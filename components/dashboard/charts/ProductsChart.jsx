// "use client"
// import { Pie } from "react-chartjs-2"
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// // Register ChartJS components
// ChartJS.register(ArcElement, Tooltip, Legend)

// interface ProductsChartProps {
//   products: any[]
// }

// export default function ProductsChart({ products }: ProductsChartProps) {
//   // Sample data for best-selling products
//   const data = {
//     labels: ["الملفوف الأخضر", "البطيخ الأزرق", "البروكلي الأصفر", "الذرة الحمراء"],
//     datasets: [
//       {
//         label: "المبيعات",
//         data: [50, 30, 15, 5],
//         backgroundColor: [
//           "rgba(59, 130, 246, 0.8)",
//           "rgba(16, 185, 129, 0.8)",
//           "rgba(245, 158, 11, 0.8)",
//           "rgba(239, 68, 68, 0.8)",
//         ],
//         borderColor: [
//           "rgba(59, 130, 246, 1)",
//           "rgba(16, 185, 129, 1)",
//           "rgba(245, 158, 11, 1)",
//           "rgba(239, 68, 68, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   }

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "right" as const,
//         labels: {
//           boxWidth: 15,
//           padding: 15,
//           font: {
//             size: 12,
//           },
//         },
//       },
//     },
//   }

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
//       <div className="p-4 border-b border-gray-100 dark:border-gray-700">
//         <h3 className="text-lg font-bold text-gray-800 dark:text-white">أفضل المنتجات مبيعًا</h3>
//       </div>

//       <div className="p-4 h-80 flex items-center justify-center">
//         <Pie data={data} options={options} />
//       </div>
//     </div>
//   )
// }

"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export default function ProductsChart({ products }) {
  const data = {
    labels: ["الملفوف الأخضر", "البطيخ الأزرق", "البروكلي الأصفر", "الذرة الحمراء"],
    datasets: [
      {
        label: "المبيعات",
        data: [50, 30, 15, 5],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(239, 68, 68, 0.8)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 15,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
    },
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">أفضل المنتجات مبيعًا</h3>
      </div>

      <div className="p-4 h-80 flex items-center justify-center">
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}
