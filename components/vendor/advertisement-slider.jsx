"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const advertisements = [
  {
    id: 1,
    title: "عروض خاصة لفترة محدودة",
    description: "احصل على خصم 50% عند التسجيل الآن",
    bgColor: "from-purple-600 to-indigo-700",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "ميزات جديدة متاحة الآن",
    description: "اكتشف أحدث الأدوات لتنمية متجرك",
    bgColor: "from-amber-500 to-orange-600",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "دعم فني على مدار الساعة",
    description: "فريق متخصص جاهز لمساعدتك في أي وقت",
    bgColor: "from-emerald-500 to-teal-700",
    textColor: "text-white",
  },
]

export default function AdvertisementSlider() {
  const [currentAd, setCurrentAd] = useState(0)
  const isPausedRef = useRef(false)
  const frameRef = useRef(null)
  const lastTimeRef = useRef(0)

  const nextAd = useCallback(() => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length)
  }, [])

  const prevAd = useCallback(() => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length)
  }, [])

  const animate = useCallback((timestamp) => {
    if (isPausedRef.current) return

    if (timestamp - lastTimeRef.current > 5000) {
      nextAd()
      lastTimeRef.current = timestamp
    }

    frameRef.current = requestAnimationFrame(animate)
  }, [nextAd])

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [animate])

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => {
        isPausedRef.current = false
        frameRef.current = requestAnimationFrame(animate)
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={`w-full bg-gradient-to-r ${advertisements[currentAd].bgColor} py-3 px-6 flex items-center justify-between`}
        >
          <div className="flex-1 text-center">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className={`font-bold ${advertisements[currentAd].textColor}`}
            >
              {advertisements[currentAd].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`text-sm ${advertisements[currentAd].textColor} opacity-90`}
            >
              {advertisements[currentAd].description}
            </motion.p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                prevAd()
              }}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous advertisement"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                nextAd()
              }}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next advertisement"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
        {advertisements.map((_, index) => (
          <motion.div
            key={index}
            className="h-1 rounded-full bg-white/50"
            initial={{ width: index === currentAd ? 0 : 12 }}
            animate={{
              width: index === currentAd ? 24 : 12,
              backgroundColor: index === currentAd ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentAd(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  )
}
