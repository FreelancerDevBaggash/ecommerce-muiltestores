// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, ChevronRight, ChevronLeft } from "lucide-react"

// const testimonials = [
//   {
//     id: 1,
//     name: "أحمد محمد",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 5,
//     text: "تجربة تسوق رائعة! المنتجات ذات جودة عالية والتوصيل كان سريعاً جداً. سأتسوق من اتجر مرة أخرى بالتأكيد.",
//   },
//   {
//     id: 2,
//     name: "سارة علي",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 4,
//     text: "أحب تنوع المنتجات المتاحة في اتجر. الأسعار تنافسية والعروض ممتازة. خدمة العملاء متعاونة جداً.",
//   },
//   {
//     id: 3,
//     name: "محمد خالد",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 5,
//     text: "منصة سهلة الاستخدام وتجربة تسوق سلسة. المنتجات تصل بحالة ممتازة والتغليف آمن. أنصح بها بشدة!",
//   },
//   {
//     id: 4,
//     name: "نورة عبدالله",
//     avatar: "/images/image-8height=100&width=100",
//     rating: 5,
//     text: "أفضل موقع للتسوق عبر الإنترنت! المنتجات أصلية والأسعار معقولة. سياسة الإرجاع سهلة وخدمة العملاء ممتازة.",
//   },
//   {
//     id: 5,
//     name: "فهد العتيبي",
//     avatar: "/placeholder.svg?height=100&width=100",
//     rating: 4,
//     text: "تجربة رائعة مع اتجر. التوصيل سريع والمنتجات بجودة عالية. سأستمر في التسوق من هنا.",
//   },
// ]

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
//   }

//   // Calculate visible testimonials based on current index
//   const visibleTestimonials = [
//     testimonials[currentIndex],
//     testimonials[(currentIndex + 1) % testimonials.length],
//     testimonials[(currentIndex + 2) % testimonials.length],
//   ]

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">آراء عملائنا</h2>

//         <div className="relative">
//           <div className="flex overflow-hidden">
//             <div className="flex transition-transform duration-500 ease-in-out">
//               {visibleTestimonials.map((testimonial, index) => (
//                 <div key={testimonial.id} className="w-full md:w-1/3 px-4 flex-shrink-0">
//                   <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col">
//                     <div className="flex items-center mb-4">
//                       <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                         <Image
//                           src={testimonial.avatar || "/images/image-8.jpg"}
//                           alt={testimonial.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
//                         <div className="flex text-yellow-400">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-4 w-4 ${
//                                 i < testimonial.rating ? "fill-current" : "stroke-current fill-none"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 dark:text-gray-300 flex-grow">{testimonial.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//             aria-label="السابق"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//             aria-label="التالي"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Star, ChevronRight, ChevronLeft } from "lucide-react"
// import { motion } from "framer-motion" // استيراد motion من framer-motion

// const testimonials = [
//   {
//     id: 1,
//     name: "أحمد محمد",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 5,
//     text: "تجربة تسوق رائعة! المنتجات ذات جودة عالية والتوصيل كان سريعاً جداً. سأتسوق من اتجر مرة أخرى بالتأكيد.",
//   },
//   {
//     id: 2,
//     name: "سارة علي",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 4,
//     text: "أحب تنوع المنتجات المتاحة في اتجر. الأسعار تنافسية والعروض ممتازة. خدمة العملاء متعاونة جداً.",
//   },
//   {
//     id: 3,
//     name: "محمد خالد",
//     avatar: "/images/image-8.jpg?height=100&width=100",
//     rating: 5,
//     text: "منصة سهلة الاستخدام وتجربة تسوق سلسة. المنتجات تصل بحالة ممتازة والتغليف آمن. أنصح بها بشدة!",
//   },
//   {
//     id: 4,
//     name: "نورة عبدالله",
//     avatar: "/images/image-8height=100&width=100",
//     rating: 5,
//     text: "أفضل موقع للتسوق عبر الإنترنت! المنتجات أصلية والأسعار معقولة. سياسة الإرجاع سهلة وخدمة العملاء ممتازة.",
//   },
//   {
//     id: 5,
//     name: "فهد العتيبي",
//     avatar: "/placeholder.svg?height=100&width=100",
//     rating: 4,
//     text: "تجربة رائعة مع اتجر. التوصيل سريع والمنتجات بجودة عالية. سأستمر في التسوق من هنا.",
//   },
// ]

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
//   }

