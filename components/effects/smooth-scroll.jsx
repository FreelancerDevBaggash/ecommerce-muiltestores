"use client"

import { useEffect } from "react"

export function SmoothScroll({ children }) {
  useEffect(() => {
    // إزالة شريط التمرير الزائد في الجانب الأيسر
    document.documentElement.style.overflowX = "hidden"
    document.body.style.overflowX = "hidden"
  }, [])

  return <>{children}</>
}
