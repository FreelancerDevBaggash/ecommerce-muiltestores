"use client"
import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import HelpModal from './HelpModal';
import CartCount from './CartCount';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';
import { HelpCircle, ShoppingCart, User } from 'lucide-react';
import { useSession } from "next-auth/react";
import UserAvatar from "../backoffice/UserAvatar";
import { getData } from '../../lib/getData'; // Assuming getData is imported correctly

export default function Navbar({ slugDomain }) {
  const { data: session, status } = useSession();
  const [store, setStore] = useState(null);

  useEffect(() => {
    async function fetchStore() {
      if (slugDomain) {
        const storeData = await getData(`stores/store/${slugDomain}`);
        setStore(storeData);
      }
    }
    fetchStore();
  }, [slugDomain]);

  if (status === "loading") {
    return <p>Loading... </p>
  }

  return (
    <div className='bg-gray-50 dark:bg-slate-900'>
      <div className='flex items-center justify-between max-w-6xl mx-auto px-8 gap-8'>
        {/* Logo */}
    <div className="flex items-center space-x-4">
  {/* عرض الشعار */}
  {/* عرض الشعار داخل إطار دائري */}
  <div className="relative w-24 h-24 rounded-full border-4 border-indigo-500 overflow-hidden">
        <Image 
          src={store?.profileImageUrl } // استخدم الصورة الخاصة بالمتجر أو صورة افتراضية
          alt="Store logo" 
          layout="fill" 
          objectFit="cover" // يغطي الإطار بشكل جيد
        />
      </div>


  {/* اسم المتجر */}
  <div>
    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
      {store?.businessNameEn }
    </h1>
  </div>
</div>

        {/* Search */}
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-8">
          {status === "unauthenticated" ? (
            <Link 
            //href="/login"
            href={`/${slugDomain}/loginCustomer`} 
            // href={{
            //   pathname: '/login',
            //   query: { slugDomain }, // تمرير slugDomain كجزء من query
            // }} 
            className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
              <User />
              <span>Login</span>
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}
          <HelpModal />
          <CartCount  />
        </div>
        <ThemeSwitcherBtn />
      </div>
    </div>
  )
}


// "use client"
// import React from 'react'
// import SearchForm from './SearchForm'
// import HelpModal  from './HelpModal'
// import CartCount from './CartCount'
// import Image from 'next/image'
// import Link from 'next/link'
// import logo from '../../public/logo.png'
// import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
// import { HelpCircle, ShoppingCart, User } from 'lucide-react'
// import { useSession } from "next-auth/react"
// import UserAvatar from "../backoffice/UserAvatar"

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