//   // Calculate visible testimonials based on current index
//   const visibleTestimonials = [
//     testimonials[currentIndex],
//     testimonials[(currentIndex + 1) % testimonials.length],
//     testimonials[(currentIndex + 2) % testimonials.length],
//   ]

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">آراء عملائنا</h2>

//         <div className="relative">
//           <div className="flex overflow-hidden">
//             <div className="flex transition-transform duration-500 ease-in-out">
//               {visibleTestimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.id}
//                   className="w-full md:w-1/3 px-4 flex-shrink-0"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2, duration: 0.5 }} // تأثير الحركة مع تأخير بين العناصر
//                 >
//                   <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col">
//                     <div className="flex items-center mb-4">
//                       <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                         <Image
//                           src={testimonial.avatar || "/images/image-8.jpg"}
//                           alt={testimonial.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
//                         <div className="flex text-yellow-400">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "stroke-current fill-none"}`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 dark:text-gray-300 flex-grow">{testimonial.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//             aria-label="السابق"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//             aria-label="التالي"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// components/Testimonials.jsx
// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { Star, ChevronRight, ChevronLeft } from "lucide-react"
// import { motion } from "framer-motion"

// export default function Testimonials({ storeId }) {
//   const [testimonials, setTestimonials] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function fetchTestimonials() {
//       try {
//         setLoading(true)
//         const res = await fetch(`/api/reviews?storeId=${storeId}`)
//         if (!res.ok) throw new Error("فشل في جلب البيانات")
//         const data = await res.json()
//         setTestimonials(Array.isArray(data) ? data : [])
//       } catch (err) {
//         console.error("خطأ أثناء تحميل الآراء:", err)
//         setTestimonials([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (storeId) fetchTestimonials()
//   }, [storeId])

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     )
//   }

//   const visibleTestimonials =
//     testimonials.length > 0
//       ? [
//           testimonials[currentIndex],
//           testimonials[(currentIndex + 1) % testimonials.length],
//           testimonials[(currentIndex + 2) % testimonials.length],
//         ]
//       : []

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-800" dir="rtl">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
//           آراء عملائنا
//         </h2>

//         {loading ? (
//           <p className="text-center text-gray-500 dark:text-gray-400">جاري التحميل...</p>
//         ) : testimonials.length === 0 ? (
//           <p className="text-center text-gray-500 dark:text-gray-400">
//             لا توجد آراء حتى الآن.
//           </p>
//         ) : (
//           <div className="relative">
//             <div className="flex overflow-hidden">
//               <div className="flex transition-transform duration-500 ease-in-out">
//                 {visibleTestimonials.map((testimonial, index) => (
//                   <motion.div
//                     key={testimonial?.id || index}
//                     className="w-full md:w-1/3 px-4 flex-shrink-0"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2, duration: 0.5 }}
//                   >
//                     <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col">
//                       <div className="flex items-center mb-4">
//                         <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                           <Image
//                             src="/images/avatar-placeholder.png"
//                             alt={
//                               testimonial?.customer?.email
//                                 ? testimonial.customer.email
//                                 : "عميل"
//                             }
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-gray-900 dark:text-white">
//                             {testimonial?.customer?.email
//                               ? testimonial.customer.email.split("@")[0]
//                               : "عميل"}
//                           </h3>
//                           <div className="flex text-yellow-400">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-4 w-4 ${
//                                   i < (testimonial?.rating || 0)
//                                     ? "fill-current"
//                                     : "stroke-current fill-none"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p className="text-gray-600 dark:text-gray-300 flex-grow">
//                         {testimonial?.comment || "لا يوجد تعليق."}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {testimonials.length > 3 && (
//               <>
//                 <button
//                   onClick={prevTestimonial}
//                   className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//                   aria-label="السابق"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//                   aria-label="التالي"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { Star, ChevronRight, ChevronLeft } from "lucide-react"
// import { motion } from "framer-motion"

