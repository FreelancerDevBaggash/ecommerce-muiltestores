import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Skeleton } from '@/components/ui/skeleton'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function ProfitChart({ data, loading }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'تحليل الأرباح الشهرية',
      },
    },
  }

  const chartData = {
    labels: data?.map(item => item.month) || [],
    datasets: [
      {
        label: 'الإيرادات',
        data: data?.map(item => item.revenue) || [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'المصروفات',
        data: data?.map(item => item.expenses) || [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'صافي الربح',
        data: data?.map(item => item.profit) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  if (loading) {
    return <Skeleton className="w-full h-[300px]" />
  }

  return <Line options={options} data={chartData} />
}