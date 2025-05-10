"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Button } from "@/components/ui/button"
import { ArrowUp, Menu } from "lucide-react"

export default function DashboardLayout({ children , subscriptionEndDate }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  // التحقق من موضع التمرير لإظهار زر العودة للأعلى
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // التمرير إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50  dark:bg-slate-950">
    
      <Navbar  showSidebar={showSidebar} setShowSidebar={setShowSidebar} collapsed={collapsed} subscriptionEndDate={subscriptionEndDate}/>
      
    {/* زر المينيو على الشاشات الصغيرة */}
    <button
      className="sm:hidden p-2 text-slate-700 dark:text-slate-300 fixed top-4 right-4 z-60"
      onClick={() => setShowSidebar(true)}
    >
      <Menu className="w-6 h-6" />
    </button>

      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main dir="rtl" className={`pt-20  transition-all duration-300 px-4  sm:px-6 pb-12 ${collapsed ? "sm:pr-16" : "sm:pr-64"}`}>
        {children}
      </main>

      {/* زر العودة للأعلى */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 left-6 h-10 w-10 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">العودة للأعلى</span>
        </Button>
      )}

      {/* طبقة تعتيم للهاتف المحمول عند فتح القائمة الجانبية */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setShowSidebar(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
