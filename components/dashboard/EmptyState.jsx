import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmptyState({
  title = "لا توجد بيانات",
  description = "لم يتم العثور على أي بيانات للعرض.",
  icon: Icon,
  actionLabel,
  actionLink,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {Icon && (
        <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
          <Icon className="h-8 w-8 text-slate-500 dark:text-slate-400" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">{description}</p>
      {actionLabel && actionLink && (
        <Button asChild>
          <Link href={actionLink}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  )
}
