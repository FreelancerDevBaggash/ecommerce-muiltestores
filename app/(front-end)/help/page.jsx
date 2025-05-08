// "use client"

// import { useState, useRef } from "react"
// import { motion } from "framer-motion"
// import { Search, ChevronRight, BookOpen, Video, FileText, Code, Lightbulb, ArrowRight } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { FadeIn, SlideIn, Stagger, TypeText } from "@/components/animations/scroll-animations"
// import { useInView } from "framer-motion"

// export default function HelpCenterPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const ref = useRef(null)

//   const isInView = useInView(ref, { once: true, threshold: 0.1 })

//   const categories = [
//     {
//       icon: <BookOpen className="h-6 w-6" />,
//       title: "دليل المستخدم",
//       description: "دليل شامل لاستخدام منصة أتجر",
//       href: "/help/user-guide",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
//     },
//     {
//       icon: <Video className="h-6 w-6" />,
//       title: "فيديوهات تعليمية",
//       description: "شروحات مرئية لاستخدام المنصة",
//       href: "/help/tutorials",
//       color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
//     },
//     {
//       icon: <FileText className="h-6 w-6" />,
//       title: "المقالات",
//       description: "مقالات تفصيلية حول مختلف المواضيع",
//       href: "/help/articles",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
//     },
//     {
//       icon: <Code className="h-6 w-6" />,
//       title: "API",
//       description: "توثيق واجهة برمجة التطبيقات",
//       href: "/help/api",
//       color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
//     },
//     {
//       icon: <Lightbulb className="h-6 w-6" />,
//       title: "نصائح وحيل",
//       description: "نصائح لتحسين أداء متجرك",
//       href: "/help/tips",
//       color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
//     },
//   ]

//   const popularArticles = [
//     {
//       title: "كيفية إنشاء متجر جديد",
//       category: "دليل المستخدم",
//       views: "5.2K",
//       href: "/help/articles/create-store",
//     },
//     {
//       title: "إعداد طرق الدفع",
//       category: "دليل المستخدم",
//       views: "4.8K",
//       href: "/help/articles/payment-setup",
//     },
//     {
//       title: "تخصيص تصميم المتجر",
//       category: "دليل المستخدم",
//       views: "4.3K",
//       href: "/help/articles/store-design",
//     },
//     {
//       title: "إضافة منتجات جديدة",
//       category: "دليل المستخدم",
//       views: "3.9K",
//       href: "/help/articles/add-products",
//     },
//     {
//       title: "إعداد الشحن والتوصيل",
//       category: "دليل المستخدم",
//       views: "3.7K",
//       href: "/help/articles/shipping-setup",
//     },
//     {
//       title: "إدارة الطلبات",
//       category: "دليل المستخدم",
//       views: "3.5K",
//       href: "/help/articles/order-management",
//     },
//   ]

//   const recentArticles = [
//     {
//       title: "تكامل وسائل التواصل الاجتماعي",
//       category: "المقالات",
//       date: "قبل 3 أيام",
//       href: "/help/articles/social-media-integration",
//     },
//     {
//       title: "تحسين محركات البحث لمتجرك",
//       category: "المقالات",
//       date: "قبل 5 أيام",
//       href: "/help/articles/seo-optimization",
//     },
//     {
//       title: "استخدام التحليلات لزيادة المبيعات",
//       category: "المقالات",
//       date: "قبل أسبوع",
//       href: "/help/articles/analytics-sales",
//     },
//     {
//       title: "إعداد برامج الولاء للعملاء",
//       category: "المقالات",
//       date: "قبل أسبوعين",
//       href: "/help/articles/loyalty-programs",
//     },
//   ]

//   return (
//     <div ref={ref}  className="pt-20 pb-16">
//       <FadeIn isInView={isInView}>
//         <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//               مركز <span className="text-indigo-600 dark:text-indigo-400">المساعدة</span>
//             </h1>
//             {/* <TypeText
//             dir="rtl"
//               text="اعثر على إجابات لأسئلتك واستفساراتك من خلال مركز المساعدة الشامل"
//               className="text-xl  text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
//             /> */}

//             <div className="max-w-2xl mx-auto relative">
//               <Input
//                 type="text"
//                 placeholder="ابحث في مركز المساعدة..."
//                 className="pr-12 py-6 text-lg"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </FadeIn>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <SlideIn isInView={isInView}>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">استكشف حسب الفئة</h2>
//         </SlideIn>

//           <Stagger  isInView={isInView}>
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">

//             {categories.map((category, index) => (
//               <motion.a
//                 key={index}
//                 href={category.href}
//                 className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${category.color}`}>
//                   {category.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm">{category.description}</p>
//               </motion.a>
//             ))}
//              </div>
//           </Stagger>
       

//         <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 ">
//           <div className="lg:col-span-2">
//             <SlideIn isInView={isInView} direction="right">
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">المقالات الشائعة</h2>
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
//                 <ul className="divide-y divide-gray-200 dark:divide-gray-700">
//                   {popularArticles.map((article, index) => (
//                     <motion.li
//                       key={index}
//                       className="py-4 first:pt-0 last:pb-0"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                     >
//                       <a
//                         href={article.href}
//                         className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
//                       >
//                         <div>
//                           <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{article.title}</h3>
//                           <p className="text-sm text-gray-600 dark:text-gray-400">{article.category}</p>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-sm text-gray-500 dark:text-gray-400">{article.views} مشاهدة</span>
//                           <ChevronRight className="h-5 w-5 text-gray-400 mr-2" />
//                         </div>
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//                 <div className="mt-6 text-center">
//                   <Button variant="outline" className="text-indigo-600 dark:text-indigo-400">
//                     عرض جميع المقالات
//                   </Button>
//                 </div>
//               </div>
//             </SlideIn>
//           </div>

