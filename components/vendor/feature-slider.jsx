"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// بيانات الكروت
const cards = [
  {
    id: 1,
    title: "توفير أكثر من خدمة  ",
    description: "لوحة واحدة من حلول المنصة الذكية التي تسهل على التاجر إنجاز أعماله بسرعة وذكاء.",
    image: "/images/login.svg",
  },
  {
    id: 2,
    title: "تحديث جديد لتقارير المخزون",
    description: "يساعدك التحديث في عرض تقارير المخزون الخاص بك بكفاءة عالية .",
    image: "/images/inv.png",
  },
  {
    id: 3,
    title: "نظام إدارة العملاء",
    description: "نظام يساعدك في إدارة علاقاتك مع العملاء بكفاءة وسهولة.",
    image: "/images/customer.png",
  },
  {
    id: 4,
    title: "تحليل المبيعات",
    description: "اكتشف طرق تحليل المبيعات لتحسين أداء الأعمال واتخاذ قرارات مستنيرة.",
    image: "/images/sales.png",
  },
]

export default function FeatureSlider() {
  const [currentCard, setCurrentCard] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentCard((prev) => (prev + 1) % cards.length)
      }, 3000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="relative w-auto p-4 rtl" dir="rtl">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">ألقي نظرة على آخر تحديثات المنصة</h1>

      <div
        className="relative h-96 flex justify-center items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentCard}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={cards[currentCard].image || "/placeholder.svg"}
                    alt={cards[currentCard].title}
                    className="rounded-lg object-fill"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <p className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cards[currentCard].title}</p>
                <p className="text-gray-600 dark:text-gray-300">{cards[currentCard].description}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <motion.span
            key={index}
            className="w-3 h-3 rounded-full cursor-pointer"
            animate={{
              backgroundColor: index === currentCard ? "#4f46e5" : "#d1d5db",
              scale: index === currentCard ? 1.2 : 1,
            }}
            onClick={() => {
              setDirection(index > currentCard ? 1 : -1)
              setCurrentCard(index)
            }}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <motion.a
          href="#"
          className="text-indigo-500 hover:underline dark:text-indigo-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          عرض كل التحديثات
        </motion.a>
      </div>
    </div>
  )
}
