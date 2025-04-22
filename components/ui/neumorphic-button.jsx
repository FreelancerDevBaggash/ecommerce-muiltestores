"use client"

import { cn } from "@/lib/utils"

export function NeumorphicButton({ children, className, intensity = "medium", ...props }) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl bg-indigo-50 dark:bg-slate-800 transition-all duration-200 hover:shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff] dark:hover:shadow-[inset_6px_6px_12px_#131620,inset_-6px_-6px_12px_#1e2134] active:shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff] dark:active:shadow-[inset_6px_6px_12px_#131620,inset_-6px_-6px_12px_#1e2134]",
        intensity === "light" &&
          "shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#131620,-6px_-6px_12px_#1e2134]",
        intensity === "medium" &&
          "shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#131620,-8px_-8px_16px_#1e2134]",
        intensity === "strong" &&
          "shadow-[10px_10px_20px_#d1d1d1,-10px_-10px_20px_#ffffff] dark:shadow-[10px_10px_20px_#131620,-10px_-10px_20px_#1e2134]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
