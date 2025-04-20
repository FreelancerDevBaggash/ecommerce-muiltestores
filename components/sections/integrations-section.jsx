"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { NeuMorphism } from "@/components/ui/neu-morphism"
import { Truck, CreditCard, ShoppingBag, Package } from "lucide-react"

export default function IntegrationsSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const cardsRef = useRef([])

  const integrations = [
    {
      title: "شركات الشحن",
      description: "تكامل مع أشهر شركات الشحن",
      icon: <Truck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "أرامكس", logo: "/placeholder.svg?height=60&width=120&text=أرامكس" },
        { name: "DHL", logo: "/placeholder.svg?height=60&width=120&text=DHL" },
        { name: "فيديكس", logo: "/placeholder.svg?height=60&width=120&text=فيديكس" },
      ],
    },
    {
      title: "بوابات الدفع",
      description: "دعم لجميع طرق الدفع الإلكتروني المحلية والعالمية",
      icon: <CreditCard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "PayPal", logo: "/placeholder.svg?height=60&width=120&text=PayPal" },
        { name: "Stripe", logo: "/placeholder.svg?height=60&width=120&text=Stripe" },
        { name: "مدى", logo: "/placeholder.svg?height=60&width=120&text=مدى" },
      ],
    },
    {
      title: "منصات التسويق",
      description: "تكامل مع منصات التسويق الرقمي ووسائل التواصل الاجتماعي",
      icon: <ShoppingBag className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
        { name: "Facebook", logo: "/placeholder.svg?height=60&width=120&text=Facebook" },
        { name: "Instagram", logo: "/placeholder.svg?height=60&width=120&text=Instagram" },
      ],
    },
    {
      title: "أنظمة المخزون",
      description: "ربط مع أنظمة إدارة المخزون والمستودعات",
      icon: <Package className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "SAP", logo: "/placeholder.svg?height=60&width=120&text=SAP" },
        { name: "Oracle", logo: "/placeholder.svg?height=60&width=120&text=Oracle" },
        { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
      ],
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Load main Lottie animation
    const anim = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/integrations.json",
    })

    // Horizontal scroll for cards
    const cards = cardsRef.current

    if (cards.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      })

      // Stagger the cards appearance
      cards.forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        })
      })
    }

    return () => {
      anim.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="integrations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            تكاملات <span className="text-indigo-600 dark:text-indigo-400">متعددة</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            نوفر تكاملات سلسة مع مختلف الخدمات والأنظمة لتوفير تجربة متكاملة لك ولعملائك
          </p>

          {/* Main Lottie Animation */}
          <div className="max-w-md mx-auto">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index % 2 === 0 ? (
                <GlassMorphism className="p-6 h-full">
                  <IntegrationCard integration={integration} />
                </GlassMorphism>
              ) : (
                <NeuMorphism className="p-6 h-full">
                  <IntegrationCard integration={integration} />
                </NeuMorphism>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({ integration }) {
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="mr-4">{integration.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{integration.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{integration.description}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        {integration.companies.map((company, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
