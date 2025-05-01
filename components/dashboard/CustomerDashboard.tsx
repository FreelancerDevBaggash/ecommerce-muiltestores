import { ShoppingBag, Clock, CheckCircle, Package } from "lucide-react"

export default function CustomerDashboard() {
  // Sample customer metrics
  const metrics = [
    {
      title: "الطلبات الكلية",
      value: 12,
      icon: ShoppingBag,
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "قيد التنفيذ",
      value: 3,
      icon: Clock,
      color: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "تم التسليم",
      value: 8,
      icon: CheckCircle,
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "المنتجات المفضلة",
      value: 5,
      icon: Package,
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">مرحباً بك في لوحة التحكم</h3>
        </div>

        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300">
            مرحباً بك في لوحة تحكم العميل. يمكنك متابعة طلباتك وإدارة حسابك من هنا.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon

          return (
            <div
              key={index}
              className={`rounded-lg shadow-sm p-6 ${metric.color} border border-gray-100 dark:border-gray-800`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{metric.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">{metric.value}</h3>
                </div>
                <div className={`p-3 rounded-full ${metric.color}`}>
                  <Icon className={`h-6 w-6 ${metric.iconColor}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">آخر الطلبات</h3>
        </div>

        <div className="p-6 text-center text-gray-500 dark:text-gray-400">لا توجد طلبات حديثة</div>
      </div>
    </div>
  )
}
