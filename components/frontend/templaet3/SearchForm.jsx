// "use client"
// import { DoorOpen, Search } from 'lucide-react'
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import { useForm } from "react-hook-form";
// export default function SearchForm() {
//   const {register, handleSubmit, reset} = useForm();
//   const router = useRouter();

//   function handleSearch(data){
//     const { searchTerm } = data;
//     console.log(searchTerm)
//     reset()
//     router.push(`/search?search=${searchTerm}`)
//   }
//   return (
 
// <form  onSubmit={handleSubmit(handleSearch)} className="flex items-center max-w-lg mx-auto">   
//     <label htmlFor="voice-search" className="sr-only">
//          Search
//          </label>
//     <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
//         </div>
//         <input
//         {...register("searchTerm")}
//         type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Prodects, Categories, Markets..." required />
 
//     </div>  
//     <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <Search className='w-4 h-4 me-2'/>
//      Search
//     </button>     
// </form>

//   )
// }


"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm({ customization = {}, slugDomain }) {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  // تحديد الألوان من التخصيصات أو استخدام القيم الافتراضية
  const colors = {
    primary: customization?.primaryColor || '#3b82f6',
    text: customization?.textColor || '#111827',
    border: customization?.borderColor || '#e2e8f0',
    focus: customization?.focusColor || '#16a34a',
    hover: customization?.hoverColor || '#15803d'
  };

  function handleSearch(data) {
    const { searchTerm } = data;
    if (!searchTerm.trim()) return;
    
    // ترميز مصطلح البحث لضمان سلامة URL
    const encodedTerm = encodeURIComponent(searchTerm);
    reset();
    router.push(`${slugDomain}/search?search=${encodedTerm}`);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
      role="search"
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-500" />
          <label htmlFor="search" className="sr-only">
            ابحث عن منتجات او أقسام
          </label>
        </div>
        
        <input
          {...register("searchTerm", { required: true })}
          type="search"
          id="search"
          className={`border bg-gray-50 text-black font-medium shadow-sm rounded-full
          text-gray-900 text-sm focus:ring-2 focus:ring-offset-2 block 
          w-full ps-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 
          dark:text-white transition-all duration-200`}
          style={{
            borderColor: colors.border,
            color: colors.text,
            '--tw-ring-color': colors.focus,
            '--tw-focus-ring-offset-shadow': `0 0 0 2px ${colors.focus}33`
          }}
          placeholder="ابحث عن منتجات، أقسام أو متاجر..."
          aria-required="true"
          aria-label="حقل البحث"
        />
        
        <button
          type="submit"
          className={`absolute inset-y-0 end-0 flex items-center pe-4
          transition-colors duration-200`}
          aria-label="إرسال البحث"
          style={{
            color: colors.focus
          }}
        >
          <Search className="w-5 h-5 hover:scale-110 transition-transform" />
        </button>
      </div>
    </form>
  );
}