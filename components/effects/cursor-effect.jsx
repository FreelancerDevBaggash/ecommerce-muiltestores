"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/components/providers/mouse-position-provider"

export default function CursorEffect() {
  const { mouseX, mouseY } = useMousePosition()
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const handleLinkHover = () => setCursorVariant("link")
    const handleLinkLeave = () => setCursorVariant("default")

    const links = document.querySelectorAll("a, button")
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
      mixBlendMode: "difference",
    },
    link: {
      x: mouseX - 32,
      y: mouseY - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(99, 102, 241, 0.4)",
      mixBlendMode: "difference",
    },
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}
