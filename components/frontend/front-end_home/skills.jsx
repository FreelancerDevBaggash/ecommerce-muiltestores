"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader"; 
import React from 'react';


// بقية الكود كما هو...





const SkillIcon = ({ icon: Icon, color }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Code,
    name: "تطوير الواجهة الأمامية",
    tech: "React.js, Next.js",
    description:
      "بناء واجهات مستخدم تفاعلية ومتجاوبة باستخدام ميزات React الحديثة وNext.js لأداء مثالي.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "تطوير الواجهة الخلفية",
    tech: "Node.js, Express, Fastify",
    description: "إنشاء تطبيقات خادم قوية مع التركيز على القابلية للتوسع والهندسة النظيفة.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "إدارة قواعد البيانات",
    tech: "MongoDB, Mongoose",
    description: "تصميم وتنفيذ مخططات واستعلامات قاعدة بيانات فعالة لإدارة البيانات بشكل أمثل.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "تصميم واجهات المستخدم وتجربة المستخدم",
    tech: "Tailwind CSS, Material UI",
    description: "تصميم واجهات مستخدم جميلة وسهلة الاستخدام وفقًا لمبادئ التصميم الحديثة.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "التحكم في الإصدارات",
    tech: "Git, GitHub",
    description: "إدارة إصدارات الكود بكفاءة باستخدام Git والتعاون الفعّال عبر GitHub.",
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "تايب سكريبت",
    tech: "TypeScript, JavaScript",
    description: "كتابة كود آمن من الأخطاء لتحسين القابلية للصيانة وتحسين تجربة المطور.",
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    name: "إدارة الحالة",
    tech: "Redux, Context API",
    description: "إدارة حالات التطبيقات المعقدة باستخدام أحدث حلول إدارة الحالة.",
    color: "text-indigo-500",
  },
  {
    icon: Cpu,
    name: "تطوير واجهات برمجة التطبيقات (API)",
    tech: "REST, GraphQL",
    description: "تصميم وتنفيذ واجهات برمجة تطبيقات فعالة لتبادل البيانات بسلاسة.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    name: "أداء الويب",
    tech: "التحسين، تحسين محركات البحث (SEO)",
    description: "تحسين تطبيقات الويب للسرعة وإمكانية الوصول والظهور في محركات البحث.",
    color: "text-teal-500",
  },
  {
    icon: Workflow,
    name: "منهجيات العمل الرشيق (Agile)",
    tech: "Scrum, Kanban",
    description: "العمل بكفاءة في بيئات Agile مع التركيز على التسليم المستمر.",
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* زخرفة المهارات */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <AnimatedSectionHeader title="المهارات والخبرات" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  
   
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRef } from "react";
// import heroImage from "@/public/reshotqq.svg";
// import heroI from "@/public/mimg-1.svg";
// import heroIm from "@/public/f3foreTop-1.svg";
// import { Squares } from "@/components/Squares";

// export default function SolutionsSection() {
//   const ref1 = useRef(null);
//   const isInView1 = useInView(ref1, { once: true });
//   const ref2 = useRef(null);
//   const isInView2 = useInView(ref2, { once: true });
//   const ref3 = useRef(null);
//   const isInView3 = useInView(ref3, { once: true });

//   const sectionVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description: "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: ref1,
//       isInView: isInView1,
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description: "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
//       button: "المزيد من التفاصيل",
//       ref: ref2,
//       isInView: isInView2,
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description: "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: ref3,
//       isInView: isInView3,
//     },
//   ];

//   return (
//     <section id="solutions" className="relative py-20 overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <Squares direction="diagonal" speed={0.5} borderColor="#444" squareSize={50} hoverFillColor="#666" />
//       </div>
//       <div className="container mx-auto px-4 relative">
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           حلولنا المذهلة ✨
//         </motion.h2>
//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             ref={solution.ref}
//             variants={sectionVariant}
//             initial="hidden"
//             animate={solution.isInView ? "visible" : "hidden"}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             className={`flex flex-col-reverse lg:flex-row${
//               index % 2 === 0 ? "-reverse" : ""
//             } items-center justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-16 overflow-hidden p-8 lg:p-12`}
//           >
//             <div className="w-full lg:w-1/2 text-center lg:text-right">
//               <div className="flex justify-center lg:justify-end mb-6">
//                 <Image src={solution.icon} alt="icon" width={60} height={60} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 {solution.description}
//               </p>
//               <Button className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
//                 {solution.button}
//               </Button>
//             </div>
//             <div className="w-full lg:w-1/2 h-64 lg:h-full">
//               <Image
//                 src={solution.icon}
//                 alt="حل"
//                 width={500}
//                 height={400}
//                 className="object-contain mx-auto p-8"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// function VerticalImageCarousel({ images }) {
//   const [duplicatedImages, setDuplicatedImages] = useState([])

