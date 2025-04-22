// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"

// export default function MarketingSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.1 })

//   const marketingFeatures = [
//     {
//       title: "حملات البريد الإلكتروني",
//       description: "إنشاء وإدارة حملات البريد الإلكتروني لزيادة المبيعات والتواصل مع العملاء",
//       icon: "/placeholder.svg?height=40&width=40&text=📧",
//     },
//     {
//       title: "كوبونات الخصم",
//       description: "إنشاء كوبونات خصم متنوعة لتحفيز المبيعات وجذب العملاء الجدد",
//       icon: "/placeholder.svg?height=40&width=40&text=🏷️",
//     },
//     {
//       title: "برامج الولاء",
//       description: "إنشاء برامج ولاء لمكافأة عملائك الدائمين وتشجيعهم على الشراء المتكرر",
//       icon: "/placeholder.svg?height=40&width=40&text=🎁",
//     },
//     {
//       title: "التسويق عبر وسائل التواصل",
//       description: "أدوات متكاملة للتسويق عبر منصات التواصل الاجتماعي المختلفة",
//       icon: "/placeholder.svg?height=40&width=40&text=📱",
//     },
//   ]

//   return (
//     <section id="marketing" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <FadeIn>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                 {/* استبدال Lottie بصورة ثابتة */}
//                 <div className="aspect-square relative">
//                   <Image
//                     src="/placeholder.svg?height=600&width=600&text=أدوات+التسويق"
//                     alt="أدوات التسويق"
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

//           <div ref={ref}>
//             <SlideIn direction="right">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//                 أدوات <span className="text-indigo-600 dark:text-indigo-400">تسويقية</span> متكاملة لنمو مبيعاتك
//               </h2>
//             </SlideIn>

//             <SlideIn direction="right" delay={0.1}>
//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                 مجموعة متكاملة من الأدوات التسويقية التي تساعدك على زيادة مبيعاتك وجذب المزيد من العملاء لمتجرك
//               </p>
//             </SlideIn>

//             <div className="space-y-6">
//               {marketingFeatures.map((feature, index) => (
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
//                 اكتشف أدوات التسويق
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
import { Mail, TicketPercent, Gift, Smartphone } from "lucide-react" // استيراد الأيقونات

export default function MarketingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const marketingFeatures = [
    {
      title: "حملات البريد الإلكتروني",
      description: "إنشاء وإدارة حملات البريد الإلكتروني لزيادة المبيعات والتواصل مع العملاء",
      icon: <Mail className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "كوبونات الخصم",
      description: "إنشاء كوبونات خصم متنوعة لتحفيز المبيعات وجذب العملاء الجدد",
      icon: <TicketPercent className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "برامج الولاء",
      description: "إنشاء برامج ولاء لمكافأة عملائك الدائمين وتشجيعهم على الشراء المتكرر",
      icon: <Gift className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "التسويق عبر وسائل التواصل",
      description: "أدوات متكاملة للتسويق عبر منصات التواصل الاجتماعي المختلفة",
      icon: <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
  ]

  return (
    <section id="marketing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-indigo-50 dark:bg-slate-700">
                <Image
                  src="/images/tas.webp" // مسار الصورة الجديدة
                  alt="أدوات التسويق"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>

            {/* عناصر زخرفية */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-full z-0"></div>
          </div>

          <div ref={ref}>
            <SlideIn direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                أدوات <span className="text-indigo-600 dark:text-indigo-400">تسويقية</span> متكاملة لنمو مبيعاتك
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                مجموعة متكاملة من الأدوات التسويقية التي تساعدك على زيادة مبيعاتك وجذب المزيد من العملاء لمتجرك
              </p>
            </SlideIn>

            <div className="space-y-6">
              {marketingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center transition-all group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 py-6 text-lg"
              >
                اكتشف أدوات التسويق
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}