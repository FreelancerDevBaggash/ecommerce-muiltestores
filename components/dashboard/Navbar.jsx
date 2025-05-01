// "use client"

// import { useState } from "react"
// import { useSession } from "next-auth/react"
// import { AlignJustify, Search, X } from "lucide-react"
// import Link from "next/link"

// import ThemeSwitcherBtn from "./ThemeSwitcherBtn"
// import UserAvatar from "./UserAvatar"
// import NotificationCenter from "./NotificationCenter"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// // بيانات الإشعارات للعرض
// const mockNotifications = [
//   {
//     id: 1,
//     title: "نفاد مخزون الذرة الصفراء",
//     message: "وصل مخزون الذرة الصفراء إلى الحد الأدنى، يرجى إعادة الطلب.",
//     date: "2025-04-23T12:40:00",
//     read: false,
//     badge: "نفاد المخزون",
//     badgeColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
//     type: "system",
//     image: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     id: 2,
//     title: "طلب جديد #1234",
//     message: "تم استلام طلب جديد بقيمة 350 ر.ي",
//     date: "2025-04-23T10:15:00",
//     read: false,
//     badge: "طلب جديد",
//     badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
//     type: "order",
//     image: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     id: 3,
//     title: "تحديث النظام",
//     message: "تم تحديث النظام إلى الإصدار 2.5.0 بنجاح.",
//     date: "2025-04-22T15:30:00",
//     read: true,
//     badge: "تحديث",
//     badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
//     type: "system",
//     image: "/placeholder.svg?height=40&width=40",
//   },
// ]

// export default function Navbar({ showSidebar, setShowSidebar, collapsed }) {
//   const { data: session, status } = useSession()
//   const [showSearch, setShowSearch] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")

//   const handleSearch = (e) => {
//     e.preventDefault()
//     console.log("بحث عن:", searchQuery)
//     // يمكن إضافة منطق البحث هنا
//   }

//   return (
//     <header className="fixed top-0 right-0 left-0 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-40 flex items-center px-4 sm:px-6">
//       <div
//         className={`flex items-center justify-between w-full transition-all duration-300 ${
//           collapsed ? "sm:pr-16" : "sm:pr-64"
//         }`}
//       >
//         <div className="flex items-center gap-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="sm:hidden text-slate-700 dark:text-slate-300"
//             onClick={() => setShowSidebar(!showSidebar)}
//           >
//             <AlignJustify className="h-5 w-5" />
//             <span className="sr-only">القائمة</span>
//           </Button>

//           {showSearch ? (
//             <form onSubmit={handleSearch} className="relative w-full max-w-md">
//               <Input
//                 type="search"
//                 placeholder="بحث..."
//                 className="pl-10 pr-4"
//                 autoFocus
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//               <Button
//                 type="button"
//                 variant="ghost"
//                 size="icon"
//                 className="absolute left-1 top-1/2 -translate-y-1/2 h-7 w-7"
//                 onClick={() => setShowSearch(false)}
//               >
//                 <X className="h-4 w-4" />
//                 <span className="sr-only">إغلاق البحث</span>
//               </Button>
//             </form>
//           ) : (
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-slate-700 dark:text-slate-300 hidden md:flex"
//               onClick={() => setShowSearch(true)}
//             >
//               <Search className="h-5 w-5" />
//               <span className="sr-only">بحث</span>
//             </Button>
//           )}

//           <div className="hidden md:flex">
//             <Link
//               href="/dashboard"
//               className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
//             >
//               منصة التجارة
//             </Link>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <ThemeSwitcherBtn />
//           <NotificationCenter notifications={mockNotifications} />
//           {status === "authenticated" && <UserAvatar user={session?.user} />}
//         </div>
//       </div>
//     </header>
//   )
// }

// components/Navbar.jsx
"use client"

import React, { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import axios from "axios"
import Pusher from "pusher-js"
import { AlignJustify, Search, X } from "lucide-react"
import Link from "next/link"

import ThemeSwitcherBtn from "./ThemeSwitcherBtn"
import UserAvatar from "./UserAvatar"
import NotificationCenter from "./NotificationCenter"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// fetcher function for SWR
const fetcher = url => axios.get(url).then(res => res.data)

export default function Navbar({ showSidebar, setShowSidebar, collapsed }) {
  const { data: session, status } = useSession()
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // SWR: fetch notifications and unread count
  const { data, error, mutate, isValidating } = useSWR(
    session ? "/api/notifications" : null,
    fetcher,
    { refreshInterval: 30000 }
  )
  const notifications = data?.notifications || []
  const unreadCount   = data?.unreadCount   || 0

  // Subscribe to Pusher for real-time notifications
  useEffect(() => {
    if (!session) return
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    })
    const channel = pusher.subscribe(`user-${session.user.id}`)
    channel.bind("new-notification", notif => {
      mutate(prev => ({
        notifications: [notif, ...prev.notifications].slice(0, 50),
        unreadCount: prev.unreadCount + 1
      }), false)
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
      pusher.disconnect()
    }
  }, [session, mutate])

  // Mark all notifications as read
  const markAllAsRead = async () => {
    await Promise.all(
      notifications.filter(n => !n.read).map(n =>
        axios.patch(`/api/notifications/${n.id}/read`)
      )
    )
    mutate(prev => ({
      notifications: prev.notifications.map(n => ({ ...n, read: true })),
      unreadCount: 0
    }), false)
  }

  // Handle clicking a notification
  const handleSelect = async notif => {
    if (!notif.read) {
      await axios.patch(`/api/notifications/${notif.id}/read`)
      mutate(prev => ({
        notifications: prev.notifications.map(n =>
          n.id === notif.id ? { ...n, read: true } : n
        ),
        unreadCount: prev.unreadCount - 1
      }), false)
    }
    if (notif.link) {
      window.location.href = notif.link
    }
  }

  // Search form handler
  const handleSearch = e => {
    e.preventDefault()
    console.log("بحث عن:", searchQuery)
    // TODO: أضف منطق البحث هنا
  }

  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-40 flex items-center px-4 sm:px-6">
      <div
        className={`flex items-center justify-between w-full transition-all duration-300 ${
          collapsed ? "sm:pr-16" : "sm:pr-64"
        }`}
      >
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden text-slate-700 dark:text-slate-300"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <AlignJustify className="h-5 w-5" />
            <span className="sr-only">القائمة</span>
          </Button>

          {showSearch ? (
            <form onSubmit={handleSearch} className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="بحث..."
                className="pl-10 pr-4"
                autoFocus
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute left-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">إغلاق البحث</span>
              </Button>
            </form>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-700 dark:text-slate-300 hidden md:flex"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">بحث</span>
            </Button>
          )}

          <div className="hidden md:flex">
            <Link
              href="/dashboard"
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              منصة التجارة
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />

          {status === "authenticated" && (
            <NotificationCenter
              notifications={notifications}
              unreadCount={unreadCount}
              onMarkAllAsRead={markAllAsRead}
              onSelect={handleSelect}
              loading={isValidating}
              error={error}
            />
          )}

          {status === "authenticated" && <UserAvatar user={session.user} />}
        </div>
      </div>
    </header>
  )
}


