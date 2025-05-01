// "use client"

// import { useState } from "react"
// import { Bell, Check, X } from "lucide-react"
// import { format } from "date-fns"
// import { ar } from "date-fns/locale"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"

// export default function NotificationCenter({ notifications = [] }) {
//   const [unreadCount, setUnreadCount] = useState(notifications.filter((n) => !n.read).length)
//   const [notificationsList, setNotificationsList] = useState(notifications)

//   const markAsRead = (id) => {
//     setNotificationsList((prev) =>
//       prev.map((notification) => {
//         if (notification.id === id && !notification.read) {
//           setUnreadCount((count) => Math.max(0, count - 1))
//           return { ...notification, read: true }
//         }
//         return notification
//       }),
//     )
//   }

//   const removeNotification = (id) => {
//     setNotificationsList((prev) => {
//       const notification = prev.find((n) => n.id === id)
//       if (notification && !notification.read) {
//         setUnreadCount((count) => Math.max(0, count - 1))
//       }
//       return prev.filter((notification) => notification.id !== id)
//     })
//   }

//   const markAllAsRead = () => {
//     setNotificationsList((prev) =>
//       prev.map((notification) => ({
//         ...notification,
//         read: true,
//       })),
//     )
//     setUnreadCount(0)
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon" className="relative">
//           <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
//           {unreadCount > 0 && (
//             <Badge
//               variant="destructive"
//               className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
//             >
//               {unreadCount > 9 ? "9+" : unreadCount}
//             </Badge>
//           )}
//           <span className="sr-only">الإشعارات</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-80 max-h-[80vh] overflow-hidden">
//         <div className="flex items-center justify-between p-4">
//           <DropdownMenuLabel className="p-0">الإشعارات</DropdownMenuLabel>
//           {unreadCount > 0 && (
//             <Button variant="ghost" size="sm" onClick={markAllAsRead}>
//               <Check className="h-4 w-4 mr-1" />
//               <span>تعيين الكل كمقروء</span>
//             </Button>
//           )}
//         </div>
//         <DropdownMenuSeparator />

//         <div className="max-h-[60vh] overflow-y-auto p-1">
//           {notificationsList.length > 0 ? (
//             notificationsList.map((notification) => (
//               <DropdownMenuItem
//                 key={notification.id}
//                 className={`flex items-start gap-3 p-3 cursor-default ${
//                   !notification.read ? "bg-slate-50 dark:bg-slate-800/60" : ""
//                 }`}
//               >
//                 <Avatar className="h-9 w-9 flex-shrink-0">
//                   <AvatarImage src={notification.image || "/placeholder.svg"} alt="" />
//                   <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
//                     {notification.type === "system" ? "S" : "U"}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{notification.title}</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{notification.message}</p>
//                   <div className="flex items-center gap-2 mt-1 flex-wrap">
//                     {notification.badge && (
//                       <span
//                         className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
//                           notification.badgeColor ||
//                           "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
//                         }`}
//                       >
//                         {notification.badge}
//                       </span>
//                     )}
//                     <span className="text-xs text-slate-500 dark:text-slate-400">
//                       {format(new Date(notification.date), "d MMMM yyyy, HH:mm", { locale: ar })}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7"
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       markAsRead(notification.id)
//                     }}
//                   >
//                     <Check className="h-4 w-4" />
//                     <span className="sr-only">تعيين كمقروء</span>
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-7 w-7"
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       removeNotification(notification.id)
//                     }}
//                   >
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">إزالة</span>
//                   </Button>
//                 </div>
//               </DropdownMenuItem>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
//               <Bell className="h-10 w-10 text-slate-300 dark:text-slate-600 mb-2" />
//               <p className="text-sm text-slate-500 dark:text-slate-400">لا توجد إشعارات جديدة</p>
//             </div>
//           )}
//         </div>

//         <DropdownMenuSeparator />
//         <div className="p-2">
//           <Button variant="outline" size="sm" className="w-full">
//             عرض كل الإشعارات
//           </Button>
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Bell, Trash2 } from "lucide-react"
// import { useSession } from "next-auth/react"
// import Pusher from "pusher-js"
// import useSWR from "swr"
// import axios from "axios"
// import { formatDistanceToNow } from "date-fns"
// import { ar } from "date-fns/locale"

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu"

