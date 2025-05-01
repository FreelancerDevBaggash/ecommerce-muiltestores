import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function StatsCard({ title, value, icon: Icon, variant = "default" }) {
  const variants = {
    default: "bg-white dark:bg-gray-800",
    success: "bg-green-50 dark:bg-green-900/20",
    warning: "bg-amber-50 dark:bg-amber-900/20",
    danger: "bg-red-50 dark:bg-red-900/20"
  }
  
  const iconVariants = {
    default: "text-gray-600 dark:text-gray-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-amber-600 dark:text-amber-400",
    danger: "text-red-600 dark:text-red-400"
  }

  return (
    <Card className={cn(variants[variant], "border-0")}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", iconVariants[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}