// // components/NavbarNotifications.jsx
// "use client"

// import { useSession } from 'next-auth/react'
// import useSWR from 'swr'
// import axios from 'axios'
// import Pusher from 'pusher-js'
// import toast from 'react-hot-toast'
// import Link from 'next/link'
// import { Bell, ShoppingCart, Package, Star, AlertCircle, Tag } from 'lucide-react'

// const fetcher = url => axios.get(url).then(res => res.data)

// const ICON_MAP = {
//   ORDER_NEW: <ShoppingCart className="w-5 h-5 text-blue-600" />,
//   ORDER_STATUS_CHANGED: <Package className="w-5 h-5 text-yellow-600" />,
//   ORDER_REVIEW_REMINDER: <Star className="w-5 h-5 text-green-600" />,
//   PRODUCT_LOW_STOCK: <AlertCircle className="w-5 h-5 text-red-600" />,
//   COUPON_EXPIRING: <Tag className="w-5 h-5 text-purple-600" />,
//   // أضف أنواع أخرى حسب الحاجة
// }

// export default function NavbarNotifications() {
//   const { data: session } = useSession()
//   const { data, error, mutate } = useSWR(
//     session ? '/api/notifications' : null,
//     fetcher,
//     { refreshInterval: 30000 }
//   )

//   // إعداد Pusher للتنبيهات الفورية
//   useEffect(() => {
//     if (!session) return
//     const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
//       cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
//     })
//     const channel = pusher.subscribe(`user-${session.user.id}`)
//     channel.bind('new-notification', notif => {
//       toast.custom(t => (
//         <div
//           className="bg-white shadow-lg rounded-md p-4 flex items-start space-x-2 rtl"
//           onClick={() => {
//             window.location.href = notif.link || '/'
//             toast.dismiss(t.id)
//           }}
//         >
//           <div className="mt-1">{ICON_MAP[notif.type] || <Bell />}</div>
//           <div className="flex-1 text-right">
//             <p className="font-medium">{notif.title}</p>
//             <p className="text-sm text-gray-500">{notif.body}</p>
//           </div>
//         </div>
//       ))
//       // إعادة جلب الإشعارات مع إضافة الجديدة
//       mutate(prev => ({
//         notifications: [notif, ...prev.notifications].slice(0, 50),
//         unreadCount: prev.unreadCount + 1
//       }), false)
//     })
//     return () => {
//       channel.unbind_all()
//       channel.unsubscribe()
//     }
//   }, [session, mutate])

//   if (!session) return null

//   const { notifications = [], unreadCount = 0 } = data || {}

//   const markAllAsRead = async () => {
//     // يمكنك تنفيذ PATCH جماعي أو مجموعة طلبات
//     await Promise.all(
//       notifications.filter(n => !n.read).map(n =>
//         axios.patch(`/api/notifications/${n.id}/read`)
//       )
//     )
//     mutate(prev => ({ ...prev, unreadCount: 0, notifications: prev.notifications.map(n => ({ ...n, read: true })) }), false)
//   }

//   return (
//     <div className="relative">
//       <button className="relative p-2" aria-label="Notifications">
//         <Bell className="w-6 h-6 text-lime-700 dark:text-lime-500" />
//         {unreadCount > 0 && (
//           <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden z-50">
//         <div className="flex items-center justify-between px-4 py-2 border-b dark:border-slate-700">
//           <h3 className="font-semibold">الإشعارات</h3>
//           {unreadCount > 0 && (
//             <button onClick={markAllAsRead} className="text-sm text-blue-600 hover:underline">
//               تعليم الكل كمقروء
//             </button>
//           )}
//         </div>

//         <div className="max-h-96 overflow-y-auto">
//           {error && (
//             <div className="p-4 text-center text-red-600">فشل في جلب الإشعارات</div>
//           )}
//           {!error && notifications.length === 0 && (
//             <div className="p-4 text-center text-gray-500">لا توجد إشعارات جديدة</div>
//           )}
//           {notifications.map(notif => (
//             <Link
//               key={notif.id}
//               href={notif.link || '#'}
//               onClick={async () => {
//                 if (!notif.read) {
//                   await axios.patch(`/api/notifications/${notif.id}/read`)
//                   mutate(prev => ({
//                     notifications: prev.notifications.map(n =>
//                       n.id === notif.id ? { ...n, read: true } : n
//                     ),
//                     unreadCount: prev.unreadCount - 1
//                   }), false)
//                 }
//               }}
//               className={`flex items-start px-4 py-3 space-x-3 rtl ${notif.read ? 'bg-transparent' : 'bg-lime-50 dark:bg-slate-700'}`}
//             >
//               <div>{ICON_MAP[notif.type] || <Bell className="w-5 h-5 text-lime-700" />}</div>
//               <div className="flex-1 text-right">
//                 <p className={`font-medium ${notif.read ? 'text-gray-700' : 'text-black'}`}>
//                   {notif.title}
//                 </p>
//                 <p className="text-sm text-gray-500">{notif.body}</p>
//                 <p className="mt-1 text-xs text-gray-400">
//                   {new Date(notif.createdAt).toLocaleString('ar-EG')}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="p-2 border-t text-center dark:border-slate-700">
//           <Link href="/notifications" className="text-sm text-blue-600 hover:underline">
//             عرض الكل
//           </Link>
//         </div>
//       </div>