// export default function Testimonials({ storeId }) {
//   const [testimonials, setTestimonials] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function fetchTestimonials() {
//       try {
//         setLoading(true)
//         const res = await fetch(`/api/reviews?storeId=${storeId}`)
//         if (!res.ok) throw new Error("فشل في جلب البيانات")
//         const data = await res.json()
//         setTestimonials(Array.isArray(data) ? data : [])
//       } catch (err) {
//         console.error("خطأ أثناء تحميل الآراء:", err)
//         setTestimonials([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (storeId) fetchTestimonials()
//   }, [storeId])

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     )
//   }

//   const visibleTestimonials =
//     testimonials.length > 0
//       ? [
//         testimonials[currentIndex],
//         testimonials[(currentIndex + 1) % testimonials.length],
//         testimonials[(currentIndex + 2) % testimonials.length],
//       ]
//       : []

//   return (
//     <section className="py-12 bg-gray-50 " dir="rtl">
//       <div className="container ">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
//           آراء عملائنا
//         </h2>

//         {loading ? (
//           <p className="text-center text-gray-500 dark:text-gray-400">جاري التحميل...</p>
//         ) : testimonials.length === 0 ? (
//           <p className="text-center text-gray-500 dark:text-gray-400">
//             لا توجد آراء حتى الآن.
//           </p>
//         ) : (
//           <div className="relative">
//             <div className="flex overflow-hidden">
//               <div className="flex transition-transform duration-500 ease-in-out">
//                 {visibleTestimonials.map((testimonial, index) => (
//                   <motion.div
//                     key={testimonial?.id || index}
//                     className="w-full md:w-1/3 px-4 flex-shrink-0"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2, duration: 0.5 }}
//                   >
//                     <div className="bg-white dark:bg-gray-900 p- rounded-xl shadow-md h-full flex flex-col">
//                       <div className="flex items-center mb-4">
//                         <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                           <Image
//                             src={
//                               testimonial?.customerStore?.customer?.profileImage ||
//                               "/images/avatar-placeholder.png"
//                             }
//                             alt="صورة العميل"
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-gray-900 dark:text-white">
//                             {testimonial?.customerStore?.customer?.firstName ||
//                               testimonial?.customerStore?.customer?.email?.split("@")[0] ||
//                               "عميل"}
//                           </h3>
//                           <div className="flex text-yellow-400">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-4 w-4 ${i < (testimonial?.rating || 0)
//                                   ? "fill-current"
//                                   : "stroke-current fill-none"
//                                   }`}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p className="text-gray-600 dark:text-gray-300 flex-grow">
//                         {testimonial?.comment || "لا يوجد تعليق."}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {testimonials.length > 3 && (
//               <>
//                 <button
//                   onClick={prevTestimonial}
//                   className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//                   aria-label="السابق"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
//                   aria-label="التالي"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// components/Testimonials.js
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials({ storeId }) {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTestimonials() {
      setLoading(true)
      try {
        const res = await fetch(`/api/reviews?storeId=${storeId}`)
        if (!res.ok) throw new Error("فشل في جلب البيانات")
        const data = await res.json()
        setTestimonials(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error(err)
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }
    if (storeId) fetchTestimonials()
  }, [storeId])

  const next = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          آراء عملائنا
        </h2>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">جاري التحميل...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">لا توجد آراء حتى الآن.</p>
        ) : (
          <div className="relative">
            {/* زرّين السابق والتالي */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute inset-y-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
                  aria-label="السابق"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={next}
                  className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
                  aria-label="التالي"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </>
            )}

            {/* عرض بطاقة واحدة في الهواتف وبطاقتين في اللوحيات وثلاث في الشاشات الكبيرة */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonials
                    .slice(currentIndex, currentIndex + 3)
                    .map((t) => (
                      <div
                        key={t.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col"
                      >
                        <div className="flex items-center mb-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                            <Image
                              src={
                                t.customerStore?.customer?.profileImage ||
                                "/images/avatar-placeholder.png"
                              }
                              alt="صورة العميل"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {t.customerStore?.customer?.firstName ||
                                t.customerStore?.customer?.email
                                  .split("@")[0]}
                            </h3>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < (t.rating || 0)
                                      ? "fill-current text-yellow-400"
                                      : "stroke-current text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 flex-grow leading-relaxed">
                          {t.comment || "لا يوجد تعليق."}
                        </p>
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* نقاط المؤشر أسفل البطاقات */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentIndex
                        ? "bg-gray-800 dark:bg-white"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`انتقل إلى المراجعة ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
