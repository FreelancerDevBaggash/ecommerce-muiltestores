"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { NeuMorphism } from "@/components/ui/neu-morphism"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // هنا يمكن إضافة منطق إرسال النموذج
    console.log(formState)
    alert("تم إرسال رسالتك بنجاح!")
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load contact Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/contact.json",
    })

    // Staggered animation for form and info
    gsap.from(formRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    gsap.from(infoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            تواصل <span className="text-indigo-600 dark:text-indigo-400">معنا</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك مع منصة أتجر
          </p>

          {/* Contact Lottie Animation */}
          <div className="max-w-md mx-auto mt-8">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات الاتصال */}
          <NeuMorphism className="p-8" ref={infoRef}>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">معلومات الاتصال</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400 ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">العنوان</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    الرياض، المملكة العربية السعودية
                    <br />
                    طريق الملك فهد، برج المملكة، الطابق 20
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">الهاتف</h3>
                  <p className="text-gray-600 dark:text-gray-300">+966 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@atjar.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400 ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">ساعات العمل</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً
                    <br />
                    الجمعة - السبت: مغلق
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">تابعنا على</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="#"
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-3 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-3 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-3 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-3 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </NeuMorphism>

          {/* نموذج الاتصال */}
          <GlassMorphism className="p-8" ref={formRef}>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">أرسل لنا رسالة</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  required
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="أدخل رقم هاتفك"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الموضوع
                </label>
                <Select value={formState.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر موضوع الرسالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="استفسار عام">استفسار عام</SelectItem>
                    <SelectItem value="الدعم الفني">الدعم الفني</SelectItem>
                    <SelectItem value="المبيعات">المبيعات</SelectItem>
                    <SelectItem value="اقتراحات">اقتراحات</SelectItem>
                    <SelectItem value="أخرى">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Send className="h-5 w-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </GlassMorphism>
        </div>

        {/* خريطة الموقع */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 h-96">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">هنا يمكن إضافة خريطة الموقع</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
