"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 pt-16 pb-8 relative overflow-hidden">
      {/* زخرفة سبئية */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-8 bg-repeat-x"
          style={{ backgroundImage: "url('/placeholder.svg?height=32&width=32&text=⊕')" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x"
          style={{ backgroundImage: "url('/placeholder.svg?height=32&width=32&text=⊕')" }}
        ></div>
        <div
          className="absolute top-0 bottom-0 left-0 w-8 bg-repeat-y"
          style={{ backgroundImage: "url('/placeholder.svg?height=32&width=32&text=⊕')" }}
        ></div>
        <div
          className="absolute top-0 bottom-0 right-0 w-8 bg-repeat-y"
          style={{ backgroundImage: "url('/placeholder.svg?height=32&width=32&text=⊕')" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* القسم الأول: معلومات الشركة */}
          <div>
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4">أتجر</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              منصتك الذكية لإنشاء المتاجر الإلكترونية بطابع يمني أصيل. نقدم لك أدوات مرنة لإنشاء متجر يتناسب مع رؤيتك
              واحتياجاتك التجارية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لينكد إن</span>
              </Link>
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  المميزات
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  الأسعار
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  الحلول
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم الثالث: الدعم */}
          <div>
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  مركز المساعدة
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم الرابع: معلومات الاتصال */}
          <div>
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400 ml-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">صنعاء، الجمهورية اليمنية</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400 ml-2" />
                <span className="text-gray-600 dark:text-gray-300">+967 1 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400 ml-2" />
                <span className="text-gray-600 dark:text-gray-300">info@atjar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-200 dark:border-blue-900">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} أتجر. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
