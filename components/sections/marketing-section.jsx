"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { Search, Share2, BarChart3, Megaphone } from "lucide-react"

export default function MarketingSection() {
  const sectionRef = useRef(null)
  const parallaxRef = useRef(null)
  const lottieRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const marketingFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "تحسين محركات البحث",
      description: "أدوات متكاملة لتحسين ظهور متجرك في نتائج البحث وزيادة الزيارات.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "التواصل الاجتماعي",
      description: "تكامل مع منصات التواصل الاجتماعي لزيادة الوصول وتعزيز التفاعل مع العملاء.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "تحليلات الأداء",
      description: "تقارير مفصلة عن أداء حملاتك التسويقية لاتخاذ قرارات مبنية على البيانات.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "إعلانات مدفوعة",
      description: "إدارة سهلة للحملات الإعلانية المدفوعة عبر مختلف المنصات.",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load marketing Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/marketing.json",
    })

    // Parallax effect for marketing image
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        { y: 100 },
        {
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      )
    }

    // Animate marketing features
    const features = document.querySelectorAll(".marketing-feature")
    features.forEach((feature, index) => {
      gsap.from(feature, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2,
      })
    })

    return () => {
      anim.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" id="marketing">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 -z-10"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            التسويق <span className="text-indigo-600 dark:text-indigo-400">الذكي</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            أدوات تسويقية متكاملة تساعدك على الوصول إلى عملائك المستهدفين وزيادة مبيعاتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Marketing image with parallax */}
          <motion.div style={{ opacity }} className="order-2 lg:order-1">
            <div className="relative h-[400px]">
              <motion.div ref={parallaxRef} style={{ y }} className="absolute inset-0">
                <div ref={lottieRef} className="w-full h-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Marketing features */}
          <div className="order-1 lg:order-2 space-y-6">
            {marketingFeatures.map((feature, index) => (
              <GlassMorphism key={index} className="p-4 marketing-feature">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </GlassMorphism>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
