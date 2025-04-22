"use client"

import { createContext, useContext, useState, useEffect } from "react"

const MousePositionContext = createContext({
  mouseX: 0,
  mouseY: 0,
})

export function MousePositionProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
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
