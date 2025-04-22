// "use client"

// import { useRef } from "react"
// import Image from "next/image"
// import { RevealOnScroll, ClippingReveal } from "@/components/ui/reveal-effects"
// import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
// import { ArrowRight } from "lucide-react"

// export default function CaseStudiesSection() {
//   const sectionRef = useRef(null)

//   const caseStudies = [
//     {
//       title: "صانع المتاجر من اتجر",
//       category: "اتجر",
//       image: "/placeholder.svg?height=400&width=600&text=دراسة+حالة+1",
//       description:
//         "سواء كنت تبغى تفتح متجرك الإلكتروني أو تدير متجرك التقليدي، مع اتجر كل شيء صار جاهز لك بدون أي تعقيد..",
//       results: ["أكثر من 1000 خدمة متوفرة علشان تسهّل عليك جميع جوانب إدارة متجرك.", "خطوات سريعة وسهلة عشان تقدر تبدأ متجرك أو تديره بوقت قليل", "مجتمع تجار نشط يدعمك ويشاركك التجارب والنصائح عشان تنجح."],
//     },

//         {
         
//           title: "دعم من الخبراء يليق بتجارك",
//           description:
//             "مساعدة من فريق يتميّز بالسرعة والتواجد والخبرة؛ لا تتردد بطلب المساعدة وقت الحاجة.",
//           callToAction: {
//             text: "تواصل معنا",
//             href: "/contact"
//           }
//         },
//         {
//           badgeIcon: true,
//           title: "حلول تسويقيَّة في مكان واحد",
//           subtitle: "استهدف المزيد من العملاء بحلول تسويقية مخصصة",
//           bulletPoints: [
//             "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.",
//             "تحكم بكافة تفاصيل العروض والخصومات.",
//             "دعم التسويق بالعمولة لمتجرك.",
//             "استهداف دقيق للسلات المتروكة.",
//             "إدارة الحملات الإعلانية على مختلف المنصات."
//           ]
//         },
//         {
//           badgeIcon: true,
//           title: "تناسق على أي جهاز",
//           description:
//             "جميع المتاجر المصممة في اتجر تتجاوب أوتوماتيكيًا مع مختلف الأجهزة لتظهر بمظهرٍ مذهل على الجوال والتابلت والكمبيوتر.",
//           bulletPoints: [
//             "توافق تلقائي مع الشاشات المختلفة.",
//             "عرض أنيق وواضح على جميع الأجهزة."
//           ]
//         }
//       ];
      

//   return (
//     <section
//       id="case-studies"
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <RevealOnScroll>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             أنشئ ودشّن<span className="text-indigo-600 dark:text-indigo-400">متجرك</span> بكل سهولة
//             </h2>
//           </RevealOnScroll>
//           <RevealOnScroll delay={0.2}>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             ما تحتاج خبرة سابقة أو وقت طويل… مع اتجر، تبدأ تجارتك بخطوات بسيطة وسريعة.
//             </p>
//           </RevealOnScroll>
//         </div>

//         <div className="space-y-16">
//           {caseStudies.map((caseStudy, index) => (
//             <RevealOnScroll key={index}>
//               <NeumorphicCard className="overflow-hidden" intensity="strong" interactive={false}>
//                 <div
//                   className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
//                 >
//                   <div className="relative h-64 lg:h-auto">
//                     <ClippingReveal direction={index % 2 === 0 ? "left" : "right"} className="h-full">
//                       <Image
//                         src={caseStudy.image || "/placeholder.svg"}
//                         alt={caseStudy.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </ClippingReveal>
//                   </div>
//                   <div className="p-8 lg:p-12 flex flex-col justify-center">
//                     <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
//                       {caseStudy.category}
//                     </div>
//                     <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
//                       {caseStudy.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.description}</p>
//                     <div className="mb-6">
//                       <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">النتائج:</h4>
//                       <ul className="space-y-2">
//                         {caseStudy.results.map((result, idx) => (
//                           <li key={idx} className="flex items-center">
//                             <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-2">
//                               <svg
//                                 className="h-3 w-3 text-indigo-600 dark:text-indigo-400"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                             <span className="text-gray-700 dark:text-gray-300">{result}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <NeumorphicButton className="text-indigo-600 dark:text-indigo-400 font-semibold group">
//                       اعرف كيف تبدأ متجرك
//                         <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
//                       </NeumorphicButton>
//                     </div>
//                   </div>
//                 </div>
//               </NeumorphicCard>
//             </RevealOnScroll>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client"

