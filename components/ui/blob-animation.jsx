"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function BlobAnimation() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ filter: "blur(50px)" }}
      >
        <motion.circle
          cx="75"
          cy="30"
          r="20"
          fill={isDark ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.1)"}
          animate={{
            cx: [75, 70, 80, 75],
            cy: [30, 25, 35, 30],
            r: [20, 22, 18, 20],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="25"
          cy="70"
          r="15"
          fill={isDark ? "rgba(129, 140, 248, 0.2)" : "rgba(129, 140, 248, 0.1)"}
          animate={{
            cx: [25, 30, 20, 25],
            cy: [70, 75, 65, 70],
            r: [15, 17, 13, 15],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill={isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.05)"}
          animate={{
            cx: [50, 45, 55, 50],
            cy: [50, 45, 55, 50],
            r: [30, 32, 28, 30],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}