//       {/* Toast container */}
//       <toast.Toaster position="top-right" />
//     </div>
//   )
// }

// components/NotificationDropdown.jsx
"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import useSWR from "swr"
import axios from "axios"
import { Bell, X, MoreHorizontal, ShoppingCart, Package, Star, AlertCircle, Tag } from "lucide-react"
import Skeleton from "react-loading-skeleton" // npm install react-loading-skeleton
import "react-loading-skeleton/dist/skeleton.css"

const fetcher = url => axios.get(url).then((res) => res.data)

// أيقونات حسب النوع
const ICON_MAP = {
  ORDER_NEW: <ShoppingCart className="w-5 h-5 text-blue-500" />,
  ORDER_STATUS_CHANGED: <Package className="w-5 h-5 text-yellow-500" />,
  ORDER_REVIEW_REMINDER: <Star className="w-5 h-5 text-green-500" />,
  PRODUCT_LOW_STOCK: <AlertCircle className="w-5 h-5 text-red-500" />,
  COUPON_EXPIRING: <Tag className="w-5 h-5 text-purple-500" />,
}

function groupByDate(notifications) {
  const today = new Date().setHours(0,0,0,0)
  const yesterday = today - 24*60*60*1000
  const groups = { Today: [], Yesterday: [], Earlier: [] }
  notifications.forEach((n) => {
    const t = new Date(n.createdAt).getTime()
    if (t >= today) groups.Today.push(n)
    else if (t >= yesterday) groups.Yesterday.push(n)
    else groups.Earlier.push(n)
  })
  return groups
}

export default function NotificationDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const { data, error, mutate, isValidating } = useSWR("/api/notifications", fetcher, {
    refreshInterval: 30000,
  })
  const dropdownRef = useRef()

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const loading = !data && !error
  const notifications = data?.notifications || []
  const unreadCount = data?.unreadCount || 0

  const handleMark = async (id, read) => {
    await axios.patch(`/api/notifications/${id}/read`, { read: true })
    mutate((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
      unreadCount: prev.unreadCount - (read ? 0 : 1),
    }), false)
  }

  const handleDelete = async (id) => {
    await axios.delete(`/api/notifications/${id}`)
    mutate((prev) => ({
      ...prev,
      notifications: prev.notifications.filter((n) => n.id !== id),
    }), false)
  }

  const groups = groupByDate(notifications)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className=" right-0 mt-22 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
          {/* رأس القائمة */}
          <div className="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">الإشعارات</h3>
            {unreadCount > 0 && (
              <button
                onClick={async () => {
                  // تعليم الكل كمقروء
                  await Promise.all(
                    notifications.filter((n) => !n.read).map((n) =>
                      axios.patch(`/api/notifications/${n.id}/read`, { read: true })
                    )
                  )
                  mutate((prev) => ({
                    ...prev,
                    notifications: prev.notifications.map((n) => ({ ...n, read: true })),
                    unreadCount: 0,
                  }), false)
                }}
                className="text-xs text-blue-600 hover:underline"
              >
                تعليم الكل كمقروء
              </button>
            )}
          </div>

          {/* محتوى القائمة */}
          <div className="max-h-72 overflow-y-auto">
            {loading && (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3 px-4 py-3">
                  <Skeleton circle width={32} height={32} />
                  <div className="flex-1">
                    <Skeleton width="80%" height={12} />
                    <Skeleton width="50%" height={10} className="mt-1" />
                  </div>
                </div>
              ))
            )}

            {!loading && Object.entries(groups).map(([label, items]) =>
              items.length > 0 && (
                <div key={label}>
                  <div className="px-4 py-1 text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    {label}
                  </div>
                  {items.map((notif) => (
                    <div
                      key={notif.id}
                      className={`flex items-start px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        notif.read ? "" : "bg-lime-50 dark:bg-lime-900"
                      }`}
                    >
                      <div className="mt-1">
                        {ICON_MAP[notif.type] || <Bell className="w-5 h-5 text-gray-600" />}
                      </div>
                      <div
                        className="flex-1 mr-2 text-right cursor-pointer"
                        onClick={() => {
                          handleMark(notif.id, notif.read)
                          if (notif.link) onNavigate(notif.link)
                        }}
                      >
                        <p className={`text-sm ${notif.read ? "text-gray-700" : "text-gray-900 dark:text-white"}`}>
                          {notif.title}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                          {new Date(notif.createdAt).toLocaleString("ar-EG")}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleDelete(notif.id)}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                        {!notif.read && (
                          <button
                            onClick={() => handleMark(notif.id, notif.read)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                          >
                            <MoreHorizontal className="w-4 h-4 text-gray-500" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          {/* زر عرض المزيد */}
          {notifications.length >= 50 && (
            <div className="px-4 py-2 border-t dark:border-gray-700 text-center">
              <Link href="/notifications">
                <a className="text-sm text-blue-600 hover:underline">عرض المزيد</a>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
