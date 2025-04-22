"use client"

import "./globals.css"
import { Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
import { MotionConfig } from "framer-motion"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-tajawal antialiased", tajawal.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionConfig reducedMotion="user">
            <MousePositionProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              <Toaster />
            </MousePositionProvider>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
