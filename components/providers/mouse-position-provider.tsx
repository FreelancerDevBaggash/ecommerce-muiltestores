"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface MousePositionContextType {
  mouseX: number
  mouseY: number
}

const MousePositionContext = createContext<MousePositionContextType>({
  mouseX: 0,
  mouseY: 0,
})

export function MousePositionProvider({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <MousePositionContext.Provider value={{ mouseX: mousePosition.x, mouseY: mousePosition.y }}>
      {children}
    </MousePositionContext.Provider>
  )
}

export const useMousePosition = () => useContext(MousePositionContext)
