// // "use client"

// // import { motion } from "framer-motion"
// // import { Button } from "@/components/ui/button"
// // import Image from "next/image"
// // import { useRef, useState, useEffect } from "react"
// // import { ShoppingBag, CreditCard, Smartphone, Globe, Shield, Users } from "lucide-react"

// // export default function SolutionsPage() {
// //   const industries = [
// //     {
// //       title: "متاجر الإلكترونيات",
// //       description: "حلول متكاملة لبيع الأجهزة الإلكترونية والمنزلية والكهربائية عبر الإنترنت.",
// //       icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
// //       features: [
// //         "عرض تفاصيل المنتجات بطريقة احترافية",
// //         "إدارة المخزون بكفاءة عالية",
// //         "خيارات شحن متعددة للمنتجات الكبيرة",
// //       ],
// //     },
// //     {
// //       title: "الأزياء والملابس",
// //       description: "منصة متخصصة لبيع الملابس والأزياء والإكسسوارات بتجربة تسوق مميزة.",
// //       icon: <ShoppingBag className="h-10 w-10 text-indigo-600" />,
// //       features: [
// //         "عرض المقاسات والألوان بطريقة سهلة",
// //         "صور عالية الجودة مع إمكانية التكبير",
// //         "سياسات إرجاع واستبدال مرنة",
// //       ],
// //     },
// //     {
// //       title: "المطاعم والكافيهات",
// //       description: "حلول متكاملة للمطاعم والكافيهات لعرض القوائم وإدارة الطلبات والتوصيل.",
// //       icon: <CreditCard className="h-10 w-10 text-indigo-600" />,
// //       features: [
// //         "قوائم طعام تفاعلية سهلة التحديث",
// //         "نظام حجز طاولات وإدارة الطلبات",
// //         "خدمات توصيل متكاملة مع تتبع مباشر",
// //       ],
// //     },
// //     {
// //       title: "العناية والتجميل",
// //       description: "منصة متخصصة لبيع منتجات العناية والتجميل مع تجربة تسوق مميزة.",
// //       icon: <Users className="h-10 w-10 text-indigo-600" />,
// //       features: [
// //         "عرض تفاصيل المنتج بطريقة جذابة",
// //         "برامج ولاء خاصة بمنتجات التجميل",
// //         "محتوى تثقيفي متكامل مع المنتجات",
// //       ],
// //     },
// //     {
// //       title: "المنتجات الرقمية",
// //       description: "حلول متخصصة لبيع المنتجات الرقمية مثل الكتب الإلكترونية والدورات التدريبية.",
// //       icon: <Globe className="h-10 w-10 text-indigo-600" />,
// //       features: ["تسليم تلقائي للمنتجات الرقمية", "حماية متقدمة للمحتوى الرقمي", "إدارة التراخيص والاشتراكات بسهولة"],
// //     },
// //     {
// //       title: "الصحة واللياقة",
// //       description: "منصة متخصصة لبيع منتجات الصحة واللياقة البدنية والمكملات الغذائية.",
// //       icon: <Shield className="h-10 w-10 text-indigo-600" />,
// //       features: [
// //         "عرض تفاصيل المكونات والفوائد بوضوح",
// //         "نظام اشتراكات مرن للمنتجات المتكررة",
// //         "محتوى تثقيفي متكامل مع المنتجات",
// //       ],
// //     },
// //   ]

// //   return (
// //     <div className="pt-24 pb-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
// //             حلول متخصصة لكل صناعة
// //           </h1>
// //           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
// //             نقدم حلولاً مخصصة تناسب احتياجات مختلف الصناعات والقطاعات التجارية
// //           </p>
// //         </motion.div>

// //         <div className="space-y-20">
// //           {industries.map((industry, index) => {
// //             const isEven = index % 2 === 0
// //             const ref = useRef(null)
// //             const [isInView, setIsInView] = useState(false)

// //             useEffect(() => {
// //               const observer = new IntersectionObserver(
// //                 ([entry]) => {
// //                   setIsInView(entry.isIntersecting)
// //                 },
// //                 {
// //                   threshold: 0.1,
// //                 },
// //               )

// //               if (ref.current) {
// //                 observer.observe(ref.current)
// //               }

// //               return () => {
// //                 if (ref.current) {
// //                   observer.unobserve(ref.current)
// //                 }
// //               }
// //             }, [])

// //             return (
// //               <motion.div
// //                 key={index}
// //                 ref={ref}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
// //                 transition={{ duration: 0.8 }}
// //                 className={`flex flex-col ${
// //                   isEven ? "lg:flex-row" : "lg:flex-row-reverse"
// //                 } items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8`}
// //               >
// //                 <div className="lg:w-1/2">
// //                   <div className="mb-6">{industry.icon}</div>
// //                   <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
// //                     {industry.title}
// //                   </h2>
// //                   <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{industry.description}</p>

// //                   <ul className="space-y-3 mb-8">
// //                     {industry.features.map((feature, idx) => (
// //                       <li key={idx} className="flex items-start">
// //                         <svg
// //                           className="h-6 w-6 text-indigo-600 ml-2 flex-shrink-0"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                         >
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                         </svg>
// //                         <span className="text-gray-600 dark:text-gray-300">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>

