import { User } from "lucide-react"

interface DashboardHeaderProps {
  title: string
  userType?: string | null
}

export default function DashboardHeader({ title, userType }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">{title}</h1>

      {userType && (
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
          <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {userType === "VENDOR" ? "حساب بائع" : "حساب عميل"}
          </span>
        </div>
      )}
    </div>
  )
}