//           <div>
//             <SlideIn isInView={isInView} direction="left">
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">أحدث المقالات</h2>
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
//                 <ul className="space-y-4">
//                   {recentArticles.map((article, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                     >
//                       <a
//                         href={article.href}
//                         className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
//                       >
//                         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{article.title}</h3>
//                         <div className="flex justify-between items-center">
//                           <span className="text-sm text-gray-600 dark:text-gray-400">{article.category}</span>
//                           <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
//                         </div>
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//                 <div className="mt-6 text-center">
//                   <Button variant="outline" className="text-indigo-600 dark:text-indigo-400">
//                     عرض المزيد
//                   </Button>
//                 </div>
//               </div>
//             </SlideIn>
//           </div>
//         </div>

//         <SlideIn isInView={isInView} direction="up">
//           <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">لم تجد ما تبحث عنه؟</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//               فريق الدعم الفني متاح للإجابة على جميع استفساراتك. يمكنك التواصل معنا عبر الدردشة المباشرة أو البريد
//               الإلكتروني أو الهاتف.
//             </p>
//             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
//               تواصل مع الدعم الفني
//               <ArrowRight className="mr-2 h-4 w-4" />
//             </Button>
//           </div>
//         </SlideIn>
//       </div>
//     </div>
//   )
// }

// File: app/help-center/page.jsx
"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "دليل المستخدم",
      description: "دليل شامل لاستخدام منصة أتجر",
      href: "/help/user-guide",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "فيديوهات تعليمية",
      description: "شروحات مرئية لاستخدام المنصة",
      href: "/help/tutorials",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "المقالات",
      description: "مقالات تفصيلية حول مختلف المواضيع",
      href: "/help/articles",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API",
      description: "توثيق واجهة برمجة التطبيقات",
      href: "/help/api",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "نصائح وحيل",
      description: "نصائح لتحسين أداء متجرك",
      href: "/help/tips",
      color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
  ]

  const popularArticles = [
    { title: "كيفية إنشاء متجر جديد", category: "دليل المستخدم", views: "5.2K", href: "/help/articles/create-store" },
    { title: "إعداد طرق الدفع", category: "دليل المستخدم", views: "4.8K", href: "/help/articles/payment-setup" },
    { title: "تخصيص تصميم المتجر", category: "دليل المستخدم", views: "4.3K", href: "/help/articles/store-design" },
    { title: "إضافة منتجات جديدة", category: "دليل المستخدم", views: "3.9K", href: "/help/articles/add-products" },
    { title: "إعداد الشحن والتوصيل", category: "دليل المستخدم", views: "3.7K", href: "/help/articles/shipping-setup" },
    { title: "إدارة الطلبات", category: "دليل المستخدم", views: "3.5K", href: "/help/articles/order-management" },
  ]

  const recentArticles = [
    {
      title: "تكامل وسائل التواصل الاجتماعي",
      category: "المقالات",
      date: "قبل 3 أيام",
      href: "/help/articles/social-media-integration",
    },
    {
      title: "تحسين محركات البحث لمتجرك",
      category: "المقالات",
      date: "قبل 5 أيام",
      href: "/help/articles/seo-optimization",
    },
    {
      title: "استخدام التحليلات لزيادة المبيعات",
      category: "المقالات",
      date: "قبل أسبوع",
      href: "/help/articles/analytics-sales",
    },
    {
      title: "إعداد برامج الولاء للعملاء",
      category: "المقالات",
      date: "قبل أسبوعين",
      href: "/help/articles/loyalty-programs",
    },
  ]

  // Variants for staggering
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="pt-20 pb-16">
      {/* Header & Search */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            مركز <span className="text-indigo-600 dark:text-indigo-400">المساعدة</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            اعثر على إجابات لأسئلتك واستفساراتك من خلال مركز المساعدة الشامل
          </motion.p>
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="ابحث في مركز المساعدة..."
              className="pr-12 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Categories Grid with Stagger */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
      >
        {categories.map((cat) => (
          <motion.a
            key={cat.title}
            variants={itemVariants}
            href={cat.href}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${cat.color}`}>
              {cat.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{cat.description}</p>
          </motion.a>
        ))}
      </motion.div>

      {/* Popular Articles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <motion.section
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="lg:col-span-2 space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
            المقالات الشائعة
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {popularArticles.map((art, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <a
                    href={art.href}
                    className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{art.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{art.category}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{art.views} مشاهدة</span>
                      <ChevronRight className="h-5 w-5 text-gray-400 mr-2" />
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Button variant="outline" className="text-indigo-600 dark:text-indigo-400">
                عرض جميع المقالات
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Recent Articles */}
        <motion.section
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
            أحدث المقالات
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <ul className="space-y-4">
              {recentArticles.map((art, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  <a
                    href={art.href}
                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{art.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{art.category}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{art.date}</span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Button variant="outline" className="text-indigo-600 dark:text-indigo-400">
                عرض المزيد
              </Button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Support CTA */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={itemVariants} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">لم تجد ما تبحث عنه؟</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            فريق الدعم الفني متاح للإجابة على جميع استفساراتك. يمكنك التواصل معنا عبر الدردشة المباشرة أو البريد
            الإلكتروني أو الهاتف.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white inline-flex items-center">
            <span>تواصل مع الدعم الفني</span>
            <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
