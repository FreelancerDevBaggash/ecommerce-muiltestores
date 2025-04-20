"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { BarChart, PieChart, LineChart, TrendingUp } from "lucide-react"

export default function AnalyticsSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const chartRefs = useRef([])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const charts = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "تحليل المبيعات",
      description: "تتبع مبيعاتك وتحليلها حسب الفترة والمنتج والعميل.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
      lottie: "/animations/bar-chart.json",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "تحليل العملاء",
      description: "فهم سلوك عملائك وتفضيلاتهم لتحسين استراتيجيتك التسويقية.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
      lottie: "/animations/pie-chart.json",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "تحليل الزيارات",
      description: "تتبع زيارات متجرك ومعرفة مصادر الزيارات وسلوك المتصفحين.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
      lottie: "/animations/line-chart.json",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "تقارير الأداء",
      description: "تقارير شاملة عن أداء متجرك لاتخاذ قرارات مبنية على البيانات.",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
      lottie: "/animations/trending-chart.json",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load main analytics Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/cart.json",
    })

    // Load chart-specific Lottie animations
    chartRefs.current.forEach((chartRef, index) => {
      if (chartRef) {
        try {
          Lottie.loadAnimation({
            container: chartRef,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: charts[index].lottie,
          })
        } catch (error) {
          console.error("Failed to load chart animation:", error)
        }
      }
    })

    // Staggered animation for charts
    const chartElements = document.querySelectorAll(".analytics-chart")
    gsap.from(chartElements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      anim.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [charts])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" id="analytics">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            تحليلات <span className="text-indigo-600 dark:text-indigo-400">وتقارير</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            تقارير تفصيلية ولوحات تحكم ذكية تساعدك على فهم أداء متجرك واتخاذ القرارات الصحيحة
          </p>

          {/* Main Lottie Animation */}
          <div className="max-w-md mx-auto mt-8">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {charts.map((chart, index) => (
            <motion.div key={index} style={{ y: y, opacity: opacity }} className="analytics-chart">
              <GlassMorphism className="p-6 h-full">
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${chart.color}`}>
                    {chart.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{chart.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{chart.description}</p>
                  </div>
                </div>

                {/* Chart-specific Lottie animation */}
                <div ref={(el) => (chartRefs.current[index] = el)} className="w-full h-[200px] mt-4"></div>
              </GlassMorphism>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
