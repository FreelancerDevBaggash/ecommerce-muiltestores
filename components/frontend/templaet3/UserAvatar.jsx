






// "use client"
// import React from 'react'
// import Link from 'next/link';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from '@/components/ui/dropdown-menu'
// import { LayoutDashboard, LogOut, Settings, User2 } from 'lucide-react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { signOut } from 'next-auth/react'
// import { generateInitials } from "../../../lib/generateInitials"

// export default function UserAvatar({ user={} }) {
//   const {name, image} =user;
//   // const initials = generateInitials(name)
//   const role = user?.role
//     const router = useRouter()
//    async function handleLogout(){
//      await signOut()
//      router.push("/")
//     }
//   return (
//     <DropdownMenu>
//     <DropdownMenuTrigger> 
//           <button>
//        {image?  <Image src='/profile.JPG' 
//    alt='User profile' width={200} height={200} 
//     className='w-8 h-8 rounded-full' />:(
//       <div className='w-9 h-9 p-2 flex items-center justify-center
//        rounded-full   text-lime-700 dark:bg-slate-900 shadow-md border border-lime-600 '> <User2/> </div>
//     )}
//    </button>
// </DropdownMenuTrigger>
// <DropdownMenuContent className="py-2 px-4 pr-8">
// <DropdownMenuLabel>{name}</DropdownMenuLabel>
// <DropdownMenuSeparator />
// <DropdownMenuItem>
// <Link href="/dashboard" className="flex items-center space-x-2">
// <LayoutDashboard className='mr-2 h-4 w-4' />
//    <span>Dashboard</span>
// </Link>
// </DropdownMenuItem>
// <DropdownMenuItem>
// <Link href="/dashboard/profile" className="flex items-center space-x-2">
// <Settings className="mr-2 h-4 w-4"/>
//    <span>Edit Profile</span>
//    </Link>
// </DropdownMenuItem>
// {
//   role === "USER" && 
// (  <DropdownMenuItem>
// <Link href="/dashboard/orders" className="flex items-center space-x-2">
// <Settings className="mr-2 h-4 w-4"/>
//    <span>My Orders</span>
//    </Link>
// </DropdownMenuItem>)
// }
// <DropdownMenuItem>
// <button onClick={handleLogout} className="flex items-center space-x-2">
// <LogOut className="mr-2 h-4 w-4"/>
//    <span>Logout</span>
//    </button>
// </DropdownMenuItem>
// </DropdownMenuContent>
// </DropdownMenu>
//   )
// }
// "use client";
// import React from "react";
// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown, List, ChevronRight } from "lucide-react";

// export default function CategoriesDropdown({ categories = [] }) {
//   return (
//     <DropdownMenu>
//       {/* الزر الرئيسي للقائمة */}
//       <DropdownMenuTrigger>
//         <button
//           className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
//         >
//           <List className="w-5 h-5" />
//           <span>Categories</span>
//           <ChevronDown className="w-4 h-4" />
//         </button>
//       </DropdownMenuTrigger>

//       {/* محتوى القائمة */}
//       <DropdownMenuContent className="py-2 px-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
//         <DropdownMenuLabel className="text-gray-500 dark:text-gray-400">
//           Browse Categories
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />

//         {/* عرض الفئات والفئات الفرعية */}
//         {categories.map((category, index) => (
//           <div key={index} className="group relative">
//             <DropdownMenuItem>
//               <Link
//                 href={`/categories/${category.slug}`}
//                 className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400"
//               >
//                 <span>{category.name}</span>
//                 {category.subcategories?.length > 0 && (
//                   <ChevronRight className="w-4 h-4" />
//                 )}
//               </Link>
//             </DropdownMenuItem>

//             {/* الفئات الفرعية */}
//             {category.subcategories?.length > 0 && (
//               <DropdownMenuContent
//                 className="absolute top-0 left-full ml-2 py-2 px-4 bg-white dark:bg-gray-800 shadow-md rounded-md hidden group-hover:block"
//               >
//                 {category.subcategories.map((subcategory, subIndex) => (
//                   <DropdownMenuItem key={subIndex}>
//                     <Link
//                       href={`/categories/${category.slug}/${subcategory.slug}`}
//                       className="text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400"
//                     >
//                       {subcategory.name}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             )}
//           </div>
//         ))}

//         {/* رابط إضافي */}
//         <DropdownMenuItem>
//           <Link
//             href="/categories"
//             className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400"
//           >
//             <span>View All Categories</span>
//           </Link>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, Settings, ShoppingBag, User2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function UserAvatar({ user = {}, customization = {}, slugDomain }) {
  const { name, image, email } = user;
  const role = user?.role;
  const router = useRouter();
  const { theme } = useTheme();

  // نظام الألوان مع دعم التخصيص والوضع المظلم
  const colors = {
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: theme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#ffffff',
    border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.borderColor || '#e2e8f0',
    hover: theme === 'dark' ? customization?.darkHoverColor || '#334155' : customization?.hoverColor || '#f1f5f9'
  };

  async function handleLogout() {
    await signOut();
    router.push(`/${slugDomain}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-max mx-auto"
      style={{ fontFamily: customization?.fontFamily || 'sans-serif' }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 flex items-center rounded-full text-sm border outline-none transition-all"
            style={{
              color: colors.text,
              borderColor: colors.border,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: colors.hover
              }
            }}
            aria-label="قائمة المستخدم"
          >
            {image ? (
              <Image
                src={image}
                alt={`صورة ${name || 'المستخدم'}`}
                width={32}
                height={32}
                className="w-8 h-8 mr-3 rounded-full shrink-0 object-cover"
              />
            ) : (
              <div 
                className="w-8 h-8 mr-3 rounded-full shrink-0 flex items-center justify-center"
                style={{ backgroundColor: colors.primary, color: '#fff' }}
              >
                <User2 className="w-4 h-4" />
              </div>
            )}
            <span className="truncate max-w-[120px]">{name || "مستخدم"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 ml-3 transition-transform"
              viewBox="0 0 24 24"
              style={{ fill: colors.text }}
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </DropdownMenuTrigger>

        <DropdownMenuContent 
          className="shadow-lg py-2 z-[1000] w-56 rounded-lg overflow-hidden"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.border
          }}
          align="end"
        >
          <DropdownMenuLabel className="px-4 py-2">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium truncate">{name || "مستخدم"}</p>
              {email && (
                <p className="text-xs truncate text-gray-500 dark:text-gray-400">
                  {email}
                </p>
              )}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator style={{ backgroundColor: colors.border }} />

          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link href="/dashboard" className="flex items-center w-full">
              <LayoutDashboard className="w-4 h-4 mr-3" style={{ color: colors.primary }} />
              <span>لوحة التحكم</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link href="/dashboard/profile" className="flex items-center w-full">
              <Settings className="w-4 h-4 mr-3" style={{ color: colors.primary }} />
              <span>تعديل الملف الشخصي</span>
            </Link>
          </DropdownMenuItem>

          {role === "USER" && (
            <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/dashboard/orders" className="flex items-center w-full">
                <ShoppingBag className="w-4 h-4 mr-3" style={{ color: colors.primary }} />
                <span>طلباتي</span>
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuSeparator style={{ backgroundColor: colors.border }} />

          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left"
            >
              <LogOut className="w-4 h-4 mr-3" style={{ color: colors.accent }} />
              <span>تسجيل الخروج</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}