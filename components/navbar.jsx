"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
// import { Logo } from "@/components/ui/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])

  const navBackgroundDark = useTransform(scrollY, [0, 100], ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.9)"])

  const navShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"])

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    {
      name: "المنتجات",
      href: "#",
      dropdown: [
        { name: "المتجر الإلكتروني", href: "#features" },
        { name: "تطبيقات الجوال", href: "#apps" },
        { name: "نقاط البيع", href: "#pos" },
      ],
    },
    { name: "المميزات", href: "#features" },
    { name: "الأسعار", href: "#pricing" },
    { name: "المدونة", href: "#blog" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  return (
    <motion.nav
      style={{
        backgroundColor: theme === "dark" ? navBackgroundDark : navBackground,
        boxShadow: navShadow,
        backdropFilter: "blur(10px)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* <Logo className="h-10 w-auto" /> */}
              <span className="mr-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-200">
                أتجر
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      {link.name}
                      <ChevronDown className="h-4 w-4 mr-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-200">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">تبديل السمة</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>فاتح</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>داكن</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>النظام</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/login">
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
            >
              
              تسجيل الدخول
            </Button>
            </Link>
            <Link href="/register">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">ابدأ الآن مجاناً</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg"
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <div className="text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md text-base font-medium">
                    {link.name}
                  </div>
                  <div className="pr-4 space-y-1 border-r-2 border-indigo-200 dark:border-indigo-800">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
         
           <Button 
              variant="outline"
              className="w-1/2 ml-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
            >
              تسجيل الدخول
            </Button>
          
            <Button className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white">ابدأ الآن</Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
