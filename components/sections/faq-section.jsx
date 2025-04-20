"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import Lottie from "lottie-web"

export default function FAQSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)

  const faqs = [
    {
      question: "كيف يمكنني البدء باستخدام منصة أتجر؟",
      answer:
        "يمكنك البدء بإنشاء حساب مجاني على منصة أتجر، ثم اختيار التصميم المناسب لمتجرك، وإضافة منتجاتك، وضبط طرق الدفع والشحن، وإطلاق متجرك للعالم.",
    },
    {
      question: "هل يمكنني استخدام نطاق خاص بي؟",
      answer:
        "نعم، يمكنك استخدام نطاق خاص بك مع منصة أتجر. يتوفر هذا في الخطط المدفوعة، ويمكنك إما شراء نطاق جديد من خلالنا أو استخدام نطاق تملكه بالفعل.",
    },
    {
      question: "ما هي طرق الدفع المدعومة في منصة أتجر؟",
      answer:
        "تدعم منصة أتجر العديد من طرق الدفع المحلية والعالمية، بما في ذلك بطاقات الائتمان، والمحافظ الإلكترونية، والدفع عند الاستلام، وغيرها الكثير.",
    },
    {
      question: "هل يمكنني تخصيص تصميم متجري؟",
      answer:
        "نعم، توفر منصة أتجر العديد من خيارات التخصيص لتصميم متجرك، بما في ذلك الألوان، والخطوط، والتخطيطات، والشعارات، وغيرها الكثير.",
    },
    {
      question: "هل تقدمون دعماً فنياً؟",
      answer:
        "نعم، نقدم دعماً فنياً على مدار الساعة للخطط المدفوعة، ودعماً عبر البريد الإلكتروني للخطة المجانية. يمكنك التواصل معنا في أي وقت للحصول على المساعدة.",
    },
    {
      question: "هل يمكنني الترقية من خطة إلى أخرى؟",
      answer:
        "نعم، يمكنك الترقية من خطة إلى أخرى في أي وقت. سيتم احتساب الفرق بين الخطتين وإضافته إلى فاتورتك الشهرية أو السنوية.",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load FAQ Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/faq.json",
    })

    // Staggered animation for FAQ items
    const faqItems = document.querySelectorAll(".faq-item")
    gsap.from(faqItems, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      anim.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            الأسئلة <span className="text-indigo-600 dark:text-indigo-400">الشائعة</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول منصة أتجر
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Lottie Animation */}
          <div className="hidden lg:block">
            <div ref={lottieRef} className="w-full h-[400px]"></div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <GlassMorphism className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                    <AccordionTrigger className="text-right text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassMorphism>
          </div>
        </div>
      </div>
    </section>
  )
}
