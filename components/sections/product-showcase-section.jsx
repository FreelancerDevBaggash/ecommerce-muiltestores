"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { RevealOnScroll } from "@/components/ui/reveal-effects"
import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function ProductShowcaseSection() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const products = [
    {
      name: "لوحة التحكم الرئيسية",
      image: "/images/dash.png",
      description:
        "واجهة سهلة الاستخدام تمكنك من إدارة متجرك بكفاءة. راقب المبيعات، وأدر المخزون، وتفاعل مع العملاء، كل ذلك من مكان واحد.",
      features: ["تقارير مبيعات مفصلة", "إدارة المخزون", "متابعة الطلبات", "إحصائيات العملاء"],
    },
    {
      name: "محرر المتجر",
      image: "/images/في لوحةKPIs.png",
      description:
        "صمم متجرك بسهولة باستخدام محرر السحب والإفلات. اختر من بين مئات القوالب واضبط الألوان والخطوط لتعكس هوية علامتك التجارية.",
      features: ["محرر سحب وإفلات", "قوالب متعددة", "تخصيص كامل", "معاينة مباشرة"],
    },
    {
      name: "إدارة المنتجات",

      description:
        "أضف وعدّل منتجاتك بسهولة. قم بتنظيمها في فئات، وأضف الصور والأوصاف، وحدد الأسعار والمخزون بطريقة مبسطة.",
      features: ["إضافة منتجات بسهولة", "إدارة الفئات", "خيارات المنتجات المتعددة", "استيراد وتصدير المنتجات"],
    },
    {
      name: "التحليلات والتقارير",
      image: "/images/dash.png",
      description:
        "احصل على رؤى دقيقة حول أداء متجرك. تتبع المبيعات والزيارات وسلوك العملاء لاتخاذ قرارات مستنيرة لنمو أعمالك.",
      features: ["تقارير مبيعات", "تحليل سلوك العملاء", "تتبع الزيارات", "تحليل معدل التحويل"],
    },
  ]

  const nextProduct = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  const prevProduct = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  return (
    <section
      id="product-showcase"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ميزات <span className="text-indigo-600 dark:text-indigo-400">المتجر</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              استكشف الميزات المتقدمة التي تقدمها منصة اتجر لمساعدتك في إدارة متجرك الإلكتروني
            </p>
          </RevealOnScroll>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <RevealOnScroll>
            <NeumorphicCard className="overflow-hidden" intensity="strong" interactive={false}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={products[activeIndex].image || "/placeholder.svg"}
                    alt={products[activeIndex].name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {products[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{products[activeIndex].description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">المميزات:</h4>
                    <ul className="space-y-2">
                      {products[activeIndex].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center ml-2">
                            <svg
                              className="h-3 w-3 text-indigo-600 dark:text-indigo-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </NeumorphicCard>
          </RevealOnScroll>

          {/* أزرار التنقل */}
          <div className="flex justify-center mt-8 gap-4">
            <NeumorphicButton
              className="w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400"
              onClick={prevProduct}
            >
              <ChevronRight className="h-6 w-6" />
            </NeumorphicButton>
            <NeumorphicButton
              className="w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400"
              onClick={nextProduct}
            >
              <ChevronLeft className="h-6 w-6" />
            </NeumorphicButton>
          </div>

          {/* مؤشرات */}
          <div className="flex justify-center mt-6 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-indigo-500 w-6"
                    : "bg-indigo-200 dark:bg-indigo-900/50 hover:bg-indigo-300 dark:hover:bg-indigo-800"
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
