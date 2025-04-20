"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import { NeuMorphism } from "@/components/ui/neu-morphism"
import { Package, Tag, BarChart2, Archive } from "lucide-react"

export default function ProductManagementSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const horizontalRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load product management Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/product-management.json",
    })

    // Horizontal scroll effect
    if (horizontalRef.current) {
      const sections = horizontalRef.current.querySelectorAll(".horizontal-section")

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + horizontalRef.current.offsetWidth,
        },
      })
    }

    return () => {
      anim.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "إدارة المنتجات",
      description: "أضف وعدل منتجاتك بسهولة مع خيارات متعددة للعرض والتصنيف والتخصيص.",
      image: "/placeholder.svg?height=300&width=400&text=إدارة+المنتجات",
    },
    {
      icon: <Tag className="h-8 w-8" />,
      title: "إدارة الأسعار",
      description: "تحكم في أسعار منتجاتك وأنشئ عروض وخصومات بسهولة.",
      image: "/placeholder.svg?height=300&width=400&text=إدارة+الأسعار",
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "إدارة المخزون",
      description: "تتبع مخزونك بدقة وتلقي تنبيهات عند انخفاض الكميات.",
      image: "/placeholder.svg?height=300&width=400&text=إدارة+المخزون",
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "إدارة الطلبات",
      description: "تتبع طلبات العملاء من لحظة الشراء وحتى التسليم.",
      image: "/placeholder.svg?height=300&width=400&text=إدارة+الطلبات",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="product-management">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            إدارة <span className="text-indigo-600 dark:text-indigo-400">المنتجات</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            أدوات متكاملة لإدارة منتجاتك ومخزونك وطلباتك بكفاءة عالية
          </p>

          {/* Main Lottie Animation */}
          <div className="max-w-md mx-auto mt-8">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </motion.div>

        {/* Horizontal scroll section */}
        <div ref={horizontalRef} className="relative h-[500px] overflow-hidden">
          <div className="absolute top-0 left-0 flex h-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="horizontal-section w-screen h-full flex items-center justify-center flex-shrink-0"
              >
                <NeuMorphism className="p-8 max-w-4xl w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>

                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-center">
                            <svg
                              className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-400">
                              ميزة {item} في {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </NeuMorphism>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400 animate-pulse">
          <p>← مرر للمزيد →</p>
        </div>
      </div>
    </section>
  )
}
