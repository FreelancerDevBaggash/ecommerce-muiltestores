"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function NeumorphicCard({ children, className, intensity = "medium", interactive = true, ...props }) {
  const [isPressed, setIsPressed] = useState(false)

  // تحديد شدة الظلال بناءً على المستوى المطلوب
  const getShadowIntensity = () => {
    const lightMode = {
      light: "shadow-[2px_2px_2px_#d1d1d1,-2px_-2px_2px_#ffffff]",
      medium: "shadow-[2px_2px_2px_#d1d1d1,-2px_-2px_2px_#ffffff]",
      strong: "shadow-[1px_1px_1px_#d1d1d1,-1px_-1px_1px_#ffffff]",
    }

    const darkMode = {
      light: "dark:shadow-[1px_1px_2px_#131620,-2px_-3px_2px_#1e2134]",
      medium: "dark:shadow-[2px_2px_5px_#131620,-5px_-3px_2px_#1e2134]",
      strong: "dark:shadow-[1px_1px_2px_#131620,-1px_-1px_2px_#1e2134]",
    }

    return `${lightMode[intensity]} ${darkMode[intensity]}`
  }

  // تحديد شدة الظلال الداخلية عند الضغط
  const getPressedShadow = () => {
    const lightMode = "shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff]"
    const darkMode = "dark:shadow-[inset_6px_6px_12px_#131620,inset_-6px_-6px_12px_#1e2134]"

    return `${lightMode} ${darkMode}`
  }

  return (
    <div
      className={cn(
        "rounded-xl bg-slate-50 dark:bg-slate-800 transition-all duration-200",
        isPressed && interactive ? getPressedShadow() : getShadowIntensity(),
        className,
      )}
      onMouseDown={() => interactive && setIsPressed(true)}
      onMouseUp={() => interactive && setIsPressed(false)}
      onMouseLeave={() => interactive && setIsPressed(false)}
      {...props}
    >
      {children}
    </div>
  )
}

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

export function NeumorphicInput({ className, ...props }) {
  return (
    <input
      className={cn(
        "px-6 py-3 rounded-xl outline-none transition-all duration-200 bg-indigo-50 dark:bg-indigo-800 text-gray-900 dark:text-white shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#131620,inset_-4px_-4px_8px_#1e2134] focus:shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff] dark:focus:shadow-[inset_6px_6px_12px_#131620,inset_-6px_-6px_12px_#1e2134]",
        className,
      )}
      {...props}
    />
  )
}
