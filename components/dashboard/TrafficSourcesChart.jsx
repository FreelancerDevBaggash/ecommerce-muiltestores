"use client"

import { useState, useEffect } from "react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export default function TrafficSourcesChart() {
  const [isLoading, setIsLoading] = useState(true)
  const [trafficData, setTrafficData] = useState([])
  const [activeTab, setActiveTab] = useState("pie")

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrafficData([
        { name: "بحث عضوي", value: 42, color: "#0ea5e9" },
        { name: "التواصل الاجتماعي", value: 28, color: "#9333ea" },
        { name: "زيارة مباشرة", value: 15, color: "#10b981" },
        { name: "إحالات", value: 10, color: "#f59e0b" },
        { name: "البريد", value: 5, color: "#ef4444" },
      ])
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const CustomTooltip = ({ active, payload }) =>
    active && payload && payload.length ? (
      <div className="bg-white shadow-md rounded-md p-3 text-sm text-gray-800">
        <p className="font-semibold">{payload[0].name}</p>
        <p>{payload[0].value}% من الزيارات</p>
      </div>
    ) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-xl bg-white dark:bg-slate-900 p-6"
    >
      <div className="flex items-center mb-4">
        <Globe className="text-sky-500 mr-2" />
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">مصادر الزيارات</h2>
      </div>

      <Tabs defaultValue="pie" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
          <TabsTrigger value="pie" className="data-[state=active]:bg-sky-100 dark:data-[state=active]:bg-sky-800 data-[state=active]:text-sky-500">
            مخطط دائري
          </TabsTrigger>
          <TabsTrigger value="bar" className="data-[state=active]:bg-sky-100 dark:data-[state=active]:bg-sky-800 data-[state=active]:text-sky-500">
            مخطط شريطي
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pie">
          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent border-l-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </TabsContent>

        <TabsContent value="bar">
          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent border-l-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value">
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
