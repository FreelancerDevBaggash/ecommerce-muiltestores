"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animations"

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const faqs = [
    {
      question: "كيف يمكنني البدء باستخدام منصة أتجر؟",
      answer:
        "يمكنك البدء بإنشاء حساب مجاني على منصة أتجر، ثم اتباع الخطوات البسيطة لإعداد متجرك وإضافة منتجاتك وتخصيص تصميم المتجر وإعداد طرق الدفع والشحن.",
    },
    {
      question: "هل يمكنني استخدام نطاق خاص بي مع أتجر؟",
      answer:
        "نعم، يمكنك استخدام نطاق خاص بك مع منصة أتجر. يمكنك شراء نطاق جديد من خلال المنصة أو استخدام نطاق تملكه بالفعل وربطه بمتجرك على أتجر.",
    },
    {
      question: "ما هي طرق الدفع المدعومة في منصة أتجر؟",
      answer:
        "تدعم منصة أتجر مجموعة واسعة من طرق الدفع المحلية والعالمية، بما في ذلك بطاقات الائتمان، والمحافظ الإلكترونية، والدفع عند الاستلام، وغيرها من طرق الدفع الشائعة في المنطقة.",
    },
    {
      question: "هل يمكنني تتبع مخزون منتجاتي على أتجر؟",
      answer:
        "نعم، توفر منصة أتجر نظامًا متكاملًا لإدارة المخزون يمكنك من تتبع كميات المنتجات وتلقي إشعارات عندما تنخفض الكميات عن حد معين، كما يمكنك تحديث المخزون يدويًا أو تلقائيًا.",
    },
    {
      question: "هل يمكنني الربط مع منصات التواصل الاجتماعي؟",
      answer:
        "نعم، يمكنك ربط متجرك على أتجر مع مختلف منصات التواصل الاجتماعي مثل فيسبوك وانستغرام وتويتر، مما يتيح لك عرض منتجاتك وبيعها مباشرة من خلال هذه المنصات.",
    },
    {
      question: "هل أحتاج إلى معرفة تقنية لاستخدام أتجر؟",
      answer:
        "لا، منصة أتجر مصممة لتكون سهلة الاستخدام ولا تتطلب أي معرفة تقنية أو مهارات برمجة. يمكن لأي شخص إنشاء وإدارة متجر إلكتروني احترافي باستخدام واجهة المستخدم البسيطة والحدسية.",
    },
  ]

  return (
    <section id="faq" dir="rtl" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              الأسئلة <span className="text-indigo-600 dark:text-indigo-400">الشائعة</span>
            </h2>
          </FadeIn>
          <SlideIn>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعًا حول منصة أتجر وكيفية استخدامها
            </p>
          </SlideIn>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800"
                >
                  <AccordionTrigger className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
