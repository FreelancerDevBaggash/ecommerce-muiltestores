import { TrendingUp, Calendar, DollarSign } from "lucide-react"

interface StatisticsCardsProps {
  sales: any[]
}

export default function StatisticsCards({ sales }: StatisticsCardsProps) {
  const totalSales = sales.reduce((acc, item) => acc + item.total, 0).toFixed(2) ?? 0

  const statistics = [
    {
      title: "طلبات اليوم",
      value: 1100,
      icon: Calendar,
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "طلبات الأمس",
      value: 1300,
      icon: TrendingUp,
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "هذا الشهر",
      value: 1100,
      icon: Calendar,
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "المبيعات الكلية",
      value: totalSales,
      icon: DollarSign,
      color: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statistics.map((stat, index) => {
        const Icon = stat.icon

        return (
          <div
            key={index}
            className={`rounded-lg shadow-sm p-6 ${stat.color} border border-gray-100 dark:border-gray-800`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">
                  {typeof stat.value === "number" ? stat.value.toLocaleString("ar-SA") : stat.value}
                </h3>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
