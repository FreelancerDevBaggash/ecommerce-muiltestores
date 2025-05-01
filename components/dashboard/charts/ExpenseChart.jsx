import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Skeleton } from '@/components/ui/skeleton'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

export default function ExpenseChart({ data=[], loading }) {
  const safeData = Array.isArray(data) ? data : []

  const chartData = {
    labels: safeData?.map(item => item.category) || [],
    datasets: [
      {
        label: 'المصروفات',
        data: safeData?.map(item => item.amount) || [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  }

  if (loading) {
    return <Skeleton className="w-full h-[300px]" />
  }

  return <Pie data={chartData} />
}