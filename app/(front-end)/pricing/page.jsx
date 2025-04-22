"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      name: "مجاني",
      description: "للمبتدئين والمشاريع الصغيرة",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "متجر إلكتروني كامل",
        "إضافة حتى 10 منتجات",
        "تصميم متجاوب للجوال",
        "دعم فني عبر البريد الإلكتروني",
        "تقارير أساسية",
      ],
      limitations: ["بدون نطاق مخصص", "علامة مائية اتجر", "رسوم معاملات 5%"],
      cta: "ابدأ مجاناً",
      popular: false,
    },
    {
      name: "أساسي",
      description: "للشركات الناشئة والمتاجر المتوسطة",
      price: {
        monthly: 49,
        yearly: 39,
      },
      features: [
        "متجر إلكتروني كامل",
        "إضافة حتى 100 منتج",
        "نطاق مخصص مجاني",
        "بدون علامة مائية",
        "دعم فني عبر الدردشة",
        "تقارير متقدمة",
        "تكامل مع وسائل التواصل الاجتماعي",
        "تطبيق جوال بسيط",
      ],
      limitations: ["رسوم معاملات 2%"],
      cta: "ابدأ الآن",
      popular: true,
    },
    {
      name: "متقدم",
      description: "للشركات المتوسطة والكبيرة",
      price: {
        monthly: 99,
        yearly: 79,
      },
      features: [
        "متجر إلكتروني كامل",
        "منتجات غير محدودة",
        "نطاق مخصص مجاني",
        "بدون علامة مائية",
        "دعم فني على مدار الساعة",
        "تقارير متقدمة",
        "تكامل مع وسائل التواصل الاجتماعي",
        "تطبيق جوال متكامل",
        "تكامل مع أنظمة ERP",
        "تخصيص كامل للتصميم",
        "تحليلات متقدمة",
      ],
      limitations: ["رسوم معاملات 1%"],
      cta: "ابدأ الآن",
      popular: false,
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
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            خطط أسعار بسيطة وشفافة
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            اختر الخطة المناسبة لاحتياجاتك وابدأ في بناء متجرك الإلكتروني اليوم
          </p>

          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === "monthly"
                    ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-400 shadow-sm"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                شهري
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === "yearly"
                    ? "bg-white dark:bg-gray-700 text-indigo-700 dark:text-indigo-400 shadow-sm"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                سنوي (خصم 20%)
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-indigo-600 dark:ring-indigo-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">الأكثر شيوعاً</div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price[billingCycle]}</span>
                  <span className="text-gray-600 dark:text-gray-300 mr-2">
                    ريال / {billingCycle === "monthly" ? "شهرياً" : "شهرياً"}
                  </span>
                </div>

                <Button
                  className={`w-full ${plan.popular ? "bg-indigo-700 hover:bg-indigo-800" : "bg-gray-800 hover:bg-gray-700"} text-white`}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start text-gray-500 dark:text-gray-400">
                      <span className="h-5 w-5 ml-2 flex-shrink-0">×</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
              أسئلة شائعة حول الأسعار
            </h2>
            <p className="text-gray-600 dark:text-gray-300">إليك بعض الأسئلة الشائعة حول خطط الأسعار الخاصة بنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">هل هناك رسوم إضافية؟</h3>
              <p className="text-gray-600 dark:text-gray-300">
                لا توجد رسوم خفية. الرسوم الوحيدة الإضافية هي رسوم المعاملات المذكورة في كل خطة.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                هل يمكنني ترقية خطتي لاحقاً؟
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                نعم، يمكنك ترقية خطتك في أي وقت. سيتم احتساب الفرق بين الخطتين وإضافته إلى فاتورتك الشهرية أو السنوية.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                هل يمكنني إلغاء اشتراكي في أي وقت؟
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                نعم، يمكنك إلغاء اشتراكك في أي وقت. لن يتم فرض أي رسوم إضافية عند الإلغاء.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                هل هناك فترة تجريبية مجانية؟
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                نعم، نقدم فترة تجريبية مجانية لمدة 14 يومًا لجميع الخطط المدفوعة لتتمكن من تجربة جميع الميزات قبل
                الاشتراك.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-indigo-700 dark:text-indigo-400 border-indigo-700 dark:border-indigo-400"
                  >
                    <HelpCircle className="h-5 w-5 ml-2" />
                    لديك المزيد من الأسئلة؟
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>تواصل مع فريق المبيعات للحصول على مزيد من المعلومات</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
