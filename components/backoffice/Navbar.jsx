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
"use client"
import { AlignJustify, Bell, Sun, User, LayoutDashboard, Settings, LogOut, X, Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserAvatar from './UserAvatar'
import { useSession } from 'next-auth/react'

export default function Navbar({setShowSidebar, showSidebar}) {
  const { data: session, status } = useSession()
  
  return (
    <div className='flex items-center justify-between bg-white dark:bg-slate-800
    text-slate-50 h-16 px-8 right-0 py-8 fixed top-0 w-full z-20 sm:pr-[20rem] rtl'>
      {/* <Link href="/dashboard" className=""> الشعار
      </Link> */}
      {/* الأيقونات */}
      <span role="button" onClick={() => setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500" >
        <AlignJustify />
      </span>
      {/* الأيقونات الأخرى */}
      <div className="flex space-x-3">
        <ThemeSwitcherBtn />
        <DropdownMenu>
          <DropdownMenuTrigger> 
            <span role="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
              <Bell className='text-lime-700 dark:text-lime-500'/>
              <span className="sr-only">الإشعارات</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image src='/profile.JPG' alt='صورة المستخدم' width={200} height={200} className='w-8 h-8 rounded-full' />
                <div className="flex flex-col space-y-1">
                  <p>نفاد مخزون الذرة الصفراء،</p>
                  <div className="flex items-center space-x-2 ">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">نفاد المخزون</p>
                    <p>12 ديسمبر 2021 - 12:40 مساءً</p>
                  </div>
                </div>
                <span role="button" className="cursor-pointer">
      <X />
    </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image src='/profile.JPG' alt='صورة المستخدم' width={200} height={200} className='w-8 h-8 rounded-full' />
                <div className="flex flex-col space-y-1">
                  <p>نفاد مخزون الذرة الصفراء،</p>
                  <div className="flex items-center space-x-2 ">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">نفاد المخزون</p>
                    <p>12 ديسمبر 2021 - 12:40 مساءً</p>
                  </div>
                </div>
                <span role="button" className="cursor-pointer">
      <X />
    </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        
        {status === "authenticated" && <UserAvatar user={session?.user} />}
      </div>
    </div>
  )
}
