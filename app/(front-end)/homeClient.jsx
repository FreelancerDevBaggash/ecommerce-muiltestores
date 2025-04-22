'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin } from 'gsap/all';

import HeroSection               from '@/components/sections/hero-section';
import FeaturesSection           from '@/components/sections/features-section';
import HowToStartSection         from '@/components/sections/how-to-start-section';
import IntegrationsSection       from '@/components/sections/integrations-section';
import MarketingSection          from '@/components/sections/marketing-section';
import ProductManagementSection  from '@/components/sections/product-management-section';
import AnalyticsSection          from '@/components/sections/analytics-section';
import TestimonialsSection       from '@/components/sections/testimonials-section';
import PricingSection            from '@/components/sections/pricing-section';
import FAQSection                from '@/components/sections/faq-section';
import ContactSection            from '@/components/sections/contact-section';
import ScrollProgress            from '@/components/effects/scroll-progress';
import CursorEffect              from '@/components/effects/cursor-effect';
import { FloatingNav }           from '@/components/ui/floating-nav';
import PartnersSection           from '@/components/sections/partners-section';
import CaseStudiesSection        from '@/components/sections/case-studies-section';
import AppDownloadSection        from '@/components/sections/app-download-section';
import ProductShowcaseSection    from '@/components/sections/product-showcase-section';

export default function HomeClient() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
    ScrollTrigger.defaults({ toggleActions: 'play pause resume reset', scrub: 1 });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <main className="relative">
      <CursorEffect />
      <div className="relative">
        <ScrollProgress />
        <FloatingNav />

        <HeroSection />
        <CaseStudiesSection />
        <FeaturesSection />
        <HowToStartSection />
        <AppDownloadSection />
        <MarketingSection />
        <ProductManagementSection />
        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
        <PartnersSection />
        <ProductShowcaseSection />
        <FAQSection />
        <IntegrationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
