// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronDown, Search, Settings, ShoppingBag, Truck, Package } from "lucide-react"
// import { useState } from "react"
// import CryCarousel from "./CryCarousel"
// import ServiceCarousel from "./ServiceCarousel"

// export default function Beautysection() {
//   const [activeCategory, setActiveCategory] = useState("الإلكترونيات")

//   const categoryContent = {
//     المطاعم: {
//       title: "ضاعف حصتك في سوق الخدمات الغذائية",
//       description:
//         "سواءً كنت تبيع مأكولات ومشروبات طازجة أو معلَّبة ومجمَّدة، حلول سلة تسهِّل لك استقبال وشحن الطلبات حتى تصل لعميلك بأفضل جودة.",
//       features: ["تجربة شراء سهلة ومألوفة لكل عميل", "نظام ولاء متكامل وسهل التخصيص", "خدمات شحن مبرَّد ومجمَّد لمنتجاتك"],
//       images: [

//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-86.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     "المطاعم والكافيهات": {
//       title: "حلول متكاملة للمطاعم والكافيهات",
//       description:
//         "أطلق متجرك الإلكتروني للمطاعم والكافيهات مع حلول سلة المتخصصة التي تمكنك من عرض قائمة الطعام وإدارة الطلبات وتوصيلها بكفاءة.",
//       features: [
//         "قوائم طعام تفاعلية سهلة التحديث",
//         "نظام حجز طاولات وإدارة الطلبات",
//         "خدمات توصيل متكاملة مع تتبع مباشر",
//       ],
//       images: [
//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-6.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     "العناية والتجميل": {
//       title: "حلول متكاملة لبيع منتجات العناية والتجميل",
//       description:
//         "وسع نطاق عملك في مجال العناية والتجميل مع حلول سلة المخصصة لتلبية احتياجات عملائك وعرض منتجاتك بأفضل طريقة.",
//       features: ["عرض تفاصيل المنتج بطريقة جذابة", "إدارة المخزون بكفاءة عالية", "برامج ولاء خاصة بمنتجات التجميل"],
//       images: [
//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     المجوهرات: {
//       title: "ارتقِ بتجارة المجوهرات الخاصة بك",
//       description: "قدم مجوهراتك بطريقة فاخرة مع حلول سلة المصممة خصيصًا لتجار المجوهرات والإكسسوارات الراقية.",
//       features: ["عرض المنتجات بصور عالية الدقة", "خيارات دفع آمنة للمنتجات الثمينة", "شحن مؤمن مع خدمة التتبع"],
//       images: [
//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     الإلكترونيات: {
//       title: "حلول متكاملة لبيع الإلكترونيات",
//       description:
//         "توسع في تجارة الأجهزة الإلكترونية والمنزلية والكهربائية عبر حلول سلة المخصصة لتلائم طبيعة منتجاتك واحتياجات عملائك.",
//       features: ["تحكم كامل بطريقة عرض بيانات كل منتج", "تجربة شراء سهلة وآمنة وموثوقة لكل عميل", "خدمات شحن اقتصادي"],
//       images: [
//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/hero.webp?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     "الصحة واللياقة": {
//       title: "عزز مبيعاتك في قطاع الصحة واللياقة",
//       description:
//         "قدم منتجات الصحة واللياقة البدنية بطريقة احترافية مع حلول سلة المتكاملة لتحسين تجربة العملاء وزيادة المبيعات.",
//       features: [
//         "عرض تفاصيل المكونات والفوائد بوضوح",
//         "نظام اشتراكات مرن للمنتجات المتكررة",
//         "محتوى تثقيفي متكامل مع المنتجات",
//       ],
//       images: [
//         "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
//         "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
//         "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
//         "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
//         "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//     "المنتجات الرقمية": {
//       title: "أطلق متجرك للمنتجات الرقمية",
//       description:
//         "بيع الكتب الإلكترونية والدورات التدريبية والبرامج وغيرها من المنتجات الرقمية بسهولة مع حلول سلة المتخصصة.",
//       features: ["تسليم تلقائي للمنتجات الرقمية", "حماية متقدمة للمحتوى الرقمي", "إدارة التراخيص والاشتراكات بسهولة"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-7.jpg",
//         "/images/image-5.jpg",
//         "/images/image-3.jpg",
//         "/images/image-4.jpg",
//       ],
//     },
//     "عبايات وأزياء": {
//       title: "ارتقِ بمتجر الأزياء الخاص بك",
//       description: "قدم تشكيلات الأزياء والعبايات بطريقة عصرية مع حلول سلة المصممة خصيصًا لتجار الملابس والأزياء.",
//       features: ["عرض المقاسات والألوان بطريقة سهلة", "إمكانية إرجاع واستبدال المنتجات", "عروض موسمية وتخفيضات مجدولة"],
//       images: [
//         "/images/image-8.jpg",
//         "/images/image-5.jpg",
//         "/images/image-4.jpg",
//         "/images/image-4.jpg",
//         "/images/image-4.jpg",
//         "/images/image-4.jpg",
//       ],
//     },
//     "المواقع الشخصية": {
//       title: "أنشئ موقعك الشخصي الاحترافي",
//       description:
//         "أطلق موقعك الشخصي أو سيرتك الذاتية أو معرض أعمالك بتصميم احترافي مع حلول سلة المخصصة للمواقع الشخصية.",
//       features: ["قوالب احترافية سهلة التخصيص", "ربط مع منصات التواصل الاجتماعي", "تحليلات متقدمة لمتابعة أداء موقعك"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-7.jpg",
//         "/images/image-5.jpg",
//         "/images/image-3.jpg",
//         "/images/image-4.jpg",
//       ],
//     },
//   }

