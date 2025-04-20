// import React from 'react'
// import Navbar from '../../components/frontend/Navbar'
// import Footer from '../../components/frontend/Footer'


// export default function Layout({children}) {
//   return (
//     <div>
//         <Navbar/>
//         <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0 ">
//         {children}
//         </div>
//       <Footer/>
//     </div>
//   )
// }

// import React from 'react';
// import Footer from '../../components/frontend/Footer';
// import NavbarHome from '../../components/frontend/front-end_home/NavBar_Home';

// export default function Layout({ children }) {
//   return (
//     <div dir="rtl"> {/* إضافة اتجاه RTL هنا */}
//       <NavbarHome />

//       {/* استخدام فئات Tailwind CSS المتجاوبة لتصميم مرن */}
//       <div className="max-w-full mx-auto px-0 sm:px-0">
//         {children}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// import React from 'react';
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function Layout({ children }) {
//   return (
//     <div dir="rtl"> {/* إضافة اتجاه RTL هنا */}
//       <Navbar />

//       {/* استخدام فئات Tailwind CSS المتجاوبة لتصميم مرن */}
//       <div className="max-w-full mx-auto px-0 sm:px-0">
//         {children}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// "use client"

// import "./globals.css"
// import { Tajawal } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"

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

// export default function Layout({ children }) {
//   return (
//     <div lang="ar" dir="rtl" className={cn(tajawal.variable)}>
//       <div className="font-tajawal overflow-x-hidden">
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
//       </div>
//     </div>
//   )
// }
"use client"

import "./globals.css"
import { Tajawal } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { MousePositionProvider } from "@/components/providers/mouse-position-provider"
import { MotionConfig } from "framer-motion"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export default function Layout({ children }) {
  return (
    <div dir="rtl" className={cn("min-h-screen bg-background font-tajawal antialiased", tajawal.variable)}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <MotionConfig reducedMotion="user">          
          <MousePositionProvider>    
            <Navbar />
            <div className="max-w-full mx-auto px-0 sm:px-0">
              {children}
            </div>
            <Footer />
            <Toaster />
          </MousePositionProvider>
        </MotionConfig>
      </ThemeProvider>
    </div>
  )
}
