"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
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
import ScrollProgress from "@/components/effects/scroll-progress"
import CursorEffect from "@/components/effects/cursor-effect"
import { FloatingNav } from "@/components/ui/floating-nav"
import Partnerssection from "@/components/sections/partners-section"
import CaseStudiesSection from "@/components/sections/case-studies-section"
import Appdownloadsection from "@/components/sections/app-download-section"
import ProductShowcaseSection from "@/components/sections/product-showcase-section"


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
    <main className="relative">
      <CursorEffect />
      <div ref={containerRef} className="relative">
        <ScrollProgress />
        <FloatingNav />

        <HeroSection />
       < CaseStudiesSection/>
        <FeaturesSection />
        <HowToStartSection />
        <Appdownloadsection/>
        <MarketingSection />
        <ProductManagementSection />
        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
       < Partnerssection/>
       <ProductShowcaseSection/>
        <FAQSection />
        <IntegrationsSection />
        <ContactSection />
      </div>
    </main>
  )
}
