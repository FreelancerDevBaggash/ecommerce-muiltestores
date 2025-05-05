

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"

// export default function HowToStartSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.1 })

//   const steps = [
//     {
//       number: "01",
//       title: "سجل حساب جديد",
//       description: "أنشئ حسابك مجانًا في أقل من دقيقة واستكشف المنصة",
//       icon: "/placeholder.svg?height=60&width=60&text=👤",
//     },
//     {
//       number: "02",
//       title: "أضف منتجاتك",
//       description: "أضف منتجاتك بسهولة مع وصف وصور وأسعار وخيارات متعددة",
//       icon: "/placeholder.svg?height=60&width=60&text=🏷️",
//     },
//     {
//       number: "03",
//       title: "خصص متجرك",
//       description: "اختر التصميم المناسب وخصصه ليعكس هوية علامتك التجارية",
//       icon: "/placeholder.svg?height=60&width=60&text=🎨",
//     },
//     {
//       number: "04",
//       title: "أطلق متجرك",
//       description: "اضغط زر النشر وابدأ في استقبال الطلبات وتحقيق المبيعات",
//       icon: "/placeholder.svg?height=60&width=60&text=🚀",
//     },
//   ]

//   return (
//     <section id="how-to-start" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <FadeIn>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               ابدأ متجرك <span className="text-indigo-600 dark:text-indigo-400">في 4 خطوات</span> بسيطة
//             </h2>
//           </FadeIn>
//           <SlideIn>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               عملية سهلة وسريعة تمكنك من إطلاق متجرك الإلكتروني والبدء في تحقيق المبيعات في أقل وقت ممكن
//             </p>
//           </SlideIn>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div ref={ref}>
//             <div className="space-y-12">
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="flex gap-6"
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
//                       <Image src={step.icon || "/placeholder.svg"} alt={step.title} width={60} height={60} />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">{step.number}</div>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-12">
//               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
//                 ابدأ الآن مجانًا
//               </Button>
//             </div>
//           </div>

//           <div className="relative">
//             <FadeIn delay={0.3}>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                 {/* استبدال Lottie بصورة ثابتة */}
//                 <div className="aspect-square relative">
//                   <Image
//                     src="/placeholder.svg?height=600&width=600&text=كيفية+البدء+مع+أتجر"
//                     alt="كيفية البدء مع أتجر"
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
import { FaUser, FaTag, FaPaintBrush, FaRocket } from "react-icons/fa"  // استيراد الأيقونات من مكتبة react-icons
import { Button } from "@/components/ui/button"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"
import Link from "next/link"
import Image from "next/image"
export default function HowToStartSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const steps = [
    {
      number: "01",
      title: "سجل حساب جديد",
      description: "أنشئ حسابك مجانًا في أقل من دقيقة واستكشف المنصة",
      icon: <FaUser size={60} className="text-indigo-600" />,  // استخدام أيقونة من react-icons
    },
    {
      number: "02",
      title: "أضف منتجاتك",
      description: "أضف منتجاتك بسهولة مع وصف وصور وأسعار وخيارات متعددة",
      icon: <FaTag size={60} className="text-indigo-600" />,  // أيقونة أخرى
    },
    {
      number: "03",
      title: "خصص متجرك",
      description: "اختر التصميم المناسب وخصصه ليعكس هوية علامتك التجارية",
      icon: <FaPaintBrush size={60} className="text-indigo-600" />,  // أيقونة أخرى
    },
    {
      number: "04",
      title: "أطلق متجرك",
      description: "اضغط زر النشر وابدأ في استقبال الطلبات وتحقيق المبيعات",
      icon: <FaRocket size={60} className="text-indigo-600" />,  // أيقونة أخرى
    },
  ]

  return (
    <section id="how-to-start" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ابدأ متجرك <span className="text-indigo-600 dark:text-indigo-400">في 4 خطوات</span> بسيطة
            </h2>
          </FadeIn>
          <SlideIn>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              عملية سهلة وسريعة تمكنك من إطلاق متجرك الإلكتروني والبدء في تحقيق المبيعات في أقل وقت ممكن
            </p>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref}>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      {step.icon}  {/* عرض الأيقونة هنا */}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link href='/register'>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                ابدأ الآن مجانًا
              </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* استبدال Lottie بصورة ثابتة */}
                <div className="aspect-square relative">
                  <Image
                    src="/images/zid.webp"  // استبدال بالصورة المطلوبة
                    alt="كيفية البدء مع أتجر"
                    fill
                    className="object-contain p-2"
                  />
                </div>
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
