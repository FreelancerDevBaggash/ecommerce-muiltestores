"use client"

import { motion } from "framer-motion"

export function Logo({ className }: { className?: string }) {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.circle
        cx="20"
        cy="20"
        r="16"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M15 20L18 23L25 16"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      />
      <defs>
        <linearGradient id="gradient" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