//   useEffect(() => {
//     // Duplicate images to create a seamless loop
//     setDuplicatedImages([...images, ...images])
//   }, [images])

//   return (
//     <div className="h-[500px] overflow-hidden relative rounded-lg">
//       <div className="animate-scroll flex flex-col">
//         {duplicatedImages.map((image, index) => (
//           <div key={index} className="mb-4 flex-shrink-0">
//             <Image
//               src={image || "/placeholder.svg"}
//               alt={`Product image ${index + 1}`}
//               width={400}
//               height={200}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function CategoryButton({ icon, label, active = false, onClick }) {
//   return (
//     <button
//       className={`flex flex-col items-center justify-center p-4 rounded-xl min-w-[120px] transition-colors ${
//         active ? "bg-teal-900 text-white" : "bg-white text-teal-900 hover:bg-gray-50"
//       }`}
//       onClick={onClick}
//     >
//       <span className="mb-2">{icon}</span>
//       <span className="text-sm font-medium">{label}</span>
//     </button>
//   )
// }

// function FeatureItem({ icon, text }) {
//   return (
//     <div className="flex items-center gap-4 justify-end">
//       <p className="text-teal-800 font-medium">{text}</p>
//       <div className="flex-shrink-0">{icon}</div>
//     </div>
//   )
// }

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import {
//   ChevronDown,
//   Search,
//   Settings,
//   ShoppingBag,
//   Truck,
//   Package,
//   Heart,
//   Gem,
//   Utensils,
//   Smartphone,
//   Coffee,
//   Globe,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react"
// import { useState, useEffect } from "react"

// export default function Home() {
//   const [activeCategory, setActiveCategory] = useState("الإلكترونيات")

//   const categories = [
//     "المطاعم",
//     "المطاعم والكافيهات",
//     "العناية والتجميل",
//     "المجوهرات",
//     "الإلكترونيات",
//     "الصحة واللياقة",
//     "المنتجات الرقمية",
//     "عبايات وأزياء",
//     "المواقع الشخصية",
//   ]

//   const categoryIcons = {
//     المطاعم: <Utensils className="h-6 w-6" />,
//     "المطاعم والكافيهات": <Coffee className="h-6 w-6" />,
//     "العناية والتجميل": <Heart className="h-6 w-6" />,
//     المجوهرات: <Gem className="h-6 w-6" />,
//     الإلكترونيات: <Smartphone className="h-6 w-6" />,
//     "الصحة واللياقة": <Heart className="h-6 w-6" />,
//     "المنتجات الرقمية": <Package className="h-6 w-6" />,
//     "عبايات وأزياء": <ShoppingBag className="h-6 w-6" />,
//     "المواقع الشخصية": <Globe className="h-6 w-6" />,
//   }

//   const navigateCategory = (direction) => {
//     const currentIndex = categories.indexOf(activeCategory)
//     let newIndex

//     if (direction === "next") {
//       newIndex = (currentIndex + 1) % categories.length
//     } else {
//       newIndex = (currentIndex - 1 + categories.length) % categories.length
//     }

//     setActiveCategory(categories[newIndex])
//   }

//   const categoryContent = {
//     المطاعم: {
//       title: "ضاعف حصتك في سوق الخدمات الغذائية",
//       description:
//         "سواءً كنت تبيع مأكولات ومشروبات طازجة أو معلَّبة ومجمَّدة، حلول سلة تسهِّل لك استقبال وشحن الطلبات حتى تصل لعميلك بأفضل جودة.",
//       features: ["تجربة شراء سهلة ومألوفة لكل عميل", "نظام ولاء متكامل وسهل التخصيص", "خدمات شحن مبرَّد ومجمَّد لمنتجاتك"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
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
//         "/placeholder.svg?height=200&width=400&text=كافيهات 1",
//         "/placeholder.svg?height=200&width=400&text=مطاعم وكافيهات 2",
//         "/placeholder.svg?height=200&width=400&text=كافيهات 3",
//         "/placeholder.svg?height=200&width=400&text=مطاعم وكافيهات 4",
//         "/placeholder.svg?height=200&width=400&text=كافيهات 5",
//       ],
//     },
//     "العناية والتجميل": {
//       title: "حلول متكاملة لبيع منتجات العناية والتجميل",
//       description:
//         "وسع نطاق عملك في مجال العناية والتجميل مع حلول سلة المخصصة لتلبية احتياجات عملائك وعرض منتجاتك بأفضل طريقة.",
//       features: ["عرض تفاصيل المنتج بطريقة جذابة", "إدارة المخزون بكفاءة عالية", "برامج ولاء خاصة بمنتجات التجميل"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//       ],
//     },
//     المجوهرات: {
//       title: "ارتقِ بتجارة المجوهرات الخاصة بك",
//       description: "قدم مجوهراتك بطريقة فاخرة مع حلول سلة المصممة خصيصًا لتجار المجوهرات والإكسسوارات الراقية.",
//       features: ["عرض المنتجات بصور عالية الدقة", "خيارات دفع آمنة للمنتجات الثمينة", "شحن مؤمن مع خدمة التتبع"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//       ],
//     },
//     الإلكترونيات: {
//       title: "حلول متكاملة لبيع الإلكترونيات",
//       description:
//         "توسع في تجارة الأجهزة الإلكترونية والمنزلية والكهربائية عبر حلول سلة المخصصة لتلائم طبيعة منتجاتك واحتياجات عملائك.",
//       features: ["تحكم كامل بطريقة عرض بيانات كل منتج", "تجربة شراء سهلة وآمنة وموثوقة لكل عميل", "خدمات شحن اقتصادي"],
//       images: [
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-7.jpg",
//         "/images/image-5.jpg",
//         "/images/image-3.jpg",
//         "/images/image-4.jpg",
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
//         "/images/image-2.jpg",
//         "/images/image-2.jpg",
//         "/images/image-7.jpg",
//         "/images/image-5.jpg",
//         "/images/image-3.jpg",
//         "/images/image-4.jpg",
//       ],
//     },
//     "المنتجات الرقمية": {
//       title: "أطلق متجرك للمنتجات الرقمية",
//       description:
//         "بيع الكتب الإلكترونية والدورات التدريبية والبرامج وغيرها من المنتجات الرقمية بسهولة مع حلول سلة المتخصصة.",
//       features: ["تسليم تلقائي للمنتجات الرقمية", "حماية متقدمة للمحتوى الرقمي", "إدارة التراخيص والاشتراكات بسهولة"],
//       images: [
//         "/placeholder.svg?height=200&width=400&text=منتجات رقمية 1",
//         "/placeholder.svg?height=200&width=400&text=منتجات رقمية 2",
//         "/placeholder.svg?height=200&width=400&text=منتجات رقمية 3",
//         "/placeholder.svg?height=200&width=400&text=منتجات رقمية 4",
//         "/placeholder.svg?height=200&width=400&text=منتجات رقمية 5",
//       ],
//     },
//     "عبايات وأزياء": {
//       title: "ارتقِ بمتجر الأزياء الخاص بك",
//       description: "قدم تشكيلات الأزياء والعبايات بطريقة عصرية مع حلول سلة المصممة خصيصًا لتجار الملابس والأزياء.",
//       features: ["عرض المقاسات والألوان بطريقة سهلة", "إمكانية إرجاع واستبدال المنتجات", "عروض موسمية وتخفيضات مجدولة"],
//       images: [
//         "/placeholder.svg?height=200&width=400&text=أزياء 1",
//         "/placeholder.svg?height=200&width=400&text=أزياء 2",
//         "/placeholder.svg?height=200&width=400&text=أزياء 3",
//         "/placeholder.svg?height=200&width=400&text=أزياء 4",
//         "/placeholder.svg?height=200&width=400&text=أزياء 5",
//       ],
//     },
//     "المواقع الشخصية": {
//       title: "أنشئ موقعك الشخصي الاحترافي",
//       description:
//         "أطلق موقعك الشخصي أو سيرتك الذاتية أو معرض أعمالك بتصميم احترافي مع حلول سلة المخصصة للمواقع الشخصية.",
//       features: ["قوالب احترافية سهلة التخصيص", "ربط مع منصات التواصل الاجتماعي", "تحليلات متقدمة لمتابعة أداء موقعك"],
//       images: [
//         "/placeholder.svg?height=200&width=400&text=مواقع شخصية 1",
//         "/placeholder.svg?height=200&width=400&text=مواقع شخصية 2",
//         "/placeholder.svg?height=200&width=400&text=مواقع شخصية 3",
//         "/placeholder.svg?height=200&width=400&text=مواقع شخصية 4",
//         "/placeholder.svg?height=200&width=400&text=مواقع شخصية 5",
//       ],
//     },
//   }

//   const currentContent = categoryContent[activeCategory]

//   return (
//     <div className="min-h-screen bg-white" dir="rtl">
//       <div className="bg-[#ffffff] py-6 relative">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center gap-4 overflow-x-auto pb-4 relative">
//             {/* Navigation arrows */}
//             <button
//               onClick={() => navigateCategory("prev")}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
//               aria-label="Previous category"
//             >
//               <ChevronRight className="h-6 w-6 text-teal-800" />
//             </button>

//             <CategoryButton
//               icon={categoryIcons["المطاعم"]}
//               label="المطاعم"
//               active={activeCategory === "المطاعم"}
//               onClick={() => setActiveCategory("المطاعم")}
//             />
//             <CategoryButton
//               icon={categoryIcons["المطاعم والكافيهات"]}
//               label="المطاعم والكافيهات"
//               active={activeCategory === "المطاعم والكافيهات"}
//               onClick={() => setActiveCategory("المطاعم والكافيهات")}
//             />
//             <CategoryButton
//               icon={categoryIcons["العناية والتجميل"]}
//               label="العناية والتجميل"
//               active={activeCategory === "العناية والتجميل"}
//               onClick={() => setActiveCategory("العناية والتجميل")}
//             />
//             <CategoryButton
//               icon={categoryIcons["المجوهرات"]}
//               label="المجوهرات"
//               active={activeCategory === "المجوهرات"}
//               onClick={() => setActiveCategory("المجوهرات")}
//             />
//             <CategoryButton
//               icon={categoryIcons["الإلكترونيات"]}
//               label="الإلكترونيات"
//               active={activeCategory === "الإلكترونيات"}
//               onClick={() => setActiveCategory("الإلكترونيات")}
//             />
//             <CategoryButton
//               icon={categoryIcons["الصحة واللياقة"]}
//               label="الصحة واللياقة"
//               active={activeCategory === "الصحة واللياقة"}
//               onClick={() => setActiveCategory("الصحة واللياقة")}
//             />
//             <CategoryButton
//               icon={categoryIcons["المنتجات الرقمية"]}
//               label="المنتجات الرقمية"
//               active={activeCategory === "المنتجات الرقمية"}
//               onClick={() => setActiveCategory("المنتجات الرقمية")}
//             />
//             <CategoryButton
//               icon={categoryIcons["عبايات وأزياء"]}
//               label="عبايات وأزياء"
//               active={activeCategory === "عبايات وأزياء"}
//               onClick={() => setActiveCategory("عبايات وأزياء")}
//             />
//             <CategoryButton
//               icon={categoryIcons["المواقع الشخصية"]}
//               label="المواقع الشخصية"
//               active={activeCategory === "المواقع الشخصية"}
//               onClick={() => setActiveCategory("المواقع الشخصية")}
//             />

//             <button
//               onClick={() => navigateCategory("next")}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
//               aria-label="Next category"
//             >
//               <ChevronLeft className="h-6 w-6 text-teal-800" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="bg-[#f0faf9] py-8">
//         <div className="container mx-auto px-4">
//           <div className="bg-[#e6f7f5] rounded-xl p-8 flex flex-col md:flex-row">
//             <div className="md:w-1/2 order-2 md:order-1">
//               <VerticalImageCarousel images={currentContent.images} />
//             </div>

//             <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1 md:order-2 text-right">
//               <h1 className="text-3xl font-bold text-teal-900 mb-6">{currentContent.title}</h1>
//               <p className="text-teal-800 mb-8 leading-relaxed">{currentContent.description}</p>

//               <div className="space-y-6">
//                 {currentContent.features.map((feature, index) => (
//                   <FeatureItem
//                     key={index}
//                     icon={
//                       index === 0 ? (
//                         <Settings className="h-6 w-6 text-teal-500" />
//                       ) : index === 1 ? (
//                         <ShoppingBag className="h-6 w-6 text-teal-500" />
//                       ) : (
//                         <Truck className="h-6 w-6 text-teal-500" />
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

// function VerticalImageCarousel({ images }) {
//   const [duplicatedImages, setDuplicatedImages] = useState([])

//   useEffect(() => {
//     // Duplicate images to create a seamless loop
//     setDuplicatedImages([...images, ...images])
//   }, [images])

//   return (
//     <div className="h-[500px] overflow-hidden relative rounded-lg">
//       <div className="animate-scroll flex flex-col">
//         {duplicatedImages.map((image, index) => (
//           <div key={index} className="mb-4 flex-shrink-0">
//             <Image
//               src={image || "/placeholder.svg"}
//               alt={`Product image ${index + 1}`}
//               width={400}
//               height={200}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function CategoryButton({ icon, label, active = false, onClick }) {
//   return (
//     <button
//       className={`flex flex-col items-center justify-center p-4 rounded-xl min-w-[120px] transition-colors ${
//         active ? "bg-teal-900 text-white" : "bg-white text-teal-900 hover:bg-gray-50"
//       }`}
//       onClick={onClick}
//     >
//       <span className="mb-2">{icon}</span>
//       <span className="text-sm font-medium">{label}</span>
//     </button>
//   )
// }

// function FeatureItem({ icon, text }) {
//   return (
//     <div className="flex items-center gap-4 justify-end">
//       <p className="text-teal-800 font-medium">{text}</p>
//       <div className="flex-shrink-0">{icon}</div>
//     </div>
//   )
// }



