
// File: components/FeaturesSection.jsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  FaBox,
  FaUsers,
  FaCube,
  FaPalette,
  FaChartLine,
  FaShoppingCart,
  FaCashRegister,
  FaMobileAlt,
} from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const managementSystems = [
    {
      title: "إدارة الطلبات",
      description: "نظام متكامل لمتابعة وتنفيذ الطلبات بدءًا من الاستلام حتى التسليم",
      icon: <FaBox className="w-12 h-12 text-indigo-600" />,
      features: [
        "تتبع الطلبات في الوقت الفعلي",
        "إشعارات تلقائية للعملاء",
        "إدارة الشحنات والمرتجعات",
        "تقارير أداء المبيعات",
      ],
    },
    {
      title: "إدارة العملاء",
      description: "نظام CRM متقدم لإدارة علاقات العملاء وتحليل السلوك",
      icon: <FaUsers className="w-12 h-12 text-green-600" />,
      features: [
        "سجل عملاء تفاعلي",
        "تجزئة العملاء الذكية",
        "نظام الولاء والمكافآت",
        "تحليل السلوك الشرائي",
      ],
    },
    {
      title: "إدارة المنتجات",
      description: "منصة مركزية لإدارة كتالوج المنتجات والمخزون",
      icon: <FaCube className="w-12 h-12 text-blue-600" />,
      features: [
        "إدارة متعددة المخازن",
        "تحديثات المخزون التلقائية",
        "نظام التصنيف الذكي",
        "إدارة العروض والتخفيضات",
      ],
    },
    {
      title: "نظام التخصيص",
      description: "أدوات تخصيص متقدمة لواجهة المتجر وتجربة المستخدم",
      icon: <FaPalette className="w-12 h-12 text-purple-600" />,
      features: [
        "مصمم الواجهات المرئي",
        "إعدادات السمة الديناميكية",
        "المحتوى المخصص حسب الجمهور",
        "إدارة الإصدارات والنسخ",
      ],
    },
  ]

  const stats = [
    { title: "زيادة المبيعات", value: "75%", icon: <FaChartLine className="w-8 h-8" />, image: "/images/stats1.webp" },
    { title: "عملاء جدد", value: "+10K", icon: <FaShoppingCart className="w-8 h-8" />, image: "/images/stats2.webp" },
    { title: "إيرادات متوقعة", value: "1M+", icon: <FaCashRegister className="w-8 h-8" />, image: "/images/stats3.webp" },
    { title: "استخدام الجوال", value: "90%", icon: <FaMobileAlt className="w-8 h-8" />, image: "/images/stats4.webp" },
  ]

  // Variants for staggering groups
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 bg-gradient-to-b from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="text-center mb-20">
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              أنظمة إدارة متكاملة
            </span>
            <br />
            لإدارة كافة جوانب متجرك
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            نظام إدارة شامل يوفر تحكمًا كاملاً في عملياتك اليومية ويسهل إدارة كافة جوانب متجرك الإلكتروني
          </motion.p>
        </motion.div>

        {/* أنظمة الإدارة */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {managementSystems.map((sys, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="group border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden h-full flex flex-col">
                <CardHeader className="flex flex-col items-center px-4 pt-6 pb-2 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-indigo-200">
                    {sys.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white">
                    {sys.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-300 mt-2">
                    {sys.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-6 flex-grow">
                  <ul className="space-y-2 sm:space-y-3">
                    {sys.features.map((feat, f) => (
                      <li key={f} className="flex items-start text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* إحصائيات مع الصور */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex flex-col">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-shrink-0">
                <div className="p-2 sm:p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{stat.title}</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                </div>
              </div>
              <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden flex-grow">
                <Image
                  src={stat.image}
                  alt={stat.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* لوحة التحكم */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 mx-auto max-w-7xl"
        >
          <motion.div variants={itemVariants} className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-4 sm:border-8 border-white dark:border-gray-800">
            <Image
              src="/images/dash.png"
              alt="لوحة التحكم"
              fill
              className="object-fill"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