// import { useRef } from "react"
// import Image from "next/image"
// import { RevealOnScroll, ClippingReveal } from "@/components/ui/reveal-effects"
// import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
// import { ArrowRight } from "lucide-react"

// export default function CaseStudiesSection() {
//   const sectionRef = useRef(null)

//   const caseStudies = [
//     {
//       title: "صانع المتاجر من اتجر",
//       category: "اتجر",
//       image: "/images/feature_1.png",
//       description:
//         "سواء كنت تبغى تفتح متجرك الإلكتروني أو تدير متجرك التقليدي، مع اتجر كل شيء صار جاهز لك بدون أي تعقيد.",
//       results: [
//         "أكثر من 1000 خدمة متوفرة علشان تسهّل عليك جميع جوانب إدارة متجرك.",
//         "خطوات سريعة وسهلة عشان تقدر تبدأ متجرك أو تديره بوقت قليل",
//         "مجتمع تجار نشط يدعمك ويشاركك التجارب والنصائح عشان تنجح."
//       ]
//     },
//     {
//       title: "دعم من الخبراء يليق بتجارك",
//       category: "خدمات",
//       image: "/images/horo.svg",
//       description:
//         "مساعدة من فريق يتميّز بالسرعة والتواجد والخبرة؛ لا تتردد بطلب المساعدة وقت الحاجة.",
//       callToAction: {
//         text: "تواصل معنا",
//         href: "/contact"
//       }
//     },
//     {
//       title: "حلول تسويقيَّة في مكان واحد",
//       category: "تسويق",
//       image: "/images/feature_1.png",
//       subtitle: "استهدف المزيد من العملاء بحلول تسويقية مخصصة",
//       bulletPoints: [
//         "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.",
//         "تحكم بكافة تفاصيل العروض والخصومات.",
//         "دعم التسويق بالعمولة لمتجرك.",
//         "استهداف دقيق للسلات المتروكة.",
//         "إدارة الحملات الإعلانية على مختلف المنصات."
//       ]
//     },
//     {
//       title: "تناسق على أي جهاز",
//       category: "تجاوب",
//       image: "/images/تطبيق_متاجر.png",
//       description:
//         "جميع المتاجر المصممة في اتجر تتجاوب أوتوماتيكيًا مع مختلف الأجهزة لتظهر بمظهرٍ مذهل على الجوال والتابلت والكمبيوتر.",
//       bulletPoints: [
//         "توافق تلقائي مع الشاشات المختلفة.",
//         "عرض أنيق وواضح على جميع الأجهزة."
//       ]
//     },




//     {
//         title: "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!",
//         category: "المدفوعات",
//         image: "/images/feature_2.png",
//         description:
//           "استفد من نظام أتجر  المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك.",
//         bulletPoints: [
//           "وسائل دفع متنوعة تلبي كافة احتياجات عملائك",
//           "حماية عالية وأمان لكافة عملياتك.."
//         ]
//       }
//   ]

//   return (
//     <section
//       id="case-studies"
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-indigo-50 font-arabic to-white dark:from-slate-900 dark:to-slate-800"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <RevealOnScroll>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               أنشئ ودشّن<span className="text-indigo-600 dark:text-indigo-400"> متجرك</span> بكل سهولة
//             </h2>
//           </RevealOnScroll>
//           <RevealOnScroll delay={0.2}>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               ما تحتاج خبرة سابقة أو وقت طويل… مع اتجر، تبدأ تجارتك بخطوات بسيطة وسريعة.
//             </p>
//           </RevealOnScroll>
//         </div>

//         <div className="space-y-16">
//           {caseStudies.map((caseStudy, index) => (
//             <RevealOnScroll key={index}>
//               <NeumorphicCard className="overflow-hidden" intensity="strong" interactive={false}>
//                 <div
//                   className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
//                     index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="relative h-64 lg:h-auto">
//                     <ClippingReveal direction={index % 2 === 0 ? "left" : "right"} className="h-full">
//                       <Image
//                         src={caseStudy.image}
//                         alt={caseStudy.title}
//                         fill
//                         className="object"
//                       />
//                     </ClippingReveal>
//                   </div>
//                   <div className="p-8 lg:p-12 flex flex-col justify-center">
//                     {caseStudy.category && (
//                       <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
//                         {caseStudy.category}
//                       </div>
//                     )}
//                     <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
//                       {caseStudy.title}
//                     </h3>
//                     {caseStudy.subtitle && (
//                       <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//                         {caseStudy.subtitle}
//                       </h4>
//                     )}
//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       {caseStudy.description}
//                     </p>

