// "use client";
// import React from 'react'
// import SearchForm from '../SearchForm'
// import HelpModal  from '../HelpModal'
// import CartCount from '../CartCount'
// import Image from 'next/image'
// import Link from 'next/link'
// import logo from '../../../public/logo.png'
// import ThemeSwitcherBtn from '../../../components/ThemeSwitcherBtn'
// import { HelpCircle, ShoppingCart, User } from 'lucide-react'
// import { useSession } from "next-auth/react"
// import UserAvatar from "../../backoffice/UserAvatar"

// export default function Navbar() {
//   const { data: session, status} = useSession();
//   if(status === "loading"){
//     return <p>Loading... </p>
//   }
// console.log('Fetched user data:',session?.user)
//   return (
//     <div className='bg-gray-50 dark:bg-slate-900'>
//       <div className='flex items-center justify-between 
//       max-w-6xl mx-auto px-8 gap-8'>
//       {/* Logo */}
//       <Link className="" href="/">
//         <Image src={logo} alt="limifood logo" className="w-24"/>
//       </Link>
//       {/*Search*/}
//       <div className="flex-grow ">
//       <SearchForm/>
//       </div>
//       <div className="flex gap-8">
//        {
//        status === "unauthenticated"?(
//         <Link href="/login" className='flex items-center space-x-1 
//         text-green-950 dark:text-slate-100'>
//           <User/>
//           <span>Login</span>
//         </Link>
//        ):(
//       <UserAvatar user={session?.user} />
//        )}
//         <HelpModal />
//         <CartCount/>
//       </div>
//       <ThemeSwitcherBtn/>
//       </div>
//     </div>
//   )
// }
"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm";
import HelpModalstore from "./HelpModal-store";
import CartCount from "../CartCount";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import UserAvatar from "../../backoffice/UserAvatar";
import { getData } from "../../../lib/getData";

export default function Navbarstore({ slugDomain }) {
  const { data: session, status } = useSession();
  const [store, setStore] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchStore() {
      if (slugDomain) {
        const storeData = await getData(`stores/store/${slugDomain}`);
        setStore(storeData);
        if (storeData?.categories) {
          setCategories(storeData.categories);
        }
      }
    }
    fetchStore();
  }, [slugDomain]);

  if (status === "loading") {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <header className="navbar fixed top-0 left-0 w-full z-50  dark:bg-slate-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src={store?.profileImageUrl || "/default-logo.png"}
              alt="Store logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">
              {store?.businessName || "اسم المتجر"}
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center  rounded-full px-4 gap-4 w-full max-w-2xl">
          {/* Search */}
          <div className="flex-grow">
            <SearchForm />
          </div>

          {/* User and Actions */}
          <div className="flex items-center gap-4">
            {status === "unauthenticated" ? (
              <Link
                href="/login"
                className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
              >
                <User className="w-5 h-5 mr-1" />
                <span>Login</span>
              </Link>
            ) : (
              <UserAvatar user={session?.user} />
            )}
            <HelpModalstore />
            <CartCount />
            <ThemeSwitcherBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
