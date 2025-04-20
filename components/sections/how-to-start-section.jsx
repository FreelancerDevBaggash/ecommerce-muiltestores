// "use client"

// import React, { forwardRef, useRef, useEffect } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { UserPlus, Paintbrush, Package, Rocket, ArrowRight } from "lucide-react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Lottie from "lottie-web"
// import { GlassMorphism } from "@/components/ui/glass-morphism"

// export default function HowToStartSection() {
//   const sectionRef = useRef(null)
//   const timelineRef = useRef(null)
//   const stepsRefs = useRef([])

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const steps = [
//     {
//       icon: <UserPlus className="h-8 w-8" />,
//       title: "التسجيل",
//       description: "أنشئ حسابك مجاناً في أقل من دقيقة واستكشف المنصة",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
//       lottie: "/animations/cart.json",
//     },
//     {
//       icon: <Paintbrush className="h-8 w-8" />,
//       title: "اختيار التصميم",
//       description: "اختر من بين عشرات القوالب الاحترافية وخصصها لتناسب علامتك التجارية",
//       color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
//        lottie: "/animations/payment.json",
//     },
//     {
//       icon: <Package className="h-8 w-8" />,
//       title: "إضافة المنتجات",
//       description: "أضف منتجاتك بسهولة مع صور وأوصاف وخيارات متعددة",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
//        lottie: "/animations/Paymentanimation.json",
//     },
//     {
//       icon: <Rocket className="h-8 w-8" />,
//       title: "إطلاق المتجر",
//       description: "اضبط طرق الدفع والشحن وأطلق متجرك للعالم",
//       color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
//       lottie: "/animations/launch.json",
//     },
//   ]

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         end: "bottom 20%",
//         scrub: 1,
//       },
//     })
//     tl.to(".connecting-line", {
//       scaleX: 1,
//       duration: 1,
//       ease: "power2.inOut",
//     })

//     stepsRefs.current.forEach((el, i) => {
//       if (!el) return

//       // GSAP reveal لكل خطوة
//       gsap.from(el, {
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         delay: i * 0.2,
//       })

//       // تحميل Lottie لكل خطوة
//       const container = el.querySelector(".step-lottie")
//       if (container && steps[i].lottie) {
//         Lottie.loadAnimation({
//           container,
//           renderer: "svg",
//           loop: true,
//           autoplay: true,
//           path: steps[i].lottie,
//         })
//       }
//     })

//     timelineRef.current = tl
//     return () => {
//       timelineRef.current.kill()
//       ScrollTrigger.getAll().forEach(t => t.kill())
//     }
//   }, [])

//   return (
//     <section ref={sectionRef} id="how-to-start" className="py-20 relative overflow-hidden">
//       {/* خلفية نقاط */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             كيف تبدأ مع <span className="text-indigo-600 dark:text-indigo-400">أتجر</span>؟
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             خطوات بسيطة تفصلك عن إطلاق متجرك الإلكتروني الاحترافي
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 hidden md:block" />
//           <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-1/2 scale-x-0 origin-left connecting-line hidden md:block" />

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {steps.map((step, idx) => (
//               <StepCard
//                 key={idx}
//                 step={step}
//                 index={idx}
//                 scrollYProgress={scrollYProgress}
//                 isLast={idx === steps.length - 1}
//                 ref={el => (stepsRefs.current[idx] = el)}
//               />
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <GlassMorphism>
//             <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
//               ابدأ الآن مجاناً
//             </Button>
//           </GlassMorphism>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// const StepCard = forwardRef(({ step, index, scrollYProgress, isLast }, ref) => {
//   const progress = useTransform(scrollYProgress, [0, 1], [index === 0 ? 0 : 0.2, 1])
//   const cardRef = useRef(null)

//   return (
//     <div className="relative" ref={ref}>
//       <motion.div
//         ref={cardRef}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative z-10"
//         whileHover={{ y: -10, transition: { duration: 0.3 } }}
//       >
//         <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.color}`}>
//           {step.icon}
//         </div>
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
//         <div className="step-lottie w-full h-[100px] mt-4"></div>
//         {!isLast && (
//           <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400">
//             <ArrowRight className="h-8 w-8" />
//           </div>
//         )}
//       </motion.div>
//       <motion.div
//         style={{ scale: progress }}
//         className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/10 dark:to-indigo-800/10 rounded-xl -z-10 transform origin-bottom-left"
//       />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-600 dark:border-indigo-400 z-20 hidden md:flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
//         {index + 1}
//       </div>
//     </div>
//   )
// })

// StepCard.displayName = "StepCard"
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { UserPlus, Paintbrush, Package, Rocket, ArrowLeft } from "lucide-react"

export default function HowToStartSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const steps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "التسجيل",
      description: "أنشئ حسابك مجاناً في أقل من دقيقة واستكشف المنصة",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "اختيار التصميم",
      description: "اختر من بين عشرات القوالب الاحترافية وخصصها لتناسب علامتك التجارية",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "إضافة المنتجات",
      description: "أضف منتجاتك بسهولة مع صور وأوصاف وخيارات متعددة",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "إطلاق المتجر",
      description: "اضبط طرق الدفع والشحن وأطلق متجرك للعالم",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
            كيف تبدأ مع <span className="text-indigo-600 dark:text-indigo-400">أتجر</span>؟
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            خطوات بسيطة تفصلك عن إطلاق متجرك الإلكتروني الاحترافي
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            ابدأ الآن مجاناً
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ step, index, scrollYProgress, isLast }) {
  const progress = useTransform(scrollYProgress, [0, 1], [index === 0 ? 0 : 0.2, 1])

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative z-10"
      >
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.color}`}>{step.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>

        {!isLast && (
          <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400">
            <ArrowLeft className="h-8 w-8" />
          </div>
        )}
      </motion.div>

      <motion.div
        style={{ scale: progress }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/10 dark:to-indigo-800/10 rounded-xl -z-10 transform origin-bottom-left"
      ></motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-600 dark:border-indigo-400 z-20 hidden md:flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
        {index + 1}
      </div>
    </div>
  )
}
