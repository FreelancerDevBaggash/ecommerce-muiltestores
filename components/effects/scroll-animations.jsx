"use client"

import React from "react"

import { useState } from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform, useAnimation } from "framer-motion"

// Fade In Animation
export function FadeIn({ children, delay = 0, duration = 0.5, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// Slide In Animation
export function SlideIn({ children, direction = "up", delay = 0, duration = 0.5, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// Zoom Animation
export function Zoom({ children, delay = 0, duration = 0.5, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// Rotate Animation
export function Rotate({ children, delay = 0, duration = 0.5, threshold = 0.1, degrees = 360 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: 0 }}
      animate={isInView ? { opacity: 1, rotate: degrees } : { opacity: 0, rotate: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// Parallax Effect
export function Parallax({ children, speed = 0.5 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  )
}

// Staggered Animation
export function Stagger({ children, delay = 0.1, staggerDelay = 0.1, threshold = 0.1 }) {
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
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}

// Text Typing Animation
export function TypeText({ text, delay = 0, speed = 0.05, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { delay },
      })
    }
  }, [isInView, controls, delay])

  const characters = Array.from(text)

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      <motion.span className="inline-block">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, delay: delay + index * speed }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  )
}

// Scroll Triggered Counter
export function Counter({ from = 0, to = 100, duration = 2, delay = 0, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * (to - from) + from))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      const startAnimation = () => {
        animationFrame = requestAnimationFrame(step)
      }

      const timeoutId = setTimeout(startAnimation, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, from, to, duration, delay])

  return <div ref={ref}>{count}</div>
}

// SVG Path Drawing Animation
export function DrawSVG({ children, duration = 2, delay = 0, threshold = 0.1 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration, delay },
        opacity: { duration: 0.2, delay },
      },
    },
  }

  return (
    <motion.svg ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-full h-full">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variants: pathVariants,
          })
        }
        return child
      })}
    </motion.svg>
  )
}
