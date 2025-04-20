"use client"

import React, { forwardRef, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Smartphone, LayoutDashboard, CreditCard, TrendingUp, ShieldCheck, Truck, Globe, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
// import featureLottieData from "@/public/animations/features-animation.json" // إذا كنت تستخدم لوتي للأنيميشن العام

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const featuresRef = useRef([])

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "تصميم متجاوب",
      description: "متجرك يعمل بشكل مثالي على جميع الأجهزة من الهواتف الذكية إلى أجهزة الكمبيوتر.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
      lottie: "/animations/cart.json",
    },
    {
      icon: <LayoutDashboard className="h-8 w-8" />,
      title: "لوحة تحكم سهلة",
      description: "واجهة بسيطة وسهلة الاستخدام تمكنك من إدارة متجرك بكفاءة دون تعقيدات تقنية.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "بوابات دفع متعددة",
      description: "تكامل سلس مع جميع بوابات الدفع المحلية والعالمية لتسهيل عملية الشراء.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "تقارير وتحليلات",
      description: "لوحة تحكم ذكية تعرض إحصائيات المبيعات والزيارات وسلوك المستخدمين.",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "حماية وأمان",
      description: "حماية متقدمة لبيانات متجرك وعملائك مع شهادات SSL وتشفير البيانات.",
      color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "إدارة الشحن",
      description: "تكامل مع شركات الشحن المحلية والعالمية مع خيارات متعددة للتوصيل.",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "تحسين محركات البحث",
      description: "أدوات متكاملة لتحسين ظهور متجرك في نتائج البحث وزيادة الزيارات.",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "إدارة العملاء",
      description: "أدوات متكاملة لإدارة قاعدة عملائك وبناء علاقات طويلة الأمد معهم.",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const featureElements = featuresRef.current
    featureElements.forEach((feature, index) => {
      gsap.from(feature, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            مميزات <span className="text-indigo-600 dark:text-indigo-400">منصة أتجر</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نقدم لك مجموعة متكاملة من المميزات التي تساعدك على إنشاء وإدارة متجرك الإلكتروني بكفاءة عالية
          </p>

          {/* لوتي الأساسي (اختياري) */}
          <div className="mt-8 max-w-md mx-auto">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} ref={(el) => (featuresRef.current[index] = el)} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = forwardRef(({ feature, index }, ref) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const lottieContainerRef = useRef(null)

  useEffect(() => {
    let anim
    if (isInView && feature.lottie) {
      try {
        anim = Lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: feature.lottie,
        })
      } catch (error) {
        console.error("Lottie load error:", error)
      }
    }
    return () => anim?.destroy()
  }, [isInView, feature.lottie])

  return (
    <motion.div
      ref={(el) => {
        cardRef.current = el
        if (typeof ref === "function") ref(el)
        else if (ref) ref.current = el
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -10 }}
    >
      <div className="p-6">
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", feature.color)}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
        <div
          ref={lottieContainerRef}
          className="w-full h-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-l from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </motion.div>
  )
})

FeatureCard.displayName = "FeatureCard"
