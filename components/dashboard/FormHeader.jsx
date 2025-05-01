"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function FormHeader({ title }) {
  const router = useRouter()

  return (
    <div dir="rtl" className="flex items-center flex items-center justify-between py-6
    px-12 bg-white text-slate-700 dark:text-slate-50
    dark:bg-slate-700 rounded-lg shadow mb-12 justify-between py-4 px-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
      <Button variant="ghost" size="icon" onClick={() => router.back()}>
        <X className="h-5 w-5" />
        <span className="sr-only">إغلاق</span>
      </Button>
    </div>
  )
}
