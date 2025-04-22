// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useTheme } from "next-themes"
// import { Logo } from "@/components/ui/logo"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const toggleMenu = () => setIsOpen(!isOpen)
//   const closeMenu = () => setIsOpen(false)

//   const navItems = [
//     { label: "الرئيسية", href: "/" },
//     { label: "المميزات", href: "/#features" },
//     { label: "الأسعار", href: "/#pricing" },
//     { label: "الدعم", href: "/support" },
//     { label: "مركز المساعدة", href: "/help" },
//     { label: "الأسئلة الشائعة", href: "/faq" },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center" onClick={closeMenu}>
//               <Logo className="h-8 w-auto" />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                   pathname === item.href
//                     ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
//                     : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-4 space-x-reverse">
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
//               aria-label="Toggle theme"
//             >
//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={theme}
//                   initial={{ y: -20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 20, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//                 </motion.div>
//               </AnimatePresence>
//             </button>

//             <div className="hidden md:block">
//               <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">ابدأ الآن مجاناً</Button>
//             </div>

//             <button
//               onClick={toggleMenu}
//               className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800"
//           >
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-2">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.05 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className={`px-4 py-2 rounded-md text-sm font-medium block transition-colors ${
//                         pathname === item.href
//                           ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
//                           : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                       }`}
//                       onClick={closeMenu}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
//                   className="pt-2"
//                 >
//                   <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">ابدأ الآن مجاناً</Button>
//                 </motion.div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المميزات", href: "/#features" },
    { label: "الأسعار", href: "/#pricing" },
    { label: "الدعم", href: "/support" },
    { label: "مركز المساعدة", href: "/help" },
    { label: "الأسئلة الشائعة", href: "/faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  ا
                </div>
                <span className="mr-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300">
                  اتجر
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-indigo-600 dark:text-indigo-400 bg-amber-50 dark:bg-amber-900/20"
                    : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />

            <div className="hidden md:block">
            <Link href="/register">
              <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                ابدأ الآن مجاناً
              </Button>
              </Link>

              <Link href="/login">
              <Button className="rounded-full mr-1 bg-gradient-to-r from-white to-indigo-50 hover:from-indigo-50 hover:to-white text-indigo shadow-lg hover:shadow-xl transition-all duration-300">
              تسجيل الدخول
              </Button>
              </Link>

            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-3 rounded-lg text-sm font-medium block transition-colors ${
                        pathname === item.href
                          ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-amber-900/20"
                          : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
<Link href="/login">
  <Button className="w-full rounded-lg bg-gradient-to-r from-slate-100 to-slate-600 hover:from-indigo-600 hover:to-indigo-700 text-indigo-600">
    تسجيل الدخول 
  </Button>
</Link>
<Link href="/register">
  <Button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white">
    ابدأ الآن مجاناً
  </Button>
</Link>

                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
