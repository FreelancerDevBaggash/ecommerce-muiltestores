"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function NeuMorphism({ children, className, ...props }) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <motion.div
      className={cn(
        "neumorphism relative rounded-xl overflow-hidden",
        isDark ? "bg-gray-800" : "bg-gray-50",
        className,
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
