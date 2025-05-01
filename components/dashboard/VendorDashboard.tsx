import { Package, ShoppingBag, TrendingUp, Users } from "lucide-react"

interface VendorDashboardProps {
  sales: any[]
  products: any[]
}

export default function VendorDashboard({ sales, products }: VendorDashboardProps) {
  // Calculate metrics
  const totalSales = sales.reduce((acc, sale) => acc + sale.total, 0).toFixed(2)
  const totalProducts = products.length
  const totalCustomers = [...new Set(sales.map((sale) => sale.customerId))].length
  const averageOrderValue =
    sales.length > 0 ? (sales.reduce((acc, sale) => acc + sale.total, 0) / sales.length).toFixed(2) : 0

  const metrics = [
    {
      title: "إجمالي المبيعات",
      value: `${totalSales} ر.ي`,
      icon: TrendingUp,
      change: "+12.5%",
      isPositive: true,
    },
    {
      title: "عدد المنتجات",
      value: totalProducts,
      icon: Package,
      change: "+4.3%",
      isPositive: true,
    },
    {
      title: "العملاء",
      value: totalCustomers,
      icon: Users,
      change: "+18.2%",
      isPositive: true,
    },
    {
      title: "متوسط قيمة الطلب",
      value: `${averageOrderValue} ر.ي`,
      icon: ShoppingBag,
      change: "-2.4%",
      isPositive: false,
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">ملخص المتجر</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon

          return (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                  <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.title}</p>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mt-1">{metric.value}</h4>
                </div>
              </div>

              <div
                className={`mt-3 text-sm font-medium ${
                  metric.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {metric.change} من الشهر الماضي
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
