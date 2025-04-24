// "use client"
// import { AlignJustify, Bell, Sun, User, LayoutDashboard, Settings, LogOut, X, Link } from 'lucide-react'
// import React from 'react'
// import Image from 'next/image'
// import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import UserAvatar from './UserAvatar'
// import { useSession } from 'next-auth/react'

// export default function Navbar({setShowSidebar,showSidebar}) {
//   const {data:session, status} = useSession()
//   if(status === "loading"){
//     return <p>Loading... </p>
//   }
//   return (
//     <div className='flex items-center justify-between bg-white dark:bg-slate-800
//     text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 sm:pr-[20rem]'>
//       {/* <Link href="/dashboard" className=""> logo
//       </Link> */}
//       {/*Icons */}
//       <button onClick={()=>setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500" >
//         <AlignJustify/>
//       </button>
//       {/*3 Icons */} 
//       <div className="flex space-x-3 ">
//         {/* <button>
//           <Sun className='text-green-600'/>
//         </button> */}
//       <ThemeSwitcherBtn/>
//         <DropdownMenu>
//          <DropdownMenuTrigger> 
//          <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
// <Bell className='text-lime-700 dark:text-lime-500'/>
// <span className="sr-only">Notifications</span>
//   <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
// </button>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent className="py-2 px-4 pr-8">
//     <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//     <div className="flex items-center space-x-2">
//     <Image src='/profile.JPG' alt='User profile' width={200} height={200}  className='w-8 h-8 rounded-full' />

//         <div className="flex flex-col space-y-1">
//                 <p>Yellow Sweet Corn Stock out,</p>
//                 <div className="flex items-center space-x-2 ">
//                 <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
//                 <p>Dec 12 2021 - 12:40PM</p>
//         </div>
//         </div>
//         <button>
//             <X/>
//         </button>
//         </div>

//     </DropdownMenuItem>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//     <div className="flex items-center space-x-2">
//     <Image src='/profile.JPG' alt='User profile' width={200} height={200}  className='w-8 h-8 rounded-full' />

//         <div className="flex flex-col space-y-1">
//                 <p>Yellow Sweet Corn Stock out,</p>
//                 <div className="flex items-center space-x-2 ">
//                 <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
//                 <p>Dec 12 2021 - 12:40PM</p>
//         </div>
//         </div>
//         <button>
//             <X/>
//         </button>
//         </div>

//     </DropdownMenuItem>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//     <div className="flex items-center space-x-2">
//     <Image src='/profile.JPG' alt='User profile' width={200} height={200}  className='w-8 h-8 rounded-full' />

//         <div className="flex flex-col space-y-1">
//                 <p>Yellow Sweet Corn Stock out,</p>
//                 <div className="flex items-center space-x-2 ">
//                 <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
//                 <p>Dec 12 2021 - 12:40PM</p>
//         </div>
//         </div>
//         <button>
//             <X/>
//         </button>
//         </div>

//     </DropdownMenuItem>
//     <DropdownMenuSeparator />
//   </DropdownMenuContent>
// </DropdownMenu>




//       {/* <ThemeSwitcherBtn/>

// <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg  ">
//   <div className='text-green-600'><Bell /></div>
//   <span className="sr-only">Notifications</span>
//   <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
// </button> */}


//        {status=== "authenticated" && <UserAvatar user={session?.user} />}
//       </div>
//       </div>
//   )
// }

// "use client"
// import { AlignJustify, Bell, Sun, User, LayoutDashboard, Settings, LogOut, X, Link } from 'lucide-react'
// import React from 'react'
// import Image from 'next/image'
// import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import UserAvatar from './UserAvatar'
// import { useSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'



// export default function Navbar({ setShowSidebar, showSidebar }) {
//   const { data: session, status } = useSession()
//   const [notifications, setNotifications] = useState([])
// const [unreadCount, setUnreadCount] = useState(0)

// useEffect(() => {
//   const fetchNotifications = async () => {
//     try {
//       const res = await axios.get('/api/notifications')
//       setNotifications(res.data.notifications)
//       setUnreadCount(res.data.unreadCount)
//     } catch (error) {
//       console.error("فشل في جلب الإشعارات", error)
//     }
//   }

//   fetchNotifications()
// }, [])


