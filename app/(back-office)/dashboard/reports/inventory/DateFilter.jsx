"use client"
import { useRouter } from "next/navigation"

export default function DateFilter({ initialPeriod }) {
  const router = useRouter()
  
  const handleChange = (e) => {
    router.push(`?period=${e.target.value}`)
  }

  return (
    <select 
      defaultValue={initialPeriod}
      onChange={handleChange}
      className="px-3 py-2 border rounded-lg bg-white"
    >
      <option value="7d">آخر 7 أيام</option>
      <option value="30d">آخر 30 يوم</option>
      <option value="90d">آخر 90 يوم</option>
    </select>
  )
}