//                     {/* Render results list */}
//                     {caseStudy.results && (
//                       <div className="mb-6">
//                         <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">النتائج:</h4>
//                         <ul className="space-y-2">
//                           {caseStudy.results.map((result, idx) => (
//                             <li key={idx} className="flex items-center">
//                               <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-2">
//                                 <svg
//                                   className="h-3 w-3 text-indigo-600 dark:text-indigo-400"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   stroke="currentColor"
//                                 >
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                 </svg>
//                               </div>
//                               <span className="text-gray-700 dark:text-gray-300">{result}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}

//                     {/* Render bullet points */}
//                     {caseStudy.bulletPoints && (
//                       <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
//                         {caseStudy.bulletPoints.map((point, idx) => (
//                           <li key={idx}>{point}</li>
//                         ))}
//                       </ul>
//                     )}

//                     {/* Render call to action */}
//                     {caseStudy.callToAction ? (
//                       <NeumorphicButton
//                         as="a"
//                         href={caseStudy.callToAction.href}
//                         className="text-indigo-600 dark:text-indigo-400 font-semibold group"
//                       >
//                         {caseStudy.callToAction.text}
//                         <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
//                       </NeumorphicButton>
//                     ) : (
//                       <NeumorphicButton className="text-indigo-600 dark:text-indigo-400 font-semibold group">
//                         اعرف كيف تبدأ متجرك
//                         <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
//                       </NeumorphicButton>
//                     )}
//                   </div>
//                 </div>
//               </NeumorphicCard>
//             </RevealOnScroll>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client"

// import { useRef } from "react"
// import Image from "next/image"
// import { RevealOnScroll, ClippingReveal } from "@/components/ui/reveal-effects"
// import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
// import { ArrowRight } from "lucide-react"

// export default function CaseStudiesSection() {
//   const sectionRef = useRef(null)

//   const caseStudies = [
//     {
//       title: "صانع المتاجر من اتجر",
//       category: "اتجر",
//       image: "/images/feature_1.png",
//       description:
//         "سواء كنت تبغى تفتح متجرك الإلكتروني أو تدير متجرك التقليدي، مع اتجر كل شيء صار جاهز لك بدون أي تعقيد.",
//       results: [
//         "أكثر من 1000 خدمة متوفرة علشان تسهّل عليك جميع جوانب إدارة متجرك.",
//         "خطوات سريعة وسهلة عشان تقدر تبدأ متجرك أو تديره بوقت قليل",
//         "مجتمع تجار نشط يدعمك ويشاركك التجارب والنصائح عشان تنجح."
//       ]
//     },
//     {
//       title: "دعم من الخبراء يليق بتجارك",
//       category: "خدمات",
//       image: "/images/horo.svg",
//       description:
//         "مساعدة من فريق يتميّز بالسرعة والتواجد والخبرة؛ لا تتردد بطلب المساعدة وقت الحاجة.",
//       callToAction: {
//         text: "تواصل معنا",
//         href: "/contact"
//       }
//     },
//     {
//       title: "حلول تسويقيَّة في مكان واحد",
//       category: "تسويق",
//       image: "/images/feature_1.png",
//       subtitle: "استهدف المزيد من العملاء بحلول تسويقية مخصصة",
//       bulletPoints: [
//         "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.",
//         "تحكم بكافة تفاصيل العروض والخصومات.",
//         "دعم التسويق بالعمولة لمتجرك.",
//         "استهداف دقيق للسلات المتروكة.",
//         "إدارة الحملات الإعلانية على مختلف المنصات."
//       ]
//     },
//     {
//       title: "تناسق على أي جهاز",
//       category: "تجاوب",
//       image: "/images/تطبيق_متاجر.png",
//       description:
//         "جميع المتاجر المصممة في اتجر تتجاوب أوتوماتيكيًا مع مختلف الأجهزة لتظهر بمظهرٍ مذهل على الجوال والتابلت والكمبيوتر.",
//       bulletPoints: [
//         "توافق تلقائي مع الشاشات المختلفة.",
//         "عرض أنيق وواضح على جميع الأجهزة."
//       ]
//     },
//     {
//       title: "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!",
//       category: "المدفوعات",
//       image: "/images/feature_2.png",
//       description:
//         "استفد من نظام أتجر  المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك.",
//       bulletPoints: [
//         "وسائل دفع متنوعة تلبي كافة احتياجات عملائك",
//         "حماية عالية وأمان لكافة عملياتك.."
//       ]
//     }
//   ]