//   const currentContent = categoryContent[activeCategory]

//   return (
//     <div className="min-h-screen bg-white "  dir="rtl">

//       <CryCarousel activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

//       {/* Main content */}
//       <div className="bg-[#d5cde9] py-8">
//         <div className="container mx-auto px-4">
//           <div className="bg-[#f7f5f5] rounded-xl p-8   flex flex-col md:flex-row">
//           <div className="md:w-1/2 mr-8 md:order-2">
//   <ServiceCarousel images={currentContent.images} />
// </div>

// <div className="md:w-1/2 md:order-1 md:pr-12 mb-8 md:mb-0 text-right ">

//               <h1 className="text-3xl font-bold text-indigo-600 mb-6">{currentContent.title}</h1>
//               <p className="text-indigo-800 mb-8 leading-relaxed">{currentContent.description}</p>

//               <div className="space-y-6">
//                 {currentContent.features.map((feature, index) => (
//                   <FeatureItem
//                     key={index}
//                     icon={
//                       index === 0 ? (
//                         <Settings className="h-6 w-6 text-indigo-500" />
//                       ) : index === 1 ? (
//                         <ShoppingBag className="h-6 w-6 text-indigo-500" />
//                       ) : (
//                         <Truck className="h-6 w-6 text-indigo-500" />
//                       )
//                     }
//                     text={feature}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function FeatureItem({ icon, text }) {
//   return (
//     <div className="flex items-center gap-4 ">
//       <p className="text-indigo-800 font-medium">{text}</p>
//       <div className="flex-shrink-0">{icon}</div>
//     </div>
//   )
// }
"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search, Settings, ShoppingBag, Truck, Package } from "lucide-react"
import { useState } from "react"
import CryCarousel from "./CryCarousel"
import ServiceCarousel from "./ServiceCarousel"

