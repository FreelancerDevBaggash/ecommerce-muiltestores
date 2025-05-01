"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Package, Truck, CheckCircle, AlertCircle, Clock, PackageCheck } from "lucide-react"

interface OrderStatusCardsProps {
  orders: any[]
}

export default function OrderStatusCards({ orders }: OrderStatusCardsProps) {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [orderStats, setOrderStats] = useState<any[]>([])

  useEffect(() => {
    updateStats(orders)
  }, [orders])

  const updateStats = (ordersList: any[]) => {
    const stats = [
      {
        title: "جميع الطلبات",
        status: "all",
        count: ordersList.length,
        icon: ShoppingCart,
        color: "bg-gray-100 dark:bg-gray-800",
        iconColor: "text-gray-600 dark:text-gray-300",
      },
      {
        title: "جديد",
        status: "جديد",
        count: ordersList.filter((o) => o.orderStatus === "جديد").length,
        icon: Package,
        color: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        title: "جاري التجهيز",
        status: "جاري التجهيز",
        count: ordersList.filter((o) => o.orderStatus === "جاري التجهيز").length,
        icon: Clock,
        color: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
      {
        title: "جاهز",
        status: "جاهز",
        count: ordersList.filter((o) => o.orderStatus === "جاهز").length,
        icon: PackageCheck,
        color: "bg-blue-100 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        title: "جاري التوصيل",
        status: "جاري التوصيل",
        count: ordersList.filter((o) => o.orderStatus === "جاري التوصيل").length,
        icon: Truck,
        color: "bg-amber-100 dark:bg-amber-900/30",
        iconColor: "text-amber-600 dark:text-amber-400",
      },
      {
        title: "تم التوصيل",
        status: "تم التوصيل",
        count: ordersList.filter((o) => o.orderStatus === "تم التوصيل").length,
        icon: CheckCircle,
        color: "bg-teal-100 dark:bg-teal-900/30",
        iconColor: "text-teal-600 dark:text-teal-400",
      },
      {
        title: "ملغي",
        status: "ملغي",
        count: ordersList.filter((o) => o.orderStatus === "ملغي").length,
        icon: AlertCircle,
        color: "bg-red-100 dark:bg-red-900/30",
        iconColor: "text-red-600 dark:text-red-400",
      },
    ]

    setOrderStats(stats)
  }

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status)
    // You could add filtering logic here or emit an event
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
      {orderStats.map((stat, index) => {
        const Icon = stat.icon
        const isActive = selectedStatus === stat.status

        return (
          <button
            key={index}
            onClick={() => handleStatusSelect(stat.status)}
            className={`relative flex flex-col items-center p-4 rounded-lg transition-all ${
              isActive
                ? "bg-primary text-white shadow-md"
                : `${stat.color} text-gray-800 dark:text-gray-200 hover:shadow-sm`
            }`}
          >
            <div className={`p-2 rounded-full mb-2 ${isActive ? "bg-white/20" : stat.color}`}>
              <Icon className={`h-5 w-5 ${isActive ? "text-white" : stat.iconColor}`} />
            </div>

            <span className="text-xs font-medium mb-1">{stat.title}</span>

            <span className={`text-lg font-bold ${isActive ? "text-white" : "text-gray-800 dark:text-white"}`}>
              {stat.count.toString().padStart(2, "0")}
            </span>
          </button>
        )
      })}
    </div>
  )
}
