// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"

// export default function ProductManagementSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.1 })

//   const productFeatures = [
//     {
//       title: "إدارة المنتجات بسهولة",
//       description: "واجهة سهلة الاستخدام لإضافة وتعديل وتنظيم منتجاتك بكفاءة",
//       icon: "/placeholder.svg?height=40&width=40&text=📋",
//     },
//     {
//       title: "خيارات المنتجات المتعددة",
//       description: "إضافة خيارات متعددة للمنتج مثل الألوان والأحجام والموديلات",
//       icon: "/placeholder.svg?height=40&width=40&text=🔄",
//     },
//     {
//       title: "إدارة المخزون",
//       description: "تتبع مخزون منتجاتك وتلقي إشعارات عند انخفاض الكميات",
//       icon: "/placeholder.svg?height=40&width=40&text=📦",
//     },
//     {
//       title: "تصنيفات وعلامات",
//       description: "تنظيم منتجاتك في تصنيفات وإضافة علامات لتسهيل البحث",
//       icon: "/placeholder.svg?height=40&width=40&text=🏷️",
//     },
//   ]

//   return (
//     <section id="product-management" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div ref={ref}>
//             <SlideIn direction="left">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//                 إدارة <span className="text-indigo-600 dark:text-indigo-400">منتجاتك</span> بكفاءة عالية
//               </h2>
//             </SlideIn>

//             <SlideIn direction="left" delay={0.1}>
//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                 أدوات متطورة لإدارة منتجاتك بسهولة وكفاءة، من الإضافة والتعديل إلى تتبع المخزون والطلبات
//               </p>
//             </SlideIn>

//             <div className="space-y-6">
//               {productFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
//                 جرب إدارة المنتجات
//               </Button>
//             </motion.div>
//           </div>

//           <div className="relative">
//             <FadeIn delay={0.3}>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                 {/* استبدال Lottie بصورة ثابتة */}
//                 <div className="aspect-square relative">
//                   <Image
//                     src="/placeholder.svg?height=600&width=600&text=إدارة+المنتجات"
//                     alt="إدارة المنتجات"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </FadeIn>

//             {/* عناصر زخرفية */}
//             <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
//             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-full z-0"></div>
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
import { ClipboardList, Settings, Box, Tags } from "lucide-react" // استيراد الأيقونات

export default function ProductManagementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const productFeatures = [
    {
      title: "إدارة المنتجات بسهولة",
      description: "واجهة سهلة الاستخدام لإضافة وتعديل وتنظيم منتجاتك بكفاءة",
      icon: <ClipboardList className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "خيارات المنتجات المتعددة",
      description: "إضافة خيارات متعددة للمنتج مثل الألوان والأحجام والموديلات",
      icon: <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "إدارة المخزون",
      description: "تتبع مخزون منتجاتك وتلقي إشعارات عند انخفاض الكميات",
      icon: <Box className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "تصنيفات وعلامات",
      description: "تنظيم منتجاتك في تصنيفات وإضافة علامات لتسهيل البحث",
      icon: <Tags className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    },
  ]

  return (
    <section id="product-management" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref}>
            <SlideIn direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                إدارة <span className="text-indigo-600 dark:text-indigo-400">منتجاتك</span> بكفاءة عالية
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                أدوات متطورة لإدارة منتجاتك بسهولة وكفاءة، من الإضافة والتعديل إلى تتبع المخزون والطلبات
              </p>
            </SlideIn>

            <div className="space-y-6">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
                جرب إدارة المنتجات
              </Button>
            </motion.div>
          </div>

          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-indigo-50 dark:bg-slate-700">
                <Image
                  src="/images/person-their-job-position.jpg" // مسار الصورة الجديدة
                  alt="إدارة المنتجات"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>

            {/* عناصر زخرفية */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}