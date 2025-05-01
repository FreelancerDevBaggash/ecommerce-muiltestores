import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PageHeader({
  title,
  description,
  actionLabel,
  actionLink,
  actionIcon: ActionIcon,
  backLink,
  backIcon: BackIcon,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        {backLink && BackIcon && (
          <Button variant="outline" size="icon" asChild className="h-8 w-8">
            <Link href={backLink}>
              <BackIcon className="h-4 w-4" />
              <span className="sr-only">رجوع</span>
            </Link>
          </Button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
          {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>}
        </div>
      </div>

      {actionLabel && actionLink && (
        <Button asChild>
          <Link href={actionLink} className="gap-2">
            {ActionIcon && <ActionIcon className="h-4 w-4" />}
            {actionLabel}
          </Link>
        </Button>
      )}
    </div>
  )
}
