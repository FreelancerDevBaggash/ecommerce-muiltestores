"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Card3DTilt({ children, className, intensity = 1, glare = false, ...props }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // تحويل الموقع إلى درجات دوران (مع تعديل الشدة)
    const rotateXValue = (-mouseY / (rect.height / 2)) * 10 * intensity
    const rotateYValue = (mouseX / (rect.width / 2)) * 10 * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    // حساب موقع التوهج
    if (glare) {
      const glareX = (mouseX / rect.width) * 100 + 50
      const glareY = (mouseY / rect.height) * 100 + 50
      setGlarePosition({ x: glareX, y: glareY })
    }
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}

      {glare && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
            opacity: Math.sqrt(rotateX * rotateX + rotateY * rotateY) / 10,
          }}
        />
      )}
    </motion.div>
  )
}
