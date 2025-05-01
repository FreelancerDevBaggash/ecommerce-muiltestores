"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import { useTheme } from "next-themes"

// تسجيل جميع المكونات المطلوبة
Chart.register(...registerables)

export default function LineChart({ data, options = {}, height = 300, className = "" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    // تنظيف الرسم البياني السابق إذا وجد
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // تحديد ألوان الخط والنص بناءً على السمة
    const isDark = theme === "dark"
    const textColor = isDark ? "#94a3b8" : "#64748b"
    const gridColor = isDark ? "rgba(148, 163, 184, 0.1)" : "rgba(226, 232, 240, 0.6)"
    const borderColor = isDark ? "#6366f1" : "#4f46e5"
    const backgroundColor = isDark ? "rgba(99, 102, 241, 0.1)" : "rgba(79, 70, 229, 0.1)"

    // إنشاء الرسم البياني
    const ctx = chartRef.current.getContext("2d")
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        ...data,
        datasets: data.datasets.map((dataset) => ({
          ...dataset,
          borderColor: dataset.borderColor || borderColor,
          backgroundColor: dataset.backgroundColor || backgroundColor,
          tension: 0.3,
          borderWidth: 2,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5,
            left: 10,
            right: 10,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: textColor,
              font: {
                family: "Tajawal, sans-serif",
              },
            },
          },
          y: {
            grid: {
              color: gridColor,
            },
            ticks: {
              color: textColor,
              font: {
                family: "Tajawal, sans-serif",
              },
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "end",
            labels: {
              color: textColor,
              font: {
                family: "Tajawal, sans-serif",
              },
              boxWidth: 12,
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
