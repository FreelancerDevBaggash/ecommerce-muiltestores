"use client"

import { motion } from "framer-motion"
import { SlideIn, FadeIn } from "@/components/animations/scroll-animations"

const guideContent = [
  {
    id: "account",
    title: "إعداد الحساب",
    articles: [
      {
        title: "إنشاء حساب جديد",
        content: `
          لإنشاء حساب جديد، انتقل إلى صفحة التسجيل وأدخل بريدك الإلكتروني وكلمة المرور. 
          بعد ذلك قم بتأكيد بريدك من خلال الرابط المرسل. 
          يمكنك لاحقًا تعديل البيانات الشخصية من خلال صفحة الإعدادات.
        `,
      },
      {
        title: "تعديل معلومات الحساب",
        content: `
          لتعديل معلوماتك الشخصية، انتقل إلى "حسابي" ثم اختر "تعديل البيانات". 
          يمكنك تغيير اسم المستخدم، البريد الإلكتروني، ورقم الهاتف.
        `,
      },
    ],
  },
  {
    id: "store",
    title: "إعداد المتجر",
    articles: [
      {
        title: "إنشاء متجر جديد",
        content: `
          لإنشاء متجر جديد، ابدأ من لوحة التحكم واختر "إنشاء متجر". 
          قم بإدخال اسم المتجر، الشعار، والبيانات الأساسية. بعد الحفظ سيتم توجيهك لإعداد الأقسام والمنتجات.
        `,
      },
      {
        title: "إعداد طرق الدفع",
        content: `
          اذهب إلى إعدادات المتجر > طرق الدفع، وأضف بوابات الدفع التي ترغب بها مثل مدى، Stripe، أو تحويل بنكي.
          تأكد من إدخال المفاتيح API الصحيحة وتفعيل الطريقة.
        `,
      },
    ],
  },
]

export default function UserGuideFullPage() {
  return (
    <div className="pt-20 pb-24">
      <FadeIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">دليل المستخدم الكامل</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            شرح مفصل لكل خطوات استخدام المنصة — في صفحة واحدة.
          </p>
        </div>
      </FadeIn>

      {/* روابط التنقل للأقسام */}
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {guideContent.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              {section.title}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* المحتوى الكامل */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {guideContent.map((section, idx) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">{section.title}</h2>
            <div className="space-y-10">
              {section.articles.map((article, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{article.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {article.content.trim()}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* تواصل مع الدعم */}
      <SlideIn direction="up">
        <div className="text-center mt-24">
          <p className="text-gray-600 dark:text-gray-400 mb-4">هل تحتاج للمزيد؟</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
            تواصل مع الدعم الفني
          </button>
        </div>
      </SlideIn>
    </div>
  )
}
