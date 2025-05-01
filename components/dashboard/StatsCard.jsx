import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatsCard({ title, value, icon: Icon, change, trend = "up", subtitle, isLoading = false }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
            {subtitle && <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>}
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
              {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2">
              {change && (
                <span
                  className={`text-xs font-medium ${
                    trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {change}
                </span>
              )}
              {Icon && (
                <div
                  className={`p-2 rounded-full ${
                    trend === "up"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
