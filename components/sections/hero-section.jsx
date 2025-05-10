"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useMousePosition } from "@/components/providers/mouse-position-provider"
import { BlobAnimation } from "@/components/ui/blob-animation"
import { gsap } from "gsap"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { NeuMorphism } from "@/components/ui/neu-morphism"
import { TextReveal } from "@/components/effects/text-reveal"
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  const { mouseX, mouseY } = useMousePosition()

  useEffect(() => {
    // رسوم متحركة باستخدام GSAP لعناصر القسم الرئيسي
    const tl = gsap.timeline()
    tl.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
      .from(".hero-description", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-buttons", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-stats", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-image-container", { opacity: 0, scale: 0.9, duration: 1, ease: "power3.out" }, "-=0.8")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex font-arabic items-center justify-center overflow-hidden pt-20"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <BlobAnimation />
      </div>

      {/* المحتوى */}
      <div className="container mx-auto font-arabic px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* محتوى النص */}
          <motion.div style={{ opacity, scale }} className="text-center font-arabic lg:text-right">
            <TextReveal>
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-200">
                ابدأ تجارتك الإلكترونية مع أتجر بسهولة واحترافية
              </h1>
            </TextReveal>

            <motion.p
              className="hero-description text-xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              منصة متكاملة تمنحك كل ما تحتاجه لإنشاء متجر إلكتروني احترافي وإدارته بكفاءة عالية
            </motion.p>

            <motion.div
              className="hero-buttons flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NeuMorphism>
              <Link href="/register">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  أنشئ متجرك الآن مجاناً
                </Button>
                </Link>
              </NeuMorphism>
              <GlassMorphism>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
                >
                  تعرف على المزيد
                </Button>
              </GlassMorphism>
            </motion.div>

            <motion.div
              className="hero-stats mt-8 flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-4 space-x-reverse rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200 dark:bg-gray-700"
                  >
                <Image
  src={`/images/pic.svg`}
  alt={`User ${i}`}
  width={40}
  height={40}
/>

                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">+1000</span> تاجر يستخدمون أتجر
              </div>
            </motion.div>
          </motion.div>

          {/* صورة/معاينة لوحة التحكم - استبدال Lottie بصورة ثابتة */}
          <motion.div style={{ y, opacity, scale }} className="relative hero-image-container">
            <motion.div
              className="relative"
              style={{
                transform:
                  mouseX && mouseY
                    ? `perspective(1000px) rotateY(${(mouseX - window.innerWidth / 2) / 50}deg) rotateX(${(window.innerHeight / 2 - mouseY) / 50}deg)`
                    : "none",
              }}
            >
              {/* تأثير زجاجي */}
              <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl transform -rotate-2 scale-105"></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2 space-x-reverse">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  {/* استبدال Lottie بصورة ثابتة */}
                  <div className="w-full h-[350px] relative">
                    <Image
                      src="/images/pic.svg"
                      alt="لوحة تحكم أتجر"
                      fill
                      className="object-contain"
                    />


                  </div>
                </div>
              </div>
            </motion.div>

            {/* عناصر عائمة */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                transform:
                  mouseX && mouseY
                    ? `perspective(1000px) rotateX(${(window.innerHeight / 2 - mouseY) / 30}deg) rotateY(${(mouseX - window.innerWidth / 2) / 30}deg)`
                    : "none",
              }}
            >
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">زيادة المبيعات</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">+200% في 3 أشهر</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                transform:
                  mouseX && mouseY
                    ? `perspective(1000px) rotateX(${(window.innerHeight / 2 - mouseY) / 40}deg) rotateY(${(mouseX - window.innerWidth / 2) / 40}deg)`
                    : "none",
              }}
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">تحليلات متقدمة</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">رؤى تساعدك على النمو</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* مؤشر التمرير */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-indigo-600 dark:border-indigo-400 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