// const fetcher = url => axios.get(url).then(res => res.data)

// export default function NotificationCenter({ onNavigate }) {
//   const { data: session } = useSession()
//   const menuRef = useRef(null)
//   const [open, setOpen] = useState(false)

//   const {
//     data,
//     error,
//     mutate,
//     isValidating
//   } = useSWR(session ? "/api/notifications" : null, fetcher, { refreshInterval: 30000 })

//   const notifications = data?.notifications || []
//   const unreadCount = data?.unreadCount || 0

//   useEffect(() => {
//     if (!session) return

//     const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
//       cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
//     })

//     const channel = pusher.subscribe(`user-${session.user.id}`)
//     channel.bind("new-notification", notif => {
//       mutate(prev => ({
//         notifications: [notif, ...(prev?.notifications || [])].slice(0, 50),
//         unreadCount: (prev?.unreadCount || 0) + 1
//       }), false)
//     })

//     return () => {
//       channel.unbind_all()
//       channel.unsubscribe()
//       pusher.disconnect()
//     }
//   }, [session, mutate])

//   useEffect(() => {
//     const handleClickOutside = e => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   const markAllAsRead = async () => {
//     const unread = notifications.filter(n => !n.read)
//     await Promise.all(unread.map(n => axios.patch(`/api/notifications/${n.id}/read`)))
//     mutate(prev => ({
//       notifications: prev.notifications.map(n => ({ ...n, read: true })),
//       unreadCount: 0
//     }), false)
//   }

//   const markAsRead = async notif => {
//     if (!notif.read) {
//       await axios.patch(`/api/notifications/${notif.id}/read`)
//       mutate(prev => ({
//         notifications: prev.notifications.map(n =>
//           n.id === notif.id ? { ...n, read: true } : n
//         ),
//         unreadCount: prev.unreadCount - 1
//       }), false)
//     }
//     if (notif.link && onNavigate) onNavigate(notif.link)
//     setOpen(false)
//   }

//   const deleteNotification = async id => {
//     await axios.delete(`/api/notifications/${id}`)
//     mutate(prev => ({
//       notifications: prev.notifications.filter(n => n.id !== id),
//       unreadCount: Math.max(0, prev.unreadCount - 1)
//     }), false)
//   }

//   return (
//     <div className="relative" ref={menuRef}>
//       <DropdownMenu open={open} onOpenChange={setOpen}>
//         <DropdownMenuTrigger asChild>
//           <button className="relative p-2">
//             <Bell className="w-6 h-6 text-slate-700 dark:text-slate-200" />
//             {unreadCount > 0 && (
//               <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full">
//                 {unreadCount}
//               </span>
//             )}
//           </button>
//         </DropdownMenuTrigger>

//         <DropdownMenuContent align="end" sideOffset={8} className="w-80 max-w-sm px-2 py-2">
//           <DropdownMenuLabel className="flex justify-between items-center px-2">
//             <span>الإشعارات</span>
//             {unreadCount > 0 && (
//               <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:underline">
//                 تعليم الكل كمقروء
//               </button>
//             )}
//           </DropdownMenuLabel>

//           <DropdownMenuSeparator />

//           {isValidating && <div className="p-4 text-center text-gray-500">جارٍ التحميل...</div>}
//           {error && <div className="p-4 text-center text-red-600">خطأ في جلب البيانات</div>}
//           {!error && !isValidating && notifications.length === 0 && (
//             <div className="p-4 text-center text-gray-500">لا توجد إشعارات</div>
//           )}

//           <div className="max-h-72 overflow-y-auto space-y-1">
//             {notifications.map(notif => (
//               <DropdownMenuItem
//                 key={notif.id}
//                 className={`flex items-start gap-2 px-2 py-2 rounded-md cursor-pointer group ${notif.read ? "" : "bg-lime-50 dark:bg-slate-700"}`}
//                 onSelect={() => markAsRead(notif)}
//               >
//                 <div className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-800/30">
//                   <Bell size={16} className="text-lime-700 dark:text-lime-300" />
//                 </div>
//                 <div className="flex-1 text-right">
//                   <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">{notif.title || notif.body}</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true, locale: ar })}
//                   </p>
//                 </div>
//                 <button
//                   onClick={(e) => { e.stopPropagation(); deleteNotification(notif.id) }}
//                   className="text-gray-400 hover:text-red-500 invisible group-hover:visible"
//                 >
//                   <Trash2 size={16} />
//                 </button>
//               </DropdownMenuItem>
//             ))}
//           </div>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   )
// }
"use client"