// //                   <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">اكتشف المزيد</Button>
// //                 </div>

// //                 <div className="lg:w-1/2">
// //                   <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
// //                     <Image
// //                       src={`/placeholder.svg?height=400&width=600&text=${industry.title}`}
// //                       alt={industry.title}
// //                       fill
// //                       className="object-cover"
// //                     />
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )
// //           })}
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mt-20"
// //         >
// //           <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
// //             لم تجد الحل المناسب لك؟
// //           </h2>
// //           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
// //             تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حل مخصص يناسب متطلبات عملك
// //           </p>
// //           <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-lg rounded-xl">
// //             تواصل مع فريق المبيعات
// //           </Button>
// //         </motion.div>
// //       </div>
// //     </div>
// //   )
// // }
// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { useRef, useState, useEffect } from "react"
// import { ShoppingBag, CreditCard, Smartphone, Globe, Shield, Users } from "lucide-react"

// export default function SolutionsPage() {
//   const industries = [
//     {
//       title: "متاجر الإلكترونيات",
//       description: "حلول متكاملة لبيع الأجهزة الإلكترونية والمنزلية والكهربائية عبر الإنترنت.",
//       icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
//       features: [
//         "عرض تفاصيل المنتجات بطريقة احترافية",
//         "إدارة المخزون بكفاءة عالية",
//         "خيارات شحن متعددة للمنتجات الكبيرة",
//       ],
//     },
//     {
//       title: "الأزياء والملابس",
//       description: "منصة متخصصة لبيع الملابس والأزياء والإكسسوارات بتجربة تسوق مميزة.",
//       icon: <ShoppingBag className="h-10 w-10 text-indigo-600" />,
//       features: [
//         "عرض المقاسات والألوان بطريقة سهلة",
//         "صور عالية الجودة مع إمكانية التكبير",
//         "سياسات إرجاع واستبدال مرنة",
//       ],
//     },
//     {
//       title: "المطاعم والكافيهات",
//       description: "حلول متكاملة للمطاعم والكافيهات لعرض القوائم وإدارة الطلبات والتوصيل.",
//       icon: <CreditCard className="h-10 w-10 text-indigo-600" />,
//       features: [
//         "قوائم طعام تفاعلية سهلة التحديث",
//         "نظام حجز طاولات وإدارة الطلبات",
//         "خدمات توصيل متكاملة مع تتبع مباشر",
//       ],
//     },
//     {
//       title: "العناية والتجميل",
//       description: "منصة متخصصة لبيع منتجات العناية والتجميل مع تجربة تسوق مميزة.",
//       icon: <Users className="h-10 w-10 text-indigo-600" />,
//       features: [
//         "عرض تفاصيل المنتج بطريقة جذابة",
//         "برامج ولاء خاصة بمنتجات التجميل",
//         "محتوى تثقيفي متكامل مع المنتجات",
//       ],
//     },
//     {
//       title: "المنتجات الرقمية",
//       description: "حلول متخصصة لبيع المنتجات الرقمية مثل الكتب الإلكترونية والدورات التدريبية.",
//       icon: <Globe className="h-10 w-10 text-indigo-600" />,
//       features: ["تسليم تلقائي للمنتجات الرقمية", "حماية متقدمة للمحتوى الرقمي", "إدارة التراخيص والاشتراكات بسهولة"],
//     },
//     {
//       title: "الصحة واللياقة",
//       description: "منصة متخصصة لبيع منتجات الصحة واللياقة البدنية والمكملات الغذائية.",
//       icon: <Shield className="h-10 w-10 text-indigo-600" />,
//       features: [
//         "عرض تفاصيل المكونات والفوائد بوضوح",
//         "نظام اشتراكات مرن للمنتجات المتكررة",
//         "محتوى تثقيفي متكامل مع المنتجات",
//       ],
//     },
//   ]

//   return (
//     <div className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-6xl md:text-6xl font-bold text-indigo-700 dark:text-indigo-400 my-6">
//             حلول متخصصة لكل صناعة
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             نقدم حلولاً مخصصة تناسب احتياجات مختلف الصناعات والقطاعات التجارية
//           </p>
//         </motion.div>

//         <div className="space-y-20">
//           {industries.map((industry, index) => {
//             const isEven = index % 2 === 0
//             const ref = useRef(null)
//             const [isInView, setIsInView] = useState(false)

//             useEffect(() => {
//               const observer = new IntersectionObserver(
//                 ([entry]) => {
//                   setIsInView(entry.isIntersecting)
//                 },
//                 {
//                   threshold: 0.1,
//                 },
//               )

//               if (ref.current) {
//                 observer.observe(ref.current)
//               }

//               return () => {
//                 if (ref.current) {
//                   observer.unobserve(ref.current)
//                 }
//               }
//             }, [])

