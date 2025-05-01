import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Skeleton } from '@/components/ui/skeleton'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function RevenueChart({ data=[], loading, detailed = false }) {
  const safeData = Array.isArray(data) ? data : []

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: detailed ? 'توزيع الإيرادات حسب طريقة الدفع' : 'الإيرادات الشهرية',
      },
    },
  }

  const chartData = {
    labels: safeData?.map(item => item.date) || [],
    datasets: [
      {
        label: 'نقدي',
        data: safeData?.map(item => item.cash) ?? 0,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'إلكتروني',
        data: safeData?.map(item => item.online) ?? 0,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  if (loading) {
    return <Skeleton className="w-full h-[300px]" />
  }

  return <Bar options={options} data={chartData} />
}