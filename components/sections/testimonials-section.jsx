"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight, ChevronLeft, Star } from "lucide-react"
import { NeuMorphism } from "@/components/ui/neu-morphism"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const testimonialsRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "أحمد الصنعاني",
      role: "صاحب متجر للحرف اليدوية",
      image: "/placeholder.svg?height=100&width=100&text=أحمد",
      content:
        "منصة أتجر غيرت مفهوم التجارة الإلكترونية بالنسبة لي. الآن أستطيع عرض منتجاتي اليدوية للعالم مع الحفاظ على هويتها اليمنية الأصيلة. زادت مبيعاتي بنسبة 200% خلال 3 أشهر فقط!",
      rating: 5,
    },
    {
      id: 2,
      name: "سارة المخلافي",
      role: "مصممة أزياء تقليدية",
      image: "/placeholder.svg?height=100&width=100&text=سارة",
      content:
        "كنت أبحث عن منصة تفهم خصوصية المنتجات التراثية، ووجدت ضالتي في أتجر. الآن أستطيع التركيز على الإبداع في تصاميمي التقليدية بينما تتولى المنصة كل الجوانب التقنية للمتجر.",
      rating: 5,
    },
    {
      id: 3,
      name: "خالد الحضرمي",
      role: "منتج عسل يمني",
      image: "/placeholder.svg?height=100&width=100&text=خالد",
      content:
        "بفضل أتجر، أصبح بإمكاني تصدير العسل اليمني الأصلي للخارج بكل سهولة. الدعم الفني الممتاز والأدوات المتخصصة لعرض المنتجات التراثية جعلت التحول الرقمي أمراً سلساً للغاية.",
      rating: 4,
    },
    {
      id: 4,
      name: "نورة الإرياني",
      role: "حرفية في صناعة الفضة",
      image: "/placeholder.svg?height=100&width=100&text=نورة",
      content:
        "أحب كيف يمكنني تخصيص كل جانب من جوانب متجري على أتجر. الميزات المصممة خصيصاً للمنتجات التراثية ساعدتني على إبراز قيمة مشغولاتي الفضية والوصول إلى عملاء من جميع أنحاء العالم.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Testimonials animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(testimonialsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => {
      clearInterval(interval)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            قصص <span className="text-indigo-600 dark:text-indigo-400">نجاح</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            تجارب حقيقية من أصحاب المتاجر الذين حققوا النجاح مع منصة أتجر
          </p>
        </motion.div>

        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto">
          <NeuMorphism className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="mb-6 md:mb-0 md:ml-10">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </blockquote>
                  <div>
                    <p className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </NeuMorphism>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none"
            aria-label="الشهادة السابقة"
          >
            <ChevronLeft className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none"
            aria-label="الشهادة التالية"
          >
            <ChevronRight className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-indigo-600 dark:bg-indigo-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`الانتقال إلى شهادة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
// "use client"

// import { useRef, useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ChevronRight, ChevronLeft, Star } from "lucide-react"
// import { NeuMorphism } from "@/components/ui/neu-morphism"

// export default function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const sectionRef = useRef(null)
//   const testimonialsRef = useRef(null)

//   const testimonials = [
//     {
//       id: 1,
//       name: "أحمد الصنعاني",
//       role: "صاحب متجر للحرف اليدوية",
//       image: "/placeholder.svg?height=100&width=100&text=أحمد",
//       content:
//         "منصة أتجر غيرت مفهوم التجارة الإلكترونية بالنسبة لي. الآن أستطيع عرض منتجاتي اليدوية للعالم مع الحفاظ على هويتها اليمنية الأصيلة. زادت مبيعاتي بنسبة 200% خلال 3 أشهر فقط!",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "سارة المخلافي",
//       role: "مصممة أزياء تقليدية",
//       image: "/placeholder.svg?height=100&width=100&text=سارة",
//       content:
//         "كنت أبحث عن منصة تفهم خصوصية المنتجات التراثية، ووجدت ضالتي في أتجر. الآن أستطيع التركيز على الإبداع في تصاميمي التقليدية بينما تتولى المنصة كل الجوانب التقنية للمتجر.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "خالد الحضرمي",
//       role: "منتج عسل يمني",
//       image: "/placeholder.svg?height=100&width=100&text=خالد",
//       content:
//         "بفضل أتجر، أصبح بإمكاني تصدير العسل اليمني الأصلي للخارج بكل سهولة. الدعم الفني الممتاز والأدوات المتخصصة لعرض المنتجات التراثية جعلت التحول الرقمي أمراً سلساً للغاية.",
//       rating: 4,
//     },
//     {
//       id: 4,
//       name: "نورة الإرياني",
//       role: "حرفية في صناعة الفضة",
//       image: "/placeholder.svg?height=100&width=100&text=نورة",
//       content:
//         "أحب كيف يمكنني تخصيص كل جانب من جوانب متجري على أتجر. الميزات المصممة خصيصاً للمنتجات التراثية ساعدتني على إبراز قيمة مشغولاتي الفضية والوصول إلى عملاء من جميع أنحاء العالم.",
//       rating: 5,
//     },
//   ]

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
//   }

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     // Testimonials animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         toggleActions: "play none none reverse",
//       },
//     })

//     tl.from(testimonialsRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     })

//     // Auto-rotate testimonials
//     const interval = setInterval(() => {
//       nextTestimonial()
//     }, 5000)

//     return () => {
//       clearInterval(interval)
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [nextTestimonial]) // إضافة nextTestimonial إلى التبعيات

//   return (
//     <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="testimonials">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             قصص <span className="text-indigo-600 dark:text-indigo-400">نجاح</span>
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             تجارب حقيقية من أصحاب المتاجر الذين حققوا النجاح مع منصة أتجر
//           </p>
//         </motion.div>

//         <div ref={testimonialsRef} className="relative max-w-4xl mx-auto">
//           <NeuMorphism className="p-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-col md:flex-row items-center"
//               >
//                 <div className="mb-6 md:mb-0 md:ml-10">
//                   <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30">
//                     <Image
//                       src={testimonials[currentIndex].image || "/placeholder.svg"}
//                       alt={testimonials[currentIndex].name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-5 w-5 ${
//                           i < testimonials[currentIndex].rating
//                             ? "text-amber-400 fill-amber-400"
//                             : "text-gray-300 dark:text-gray-600"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                   <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//   &quot;{testimonials[currentIndex].content}&quot;
// </blockquote>

//                   </blockquote>
//                   <div>
//                     <p className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
//                       {testimonials[currentIndex].name}
//                     </p>
//                     <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </NeuMorphism>

//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none"
//             aria-label="الشهادة السابقة"
//           >
//             <ChevronLeft className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
//           </button>

//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none"
//             aria-label="الشهادة التالية"
//           >
//             <ChevronRight className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
//           </button>
//         </div>

//         <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentIndex ? "bg-indigo-600 dark:bg-indigo-400" : "bg-gray-300 dark:bg-gray-600"
//               }`}
//               aria-label={`الانتقال إلى شهادة ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
