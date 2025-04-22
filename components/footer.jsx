"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "المنتج",
      links: [
        { label: "المميزات", href: "/#features" },
        { label: "الأسعار", href: "/#pricing" },
        { label: "الشركاء", href: "/#partners" },
        { label: "خريطة الطريق", href: "/#roadmap" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { label: "من نحن", href: "/about" },
        { label: "فريق العمل", href: "/team" },
        { label: "الوظائف", href: "/careers" },
        { label: "المدونة", href: "/blog" },
      ],
    },
    {
      title: "الدعم",
      links: [
        { label: "مركز المساعدة", href: "/help" },
        { label: "الأسئلة الشائعة", href: "/faq" },
        { label: "الدعم الفني", href: "/support" },
        { label: "اتصل بنا", href: "/#contact" },
      ],
    },
    {
      title: "قانوني",
      links: [
        { label: "الشروط والأحكام", href: "/terms" },
        { label: "سياسة الخصوصية", href: "/privacy" },
        { label: "ملفات تعريف الارتباط", href: "/cookies" },
        { label: "الترخيص", href: "/license" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-gray-50 dark:bg-slate-900/50 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              منصة أتجر هي الحل الأمثل لإنشاء متجرك الإلكتروني بسهولة واحترافية. نوفر لك كل ما تحتاجه لبدء وتنمية تجارتك
              الإلكترونية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{section.title}</h3>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-2"
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} variants={item}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} أتجر. جميع الحقوق محفوظة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 space-x-reverse"
          >
            <Link
              href="/terms"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors"
            >
              الشروط والأحكام
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/cookies"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors"
            >
              ملفات تعريف الارتباط
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