//             return (
//               <motion.div
//                 key={index}
//                 ref={ref}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.8 }}
//                 className={`flex flex-col ${
//                   isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                 } items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8`}
//               >
//                 <div className="lg:w-1/2">
//                   <div className="mb-6">{industry.icon}</div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
//                     {industry.title}
//                   </h2>
//                   <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{industry.description}</p>

//                   <ul className="space-y-3 mb-8">
//                     {industry.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <svg
//                           className="h-6 w-6 text-indigo-600 ml-2 flex-shrink-0"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span className="text-gray-600 dark:text-gray-300">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">اكتشف المزيد</Button>
//                 </div>

//                 <div className="lg:w-1/2">
//                   <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
//                     <Image
//                       src={`/horo.svg?height=400&width=600&text=${industry.title}`}
//                       alt={industry.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mt-20"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
//             لم تجد الحل المناسب لك؟
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
//             تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حل مخصص يناسب متطلبات عملك
//           </p>
//           <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-lg rounded-xl">
//             تواصل مع فريق المبيعات
//           </Button>
//         </motion.div>
//       </div>
//     </div>
//   )
// }
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ShoppingBag, CreditCard, Smartphone, Globe, Shield, Users } from "lucide-react";

export default function SolutionsPage() {
  const industries = [
    {
      id: "electronics",
      title: "متاجر الإلكترونيات",
      description: "حلول متكاملة لبيع الأجهزة الإلكترونية والمنزلية والكهربائية عبر الإنترنت.",
      icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
      features: [
        "عرض تفاصيل المنتجات بطريقة احترافية",
        "إدارة المخزون بكفاءة عالية",
        "خيارات شحن متعددة للمنتجات الكبيرة",
      ],
      image: "/images/industries/electronics.jpg",
    },
    {
      id: "fashion",
      title: "الأزياء والملابس",
      description: "منصة متخصصة لبيع الملابس والأزياء والإكسسوارات بتجربة تسوق مميزة.",
      icon: <ShoppingBag className="h-10 w-10 text-indigo-600" />,
      features: [
        "عرض المقاسات والألوان بطريقة سهلة",
        "صور عالية الجودة مع إمكانية التكبير",
        "سياسات إرجاع واستبدال مرنة",
      ],
      image: "/images/image-4.jpg",
    },
    {
      id: "restaurants",
      title: "المطاعم والكافيهات",
      description: "حلول متكاملة للمطاعم والكافيهات لعرض القوائم وإدارة الطلبات والتوصيل.",
      icon: <CreditCard className="h-10 w-10 text-indigo-600" />,
      features: [
        "قوائم طعام تفاعلية سهلة التحديث",
        "نظام حجز طاولات وإدارة الطلبات",
        "خدمات توصيل متكاملة مع تتبع مباشر",
      ],
      image: "/images/image-5.jpg",
    },
    {
      id: "beauty",
      title: "العناية والتجميل",
      description: "منصة متخصصة لبيع منتجات العناية والتجميل مع تجربة تسوق مميزة.",
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      features: [
        "عرض تفاصيل المنتج بطريقة جذابة",
        "برامج ولاء خاصة بمنتجات التجميل",
        "محتوى تثقيفي متكامل مع المنتجات",
      ],
      image: "/images/image-6.jpg",
    },
    {
      id: "digital",
      title: "المنتجات الرقمية",
      description: "حلول متخصصة لبيع المنتجات الرقمية مثل الكتب الإلكترونية والدورات التدريبية.",
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
      features: ["تسليم تلقائي للمنتجات الرقمية", "حماية متقدمة للمحتوى الرقمي", "إدارة التراخيص والاشتراكات بسهولة"],
      image: "/horo.svg",
    },
    {
      id: "health",
      title: "الصحة واللياقة",
      description: "منصة متخصصة لبيع منتجات الصحة واللياقة البدنية والمكملات الغذائية.",
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      features: [
        "عرض تفاصيل المكونات والفوائد بوضوح",
        "نظام اشتراكات مرن للمنتجات المتكررة",
        "محتوى تثقيفي متكامل مع المنتجات",
      ],
      image: "/images/industries/health.jpg",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400 my-6">
            حلول متخصصة لكل صناعة
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نقدم حلولاً مخصصة تناسب احتياجات مختلف الصناعات والقطاعات التجارية
          </p>
        </motion.div>

        <div className="space-y-20">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            const ref = useRef(null);
            const [isInView, setIsInView] = useState(false);

            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  setIsInView(entry.isIntersecting);
                },
                { threshold: 0.1 }
              );

              if (ref.current) observer.observe(ref.current);
              return () => {
                if (ref.current) observer.unobserve(ref.current);
              };
            }, []);

            return (
              <motion.div
                key={industry.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="mb-6">{industry.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{industry.description}</p>

                  <ul className="space-y-3 mb-8">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-indigo-600 ml-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">
                    اكتشف المزيد
                  </Button>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      priority={index < 2}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            لم تجد الحل المناسب لك؟
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حل مخصص يناسب متطلبات عملك
          </p>
          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-lg rounded-lg">
            تواصل مع فريق المبيعات
          </Button>
        </motion.div>
      </div>
    </div>
  );
}