"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

import { getData } from "@/lib/getData"

import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Slack,
  Store,
  Truck,
  User,
  UserSquare2,
  Users2,
  Warehouse,
  Settings,
  CreditCard,
  ShoppingBag,
  Package,
  BarChart3,
  Home,
  ShoppingCart,
  Bell,
  HelpCircle,
  ChevronLeft,
  LucideMenu,
  Target,
  UserCheck,
  LineChart,
  PieChart,
  TrendingUp,
  // Facebook,
  //  Twitter, 
   Whatsapp,
   Clipboard, Check,
    ShareIcon,

    Facebook, Twitter, 
    X,
     Share2,
     Menu


} from "lucide-react"

import { FaWhatsapp } from "react-icons/fa"

import {
Dialog,
DialogTrigger,
DialogContent,
DialogHeader,
DialogTitle,
DialogClose,
} from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import LoadingSpinner from "./LoadingSpinner"

export default function Sidebar({ showSidebar, setShowSidebar, collapsed, setCollapsed ,  }  ) {
  
  const [openMenu, setOpenMenu] = useState(false)
  
  const [openReportsMenu, setOpenReportsMenu] = useState(false)
  const [openCustomersMenu, setOpenCustomersMenu] = useState(false)
  const [openMarketingMenu, setOpenMarketingMenu] = useState(false)
  const [storeData, setStoreData] = useState([])
  const [slugDomain, setSlugDomain] = useState("")
  const [localSlugDomain, setLocalSlugDomain] = useState("")
  const [logo, setLogo] = useState("/placeholder.svg?height=64&width=64")
  const [businessName, setBusinessName] = useState("متجر")

  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const role = session?.user?.role
  const userId = session?.user?.id

  // تحديد القوائم بناءً على دور المستخدم
  const getSidebarLinks = () => {
    const defaultLinks = [
      { title: "الرئيسية", icon: Home, href: "/dashboard" },
      { title: "العملاء", icon: Users2, href: "/dashboard/customers" },
      { title: "الفئة الرئيسية", icon: Warehouse, href: "/dashboard/mainCategory" },
      { title: "الموردون", icon: UserSquare2, href: "/dashboard/vendors" },
      { title: "المتاجر", icon: Store, href: "/dashboard/stores" },
      { title: "الطلبات", icon: ShoppingCart, href: "/dashboard/orders" },
      { title: "المبيعات", icon: ShoppingBag, href: "/dashboard/sales" },
      { title: "التقارير", icon: BarChart3, href: "/dashboard/reports" },
      { title: "التسويق", icon: Target, href: "/dashboard/marketing" },
      { title: "فريقنا", icon: User, href: "/dashboard/staff" },
      { title: "المجتمع", icon: Users2, href: "/dashboard/community" },
      { title: "القوالب", icon: LayoutGrid, href: "/dashboard/templates" },
      { title: "المحفظة", icon: CreditCard, href: "/dashboard/wallet" },
      { title: "محفظة المنصة", icon: CreditCard, href: "/dashboard/platformWallet" },
      { title: "مزودي الدفع", icon: CreditCard, href: "/dashboard/payments" },
      { title: "مزودي التوصيل", icon: Truck, href: "/dashboard/deliveringProviders" },
      { title: "إعدادات الدفع", icon: CreditCard, href: "/dashboard/payment" },
      { title: "إعدادات التوصيل", icon: Truck, href: "/dashboard/deliveringProvidering" },
      { title: "الإشعارات", icon: Bell, href: "/dashboard/notifications" },
      { title: "الإعدادات", icon: Settings, href: "/dashboard/settings" },
      { title: "المساعدة", icon: HelpCircle, href: "/dashboard/help" },
      { title: "المتجر الإلكتروني", icon: ExternalLink, href: "/" },
    ]

    const vendorLinks = [
      { title: "الرئيسية", icon: Home, href: "/dashboard" },
      { title: "العملاء", icon: Users2, href: "/dashboard/customers" },
      { title: "الفئة الرئيسية", icon: Warehouse, href: "/dashboard/mainCategory" },
      { title: "الموردون", icon: UserSquare2, href: "/dashboard/vendors" },
      { title: "المتاجر", icon: Store, href: "/dashboard/stores" },
      { title: "الطلبات", icon: ShoppingCart, href: "/dashboard/vendor/orders" },
      { title: "المبيعات", icon: ShoppingBag, href: "/dashboard/sales" },
      { title: "التقارير", icon: BarChart3, href: "/dashboard/reports" },
      { title: "التسويق", icon: Target, href: "/dashboard/marketing" },
      { title: "فريقنا", icon: User, href: "/dashboard/staff" },
      { title: "التخصيصات", icon: Package, href: "/dashboard/customizations" },
      { title: "المحفظة", icon: CreditCard, href: "/dashboard/wallet" },
      // { title: "مزودي الدفع", icon: CreditCard, href: "/dashboard/payments" },
      // { title: "مزودي التوصيل", icon: Truck, href: "/dashboard/deliveringProviders" },
      { title: "إعدادات التوصيل", icon: Truck, href: "/dashboard/deliveringProvidering" },
      { title: "المجتمع", icon: Users2, href: "/dashboard/community" },
      { title: "الإشعارات", icon: Bell, href: "/dashboard/notifications" },
      { title: "إعدادات المتجر", icon: Settings, href: "/dashboard/setting" },
      { title: "المساعدة", icon: HelpCircle, href: "/dashboard/help" },
      { title: "المتجر الإلكتروني", icon: ExternalLink, href: `/${slugDomain}` },
    ]

    const customerLinks = [
      { title: "الرئيسية", icon: Home, href: "/dashboard" },
      { title: "طلباتي", icon: ShoppingCart, href: "/dashboard/orders" },
      { title: "ملفي الشخصي", icon: User, href: "/dashboard/profile" },
      { title: "الإشعارات", icon: Bell, href: "/dashboard/notifications" },
      { title: "المساعدة", icon: HelpCircle, href: "/dashboard/help" },
      { title: "المتجر الإلكتروني", icon: ExternalLink, href: `/${slugDomain}` },
    ]

    if (role === "VENDOR") return vendorLinks
    if (role === "CUSTOMER") return customerLinks
    return defaultLinks
  }

  const getCatalogueLinks = () => {
    const defaultLinks = [
      { title: "المنتجات", icon: Boxes, href: "/dashboard/products" },
      { title: "الفئات", icon: LayoutList, href: "/dashboard/categories" },
      { title: "الفئات الفرعية", icon: LayoutList, href: "/dashboard/subcategory" },
      { title: "الخصائص", icon: SendToBack, href: "/dashboard/attributes" },
      { title: "الكوبونات", icon: ScanSearch, href: "/dashboard/coupons" },
      { title: "لافتات المتجر", icon: MonitorPlay, href: "/dashboard/banners" },
    ]

    const vendorLinks = [
      { title: "المنتجات", icon: Boxes, href: "/dashboard/products" },
      { title: "الفئات", icon: LayoutList, href: "/dashboard/categories" },
      { title: "الفئات الفرعية", icon: LayoutList, href: "/dashboard/subcategory" },

    ]

    if (role === "VENDOR") return vendorLinks
    if (role === "CUSTOMER") return []
    return defaultLinks
  }

  const getReportsLinks = () => {
    const reportLinks = [
      { title: "تقارير المبيعات", icon: BarChart3, href: "/dashboard/reports/sales" },
      { title: "المخزون والمنتجات", icon: Package, href: "/dashboard/reports/inventory" },
      { title: "المالية والمدفوعات", icon: CreditCard, href: "/dashboard/reports/financial" },
      { title: "العملاء", icon: Users2, href: "/dashboard/reports/customers" },
      { title: "التسويق", icon: Target, href: "/dashboard/reports/marketing" },
    ]

    return reportLinks
  }

  const getCustomersLinks = () => {
    const customerLinks = [
      { title: "قائمة العملاء", icon: Users2, href: "/dashboard/customers/list" },
      { title: "تحليل العملاء", icon: PieChart, href: "/dashboard/customers/analytics" },
      { title: "برنامج الولاء", icon: UserCheck, href: "/dashboard/customers/loyalty" },
      { title: "شرائح العملاء", icon: Target, href: "/dashboard/customers/segments" },
    ]

    return customerLinks
  }

  const getMarketingLinks = () => {
    const marketingLinks = [
      { title: "الكوبونات", icon: ScanSearch, href: "/dashboard/coupons" },
      { title: "لافتات المتجر", icon: MonitorPlay, href: "/dashboard/banners" },
      { title: "الحملات التسويقية", icon: Target, href: "/dashboard/marketing/campaigns" },
      { title: "تحليل الأداء", icon: LineChart, href: "/dashboard/marketing/performance" },
      { title: "التسويق بالعمولة", icon: TrendingUp, href: "/dashboard/marketing/affiliate" },
      { title: "رسائل البريد الإلكتروني", icon: Bell, href: "/dashboard/marketing/email" },
    ]

    return marketingLinks
  }
  console.log({ Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose });

  // جلب بيانات المتجر
  useEffect(() => {
    if (userId) {
      const fetchStoreData = async () => {
        try {
          const data = await getData(`stores?vendorId=${userId}`, { mode: "real-time" })
          if (data && data.length > 0) {
            setStoreData(data)
            setSlugDomain(data[0].slugDomain || "")
     
            setLogo(data[0].profileImageUrl || "/placeholder.svg?height=64&width=64")
            setBusinessName(data[0].businessName || "متجر")
          }
        } catch (error) {
          console.error("حدث خطأ في جلب بيانات المتجر:", error)
        }
      }
      fetchStoreData()
    }
  }, [userId])

  // تحقق من حالة الطي المحفوظة
  useEffect(() => {
    const savedCollapsed = localStorage.getItem("sidebarCollapsed") === "true"
    if (setCollapsed) {
      setCollapsed(savedCollapsed)
    }
  }, [setCollapsed])

  // حفظ حالة الطي
  const toggleCollapse = () => {
    const newCollapsed = !collapsed
    if (setCollapsed) {
      setCollapsed(newCollapsed)
      localStorage.setItem("sidebarCollapsed", newCollapsed.toString())
    }
  }

  const handleLogout = async () => {
    await signOut()
    router.push("/")
  }
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("حدث خطأ في نسخ رابط المتجر:")
    }
  };
  // if (status === "loading") {
  //   return (
  //     <div className="fixed right-0 top-0 w-64 h-screen bg-white dark:bg-slate-900 shadow-xl z-50 flex items-center justify-center">
  //       <LoadingSpinner size="lg" />
  //     </div>
  //   )
  // }

  const sidebarLinks = getSidebarLinks()
  const catalogueLinks = getCatalogueLinks()
  const reportsLinks = getReportsLinks()
  const customersLinks = getCustomersLinks()
  const marketingLinks = getMarketingLinks()
  const [copied, setCopied] = useState(false);
  const storeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${slugDomain}`;

  // تحديد القوائم التي يجب أن تكون مفتوحة بناءً على المسار الحالي
  // useEffect(() => {
  //   if (pathname.includes("/dashboard/reports")) {
  //     setOpenReportsMenu(true)
  //   }
  //   if (pathname.includes("/dashboard/customers")) {
  //     setOpenCustomersMenu(true)
  //   }
  //   if (pathname.includes("/dashboard/marketing")) {
  //     setOpenMarketingMenu(true)
  //   }
  //   if (pathname.includes("/dashboard/products") || pathname.includes("/dashboard/categories")) {
  //     setOpenMenu(true)
  //   }
  // }, [pathname])

  return (
    <TooltipProvider delayDuration={0}>
      <div dir="rtl"
        className={`${
          showSidebar
            ? "sm:block sm-mt-0  fixed right-0 top-0 h-screen z-50"
            : " sm:mt-0  sm:block fixed right-0 top-0 h-screen z-50"
        } font-arabic bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 flex flex-col ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        {/* <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          {!collapsed && (
                          
            <Link
            href={`/${slugDomain}`}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              onClick={() => setShowSidebar(false)}
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt="شعار المتجر"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg border-2 border-indigo-50 dark:border-slate-800 object-cover"
              />
              <div className="overflow-hidden">
                <p className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[160px]">
                  {businessName}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                رابط المتجر </p>
              </div>
            </Link>
          )}

          {collapsed && (
            <Link href="/dashboard" className="mx-auto" onClick={() => setShowSidebar(false)}>
              <Image
                src={logo || "/placeholder.svg"}
                alt="شعار المتجر"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg border-2 border-indigo-50 dark:border-slate-800 object-cover"
              />
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-500 dark:text-slate-400"
            onClick={toggleCollapse}
          >
            {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div> */}
