
// import  Link  from "next/link";
// import React from 'react'
// import MarketList from '../../components/frontend/MarketList';
// import CategoryList from '../../components/frontend/CategoryList';
// import Hero from '../../components/frontend/Hero'
// import CommunityTrainings from '../../components/frontend/CommunityTrainings'
// import { getData } from "@/lib/getData";
// import { authOptions } from "../../lib/authOptions"
// import { getServerSession } from "next-auth";
  
// export default async function Home() {
//   const categoriesData = await getData('categories');
//   const categories = categoriesData.filter((category)=>{
//     return category.products.length > 2;
//   });
//   const trainings = await getData('trainings')
//   const session = await getServerSession(authOptions);
//   console.log(session?.user)
//   return (
//   <div className="min-h-screen">
//     <Hero/>
//     <MarketList/>


//       {
//         categoriesData.map((category, i)=> {
//           return(
//             <div className="py-8" key={i}>
//             <CategoryList isMarketPage={false} category={category} />
//             </div>
//           )
//         })
//       }
//     <CommunityTrainings title=" Featured Trainings" trainings={trainings.slice(0, 3)}/>
   

//      </div>
//   );
// }

// import React from 'react';
// import logo from '../../public/reshotq.svg';
// import Link from 'next/link';
// import Image from 'next/image';
// import Herohome from'@/components/frontend/front-end_home/Hero_home'
// export default function Page() {
//   return (



// <div className=' '>
// {/* القسم الأول: العنوان والنص والأزرار */}

// <Herohome  className=" " />
// </div>

    


//   );
// }

// import React from 'react';
// import logo from '../../public/reshotq.svg';
// import Link from 'next/link';
// import Image from 'next/image';
// import Herohome from'../../components/frontend/front-end_home/Hero_home'
// import NeuralVision from'../../components/frontend/front-end_home/NeuralVision'
// // import Skills from'../../components/frontend/front-end_home/Skills'
// import BeautySection from'../../components/frontend/front-end_home/BeautySection'
// import PartnersSection from'../../components/frontend/front-end_home/PartnersSection'



// export default function Page() {
//   return (



// <div className=' '>
// {/* القسم الأول: العنوان والنص والأزرار */}

// <Herohome  className=" " />
// <NeuralVision/>
// {/* <Skills/> */}
// <BeautySection/>
// <PartnersSection/>

// </div>

    


//   );
// }
// import Hero_home from "@/components/frontend/templaet5/Hero_home"
// import FeaturedProduct1 from "@/components/frontend/templaet5/FeaturedProduct1"
// import Categories from "@/components/frontend/templaet5/Categories"
// import SpecialOffers from "@/components/frontend/templaet5/SpecialOffers"
// import Testimonials from "@/components/frontend/templaet5/Testimonials"
// import Newsletter from "@/components/frontend/templaet5/Newsletter"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <Hero_home />
//       <Categories />
//       <FeaturedProduct1 />
//       <SpecialOffers />
//       <Testimonials />
//       <Newsletter />
//     </main>
//   )
// }


// import  Link  from "next/link";
// import React from 'react'
// import MarketList from '../../components/frontend/MarketList';
// import CategoryList from '../../components/frontend/CategoryList';
// import Hero from '../../components/frontend/Hero'
// import CommunityTrainings from '../../components/frontend/CommunityTrainings'
// import { getData } from "@/lib/getData";
// import { authOptions } from "../../lib/authOptions"
// import { getServerSession } from "next-auth";
  
// export default async function Home() {
//   const categoriesData = await getData('categories');
//   const categories = categoriesData.filter((category)=>{
//     return category.products.length > 2;
//   });
//   const trainings = await getData('trainings')
//   const session = await getServerSession(authOptions);
//   console.log(session?.user)
//   return (
//   <div className="min-h-screen">
//     <Hero/>
//     {/* <MarketList/> */}


//       {
//         categoriesData.map((category, i)=> {
//           return(
//             <div className="py-8" key={i}>
//             <CategoryList isMarketPage={false} category={category} />
//             </div>
//           )
//         })
//       }
//     <CommunityTrainings title=" Featured Trainings" trainings={trainings.slice(0, 3)}/>
   

//      </div>
//   );
// }

// import React from 'react';
// import logo from '../../public/reshotq.svg';
// import Link from 'next/link';
// import Image from 'next/image';
// import Herohome from'@/components/frontend/front-end_home/Hero_home'
// export default function Page() {
//   return (



// <div className=' '>
// {/* القسم الأول: العنوان والنص والأزرار */}

// <Herohome  className=" " />
// </div>

    


//   );
// }




// "use client"

