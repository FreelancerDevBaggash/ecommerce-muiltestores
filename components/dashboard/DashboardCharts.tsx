"use client"
import SalesChart from "./charts/SalesChart"
import ProductsChart from "./charts/ProductsChart"

interface DashboardChartsProps {
  sales: any[]
  products: any[]
}

export default function DashboardCharts({ sales, products }: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <SalesChart sales={sales} />
      <ProductsChart products={products} />
    </div>
  )
}