<div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
  {!collapsed && (
    <Link
    target="_blank"
      href={`/${slugDomain}`}
      className="flex items-center gap-3 hover:opacity-90 transition-opacity"
      onClick={() => setShowSidebar(false)}
    >
      <Image
        src={logo || "/placeholder.svg"}
        alt="شعار المتجر"
        width={40}
        height={40}
        className="w-10 h-10 rounded-lg border-2 border-indigo-50 dark:border-slate-800 object-cover"
      />
      <div className="overflow-hidden">
        <p className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[160px]">
          {businessName}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          رابط المتجر
        </p>
      </div>
    </Link>
  )}

  {collapsed && (
    <Link href="/dashboard" className="mx-auto" onClick={() => setShowSidebar(false)}>
      <Image
        src={logo || "/placeholder.svg"}
        alt="شعار المتجر"
        width={40}
        height={40}
        className="w-10 h-10 rounded-lg border-2 border-indigo-50 dark:border-slate-800 object-cover"
      />
    </Link>
  )}

  <div className="flex items-center gap-2">
    {/* زر المشاركة */}
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-slate-500 dark:text-slate-400"
        >
          <ShareIcon className="h-4 w-4" /> {/* استخدم أيقونة مشاركة */}
        </Button>
      </DialogTrigger>
      <DialogContent className="text-center">
        <h2 className="font-semibold mb-4">مشاركة المتجر</h2>
            {/* رابط المتجر مع أيقونة النسخ */}
            <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-md px-4 py-2 mb-4">
          <a
            href={storeUrl}
            target="_blank"
            rel="noreferrer"
            className="truncate text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {storeUrl}
          </a>
          <button onClick={handleCopy} className="ml-2">
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Clipboard className="h-5 w-5 text-slate-500 hover:text-slate-700 transition-colors" />
            )}
          </button>
        </div>

        <div className="flex justify-center gap-4">
          

          <a href={`https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}/${slugDomain}`} target="_blank" rel="noreferrer">

            <FaWhatsapp className="h-6 w-6 text-green-500 hover:scale-110 transition-transform" />
          </a>
        
        </div>
      </DialogContent>
    </Dialog>

    {/* زر طي الشريط */}
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-slate-500 dark:text-slate-400"
      onClick={toggleCollapse}
    >
      {collapsed ? <Menu className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </Button>
  </div>
  </div>
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto space-y-1
    scrollbar-thin scrollbar-track-transparent
    scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700
    hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-600
    max-h-screen  scrollbar-hover"
>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                onClick={() => setShowSidebar(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === "/dashboard"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <Home className="w-5 h-5" />
                {!collapsed && <span className="font-medium">الرئيسية</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="left">الرئيسية</TooltipContent>}
          </Tooltip>

          {/* قائمة الدليل */}
          {catalogueLinks.length > 0 && (
            <Collapsible className="mt-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <CollapsibleTrigger
                    className={`w-full flex items-center ${
                      collapsed ? "justify-center" : "justify-between"
                    } gap-3 px-4 py-3 rounded-lg transition-colors ${
                      openMenu
                        ? "bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                        : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                    onClick={() => !collapsed && setOpenMenu(!openMenu)}
                  >
                    <div className="flex items-center gap-3">
                      <Slack className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      {!collapsed && <span className="font-medium">المنتجات</span>}
                    </div>
                    {!collapsed && (
                      <>
                        {openMenu ? (
                          <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        )}
                      </>
                    )}
                  </CollapsibleTrigger>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="left">المنتجات</TooltipContent>}
              </Tooltip>

              {!collapsed && (
                <CollapsibleContent className="pr-8 pl-2 space-y-1 mt-1">
                  {catalogueLinks.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={i}
                        onClick={() => setShowSidebar(false)}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          pathname === item.href
                            ? "bg-indigo-600 text-white shadow-md"
                            : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </CollapsibleContent>
              )}
            </Collapsible>
          )}

          {/* قائمة التقارير */}
          <Collapsible className="mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <CollapsibleTrigger
                  className={`w-full flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } gap-3 px-4 py-3 rounded-lg transition-colors ${
                    openReportsMenu || pathname.includes("/dashboard/reports")
                      ? "bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                      : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => !collapsed && setOpenReportsMenu(!openReportsMenu)}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {!collapsed && <span className="font-medium">التقارير</span>}
                  </div>
                  {!collapsed && (
                    <>
                      {openReportsMenu ? (
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      )}
                    </>
                  )}
                </CollapsibleTrigger>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="left">التقارير</TooltipContent>}
            </Tooltip>

            {!collapsed && (
              <CollapsibleContent className="pr-8 pl-2 space-y-1 mt-1">
                {reportsLinks.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={i}
                      onClick={() => setShowSidebar(false)}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-indigo-600 text-white shadow-md"
                          : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  )
                })}
              </CollapsibleContent>
            )}
          </Collapsible>

          {/* قائمة العملاء */}
          <Collapsible className="mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <CollapsibleTrigger
                  className={`w-full flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } gap-3 px-4 py-3 rounded-lg transition-colors ${
                    openCustomersMenu || pathname.includes("/dashboard/customers")
                      ? "bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                      : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => !collapsed && setOpenCustomersMenu(!openCustomersMenu)}
                >
                  <div className="flex items-center gap-3">
                    <Users2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {!collapsed && <span className="font-medium">العملاء</span>}
                  </div>
                  {!collapsed && (
                    <>
                      {openCustomersMenu ? (
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      )}
                    </>
                  )}
                </CollapsibleTrigger>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="left">العملاء</TooltipContent>}
            </Tooltip>

            {!collapsed && (
              <CollapsibleContent className="pr-8 pl-2 space-y-1 mt-1">
                {customersLinks.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={i}
                      onClick={() => setShowSidebar(false)}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-indigo-600 text-white shadow-md"
                          : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  )
                })}
              </CollapsibleContent>
            )}
          </Collapsible>

          {/* قائمة التسويق */}
          <Collapsible className="mt-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <CollapsibleTrigger
                  className={`w-full flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } gap-3 px-4 py-3 rounded-lg transition-colors ${
                    openMarketingMenu || pathname.includes("/dashboard/marketing")
                      ? "bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                      : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => !collapsed && setOpenMarketingMenu(!openMarketingMenu)}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {!collapsed && <span className="font-medium">التسويق</span>}
                  </div>
                  {!collapsed && (
                    <>
                      {openMarketingMenu ? (
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      )}
                    </>
                  )}
                </CollapsibleTrigger>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="left">التسويق</TooltipContent>}
            </Tooltip>

            {!collapsed && (
              <CollapsibleContent className="pr-8 pl-2 space-y-1 mt-1">
                {marketingLinks.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={i}
                      onClick={() => setShowSidebar(false)}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-indigo-600 text-white shadow-md"
                          : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  )
                })}
              </CollapsibleContent>
            )}
          </Collapsible>

          <div className="pt-2">
            {sidebarLinks
              .filter((item) => !["التقارير", "الرئيسية", "العملاء", "التسويق"].includes(item.title))
              .map((item, i) => {
                const Icon = item.icon
                return (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Link
                        onClick={() => setShowSidebar(false)}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                          pathname === item.href
                            ? "bg-indigo-600 text-white shadow-md"
                            : "hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                        } ${collapsed ? "justify-center" : ""}`}
                      >
                        <Icon className="w-5 h-5" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="left">{item.title}</TooltipContent>}
                  </Tooltip>
                )
              })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleLogout}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <LogOut className="w-5 h-5" />
                {!collapsed && <span className="font-medium">تسجيل الخروج</span>}
              </button>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="left">تسجيل الخروج</TooltipContent>}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
