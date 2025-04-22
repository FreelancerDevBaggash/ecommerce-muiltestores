import React from "react"
;('"use client')

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function RevealOnScroll({ children, className, delay = 0, threshold = 0.1, ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function TextReveal({ text, className, delay = 0, ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function ClippingReveal({ children, className, direction = "bottom", delay = 0, ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const getClipPath = () => {
    switch (direction) {
      case "top":
        return {
          hidden: "inset(100% 0 0 0)",
          visible: "inset(0 0 0 0)",
        }
      case "right":
        return {
          hidden: "inset(0 100% 0 0)",
          visible: "inset(0 0 0 0)",
        }
      case "bottom":
        return {
          hidden: "inset(0 0 100% 0)",
          visible: "inset(0 0 0 0)",
        }
      case "left":
        return {
          hidden: "inset(0 0 0 100%)",
          visible: "inset(0 0 0 0)",
        }
      default:
        return {
          hidden: "inset(100% 0 0 0)",
          visible: "inset(0 0 0 0)",
        }
    }
  }

  const clipPath = getClipPath()

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: clipPath.hidden }}
      animate={isInView ? { clipPath: clipPath.visible } : { clipPath: clipPath.hidden }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredReveal({ children, delay = 0.1, staggerDelay = 0.1, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
