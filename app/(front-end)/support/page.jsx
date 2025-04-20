"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Phone, Mail, MessageSquare, HelpCircle, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, SlideIn, Stagger } from "@/components/effects/scroll-animations"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const supportCategories = [
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "الأسئلة الشائعة",
      description: "إجابات على الأسئلة الأكثر شيوعاً",
      href: "/faq",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "قاعدة المعرفة",
      description: "مقالات ودروس تعليمية مفصلة",
      href: "/help",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "الدردشة المباشرة",
      description: "تحدث مع فريق الدعم الفني مباشرة",
      href: "#chat",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "البريد الإلكتروني",
      description: "أرسل استفسارك عبر البريد الإلكتروني",
      href: "#email",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "الاتصال الهاتفي",
      description: "تحدث مع فريق الدعم الفني عبر الهاتف",
      href: "#phone",
      color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
  ]

  const commonIssues = [
    {
      title: "كيفية إنشاء متجر جديد",
      description: "دليل خطوة بخطوة لإنشاء متجرك الإلكتروني الأول",
      href: "/help/create-store",
    },
    {
      title: "إعداد طرق الدفع",
      description: "كيفية إضافة وتكوين بوابات الدفع المختلفة",
      href: "/help/payment-methods",
    },
    {
      title: "إدارة المخزون",
      description: "كيفية إدارة المنتجات والمخزون بكفاءة",
      href: "/help/inventory-management",
    },
    {
      title: "إعداد الشحن",
      description: "كيفية إعداد خيارات الشحن والتوصيل",
      href: "/help/shipping-setup",
    },
    {
      title: "استرداد كلمة المرور",
      description: "خطوات استعادة كلمة المرور المفقودة",
      href: "/help/password-recovery",
    },
  ]

  return (
    <div className="pt-20 pb-16">
      <FadeIn>
        <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              مركز <span className="text-indigo-600 dark:text-indigo-400">الدعم</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              نحن هنا لمساعدتك. اعثر على إجابات لأسئلتك واستفساراتك من خلال مركز الدعم الخاص بنا.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="ابحث عن سؤال أو موضوع..."
                className="pr-12 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SlideIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">كيف يمكننا مساعدتك؟</h2>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Stagger>
            {supportCategories.map((category, index) => (
              <motion.a
                key={index}
                href={category.href}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <div className="mt-auto">
                  <Button variant="ghost" className="text-indigo-600 dark:text-indigo-400 group">
                    المزيد
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.a>
            ))}
          </Stagger>
        </div>

        <SlideIn direction="up">
          <div className="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">المشاكل الشائعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonIssues.map((issue, index) => (
                <motion.a
                  key={index}
                  href={issue.href}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{issue.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{issue.description}</p>
                  <div className="text-indigo-600 dark:text-indigo-400 flex items-center">
                    قراءة المزيد
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </SlideIn>

        <SlideIn direction="up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">تواصل معنا</h2>

          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="chat">الدردشة المباشرة</TabsTrigger>
              <TabsTrigger value="email">البريد الإلكتروني</TabsTrigger>
              <TabsTrigger value="phone">الاتصال الهاتفي</TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle>الدردشة المباشرة</CardTitle>
                  <CardDescription>تحدث مع فريق الدعم الفني مباشرة للحصول على مساعدة فورية.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    فريق الدعم الفني متاح للدردشة المباشرة من الأحد إلى الخميس، من الساعة 9 صباحاً حتى 5 مساءً.
                  </p>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">بدء الدردشة</Button>
                </CardContent>
                <CardFooter className="text-sm text-gray-500 dark:text-gray-400">
                  متوسط وقت الانتظار: 2 دقيقة
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>البريد الإلكتروني</CardTitle>
                  <CardDescription>أرسل استفسارك عبر البريد الإلكتروني وسنرد عليك في أقرب وقت ممكن.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    يمكنك إرسال استفسارك إلى{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">support@atjar.com</span>
                  </p>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">إرسال بريد إلكتروني</Button>
                </CardContent>
                <CardFooter className="text-sm text-gray-500 dark:text-gray-400">متوسط وقت الرد: 24 ساعة</CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="phone">
              <Card>
                <CardHeader>
                  <CardTitle>الاتصال الهاتفي</CardTitle>
                  <CardDescription>تحدث مع فريق الدعم الفني عبر الهاتف للحصول على مساعدة مباشرة.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    يمكنك الاتصال بنا على الرقم{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">+966 12 345 6789</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    ساعات العمل: الأحد إلى الخميس، من الساعة 9 صباحاً حتى 5 مساءً.
                  </p>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">اتصل بنا</Button>
                </CardContent>
                <CardFooter className="text-sm text-gray-500 dark:text-gray-400">
                  متوسط وقت الانتظار: 5 دقائق
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </SlideIn>
      </div>
    </div>
  )
}