//   return (
//     <section
//       id="case-studies"
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-slate-50 font-arabic to-white dark:from-slate-900 dark:to-slate-800"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <RevealOnScroll>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               أنشئ ودشّن<span className="text-indigo-600 dark:text-indigo-400"> متجرك</span> بكل سهولة
//             </h2>
//           </RevealOnScroll>
//           <RevealOnScroll delay={0.2}>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               ما تحتاج خبرة سابقة أو وقت طويل… مع اتجر، تبدأ تجارتك بخطوات بسيطة وسريعة.
//             </p>
//           </RevealOnScroll>
//         </div>

//         <div className="space-y-16">
//           {caseStudies.map((caseStudy, index) => (
//             <RevealOnScroll key={index}>
//               <NeumorphicCard className="overflow-hidden" intensity="strong" interactive={false}>
//                 <div
//                   className={`flex flex-col lg:flex-row ${
//                     index % 2 === 1 ? "lg:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
//                     <ClippingReveal direction={index % 2 === 0 ? "left" : "right"} className="h-full">
//                       <Image
//                         src={caseStudy.image}
//                         alt={caseStudy.title}
//                         fill
//                         className="object-contain"
//                       />
//                     </ClippingReveal>
//                   </div>
//                   <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
//                     {caseStudy.category && (
//                       <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
//                         {caseStudy.category}
//                       </div>
//                     )}
//                     <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
//                       {caseStudy.title}
//                     </h3>
//                     {caseStudy.subtitle && (
//                       <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//                         {caseStudy.subtitle}
//                       </h4>
//                     )}
//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       {caseStudy.description}
//                     </p>

//                     {caseStudy.results && (
//                       <div className="mb-6">
//                         <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">النتائج:</h4>
//                         <ul className="space-y-2">
//                           {caseStudy.results.map((result, idx) => (
//                             <li key={idx} className="flex items-center">
//                               <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-2">
//                                 <svg
//                                   className="h-3 w-3 text-indigo-600 dark:text-indigo-400"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   stroke="currentColor"
//                                 >
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                 </svg>
//                               </div>
//                               <span className="text-gray-700 dark:text-gray-300">{result}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}

//                     {caseStudy.bulletPoints && (
//                       <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
//                         {caseStudy.bulletPoints.map((point, idx) => (
//                           <li key={idx}>{point}</li>
//                         ))}
//                       </ul>
//                     )}

