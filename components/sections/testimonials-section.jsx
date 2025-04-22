// // "use client"

// // import { useRef } from "react"
// // import { motion, useInView } from "framer-motion"
// // import Image from "next/image"
// // import { FadeIn, SlideIn, Stagger } from "@/components/animations/scroll-animations"

// // export default function TestimonialsSection() {
// //   const ref = useRef(null)
// //   const isInView = useInView(ref, { once: true, threshold: 0.1 })

// //   const testimonials = [
// //     {
// //       name: "أحمد محمد",
// //       role: "صاحب متجر إلكتروني",
// //       avatar: "/placeholder.svg?height=80&width=80&text=👨‍💼",
// //       content:
// //         "منصة أتجر غيرت مفهوم التجارة الإلكترونية بالنسبة لي. سهولة الاستخدام والميزات المتكاملة ساعدتني على زيادة مبيعاتي بنسبة 200% خلال 3 أشهر فقط!",
// //       rating: 5,
// //     },
// //     {
// //       name: "سارة أحمد",
// //       role: "مصممة أزياء",
// //       avatar: "/placeholder.svg?height=80&width=80&text=👩‍🎨",
// //       content:
// //         "كمصممة أزياء، كنت أبحث عن منصة سهلة تمكنني من عرض تصاميمي وبيعها عبر الإنترنت. أتجر وفرت لي كل ما أحتاجه وأكثر، شكرًا لكم!",
// //       rating: 5,
// //     },
// //     {
// //       name: "محمد علي",
// //       role: "صاحب متجر إلكترونيات",
// //       avatar: "/placeholder.svg?height=80&width=80&text=👨‍💻",
// //       content:
// //         "أفضل ما في أتجر هو سهولة إدارة المنتجات والطلبات. الآن أستطيع التركيز على تنمية أعمالي بدلاً من القلق بشأن الجوانب التقنية للمتجر.",
// //       rating: 4,
// //     },
// //     {
// //       name: "نورا خالد",
// //       role: "صاحبة متجر مستحضرات تجميل",
// //       avatar: "/placeholder.svg?height=80&width=80&text=👩‍🔬",
// //       content:
// //         "أدوات التسويق في أتجر ساعدتني على الوصول لعملاء جدد وزيادة المبيعات. التكامل مع وسائل التواصل الاجتماعي كان سهلاً وفعالاً للغاية.",
// //       rating: 5,
// //     },
// //   ]

// //   return (
// //     <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
//       // <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       //   <div className="text-center mb-16">
//       //     <FadeIn>
//       //       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//       //         ماذا يقول <span className="text-indigo-600 dark:text-indigo-400">عملاؤنا</span> عنا
//       //       </h2>
//       //     </FadeIn>
//       //     <SlideIn>
//       //       <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//       //         آلاف التجار يستخدمون منصة أتجر يوميًا لإدارة متاجرهم الإلكترونية وتحقيق النجاح
//       //       </p>
//       //     </SlideIn>
//       //   </div>

//       //   <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       //     <Stagger>
//       //       {testimonials.map((testimonial, index) => (
//       //         <motion.div
//       //           key={index}
//       //           initial={{ opacity: 0, y: 20 }}
//       //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       //           transition={{ duration: 0.5, delay: index * 0.1 }}
//       //           className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
//       //         >
//       //           <div className="flex items-center mb-4">
//       //             <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//       //               <Image
//       //                 src={testimonial.avatar || "/placeholder.svg"}
//       //                 alt={testimonial.name}
//       //                 width={80}
//       //                 height={80}
//       //               />
//       //             </div>
//       //             <div>
//       //               <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
//       //               <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
//       //             </div>
//       //           </div>
//       //           <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
//       //           <div className="flex">
//       //             {[...Array(5)].map((_, i) => (
//       //               <svg
//       //                 key={i}
//       //                 xmlns="http://www.w3.org/2000/svg"
//       //                 className={`h-5 w-5 ${
//       //                   i < testimonial.rating
//       //                     ? "text-amber-400 dark:text-amber-300"
//       //                     : "text-gray-300 dark:text-gray-600"
//       //                 }`}
//       //                 viewBox="0 0 20 20"
//       //                 fill="currentColor"
//       //               >
//       //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       //               </svg>
//       //             ))}
//       //           </div>
//       //         </motion.div>
//       //       ))}
//       //     </Stagger>
//       //   </div>

