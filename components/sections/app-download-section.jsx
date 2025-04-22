"use client"

import { useRef } from "react"
import Image from "next/image"
import { RevealOnScroll } from "@/components/ui/reveal-effects"
import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic-card"
import { Card3DTilt } from "@/components/ui/3d-card"
import { Smartphone, Bell, BarChart, ShoppingBag } from "lucide-react"

export default function AppDownloadSection() {
  const sectionRef = useRef(null)

  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "إدارة الطلبات",
      description: "تتبع وإدارة طلبات متجرك من أي مكان وفي أي وقت",
    },
    {
      icon: <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "إشعارات فورية",
      description: "احصل على إشعارات فورية عند وصول طلبات جديدة",
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "تقارير المبيعات",
      description: "اطلع على أداء متجرك وإحصائيات المبيعات أثناء التنقل",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "تجربة مستخدم سلسة",
      description: "واجهة سهلة الاستخدام مصممة خصيصاً للأجهزة المحمولة",
    },
  ]

  return (
    <section
      id="app-download"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                أدر متجرك من <span className="text-indigo-600 dark:text-indigo-400">هاتفك</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                حمّل تطبيق اتجر للهواتف الذكية وأدر متجرك الإلكتروني من أي مكان وفي أي وقت. تابع المبيعات، وأدر الطلبات،
                وتواصل مع العملاء، كل ذلك من هاتفك المحمول.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <RevealOnScroll delay={0.2}>
                  <NeumorphicButton className="flex items-center gap-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.5227 7.39069C19.2451 7.39069 20.6536 8.34983 21.5964 9.75469C21.4365 9.8505 19.2451 11.2248 19.2611 13.7186C19.2931 16.6839 21.9864 17.8269 22 17.8588C21.984 17.9228 21.5644 19.3086 20.4341 20.7293C19.4753 21.9362 18.4686 23.1271 16.9813 23.1271C15.5258 23.1271 15.0743 22.3215 13.4155 22.3215C11.7246 22.3215 11.0797 23.1111 9.7199 23.1111C8.3281 23.1111 7.20753 21.8405 6.2167 20.6336C4.88347 18.9988 3.80807 16.5051 3.76007 14.0912C3.72806 12.8205 4.04011 11.5658 4.65222 10.5228C5.51703 9.0542 7.0523 8.06528 8.73116 8.04929C10.1546 8.01731 11.4399 8.95046 12.2727 8.95046C13.0895 8.95046 14.6248 8.04929 16.3356 8.19121C16.5595 7.40167 17.0909 7.39069 17.5227 7.39069ZM14.5059 5.95409C15.2269 5.07092 15.7264 3.87997 15.6144 2.68903C14.6077 2.72101 13.4155 3.36504 12.6625 4.24821C11.9895 5.04373 11.3934 6.25067 11.5214 7.42563C12.6305 7.49359 13.7848 6.83357 14.5059 5.95409Z" />
                    </svg>
                    <div className="text-right">
                      <div className="text-xs text-gray-600 dark:text-gray-300">تحميل من</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">App Store</div>
                    </div>
                  </NeumorphicButton>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <NeumorphicButton className="flex items-center gap-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.60001 2.40002C3.50001 2.50002 3.40001 2.70002 3.40001 2.90002V21.1C3.40001 21.3 3.50001 21.5 3.60001 21.6L3.70001 21.7L13.4 12L3.70001 2.30002L3.60001 2.40002Z" />
                      <path d="M17.8 16.4L14.4 14.3L13.4 15.3L16.8 18.7L17 18.6C17.6 18.3 18 17.7 18 17C18 16.3 17.5 15.7 17.8 16.4Z" />
                      <path d="M17 5.39995C17.6 5.69995 18 6.29995 18 6.99995C18 7.69995 17.6 8.29995 17 8.59995L16.8 8.69995L13.4 5.29995L14.4 4.29995L17 5.39995Z" />
                      <path d="M3.8 21.8C4.1 22.1 4.5 22.1 5 21.9L17.9 14.8L14.5 11.4L3.8 21.8Z" />
                      <path d="M17.9 9.19998L5 2.09998C4.5 1.89998 4.1 1.89998 3.8 2.19998L14.5 12.5L17.9 9.19998Z" />
                    </svg>
                    <div className="text-right">
                      <div className="text-xs text-gray-600 dark:text-gray-300">تحميل من</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Google Play</div>
                    </div>
                  </NeumorphicButton>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.4}>
            <Card3DTilt intensity={0.3} glare={true}>
              <NeumorphicCard className="p-6 relative" interactive={false}>
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/images/تطبيق_متاجر.png"
                    alt="تطبيق اتجر"
                    fill
                    className="object-contain"
                  />
                </div>
              </NeumorphicCard>
            </Card3DTilt>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
