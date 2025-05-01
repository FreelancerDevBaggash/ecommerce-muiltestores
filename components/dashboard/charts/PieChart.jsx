"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import { useTheme } from "next-themes"

// تسجيل جميع المكونات المطلوبة
Chart.register(...registerables)

export default function PieChart({ data, options = {}, height = 300, className = "" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    // تنظيف الرسم البياني السابق إذا وجد
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // تحديد ألوان النص بناءً على السمة
    const isDark = theme === "dark"
    const textColor = isDark ? "#94a3b8" : "#64748b"

    // إنشاء الرسم البياني
    const ctx = chartRef.current.getContext("2d")
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            position: "right",
            align: "center",
            labels: {
              color: textColor,
              font: {
                family: "Tajawal, sans-serif",
              },
              padding: 15,
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          tooltip: {
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            titleColor: isDark ? "#e2e8f0" : "#1e293b",
            bodyColor: isDark ? "#cbd5e1" : "#334155",
            borderColor: isDark ? "#334155" : "#e2e8f0",
            borderWidth: 1,
            padding: 10,
            bodyFont: {
              family: "Tajawal, sans-serif",
            },
            titleFont: {
              family: "Tajawal, sans-serif",
              weight: "bold",
            },
            rtl: true,
            textDirection: "rtl",
          },
        },
        ...options,
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, options, theme])

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <canvas ref={chartRef} />
    </div>
  )
}