import { useEffect, useRef, useState } from "react"
import { Bell, Trash2 } from "lucide-react"
import { useSession } from "next-auth/react"
import useSWR from "swr"
import axios from "axios"
import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const fetcher = url => axios.get(url).then(res => res.data)

export default function NotificationCenter({ onNavigate }) {
  const { data: session } = useSession()
  const menuRef = useRef(null)
  const audioRef = useRef(null)
  const [open, setOpen] = useState(false)

  const { data, error, mutate, isValidating } = useSWR(
    session ? "/api/notifications" : null,
    fetcher,
    { refreshInterval: 30000 }
  )

  const notifications = data?.notifications || []
  const unreadCount = data?.unreadCount || 0

  // تهيئة الصوت عند التركيب
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/sounds/notification.mp3")
      audioRef.current.load()
    }
  }, [])

  // Pusher + صوت عند وصول إشعار جديد
  useEffect(() => {
    if (!session || typeof window === "undefined") return

    // تأكد من تحميل pusher-js في العميل فقط
    const Pusher = require("pusher-js")
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    })
    const channel = pusher.subscribe(`user-${session.user.id}`)
    channel.bind("new-notification", notif => {
      // تشغيل الصوت
      audioRef.current?.play().catch(err => {
        console.warn("Audio play failed:", err)
      })
      // تحديث قائمة الإشعارات
      mutate(prev => ({
        notifications: [notif, ...(prev?.notifications || [])].slice(0, 50),
        unreadCount: (prev?.unreadCount || 0) + 1
      }), false)
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
      pusher.disconnect()
    }
  }, [session, mutate])

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const markAllAsRead = async () => {
    const unread = notifications.filter(n => !n.read)
    await Promise.all(unread.map(n => axios.patch(`/api/notifications/${n.id}/read`)))
    mutate(prev => ({
      notifications: prev.notifications.map(n => ({ ...n, read: true })),
      unreadCount: 0
    }), false)
  }

  const markAsRead = async notif => {
    if (!notif.read) {
      await axios.patch(`/api/notifications/${notif.id}/read`)
      mutate(prev => ({
        notifications: prev.notifications.map(n =>
          n.id === notif.id ? { ...n, read: true } : n
        ),
        unreadCount: prev.unreadCount - 1
      }), false)
    }
    if (notif.link && onNavigate) onNavigate(notif.link)
    setOpen(false)
  }

  const deleteNotification = async id => {
    await axios.delete(`/api/notifications/${id}`)
    mutate(prev => ({
      notifications: prev.notifications.filter(n => n.id !== id),
      unreadCount: Math.max(0, prev.unreadCount - 1)
    }), false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="relative p-2">
            <Bell className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={8} className="w-80 max-w-sm px-2 py-2">
          <DropdownMenuLabel className="flex justify-between items-center px-2">
            <span>الإشعارات</span>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:underline">
                تعليم الكل كمقروء
              </button>
            )}
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {isValidating && <div className="p-4 text-center text-gray-500">جارٍ التحميل...</div>}
          {error && <div className="p-4 text-center text-red-600">خطأ في جلب البيانات</div>}
          {!error && !isValidating && notifications.length === 0 && (
            <div className="p-4 text-center text-gray-500">لا توجد إشعارات</div>
          )}

          <div className="max-h-72 overflow-y-auto space-y-1">
            {notifications.map(notif => (
              <DropdownMenuItem
                key={notif.id}
                className={`flex items-start gap-2 px-2 py-2 rounded-md cursor-pointer group ${notif.read ? "" : "bg-lime-50 dark:bg-slate-700"}`}
                onSelect={() => markAsRead(notif)}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-800/30">
                  <Bell size={16} className="text-lime-700 dark:text-lime-300" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">{notif.title || notif.body}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true, locale: ar })}
                  </p>
                </div>
                <button
                  onClick={e => { e.stopPropagation(); deleteNotification(notif.id) }}
                  className="text-gray-400 hover:text-red-500 invisible group-hover:visible"
                >
                  <Trash2 size={16} />
                </button>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
