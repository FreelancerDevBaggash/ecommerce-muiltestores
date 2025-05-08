"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FloatingNav } from "@/components/ui/floating-nav"
import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
import { SmoothScroll } from "@/components/effects/smooth-scroll"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { CursorEffect } from "@/components/effects/cursor-effect"
import { PageTransition } from "@/components/effects/page-transition"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="scroll-smooth bg-background font-tajawal antialiased rtl min-h-screen flex flex-col">

          <MousePositionProvider>
            <SmoothScroll>
              <ScrollProgress />
              <CursorEffect />
              <Navbar />
              <AnimatePresence mode="wait">
              <main className="relative">
                <PageTransition key={pathname}>
                 {children}
                </PageTransition>
                </main> 
              </AnimatePresence>
              <Footer />
              <FloatingNav />
            </SmoothScroll>
          </MousePositionProvider>

          </div>
  )
}
