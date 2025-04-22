"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn, SlideIn, Stagger } from "@/components/animations/scroll-animations"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFaqs, setOpenFaqs] = useState({})

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqCategories = [
    { id: "general", label: "عام" },
    { id: "account", label: "الحساب" },
    { id: "store", label: "المتجر" },
    { id: "products", label: "المنتجات" },
    { id: "orders", label: "الطلبات" },
    { id: "payments", label: "المدفوعات" },
    { id: "shipping", label: "الشحن" },
  ]

  const faqs = {
    general: [
      {
        id: "general-1",
        question: "ما هي منصة أتجر؟",
        answer:
          "منصة أتجر هي منصة متكاملة للتجارة الإلكترونية تتيح لك إنشاء وإدارة متجرك الإلكتروني بسهولة واحترافية. توفر المنصة جميع الأدوات اللازمة لإدارة المنتجات، والطلبات، والمدفوعات، والشحن، والتسويق، وغيرها الكثير.",
      },
      {
        id: "general-2",
        question: "ما هي تكلفة استخدام منصة أتجر؟",
        answer:
          "تقدم منصة أتجر عدة باقات تبدأ من الباقة المجانية وحتى الباقات المتقدمة. يمكنك الاطلاع على تفاصيل الباقات والأسعار من خلال صفحة الأسعار على موقعنا.",
      },
      {
        id: "general-3",
        question: "هل يمكنني تجربة المنصة قبل الاشتراك؟",
        answer:
          "نعم، يمكنك التسجيل في الباقة المجانية والتي تتيح لك تجربة المنصة بشكل كامل مع بعض القيود على عدد المنتجات وبعض المميزات المتقدمة.",
      },
      {
        id: "general-4",
        question: "ما هي وسائل الدعم الفني المتاحة؟",
        answer:
          "نوفر دعماً فنياً على مدار الساعة من خلال الدردشة المباشرة، والبريد الإلكتروني، والهاتف. كما نوفر مركز مساعدة شامل يحتوي على أدلة استخدام وفيديوهات تعليمية.",
      },
    ],
    account: [
      {
        id: "account-1",
        question: "كيف يمكنني إنشاء حساب جديد؟",
        answer:
          "يمكنك إنشاء حساب جديد من خلال النقر على زر 'ابدأ الآن مجاناً' في الصفحة الرئيسية، ثم اتباع الخطوات البسيطة لإكمال عملية التسجيل.",
      },
      {
        id: "account-2",
        question: "كيف يمكنني استعادة كلمة المرور؟",
        answer:
          "يمكنك استعادة كلمة المرور من خلال النقر على رابط 'نسيت كلمة المرور؟' في صفحة تسجيل الدخول، ثم إدخال بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور.",
      },
      {
        id: "account-3",
        question: "كيف يمكنني تغيير معلومات حسابي؟",
        answer:
          "يمكنك تغيير معلومات حسابك من خلال الدخول إلى لوحة التحكم، ثم النقر على 'الإعدادات' ثم 'معلومات الحساب'.",
      },
    ],
    store: [
      {
        id: "store-1",
        question: "كيف يمكنني إنشاء متجر جديد؟",
        answer:
          "بعد إنشاء حسابك، ستتم إعادة توجيهك تلقائياً إلى معالج إنشاء المتجر الذي سيرشدك خلال عملية إعداد متجرك خطوة بخطوة.",
      },
      {
        id: "store-2",
        question: "هل يمكنني استخدام نطاق خاص بي؟",
        answer:
          "نعم، يمكنك استخدام نطاق خاص بك مع متجرك على منصة أتجر. يمكنك إما شراء نطاق جديد من خلالنا أو استخدام نطاق تملكه بالفعل.",
      },
      {
        id: "store-3",
        question: "كيف يمكنني تخصيص تصميم متجري؟",
        answer:
          "توفر منصة أتجر العديد من القوالب الاحترافية التي يمكنك الاختيار من بينها، كما يمكنك تخصيص الألوان، والخطوط، والشعار، وغيرها من عناصر التصميم بما يتناسب مع هويتك التجارية.",
      },
    ],
    products: [
      {
        id: "products-1",
        question: "كيف يمكنني إضافة منتجات جديدة؟",
        answer:
          "يمكنك إضافة منتجات جديدة من خلال الدخول إلى لوحة التحكم، ثم النقر على 'المنتجات' ثم 'إضافة منتج جديد'، ثم إدخال معلومات المنتج وصوره وسعره وخياراته.",
      },
      {
        id: "products-2",
        question: "هل يمكنني إضافة منتجات رقمية؟",
        answer:
          "نعم، يمكنك إضافة منتجات رقمية مثل الكتب الإلكترونية، والدورات التدريبية، والبرامج، وغيرها. يمكنك تحديد نوع المنتج كمنتج رقمي عند إضافته.",
      },
      {
        id: "products-3",
        question: "كيف يمكنني إدارة المخزون؟",
        answer:
          "توفر منصة أتجر نظاماً متكاملاً لإدارة المخزون يتيح لك تتبع كميات المنتجات، وتلقي تنبيهات عند انخفاض المخزون، وتحديث الكميات تلقائياً عند إتمام الطلبات.",
      },
    ],
    orders: [
      {
        id: "orders-1",
        question: "كيف يمكنني إدارة الطلبات؟",
        answer:
          "يمكنك إدارة الطلبات من خلال الدخول إلى لوحة التحكم، ثم النقر على 'الطلبات'. يمكنك عرض تفاصيل الطلبات، وتحديث حالتها، وطباعة فواتير الشحن، وغيرها.",
      },
      {
        id: "orders-2",
        question: "كيف يمكنني إلغاء طلب؟",
        answer:
          "يمكنك إلغاء طلب من خلال الدخول إلى تفاصيل الطلب، ثم النقر على 'إلغاء الطلب'. يمكنك أيضاً تحديد سبب الإلغاء وما إذا كنت ترغب في إعادة المبلغ للعميل.",
      },
      {
        id: "orders-3",
        question: "هل يمكنني تصدير بيانات الطلبات؟",
        answer:
          "نعم، يمكنك تصدير بيانات الطلبات بتنسيق Excel أو CSV من خلال الدخول إلى صفحة الطلبات، ثم النقر على 'تصدير'.",
      },
    ],
    payments: [
      {
        id: "payments-1",
        question: "ما هي طرق الدفع المدعومة؟",
        answer:
          "تدعم منصة أتجر العديد من طرق الدفع المحلية والعالمية، بما في ذلك بطاقات الائتمان، والمحافظ الإلكترونية، والدفع عند الاستلام، وغيرها.",
      },
      {
        id: "payments-2",
        question: "كيف يمكنني إعداد بوابة الدفع؟",
        answer:
          "يمكنك إعداد بوابة الدفع من خلال الدخول إلى لوحة التحكم، ثم النقر على 'الإعدادات' ثم 'طرق الدفع'. يمكنك اختيار بوابة الدفع المناسبة وإدخال بيانات الاعتماد الخاصة بها.",
      },
      {
        id: "payments-3",
        question: "ما هي رسوم المعاملات؟",
        answer:
          "تختلف رسوم المعاملات حسب الباقة التي اخترتها وبوابة الدفع التي تستخدمها. يمكنك الاطلاع على تفاصيل الرسوم من خلال صفحة الأسعار على موقعنا.",
      },
    ],
    shipping: [
      {
        id: "shipping-1",
        question: "كيف يمكنني إعداد خيارات الشحن؟",
        answer:
          "يمكنك إعداد خيارات الشحن من خلال الدخول إلى لوحة التحكم، ثم النقر على 'الإعدادات' ثم 'الشحن'. يمكنك تحديد مناطق الشحن، وطرق الشحن، والتكاليف، وغيرها.",
      },
      {
        id: "shipping-2",
        question: "هل يمكنني التكامل مع شركات الشحن؟",
        answer:
          "نعم، توفر منصة أتجر تكاملاً سلساً مع العديد من شركات الشحن المحلية والعالمية، مما يتيح لك طباعة بوالص الشحن وتتبع الشحنات مباشرة من لوحة التحكم.",
      },
      {
        id: "shipping-3",
        question: "كيف يمكنني تحديد تكاليف الشحن؟",
        answer:
          "يمكنك تحديد تكاليف الشحن بعدة طرق، منها التكلفة الثابتة، والتكلفة حسب الوزن، والتكلفة حسب المنطقة، والتكلفة حسب قيمة الطلب، وغيرها.",
      },
    ],
  }

  return (
    <div dir="rtl" className="pt-20 pb-16">
      <FadeIn>
        <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              الأسئلة <span className="text-indigo-600 dark:text-indigo-400">الشائعة</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              إجابات على الأسئلة الأكثر شيوعاً حول منصة أتجر
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="ابحث عن سؤال..."
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
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="px-6">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="max-w-3xl mx-auto">
                  <Stagger>
                    {faqs[category.id].map((faq) => (
                      <motion.div
                        key={faq.id}
                        className="mb-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          className="w-full flex justify-between items-center p-6 text-right"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                          <span className="text-indigo-600 dark:text-indigo-400 ml-4">
                            {openFaqs[faq.id] ? <Minus size={20} /> : <Plus size={20} />}
                          </span>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openFaqs[faq.id] ? "auto" : 0, opacity: openFaqs[faq.id] ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </Stagger>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </SlideIn>

        <SlideIn direction="up">
          <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">لم تجد إجابة لسؤالك؟</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              فريق الدعم الفني متاح للإجابة على جميع استفساراتك. يمكنك التواصل معنا عبر الدردشة المباشرة أو البريد
              الإلكتروني أو الهاتف.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">تواصل مع الدعم الفني</Button>
              <Button
                variant="outline"
                className="text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
              >
                إرسال سؤال جديد
              </Button>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