//                     {caseStudy.callToAction ? (
//                       <NeumorphicButton
//                         as="a"
//                         href={caseStudy.callToAction.href}
//                         className="text-indigo-600 dark:text-indigo-400 font-semibold group"
//                       >
//                         {caseStudy.callToAction.text}
//                         <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
//                       </NeumorphicButton>
//                     ) : (
//                       <NeumorphicButton className="text-indigo-600 dark:text-indigo-400 font-semibold group">
//                         اعرف كيف تبدأ متجرك
//                         <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
//                       </NeumorphicButton>
//                     )}
//                   </div>
//                 </div>
//               </NeumorphicCard>
//             </RevealOnScroll>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useRef } from "react"
import Image from "next/image"
import { RevealOnScroll, ClippingReveal } from "@/components/ui/reveal-effects"
import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
import { ArrowRight } from "lucide-react"
export default function CaseStudiesSection() {
    const sectionRef = useRef(null)
  
    const caseStudies = [
      {
        title: "صانع المتاجر من اتجر",
        category: "اتجر",
        image: "/images/feature_1.png",
        description:
          "سواء كنت تبغى تفتح متجرك الإلكتروني أو تدير متجرك التقليدي، مع اتجر كل شيء صار جاهز لك بدون أي تعقيد.",
        results: [
          "أكثر من 1000 خدمة متوفرة علشان تسهّل عليك جميع جوانب إدارة متجرك.",
          "خطوات سريعة وسهلة عشان تقدر تبدأ متجرك أو تديره بوقت قليل",
          "مجتمع تجار نشط يدعمك ويشاركك التجارب والنصائح عشان تنجح."
        ],
        callToAction: {
          text: "اعرف كيف تبدأ متجرك",
          href: "/start-shop"
        }
      },
      {
        title: "دعم من الخبراء يليق بتجارك",
        category: "خدمات",
        image: "/images/mimg-1.svg",
        description:
          "مساعدة من فريق يتميّز بالسرعة والتواجد والخبرة؛ لا تتردد بطلب المساعدة وقت الحاجة.",
        callToAction: {
          text: "تواصل معنا",
          href: "/contact"
        }
      },
      {
        title: "حلول تسويقيَّة في مكان واحد",
        category: "تسويق",
        image: "/images/feature_1.png",
        subtitle: "استهدف المزيد من العملاء بحلول تسويقية مخصصة",
        bulletPoints: [
          "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.",
          "تحكم بكافة تفاصيل العروض والخصومات.",
          "دعم التسويق بالعمولة لمتجرك.",
          "استهداف دقيق للسلات المتروكة.",
          "إدارة الحملات الإعلانية على مختلف المنصات."
        ],
        callToAction: {
          text: "اكتشف المزيد",
          href: "/marketing-solutions"
        }
      },
      {
        title: "تناسق على أي جهاز",
        category: "تجاوب",
        image: "/images/تطبيق_متاجر.png",
        description:
          "جميع المتاجر المصممة في اتجر تتجاوب أوتوماتيكيًا مع مختلف الأجهزة لتظهر بمظهرٍ مذهل على الجوال والتابلت والكمبيوتر.",
        bulletPoints: [
          "توافق تلقائي مع الشاشات المختلفة.",
          "عرض أنيق وواضح على جميع الأجهزة."
        ],
        callToAction: {
          text: "تعرّف على المزيد",
          href: "/responsive-design"
        }
      },
      {
        title: "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!",
        category: "المدفوعات",
        image: "/images/feature_2.png",
        description:
          "استفد من نظام أتجر  المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك.",
        bulletPoints: [
          "وسائل دفع متنوعة تلبي كافة احتياجات عملائك",
          "حماية عالية وأمان لكافة عملياتك.."
        ],
        callToAction: {
          text: "ابدأ الآن",
          href: "/payments"
        }
      }
    ]
  
    return (
      <section
        id="case-studies"
        ref={sectionRef}
        className="py-20 bg-gradient-to-b from-slate-50 font-arabic to-white dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                أنشئ ودشّن<span className="text-indigo-600 dark:text-indigo-400"> متجرك</span> بكل سهولة
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ما تحتاج خبرة سابقة أو وقت طويل… مع اتجر، تبدأ تجارتك بخطوات بسيطة وسريعة.
              </p>
            </RevealOnScroll>
          </div>
  
          <div className="space-y-16 font-arabic">
            {caseStudies.map((caseStudy, index) => (
              <RevealOnScroll key={index}>
                <NeumorphicCard className="overflow-hidden" intensity="strong" interactive={false}>
                  <div
                    className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
                      <ClippingReveal direction={index % 2 === 0 ? "left" : "right"} className="h-full">
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          className="object-contain"
                        />
                      </ClippingReveal>
                    </div>
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      {caseStudy.category && (
                        <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                          {caseStudy.category}
                        </div>
                      )}
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {caseStudy.title}
                      </h3>
                      {caseStudy.subtitle && (
                        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                          {caseStudy.subtitle}
                        </h4>
                      )}
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {caseStudy.description}
                      </p>
  
                      {caseStudy.results && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">النتائج:</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-2">
                                  <svg
                                    className="h-3 w-3 text-indigo-600 dark:text-indigo-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
  
                      {caseStudy.bulletPoints && (
                        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                          {caseStudy.bulletPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
  
                      {caseStudy.callToAction ? (
                        <NeumorphicButton
                          as="a"
                          href={caseStudy.callToAction.href}
                          className="text-indigo-600 dark:text-indigo-400 font-semibold group"
                        >
                          {caseStudy.callToAction.text}
                          <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                        </NeumorphicButton>
                      ) : (
                        <NeumorphicButton className="text-indigo-600 dark:text-indigo-400 font-semibold group">
                          اعرف كيف تبدأ متجرك
                          <ArrowRight className="mr-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                        </NeumorphicButton>
                      )}
                    </div>
                  </div>
                </NeumorphicCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    )
  }
  