//   return (
//     <div className='flex items-center justify-between bg-white dark:bg-slate-800
//     text-slate-50 h-16 px-8 right-0 py-8 fixed top-0 w-full z-20 sm:pr-[20rem] rtl'>
//       {/* <Link href="/dashboard" className=""> الشعار
//       </Link> */}
//       {/* الأيقونات */}
//       <span role="button" onClick={() => setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500" >
//         <AlignJustify />
//       </span>
//       {/* الأيقونات الأخرى */}
//       <div className="flex space-x-3">
//         <ThemeSwitcherBtn />
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <span role="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
//               <Bell className='text-lime-700 dark:text-lime-500' />
//               <span className="sr-only">الإشعارات</span>
//               <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
//                 {unreadCount}
//               </div>
//             </span>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="py-2 px-4 pr-8">
//             <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             {notifications.map((notif) => (
//               <DropdownMenuItem key={notif.id}>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700">
//                     <Bell size={18} />
//                   </div>
//                   <div className="flex flex-col space-y-1 text-right">
//                     <p>{notif.message}</p>
//                     <p className="text-xs text-gray-400">{new Date(notif.createdAt).toLocaleString('ar-EG')}</p>
//                   </div>
//                 </div>
//               </DropdownMenuItem>
//             ))}

//             <DropdownMenuSeparator />
//           </DropdownMenuContent>
//         </DropdownMenu>

//         {status === "authenticated" && <UserAvatar user={session?.user} />}
//       </div>
//     </div>
//   )
// }

// components/Navbar.jsx
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import axios from 'axios'
import ThemeSwitcherBtn from '@/components/ThemeSwitcherBtn'
import UserAvatar from './UserAvatar'
import { AlignJustify, Bell, X } from 'lucide-react'
import Pusher from 'pusher-js'
import NotificationDropdown from'./NavbarNotifications' 
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const fetcher = url => axios.get(url).then(r => r.data)

export default function Navbar({ setShowSidebar, showSidebar }) {
  const { data: session } = useSession()
  const menuRef = useRef()
  const [open, setOpen] = useState(false)

  // SWR: notifications + unreadCount
  const { data, error, mutate, isValidating } = useSWR(
    session ? '/api/notifications' : null,
    fetcher,
    { refreshInterval: 30000 }
  )
  const notifications = data?.notifications || []
  const unreadCount   = data?.unreadCount   || 0

  // subscribe to Pusher
  useEffect(() => {
    if (!session) return
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    })
    const channel = pusher.subscribe(`user-${session.user.id}`)
    channel.bind('new-notification', notif => {
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

  // close dropdown on outside click
  useEffect(() => {
    const onClick = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

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
    if (notif.link) window.location.href = notif.link
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-sm z-30">
      <div className="max-w-[calc(100%-1rem)] sm:max-w-full mx-auto flex items-center justify-between h-16 px-4 sm:px-8">
        {/* هَمبرغر */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-2 text-lime-700 dark:text-lime-500 sm:hidden"
        >
          <AlignJustify size={24} />
        </button>

        {/* مسافة فارغة للحفاظ على التصميم */}
        <div className="flex-1" />

        {/* الأيقونات */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeSwitcherBtn />

          {/* {session && (
            <div className="relative" ref={menuRef}>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="relative p-2">
                    <Bell className="w-6 h-6 text-lime-700 dark:text-lime-500" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={4}
                  className="w-full sm:w-80 py-2 px-1 sm:px-4"
                >
                  <DropdownMenuLabel className="flex justify-between items-center px-2 sm:px-0">
                    <span>الإشعارات</span>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        تعليم الكل كمقروء
                      </button>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {isValidating && (
                    <div className="p-4 text-center text-gray-500">جارٍ التحميل...</div>
                  )}
                  {error && (
                    <div className="p-4 text-center text-red-600">خطأ في جلب البيانات</div>
                  )}
                  {!error && !isValidating && notifications.length === 0 && (
                    <div className="p-4 text-center text-gray-500">لا توجد إشعارات</div>
                  )}

                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map(notif => (
                      <DropdownMenuItem
                        key={notif.id}
                        className={`flex items-start space-x-2 px-2 py-2 cursor-pointer rounded-sm ${
                          notif.read ? '' : 'bg-lime-50 dark:bg-slate-700'
                        }`}
                        onSelect={() => handleSelect(notif)}
                      >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center">
                          <Bell size={18} className="text-lime-700" />
                        </div>
                        <div className="flex-1 text-right">
                          <p className="text-sm font-medium">{notif.title || notif.body}</p>
                          <p className="text-[10px] text-gray-400">
                            {new Date(notif.createdAt).toLocaleString('ar-EG')}
                          </p>
                        </div>
                        {!notif.read && (
                          <span className="text-xs text-red-500">●</span>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )} */}
            {session && <NotificationDropdown onNavigate={(url) => router.push(url)} />}


          {session && <UserAvatar user={session.user} />}
        </div>
      </div>
    </header>
  )
}
