"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/components/providers/mouse-position-provider"

export function CursorEffect() {
  const { mouseX, mouseY } = useMousePosition()
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // تغيير شكل المؤشر عند التحويم فوق العناصر القابلة للنقر
    const handleLinkHover = () => setCursorVariant("link")
    const handleLinkLeave = () => setCursorVariant("default")

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const links = document.querySelectorAll("a, button, [role=button]")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mouseX - 16,
      y: mouseY - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      mixBlendMode: "normal",
    },
    link: {
      x: mouseX - 24,
      y: mouseY - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(99, 102, 241, 0.4)",
      mixBlendMode: "difference",
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      style={{ opacity: isVisible ? 1 : 0 }}
    />
  )
}

export default CursorEffect
