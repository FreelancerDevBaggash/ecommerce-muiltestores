// "use client"

// import { motion } from "framer-motion"
// import { FiSmile, FiTarget, FiUsers } from "react-icons/fi"
// import { Button } from "@/components/ui/button"

// export default function PartnersSection() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=⊕')] bg-repeat opacity-5 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="w-auto h-auto bg-gradient-to-r from-indigo-50 to-indigo-50 dark:from-slate-900/50 dark:to-blue-950/50 rounded-3xl py-12 px-4 sm:px-8 border border-amber-100 dark:border-blue-900"
//         >
//           <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
//             <h2 className="font-arabic text-indigo-700 dark:text-indigo-400 font-bold text-3xl md:text-4xl mb-6">
//               لست وحدك في رحلتك التجارية
//             </h2>
//             <p className="font-arabic text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
//               مشوار التجارة ليس سهلاً، لكن لا تقلق... نحن معك من الخطوة الأولى، وسنرافقك حتى تحقق أهدافك.
//             </p>

//             {/* شبكة الأيقونات */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2 max-w-4xl">
//               {[
//                 {
//                   icon: <FiSmile size={28} className="text-indigo-600 dark:text-indigo-400" />,
//                   title: "دعم مستمر",
//                   description: "فريق من الخبراء متواجد للإجابة على استفساراتك على مدار الساعة.",
//                 },
//                 {
//                   icon: <FiTarget size={28} className="text-indigo-600 dark:text-indigo-400" />,
//                   title: "خطط واضحة",
//                   description: "نساعدك في تحديد أهدافك والمضي قدماً بخطوات مدروسة.",
//                 },
//                 {
//                   icon: <FiUsers size={28} className="text-indigo-600 dark:text-indigo-400" />,
//                   title: "مجتمع متعاون",
//                   description: "انضم إلى مجتمع من رواد الأعمال اليمنيين الذين يشاركونك نفس الطموح.",
//                 },
//               ].map(({ icon, title, description }, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-amber-100 dark:border-blue-900"
//                 >
//                   <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 dark:bg-amber-900/30 rounded-lg">
//                     {icon}
//                   </div>
//                   <div className="text-right">
//                     <h4 className="font-arabic text-lg font-semibold mb-1 text-indigo-700 dark:text-indigo-400">
//                       {title}
//                     </h4>
//                     <p className="font-arabic text-sm text-gray-600 dark:text-gray-300">{description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* زر Call To Action */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="mt-12"
//             >
//               <Button className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-arabic text-lg px-8 py-6 rounded-full shadow-md transition-all">
//                 ابدأ رحلتك مع أتجر
//               </Button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingBag, CreditCard, BarChart, Smartphone, Globe, Shield, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Partnerssection() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "إدارة المنتجات",
      description: "أضف وعدل منتجاتك بسهولة مع خيارات متعددة للعرض والتصنيف والتخصيص.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "بوابات دفع متعددة",
      description: "تكامل سلس مع جميع بوابات الدفع المحلية والعالمية لتسهيل عملية الشراء.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "تقارير وتحليلات",
      description: "لوحة تحكم ذكية تعرض إحصائيات المبيعات والزيارات وسلوك المستخدمين.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "تصميم متجاوب",
      description: "متجرك يعمل بشكل مثالي على جميع الأجهزة من الهواتف الذكية إلى أجهزة الكمبيوتر.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "تحسين محركات البحث",
      description: "أدوات متكاملة لتحسين ظهور متجرك في نتائج البحث وزيادة الزيارات.",
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "حماية وأمان",
      description: "حماية متقدمة لبيانات متجرك وعملائك مع شهادات SSL وتشفير البيانات.",
    },
    {
      icon: <Truck className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "إدارة الشحن",
      description: "تكامل مع شركات الشحن المحلية والعالمية مع خيارات متعددة للتوصيل.",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "إدارة العملاء",
      description: "أدوات متكاملة لإدارة قاعدة عملائك وبناء علاقات طويلة الأمد معهم.",
    },
  ]

  const sectionRef = useRef(null)
  const isInViewSection = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* زخرفة سبئية في الخلفية */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=⊕')] bg-repeat opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-700 dark:from-indigo-400 dark:to-blue-500 mb-4">
            مميزات منصة أتجر
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نقدم لك مجموعة متكاملة من المميزات التي تساعدك على إنشاء وإدارة متجرك الإلكتروني بكفاءة عالية وبطابع يمني
            أصيل
          </p>
        </motion.div>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewSection ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} isInViewSection={isInViewSection} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button className="bg-gradient-to-r from-amber-600 to-blue-700 hover:from-amber-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-xl">
            اكتشف جميع المميزات
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureItem({ feature, index, isInViewSection }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    once: true,
  })

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      key={index}
      ref={ref}
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-indigo-100 dark:border-blue-900 group"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
      <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  )
}
