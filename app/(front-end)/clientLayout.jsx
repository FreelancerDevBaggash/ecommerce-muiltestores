// "use client"

// import "./globals.css"
// import { Tajawal } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import { cn } from "@/lib/utils"
// import { Toaster } from "@/components/ui/toaster"
// import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
// import { MotionConfig } from "framer-motion"
// import Script from "next/script"

// const tajawal = Tajawal({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "700", "800", "900"],
//   variable: "--font-tajawal",
// })

// export default function ClientLayout({ children }) {
//   return (
//     <html lang="ar" dir="rtl" className={cn("scroll-smooth", tajawal.variable)}>
//       <body className="font-tajawal">
//         <MotionConfig transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <MousePositionProvider>
//               <Navbar />
//               {children}
//               <Footer />
//               <Toaster />
//             </MousePositionProvider>
//           </ThemeProvider>
//         </MotionConfig>
//         <Script src="https://kit.fontawesome.com/545b13b23c.js" crossOrigin="anonymous" />
//       </body>
//     </html>
//   )
// }
// "use client"

// import "./globals.css"
// import { Tajawal } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import { cn } from "@/lib/utils"
// import { Toaster } from "@/components/ui/toaster"
// import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
// import { MotionConfig } from "framer-motion"
// import Script from "next/script"

// const tajawal = Tajawal({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "700", "800", "900"],
//   variable: "--font-tajawal",
// })

// export default function ClientLayout({ children }) {
//   return (
//     <html lang="ar" dir="rtl" className={cn("", tajawal.variable)}>
//       <body className="font-tajawal">
//         <MotionConfig transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <MousePositionProvider>
//               <Navbar />
//               {children}
//               <Footer />
//               <Toaster />
//             </MousePositionProvider>
//           </ThemeProvider>
//         </MotionConfig>
//         <Script src="https://kit.fontawesome.com/545b13b23c.js" crossOrigin="anonymous" />
//       </body>
//     </html>
//   )
// }
// "use client"

// import "./globals.css"
// import { Tajawal } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import { cn } from "@/lib/utils"
// import { Toaster } from "@/components/ui/toaster"
// import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
// import { MotionConfig } from "framer-motion"
// import Script from "next/script"

// const tajawal = Tajawal({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "700", "800", "900"],
//   variable: "--font-tajawal",
// })

// export default function ClientLayout({ children }) {
//   return (
//     <html lang="ar" dir="rtl" className={cn("scroll-smooth", tajawal.variable)}>
//       <body className="font-tajawal">
//         <MotionConfig transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <MousePositionProvider>
//               <Navbar />
//               {children}
//               <Footer />
//               <Toaster />
//             </MousePositionProvider>
//           </ThemeProvider>
//         </MotionConfig>
//         <Script src="https://kit.fontawesome.com/545b13b23c.js" crossOrigin="anonymous" />
//       </body>
//     </html>
//   )
// }
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
import Script from "next/script"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export default function ClientLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cn(tajawal.variable)}>
      <body className="font-tajawal overflow-x-hidden">
        <MotionConfig transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MousePositionProvider>
              <Navbar />              {children}
              <Footer />
              <Toaster />
            </MousePositionProvider>
          </ThemeProvider>
        </MotionConfig>
        <Script src="https://kit.fontawesome.com/545b13b23c.js" crossOrigin="anonymous" />
      </body>
    </html>
  )
}