// import { useRef, useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import { MotionPathPlugin } from "gsap/MotionPathPlugin"
// import SmoothScroll from "@/components/effects/smooth-scroll"
// import HeroSection from "@/components/sections/hero-section"
// import FeaturesSection from "@/components/sections/features-section"
// import HowToStartSection from "@/components/sections/how-to-start-section"
// import IntegrationsSection from "@/components/sections/integrations-section"
// import MarketingSection from "@/components/sections/marketing-section"
// import ProductManagementSection from "@/components/sections/product-management-section"
// import AnalyticsSection from "@/components/sections/analytics-section"
// import TestimonialsSection from "@/components/sections/testimonials-section"
// import PricingSection from "@/components/sections/pricing-section"
// import FAQSection from "@/components/sections/faq-section"
// import ContactSection from "@/components/sections/contact-section"
// import FloatingNav from "../../components/ui/floating-nav"
// import ScrollProgress from "@/components/effects/scroll-progress"
// import CursorEffect from "@/components/effects/cursor-effect"

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)

// export default function Home() {
//   const containerRef = useRef(null)

//   useEffect(() => {
//     // Initialize ScrollTrigger
//     ScrollTrigger.defaults({
//       toggleActions: "play pause resume reset",
//       scrub: 1,
//     })

//     // Clean up ScrollTrigger on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   return (
//     <main className="relative">
//       <CursorEffect />
//       <SmoothScroll>
//         <div ref={containerRef} className="relative">
//           <FloatingNav />
//           <ScrollProgress />

//           <HeroSection />
//           <FeaturesSection />
//           <HowToStartSection />
//           <IntegrationsSection />
//           <MarketingSection />
//           <ProductManagementSection />
//           <AnalyticsSection />
//           <TestimonialsSection />
//           <PricingSection />
//           <FAQSection />
//           <ContactSection />
//         </div>
//       </SmoothScroll>
//     </main>
//   )
// }

"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import SmoothScroll from "@/components/effects/smooth-scroll"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import HowToStartSection from "@/components/sections/how-to-start-section"
import IntegrationsSection from "@/components/sections/integrations-section"
import MarketingSection from "@/components/sections/marketing-section"
import ProductManagementSection from "@/components/sections/product-management-section"
import AnalyticsSection from "@/components/sections/analytics-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import PricingSection from "@/components/sections/pricing-section"
import FAQSection from "@/components/sections/faq-section"
import ContactSection from "@/components/sections/contact-section"
import FloatingNav from "@/components/ui/floating-nav"
import ScrollProgress from "@/components/effects/scroll-progress"
import CursorEffect from "@/components/effects/cursor-effect"
import Partnerssection from "@/components/sections/partners-section"
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.defaults({
      toggleActions: "play pause resume reset",
      scrub: 1,
    })

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative">
      <CursorEffect />

      <div ref={containerRef} className="relative">
          <FloatingNav />
          <ScrollProgress />

          <HeroSection />
          <FeaturesSection />
          <HowToStartSection />
          <IntegrationsSection />
          <MarketingSection />
          <ProductManagementSection />
          <AnalyticsSection />
          <Partnerssection/>
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          </div>
          <ContactSection />
        </div>


  )
}

// app/page.jsx أو pages/index.jsx (حسب استخدامك App Router أو Pages Router)

// import { getServerSession } from "next-auth"
// import { authOptions } from "@/lib/authOptions"
// import { getData } from "@/lib/getData"

// import HeroSection from "@/components/sections/hero-section"
// import FeaturesSection from "@/components/sections/features-section"
// import HowToStartSection from "@/components/sections/how-to-start-section"
// import IntegrationsSection from "@/components/sections/integrations-section"
// import MarketingSection from "@/components/sections/marketing-section"
// import ProductManagementSection from "@/components/sections/product-management-section"
// import AnalyticsSection from "@/components/sections/analytics-section"
// import TestimonialsSection from "@/components/sections/testimonials-section"
// import PricingSection from "@/components/sections/pricing-section"
// import FAQSection from "@/components/sections/faq-section"
// import ContactSection from "@/components/sections/contact-section"
// import Partnerssection from "@/components/sections/partners-section"
// import FloatingNav from "@/components/ui/floating-nav"

// export default async function page() {
//   // ✅ استدعاء بيانات المستخدم (في حال كان فيه جلسة تسجيل دخول)
//   const session = await getServerSession(authOptions)
//   console.log(session?.user)

//   // ✅ استدعاء بيانات من API لو بتحتاج أقسام ديناميكية (مثال فقط)
//   // const someData = await getData("something")

//   return (
//     <div dir="rtl"  className="relative min-h-screen">
//       <FloatingNav />
      
