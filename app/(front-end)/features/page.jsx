"use client"

import { motion } from "framer-motion"
import {
  ShoppingBag,
  CreditCard,
  BarChart,
  Smartphone,
  Globe,
  Shield,
  Truck,
  Users,
  Zap,
  Palette,
  Bell,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-indigo-600" />,
      title: "إدارة المنتجات",
      description: "أضف وعدل منتجاتك بسهولة مع خيارات متعددة للعرض والتصنيف والتخصيص.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-indigo-600" />,
      title: "بوابات دفع متعددة",
      description: "تكامل سلس مع جميع بوابات الدفع المحلية والعالمية لتسهيل عملية الشراء.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      title: "تقارير وتحليلات",
      description: "لوحة تحكم ذكية تعرض إحصائيات المبيعات والزيارات وسلوك المستخدمين.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
      title: "تصميم متجاوب",
      description: "متجرك يعمل بشكل مثالي على جميع الأجهزة من الهواتف الذكية إلى أجهزة الكمبيوتر.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
      title: "تحسين محركات البحث",
      description: "أدوات متكاملة لتحسين ظهور متجرك في نتائج البحث وزيادة الزيارات.",
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: "حماية وأمان",
      description: "حماية متقدمة لبيانات متجرك وعملائك مع شهادات SSL وتشفير البيانات.",
    },
    {
      icon: <Truck className="h-10 w-10 text-indigo-600" />,
      title: "إدارة الشحن",
      description: "تكامل مع شركات الشحن المحلية والعالمية مع خيارات متعددة للتوصيل.",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "إدارة العملاء",
      description: "أدوات متكاملة لإدارة قاعدة عملائك وبناء علاقات طويلة الأمد معهم.",
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: "أداء سريع",
      description: "تحميل سريع للصفحات وأداء عالي لتحسين تجربة المستخدم وزيادة التحويلات.",
    },
    {
      icon: <Palette className="h-10 w-10 text-indigo-600" />,
      title: "تخصيص كامل",
      description: "خيارات تخصيص متعددة لتصميم متجرك بالشكل الذي يناسب علامتك التجارية.",
    },
    {
      icon: <Bell className="h-10 w-10 text-indigo-600" />,
      title: "إشعارات وتنبيهات",
      description: "نظام إشعارات متكامل لإبقائك على اطلاع بكل ما يحدث في متجرك.",
    },
    {
      icon: <Search className="h-10 w-10 text-indigo-600" />,
      title: "بحث متقدم",
      description: "محرك بحث ذكي يساعد عملائك في العثور على ما يبحثون عنه بسرعة وسهولة.",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">مميزات منصة اتجر</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            اكتشف كل المميزات التي تقدمها منصة اتجر لمساعدتك في بناء وإدارة متجرك الإلكتروني بكفاءة عالية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            جاهز لبدء رحلتك مع اتجر؟
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            انضم إلى آلاف التجار الناجحين الذين يستخدمون منصة اتجر لبناء وتنمية أعمالهم التجارية عبر الإنترنت.
          </p>
          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-lg rounded-xl">
            ابدأ الآن مجاناً
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
