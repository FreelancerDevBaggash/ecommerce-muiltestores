"use client"

import { motion } from "framer-motion"
import { FiSmile, FiTarget, FiUsers } from "react-icons/fi"
import { Button } from "@/components/ui/button"

export default function PartnersSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-auto h-auto bg-indigo-50 dark:bg-indigo-900/30 rounded-3xl py-12 px-4 sm:px-8"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <h2 className="font-arabic text-indigo-700 dark:text-indigo-400 font-bold text-3xl md:text-4xl mb-6">
              مش لوحدك في الطريق
            </h2>
            <p className="font-arabic text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
              مشوار التجارة ما هو سهل، بس ولا يهمك... نحنا جنبك من أول خطوة، ومعك حتى توصل لهدفك.
            </p>

            {/* شبكة الأيقونات */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2 max-w-4xl">
              {[
                {
                  icon: <FiSmile size={28} className="text-indigo-700 dark:text-indigo-400" />,
                  title: "دعم مستمر",
                  description: "نخبة من الخبراء موجودين للإجابة على استفساراتك دومًا.",
                },
                {
                  icon: <FiTarget size={28} className="text-indigo-700 dark:text-indigo-400" />,
                  title: "خطط واضحة",
                  description: "بنساعدك تحدد هدفك وتمشي بخطوات مدروسة.",
                },
                {
                  icon: <FiUsers size={28} className="text-indigo-700 dark:text-indigo-400" />,
                  title: "مجتمع متعاون",
                  description: "رواد أعمال مثلك يشاركون نفس الطموح والتجربة.",
                },
              ].map(({ icon, title, description }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    {icon}
                  </div>
                  <div className="text-right">
                    <h4 className="font-arabic text-lg font-semibold mb-1 text-indigo-700 dark:text-indigo-400">
                      {title}
                    </h4>
                    <p className="font-arabic text-sm text-gray-600 dark:text-gray-300">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* زر Call To Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white font-arabic text-lg px-8 py-6 rounded-full shadow-md transition-all">
                ابدأ رحلتك مع اتجر
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