//       <HeroSection />
//       <FeaturesSection />
//       <HowToStartSection />
//       <IntegrationsSection />
//       <MarketingSection />
//       <ProductManagementSection />
//       <AnalyticsSection />
//       <Partnerssection />
//       <TestimonialsSection />
//       <PricingSection />
//       <FAQSection />
//       <ContactSection />
//     </div>
//   )
// }



// import React from 'react';
// import logo from '../../public/reshotq.svg';
// import Link from 'next/link';
// import Image from 'next/image';
// import Herohome from'../../components/frontend/front-end_home/Hero_home'
// import NeuralVision from'../../components/frontend/front-end_home/NeuralVision'
// import Skills from'../../components/frontend/front-end_home/Skills'
// import BeautySection from'../../components/frontend/front-end_home/BeautySection'
// import PartnersSection from'../../components/frontend/front-end_home/PartnersSection'



// export default function Page() {
//   return (



// <div className=' '>
// {/* القسم الأول: العنوان والنص والأزرار */}

// <Herohome  className=" " />
// <NeuralVision/>
// <Skills/>
// <BeautySection/>
// <PartnersSection/>

// </div>

    


//   );
// }


// components/frontend/templaet5/Page.jsx
// import React from "react";
// import Herohome from "../../components/frontend/front-end_home/Hero_home";
// import NeuralVision from "../../components/frontend/front-end_home/NeuralVision";
// import Skills from "../../components/frontend/front-end_home/Skills";
// import BeautySection from "../../components/frontend/front-end_home/BeautySection";
// import PartnersSection from "../../components/frontend/front-end_home/PartnersSection";
// import MacbookScroll from "../../components/frontend/MacbookScroll";

// export default function Page() {
//   return (
//     <div className="space-y-16 py-8">
//       <Herohome />
//       <NeuralVision />
//       <Skills />

//       {/* مثال: لفّ BeautySection داخل إطار MacBook قابل للتمرير */}
//       <MacbookScroll>
//         <BeautySection />
//       </MacbookScroll>

//       {/* أو لفّ أي قسم آخر */}
//       <MacbookScroll>
//         <PartnersSection />
//       </MacbookScroll>
//     </div>
//   );
// }

// import Hero_home from "@/components/frontend/templaet5/Hero_home"
// import FeaturedProduct1 from "@/components/frontend/templaet5/FeaturedProduct1"
// import Categories from "@/components/frontend/templaet5/Categories"
// import SpecialOffers from "@/components/frontend/templaet5/SpecialOffers"
// import Testimonials from "@/components/frontend/templaet5/Testimonials"
// import Newsletter from "@/components/frontend/templaet5/Newsletter"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <Hero_home />
//       <Categories />
//       <FeaturedProduct1 />
//       <SpecialOffers />
//       <Testimonials />
//       <Newsletter />
//     </main>
//   )
// }

//  // app/(front-end)/page.jsx
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/lib/authOptions"

// import HeroSection from "@/components/sections/hero-section"
// import FeaturesSection from "@/components/sections/features-section"
// import HowToStartSection from "@/components/sections/how-to-start-section"
// import IntegrationsSection from "@/components/sections/integrations-section"
// import MarketingSection from "@/components/sections/marketing-section"
// import ProductManagementSection from "@/components/sections/product-management-section"
// import AnalyticsSection from "@/components/sections/analytics-section"
// import Partnerssection from "@/components/sections/partners-section"
// import TestimonialsSection from "@/components/sections/testimonials-section"
// import PricingSection from "@/components/sections/pricing-section"
// import FAQSection from "@/components/sections/faq-section"
// import ContactSection from "@/components/sections/contact-section"
// import FloatingNav from "@/components/ui/floating-nav"
// import ScrollProgress from "@/components/effects/scroll-progress"
// import CursorEffect from "@/components/effects/cursor-effect"

// export default async function HomePage() {
//   const session = await getServerSession(authOptions)

//   return (
//     <div dir="rtl" className="relative">
//       {/* مؤثرات خفيفة (اختياري) */}
//       <CursorEffect />
//       <ScrollProgress />

//       {/* شريط التنقل العائم */}
//       <FloatingNav />

//       {/* محتوى الصفحة */}
//       <HeroSection />
//       <FeaturesSection />
//       <HowToStartSection />
//       <IntegrationsSection />
//       <MarketingSection />
//       <ProductManagementSection />
//       <AnalyticsSection />
//       <Partnerssection />
//       <TestimonialsSection />
//       <PricingSection />
//       <FAQSection />
//       <ContactSection />
//     </div>
//   )
// }
