"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronUp,
  Home,
  Layers,
  CreditCard,
  BookOpen,
  MessageSquare,
  HelpCircle,
  FileText,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { icon: <Home size={20} />, label: "الرئيسية", href: "/" },
    { icon: <Layers size={20} />, label: "المميزات", href: "/#features" },
    { icon: <CreditCard size={20} />, label: "الأسعار", href: "/#pricing" },
    { icon: <BookOpen size={20} />, label: "المدونة", href: "/#blog" },
    { icon: <MessageSquare size={20} />, label: "تواصل معنا", href: "/#contact" },
    { icon: <HelpCircle size={20} />, label: "الدعم", href: "/support" },
    { icon: <FileText size={20} />, label: "الشروط والأحكام", href: "/terms" },
    { icon: <Shield size={20} />, label: "سياسة الخصوصية", href: "/privacy" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="relative">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronUp size={24} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-2 flex flex-col gap-2 min-w-[200px] border border-gray-200 dark:border-gray-800">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 ${
                            pathname === item.href
                              ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                              : ""
                          }`}
                          onClick={() => setIsExpanded(false)}
                        >
                          <span className="text-indigo-600 dark:text-indigo-400">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