//       //   <div className="mt-16 text-center">
//       //     <FadeIn delay={0.4}>
//       //       <div className="relative mx-auto w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">
//       //         {/* استبدال Lottie بصورة ثابتة */}
//       //         <div className="aspect-video relative">
//       //           <Image
//       //             src="/placeholder.svg?height=600&width=1200&text=قصص+نجاح+عملائنا"
//       //             alt="قصص نجاح عملائنا"
//       //             fill
//       //             className="object-cover"
//       //           />
//       //         </div>
//       //       </div>
//       //     </FadeIn>
//       //   </div>
//       // </div>
// //     </section>
// //   )
// // }
// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// // import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"
// import { FadeIn, SlideIn, Stagger } from "@/components/animations/scroll-animations"
// export default function TestimonialsSection() {
//   const containerRef = useRef(null)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [itemsPerView, setItemsPerView] = useState(1)
//   const isInView = useInView(containerRef, { once: true, threshold: 0.1 })

//   useEffect(() => {
//     const updateItemsPerView = () => {
//       setItemsPerView(window.innerWidth >= 768 ? 2 : 1)
//     }
    
//     updateItemsPerView()
//     window.addEventListener('resize', updateItemsPerView)
//     return () => window.removeEventListener('resize', updateItemsPerView)
//   }, [])

//   const scrollToIndex = (index) => {
//     if (!containerRef.current) return
//     const container = containerRef.current
//     const items = container.children
    
//     if (index < 0 || index >= items.length) return
    
//     const item = items[index]
//     const scrollLeft = item.offsetLeft - container.offsetLeft
    
//     container.scrollTo({
//       left: scrollLeft,
//       behavior: 'smooth'
//     })
//     setCurrentIndex(index)
//   }

//   const handleNext = () => {
//     const nextIndex = currentIndex + itemsPerView
//     if (nextIndex < testimonials.length) scrollToIndex(nextIndex)
//   }

//   const handlePrev = () => {
//     const prevIndex = currentIndex - itemsPerView
//     if (prevIndex >= 0) scrollToIndex(prevIndex)
//   }

//   // testimonials array كما هو موجود في الكود الأصلي
//   const testimonials = [/* ... */]

//   return (
//     <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <FadeIn>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               ماذا يقول <span className="text-indigo-600 dark:text-indigo-400">عملاؤنا</span> عنا
//             </h2>
//           </FadeIn>
//           <SlideIn>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               آلاف التجار يستخدمون منصة أتجر يوميًا لإدارة متاجرهم الإلكترونية وتحقيق النجاح
//             </p>
//           </SlideIn>
//         </div>

