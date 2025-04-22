"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function GlassMorphism({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "glass relative backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl shadow-lg overflow-hidden",
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
