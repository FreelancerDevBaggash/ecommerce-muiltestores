// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"

// export default function AnalyticsSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.1 })

//   const analyticsFeatures = [
//     {
//       title: "لوحة تحكم شاملة",
//       description: "لوحة تحكم تعرض جميع المؤشرات الرئيسية لمتجرك في مكان واحد",
//       icon: "/placeholder.svg?height=40&width=40&text=📊",
//     },
//     {
//       title: "تقارير المبيعات",
//       description: "تقارير مفصلة عن المبيعات والإيرادات والمنتجات الأكثر مبيعًا",
//       icon: "/placeholder.svg?height=40&width=40&text=📈",
//     },
//     {
//       title: "تحليل سلوك العملاء",
//       description: "فهم سلوك العملاء وتفضيلاتهم لتحسين استراتيجيتك التسويقية",
//       icon: "/placeholder.svg?height=40&width=40&text=👥",
//     },
//     {
//       title: "تنبؤات ذكية",
//       description: "تنبؤات مبنية على الذكاء الاصطناعي لمساعدتك في اتخاذ قرارات أفضل",
//       icon: "/placeholder.svg?height=40&width=40&text=🔮",
//     },
//   ]

//   return (
//     <section id="analytics" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative order-2 lg:order-1">
//             <FadeIn>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                 {/* استبدال Lottie بصورة ثابتة */}
//                 <div className="aspect-square relative">
//                   <Image
//                     src="/placeholder.svg?height=600&width=600&text=تحليلات+متقدمة"
//                     alt="تحليلات متقدمة"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </FadeIn>

//             {/* عناصر زخرفية */}
//             <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-full z-0"></div>
//           </div>

//           <div ref={ref} className="order-1 lg:order-2">
//             <SlideIn direction="right">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//                 <span className="text-indigo-600 dark:text-indigo-400">تحليلات</span> متقدمة لاتخاذ قرارات أفضل
//               </h2>
//             </SlideIn>

//             <SlideIn direction="right" delay={0.1}>
//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                 تحليلات متقدمة ورؤى دقيقة تساعدك على فهم أداء متجرك واتخاذ قرارات مبنية على البيانات
//               </p>
//             </SlideIn>

//             <div className="space-y-6">
//               {analyticsFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//                   className="flex gap-4"
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
//                       <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={40} height={40} />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="mt-8"
//             >
//               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
//                 استكشف التحليلات
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"
import {
  BarChart2,
  TrendingUp,
  Users,
  Zap
} from "lucide-react"  // استيراد الأيقونات

export default function AnalyticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const analyticsFeatures = [
    {
      title: "لوحة تحكم شاملة",
      description: "لوحة تحكم تعرض جميع المؤشرات الرئيسية لمتجرك في مكان واحد",
      icon: <BarChart2 size={24} className="text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "تقارير المبيعات",
      description: "تقارير مفصلة عن المبيعات والإيرادات والمنتجات الأكثر مبيعًا",
      icon: <TrendingUp size={24} className="text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "تحليل سلوك العملاء",
      description: "فهم سلوك العملاء وتفضيلاتهم لتحسين استراتيجيتك التسويقية",
      icon: <Users size={24} className="text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "تنبؤات ذكية",
      description: "تنبؤات مبنية على الذكاء الاصطناعي لمساعدتك في اتخاذ قرارات أفضل",
      icon: <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />,
    },
  ]

  return (
    <section id="analytics" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* العمود الأيسر: الصورة */}
          <div className="relative order-2 lg:order-1">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-square relative">
                  <Image
                    src="/images/etajr.jpg"     // الصورة من مجلد public/images
                    alt="تحليلات متقدمة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            {/* عناصر زخرفية */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-full z-0"></div>
          </div>

          {/* العمود الأيمن: النص والميزات */}
          <div ref={ref} className="order-1 lg:order-2">
            <SlideIn direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-indigo-600 dark:text-indigo-400">تحليلات</span> متقدمة لاتخاذ قرارات أفضل
              </h2>
            </SlideIn>
            <SlideIn direction="right" delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                تحليلات متقدمة ورؤى دقيقة تساعدك على فهم أداء متجرك واتخاذ قرارات مبنية على البيانات
              </p>
            </SlideIn>

            <div className="space-y-6">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                استكشف التحليلات
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