export default function BeautySection() {
  const [activeCategory, setActiveCategory] = useState("الإلكترونيات")

  const categoryContent = {
    المطاعم: {
      title: "ضاعف حصتك في سوق الخدمات الغذائية",
      description:
        "سواءً كنت تبيع مأكولات ومشروبات طازجة أو معلَّبة ومجمَّدة، حلول سلة تسهِّل لك استقبال وشحن الطلبات حتى تصل لعميلك بأفضل جودة.",
      features: [
        "تجربة شراء سهلة ومألوفة لكل عميل",
        "نظام ولاء متكامل وسهل التخصيص",
        "خدمات شحن مبرَّد ومجمَّد لمنتجاتك",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-86.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    "المطاعم والكافيهات": {
      title: "حلول متكاملة للمطاعم والكافيهات",
      description:
        "أطلق متجرك الإلكتروني للمطاعم والكافيهات مع حلول سلة المتخصصة التي تمكنك من عرض قائمة الطعام وإدارة الطلبات وتوصيلها بكفاءة.",
      features: [
        "قوائم طعام تفاعلية سهلة التحديث",
        "نظام حجز طاولات وإدارة الطلبات",
        "خدمات توصيل متكاملة مع تتبع مباشر",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-6.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    "العناية والتجميل": {
      title: "حلول متكاملة لبيع منتجات العناية والتجميل",
      description:
        "وسع نطاق عملك في مجال العناية والتجميل مع حلول سلة المخصصة لتلبية احتياجات عملائك وعرض منتجاتك بأفضل طريقة.",
      features: [
        "عرض تفاصيل المنتج بطريقة جذابة",
        "إدارة المخزون بكفاءة عالية",
        "برامج ولاء خاصة بمنتجات التجميل",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    المجوهرات: {
      title: "ارتقِ بتجارة المجوهرات الخاصة بك",
      description:
        "قدم مجوهراتك بطريقة فاخرة مع حلول سلة المصممة خصيصًا لتجار المجوهرات والإكسسوارات الراقية.",
      features: [
        "عرض المنتجات بصور عالية الدقة",
        "خيارات دفع آمنة للمنتجات الثمينة",
        "شحن مؤمن مع خدمة التتبع",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    الإلكترونيات: {
      title: "حلول متكاملة لبيع الإلكترونيات",
      description:
        "توسع في تجارة الأجهزة الإلكترونية والمنزلية والكهربائية عبر حلول سلة المخصصة لتلائم طبيعة منتجاتك واحتياجات عملائك.",
      features: [
        "تحكم كامل بطريقة عرض بيانات كل منتج",
        "تجربة شراء سهلة وآمنة وموثوقة لكل عميل",
        "خدمات شحن اقتصادي",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/hero.webp?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    "الصحة واللياقة": {
      title: "عزز مبيعاتك في قطاع الصحة واللياقة",
      description:
        "قدم منتجات الصحة واللياقة البدنية بطريقة احترافية مع حلول سلة المتكاملة لتحسين تجربة العملاء وزيادة المبيعات.",
      features: [
        "عرض تفاصيل المكونات والفوائد بوضوح",
        "نظام اشتراكات مرن للمنتجات المتكررة",
        "محتوى تثقيفي متكامل مع المنتجات",
      ],
      images: [
        "/images/image-2.jpg?height=200&width=400&text=مواقع شخصية 1",
        "/images/image-3.jpg?height=200&width=400&text=مواقع شخصية 2",
        "/images/image-4.jpg?height=200&width=400&text=مواقع شخصية 3",
        "/images/image-5.jpg?height=200&width=400&text=مواقع شخصية 4",
        "/images/image-8.jpg?height=200&width=400&text=مواقع شخصية 5",
      ],
    },
    "المنتجات الرقمية": {
      title: "أطلق متجرك للمنتجات الرقمية",
      description:
        "بيع الكتب الإلكترونية والدورات التدريبية والبرامج وغيرها من المنتجات الرقمية بسهولة مع حلول سلة المتخصصة.",
      features: [
        "تسليم تلقائي للمنتجات الرقمية",
        "حماية متقدمة للمحتوى الرقمي",
        "إدارة التراخيص والاشتراكات بسهولة",
      ],
      images: [
        "/images/image-2.jpg",
        "/images/image-2.jpg",
        "/images/image-7.jpg",
        "/images/image-5.jpg",
        "/images/image-3.jpg",
        "/images/image-4.jpg",
      ],
    },
    "عبايات وأزياء": {
      title: "ارتقِ بمتجر الأزياء الخاص بك",
      description:
        "قدم تشكيلات الأزياء والعبايات بطريقة عصرية مع حلول سلة المصممة خصيصًا لتجار الملابس والأزياء.",
      features: [
        "عرض المقاسات والألوان بطريقة سهلة",
        "إمكانية إرجاع واستبدال المنتجات",
        "عروض موسمية وتخفيضات مجدولة",
      ],
      images: [
        "/images/image-8.jpg",
        "/images/image-5.jpg",
        "/images/image-4.jpg",
        "/images/image-4.jpg",
        "/images/image-4.jpg",
        "/images/image-4.jpg",
      ],
    },
    "المواقع الشخصية": {
      title: "أنشئ موقعك الشخصي الاحترافي",
      description:
        "أطلق موقعك الشخصي أو سيرتك الذاتية أو معرض أعمالك بتصميم احترافي مع حلول سلة المخصصة للمواقع الشخصية.",
      features: [
        "قوالب احترافية سهلة التخصيص",
        "ربط مع منصات التواصل الاجتماعي",
        "تحليلات متقدمة لمتابعة أداء موقعك",
      ],
      images: [
        "/images/image-2.jpg",
        "/images/image-2.jpg",
        "/images/image-7.jpg",
        "/images/image-5.jpg",
        "/images/image-3.jpg",
        "/images/image-4.jpg",
      ],
    },
  }

  const currentContent = categoryContent[activeCategory]

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Carousel لتحديد الفئة */}
      <CryCarousel activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* المحتوى الرئيسي */}
      <div className="bg-primary/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f7f5f5] rounded-xl p-8 flex flex-col md:flex-row items-center">
            {/* القسم الخاص بالنصوص والمميزات */}
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12 mb-8 md:mb-0 text-right">
              <h1 className="text-3xl font-bold text-[#1e1b6f] mb-6">{currentContent.title}</h1>
              <p className="text-[#2b2879] mb-8 leading-relaxed">{currentContent.description}</p>

              <div className="space-y-6">
                {currentContent.features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={
                      index === 0 ? (
                        <Settings className="h-6 w-6 text-indigo-500" />
                      ) : index === 1 ? (
                        <ShoppingBag className="h-6 w-6 text-indigo-500" />
                      ) : (
                        <Truck className="h-6 w-6 text-indigo-500" />
                      )
                    }
                    text={feature}
                  />
                ))}
              </div>
            </div>

            {/* القسم الخاص بعرض الصور باستخدام الكاروسيل */}
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <ServiceCarousel images={currentContent.images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ icon, text }) {
  return (
<div className="flex items-center gap-4">
  <div className="flex-shrink-0">{icon}</div>
  <p className="text-indigo-800 font-medium">{text}</p>
</div>


  )
}