//         <div className="relative">
//           <div
//             ref={containerRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-8 pb-4"
//             style={{ scrollBehavior: 'smooth' }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className="flex-shrink-0 w-[90vw] md:w-[45vw] snap-start"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mx-2">
//                   {/* محتوى البطاقة كما هو */}
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                       <Image
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         width={80}
//                         height={80}
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-5 w-5 ${
//                           i < testimonial.rating
//                             ? "text-amber-400 dark:text-amber-300"
//                             : "text-gray-300 dark:text-gray-600"
//                         }`}
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <button
//             onClick={handlePrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             aria-label="السابق"
//           >
//             ←
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             aria-label="التالي"
//           >
//             →
//           </button>
//         </div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <FadeIn>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               ماذا يقول <span className="text-indigo-600 dark:text-indigo-400">عملاؤنا</span> عنا
//             </h2>
//           </FadeIn>
//           <SlideIn>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               آلاف التجار يستخدمون منصة أتجر يوميًا لإدارة متاجرهم الإلكترونية وتحقيق النجاح
//             </p>
//           </SlideIn>
//         </div>

//         <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <Stagger>
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.avatar || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       width={80}
//                       height={80}
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
//                     <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating
//                           ? "text-amber-400 dark:text-amber-300"
//                           : "text-gray-300 dark:text-gray-600"
//                       }`}
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </Stagger>
//         </div>

//         <div className="mt-16 text-center">
//           <FadeIn delay={0.4}>
//             <div className="relative mx-auto w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">
//               {/* استبدال Lottie بصورة ثابتة */}
//               <div className="aspect-video relative">
//                 <Image
//                   src="/placeholder.svg?height=600&width=1200&text=قصص+نجاح+عملائنا"
//                   alt="قصص نجاح عملائنا"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </FadeIn>
//         </div>
   
//         {/* بقية المحتوى */}
//       </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { RevealOnScroll } from "@/components/ui/reveal-effects"
import { NeumorphicCard } from "@/components/ui/neumorphic-card"
import { Card3DTilt } from "@/components/ui/3d-card"
import { ChevronRight, ChevronLeft, Star } from "lucide-react"
import { NeumorphicButton } from "@/components/ui/neumorphic-button"

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "أحمد محمد",
      position: "صاحب متجر إلكتروني",
      image: "/images/ht1.jpge",
      content:
        "منصة اتجر غيرت مفهوم التجارة الإلكترونية بالنسبة لي. سهولة الاستخدام والميزات المتقدمة ساعدتني على زيادة مبيعاتي بنسبة 200% خلال 3 أشهر فقط!",
      rating: 5,
    },
    {
      name: "سارة عبدالله",
      position: "مصممة أزياء",
      image: "/images/ht1.jpge",
      content:
        "كنت أبحث عن منصة سهلة الاستخدام لبيع تصاميمي عبر الإنترنت، ووجدت ضالتي في اتجر. الآن أستطيع التركيز على الإبداع وترك تفاصيل المتجر للمنصة.",
      rating: 5,
    },
    {
      name: "خالد العمري",
      position: "صاحب مطعم",
      image: "/images/ht1.jpge",
      content:
        "بفضل اتجر، استطعت توسيع نطاق مطعمي ليشمل خدمة التوصيل عبر الإنترنت. الواجهة سهلة الاستخدام والدعم الفني الممتاز جعلا التجربة رائعة.",
      rating: 4,
    },
    {
      name: "نورة السالم",
      position: "بائعة منتجات يدوية",
      image: "/images/ht1.jpge",
      content:
        "منصة اتجر مثالية لأصحاب المشاريع الصغيرة مثلي. أستطيع الآن الوصول إلى عملاء من جميع أنحاء العالم وبيع منتجاتي اليدوية بكل سهولة.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ماذا يقول <span className="text-indigo-600 dark:text-indigo-400">عملاؤنا</span> عنا؟
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              آراء حقيقية من أصحاب المتاجر الذين وثقوا بنا لبناء أعمالهم عبر الإنترنت
            </p>
          </RevealOnScroll>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <RevealOnScroll>
            <Card3DTilt intensity={0.3} glare={true}>
              <NeumorphicCard className="p-8" intensity="strong" interactive={false}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating
                              ? "text-indigo-500 fill-indigo-500"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                    &quot;{testimonials[activeIndex].content}&quot;
                    </blockquote>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</div>
                    <div className="text-amber-600 dark:text-amber-400">{testimonials[activeIndex].position}</div>
                  </div>
                </div>
              </NeumorphicCard>
            </Card3DTilt>
          </RevealOnScroll>

          {/* أزرار التنقل */}
          <div className="flex justify-center mt-8 gap-4">
            <NeumorphicButton
              className="w-12 h-12 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400"
              onClick={prevTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </NeumorphicButton>
            <NeumorphicButton
              className="w-12 h-12 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400"
              onClick={nextTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </NeumorphicButton>
          </div>

          {/* مؤشرات */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-amber-500 w-6"
                    : "bg-amber-200 dark:bg-amber-900/50 hover:bg-amber-300 dark:hover:bg-amber-800"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
