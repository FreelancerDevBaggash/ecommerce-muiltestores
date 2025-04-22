// "use client"

// import { useRef, useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Lottie from "lottie-web"
// import Image from "next/image"
// import { GlassMorphism } from "@/components/ui/glass-morphism"
// import { NeuMorphism } from "@/components/ui/neu-morphism"
// import { Truck, CreditCard, ShoppingBag, Package } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// export default function IntegrationsSection() {
//   const sectionRef = useRef(null)
//   const lottieRef = useRef(null)
//   const cardsRef = useRef([])

//   const integrations = [
//     {
//       title: "شركات الشحن",
//       description: "تكامل مع أشهر شركات الشحن المحلية والدولية",
//       icon: <Truck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
//       companies: [
//         { name: "أرامكس", logo: "/placeholder.svg?height=60&width=120&text=أرامكس" },
//         { name: "DHL", logo: "/placeholder.svg?height=60&width=120&text=DHL" },
//         { name: "فيديكس", logo: "/placeholder.svg?height=60&width=120&text=فيديكس" },
//       ],
//     },
//     {
//       title: "بوابات الدفع",
//       description: "دعم لجميع طرق الدفع الإلكتروني المحلية والعالمية",
//       icon: <CreditCard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
//       companies: [
//         { name: "PayPal", logo: "/placeholder.svg?height=60&width=120&text=PayPal" },
//         { name: "Stripe", logo: "/placeholder.svg?height=60&width=120&text=Stripe" },
//         { name: "مدى", logo: "/placeholder.svg?height=60&width=120&text=مدى" },
//       ],
//     },
//     {
//       title: "منصات التسويق",
//       description: "تكامل مع منصات التسويق الرقمي ووسائل التواصل الاجتماعي",
//       icon: <ShoppingBag className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
//       companies: [
//         { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
//         { name: "Facebook", logo: "/placeholder.svg?height=60&width=120&text=Facebook" },
//         { name: "Instagram", logo: "/placeholder.svg?height=60&width=120&text=Instagram" },
//       ],
//     },
//     {
//       title: "أنظمة المخزون",
//       description: "ربط مع أنظمة إدارة المخزون والمستودعات",
//       icon: <Package className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
//       companies: [
//         { name: "SAP", logo: "/placeholder.svg?height=60&width=120&text=SAP" },
//         { name: "Oracle", logo: "/placeholder.svg?height=60&width=120&text=Oracle" },
//         { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
//       ],
//     },
//   ]

//   useEffect(() => {
//     // لوتي
//     const lottieInstance = Lottie.loadAnimation({
//       container: lottieRef.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       path: "/animations/integrations.json",
//     })

//     // أنيميشن للبطاقات
//     cardsRef.current.forEach((card, index) => {
//       if (!card) return

//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           delay: index * 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       )
//     })

//     return () => {
//       lottieInstance.destroy()
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   return (
//     <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-900/50" id="integrations">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* العنوان واللوتي */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             تكاملات <span className="text-indigo-600 dark:text-indigo-400">متعددة</span>
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
//             نوفر تكاملات سلسة مع مختلف الخدمات والأنظمة لتوفير تجربة متكاملة لك ولعملائك
//           </p>
//           <div className="max-w-md mx-auto">
//             <div ref={lottieRef} className="w-full h-[200px]"></div>
//           </div>
//         </div>

//         {/* البطاقات */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {integrations.map((integration, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="relative"
//             >
//               {index % 2 === 0 ? (
//                 <GlassMorphism className="p-6 h-full">
//                   <IntegrationCard integration={integration} />
//                 </GlassMorphism>
//               ) : (
//                 <NeuMorphism className="p-6 h-full">
//                   <IntegrationCard integration={integration} />
//                 </NeuMorphism>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function IntegrationCard({ integration }) {
//   return (
//     <div>
//       <div className="flex items-center mb-4">
//         <div className="mr-4">{integration.icon}</div>
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white">{integration.title}</h3>
//       </div>
//       <p className="text-gray-600 dark:text-gray-400 mb-6">{integration.description}</p>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {integration.companies.map((company, idx) => (
//           <div
//             key={idx}
//             className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm transition-transform hover:-translate-y-1"
//           >
//             <Image
//               src={company.logo}
//               alt={company.name}
//               width={120}
//               height={60}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lottie from "lottie-web"
import Image from "next/image"
import { GlassMorphism } from "@/components/ui/glass-morphism"
import { NeuMorphism } from "@/components/ui/neu-morphism"
import { Truck, CreditCard, ShoppingBag, Wallet } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function IntegrationsSection() {
  const sectionRef = useRef(null)
  const lottieRef = useRef(null)
  const cardsRef = useRef([])

  const integrations = [
    {
      title: "شركات الشحن",
      description: "تكامل مع أشهر شركات الشحن المحلية والدولية",
      icon: <Truck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "أرامكس", logo: "/images/ht.png" },
        { name: "DHL", logo: "/images/ht1.jpeg" },
        { name: "فيديكس", logo: "/images/ht2.jpeg" },
      ],
    },
    {
      title: "المحافظ الإلكترونية",
      description: "دعم كامل للمحافظ الرقمية اليمنية",
      icon: <Wallet className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "كاش", logo: "/images/flo.jpeg" },
                { name: "فلوسك", logo: "/images/flo1.png" },
                        { name: "جوالي ", logo: "/images/images (1).png" },
        { name: "يمني نت", logo: "/images/flo1.jpeg" },
        { name: "المحفظة الوطنية", logo: "/images/flo2.jpg" },
      ],
    },
    {
      title: "منصات التسويق",
      description: "تكامل مع منصات التسويق الرقمي ووسائل التواصل الاجتماعي",
      icon: <ShoppingBag className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "Google", logo: "/images/gogo.jpeg" },
        { name: "Facebook", logo: "/images/fesbok.png" },
        { name: "Instagram", logo: "/images/instgrm.jpeg" },
      ],
    },
    {
      title: "وسائل الدفع",
      description: "ربط مع أنظمة الدفع الإلكتروني العالمية",
      icon: <CreditCard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      companies: [
        { name: "PayPal", logo: "/images/images (1).png" },
        { name: "Stripe", logo: "/images/ww.jpg" },
        { name: "مدى", logo: "/images/images (2).png" },
      ],
    },
  ]

  useEffect(() => {
    const lottieInstance = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/integrations.json",
    })

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    return () => {
      lottieInstance.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-800" id="integrations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            التكاملات <span className="block mt-2">والشركاء</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نعمل مع أفضل المنصات والخدمات لتقديم تجربة متكاملة لعملائنا
          </p>
          <div className="max-w-md mx-auto">
            <div ref={lottieRef} className="w-full h-[200px]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group"
            >
              {index % 2 === 0 ? (
                <GlassMorphism className="p-8 h-full rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <IntegrationCard integration={integration} />
                </GlassMorphism>
              ) : (
                <NeuMorphism 
                  className="p-8 h-full rounded-2xl transition-all duration-300 hover:shadow-xl"
                  intensity="medium"
                >
                  <IntegrationCard integration={integration} />
                </NeuMorphism>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({ integration }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-100 dark:bg-slate-700 rounded-lg">
          {integration.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {integration.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {integration.description}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-start">
        {integration.companies.map((company, idx) => (
          <div
            key={idx}
            className="relative bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group/item"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white dark:from-slate-700 dark:to-slate-800 opacity-0 group-hover/item:opacity-100 rounded-xl transition-opacity" />
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={60}
              className="object-contain h-12 w-24"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}