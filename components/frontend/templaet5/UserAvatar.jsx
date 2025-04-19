






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
import { LayoutDashboard, LogOut, Settings, User2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

export default function UserAvatar({ user = {}, customization = {}, slugDomain }) {
  const { firstName, image } = user;
  const role = user?.role;
  const router = useRouter();
  const primaryColor = customization?.primaryColor || "#4CAF50"; 
  const secondaryColor = customization?.secondaryColor || "#2C3E50"; 
  const accentColor = customization?.accentColor || "#FFC107"; 
  const lightBackground = customization?.backgroundColor || "#FFFFFF"; 
  const darkBackground = customization?.darkBackground || "#1E293B"; 
  const fontFamily = customization?.fontFamily || "sans-serif"; 

  // Correct placement of useTheme() hook
  const { theme } = useTheme();

  async function handleLogout() {
  //   await signOut();
  //   document.cookie = "customer_token=; max-age=0; path=/";  // هذا يقوم بحذف الكوكيز

  //   console.log('userrrrrrrrrrrrrr', user)
  // // إعادة التوجيه إلى الصفحة الرئيسية أو صفحة تسجيل الدخول بعد تسجيل الخروج
  await fetch("/api/customerAuth/logout", { method: "POST" });

  // 2) إذا كنت تستخدم next-auth أيضاً:
  await signOut({ redirect: false });
    router.push(`/${slugDomain}`);
  }

  return (
    <div
      className="text-[#000] font-bold dark:text-gray-300 font-[sans-serif] w-max mx-auto"
      
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            type="button"
            className="px-4 py-2 flex items-center rounded-full text-[#000] text-sm border border-gray-300 outline-none hover:bg-gray-100"
          >
            {image ? (
              <Image
                src={image}
                alt="User profile"
                width={200}
                height={200}
                className="w-7 h-7 mr-3 rounded-full shrink-0"
              />
            ) : (
              <Image
                src="/images/kkk.jpg"
                alt="Default profile"
                width={200}
                height={200}
                className="w-7 h-7 mr-3 rounded-full shrink-0"
              />
            )}
            {firstName || "John Doe"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-400 inline ml-3"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
          <DropdownMenuLabel>{firstName || "John Doe"}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 mr-3" />
              Dashboard
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              href={`/${slugDomain}/profile`}
              className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
            >
              <Settings className="w-4 h-4 mr-3" />
              حسابي
            </Link>
          </DropdownMenuItem>

          {role === "USER" && (
            <DropdownMenuItem>
              <Link
                href={`/${slugDomain}/orders`}
                className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
              >
                <Settings className="w-4 h-4 mr-3" />
                طلباتي
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem>
            <button
              onClick={handleLogout}
              className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
            >
              <LogOut className="w-4 h-4 mr-3" />
              تسجيل الخروج
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
