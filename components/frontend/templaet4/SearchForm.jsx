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




// "use client";

// import { DoorOpen, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function SearchForm() {
//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   function handleSearch(data) {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
//     reset();
//     router.push(`/search?search=${searchTerm}`);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(handleSearch)}
//       className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
//     >
//       {/* أيقونة البحث */}
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5  text-gray-500 " />
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//         </div>
//         <input
//           {...register("searchTerm")}
//           type="text"
//           id="search"
//           className="border bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] border-gray-300 bg-gray-50 text-black font-semibold shadow-md rounded-full 
//           divide-gray-200 text-gray-900 text-sm focus:ring-lime-600 focus:border-lime-600 block 
//           w-full ps-12 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
//           dark:text-white dark:focus:ring-blue-500  text-lime-600 dark:focus:border-blue-500"
//           placeholder="Search for products, categories, or markets..."
//           required
//           aria-label="Search input"
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0  end-0 flex items-center pe-6  text-lime-600 hover:text-lime-600 
//         dark:text-gray-400 dark:hover:text-blue-500"
//         aria-label="Submit search"
//       >
//         <Search className="w-6 h-6    hover:text-lime-800" />
//       </button>
//     </form>
//   );
// }
// "use client";

// import { DoorOpen, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function SearchForm() {
//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   function handleSearch(data) {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
//     reset();
//     router.push(`/search?search=${searchTerm}`);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(handleSearch)}
//       className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
//     >
//       {/* أيقونة البحث */}
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5  text-gray-900" />
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//         </div>
//         <input
//           {...register("searchTerm")}
//           type="text"
//           id="search"
//           className="bg-transparent border border-gray-500 text-gray-900 dark:text-white font-semibold shadow-md rounded-full 
//           text-sm focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 
//           placeholder-gray-500 dark:placeholder-gray-400"
//           placeholder="Search for products, categories, or markets..."
//           required
//           aria-label="Search input"
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0 end-0 flex items-center pe-6  text-gray-900 hover:text-lime-700 
//         dark:text-gray-400 dark:hover:text-blue-500"
//         aria-label="Submit search"
//       >
//         <Search className="w-6 h-6 hover:text-lime-800" />
//       </button>
//     </form>
//   );
// }
// "use client";

// import { DoorOpen, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function SearchForm({ customization = {}}) {
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true;
//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   function handleSearch(data) {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
//     reset();
//     router.push(`/search?search=${searchTerm}`);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(handleSearch)}
//       className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
//       role="search"
//     >
//       {/* أيقونة البحث */}
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5 text-gray-900 dark:text-gray-300" />
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//         </div>
//         <input
//           {...register("searchTerm", { required: true })}
//           type="text"
//           id="search"
//           className="bg-transparent border border-gray-500 text-gray-900 dark:text-white font-semibold shadow-md rounded-full 
//           text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 
//           placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
//           placeholder="Search for products, categories, or markets..."
//           required
//           aria-label="Search input"
//           aria-describedby="search-error"
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0 end-0 flex items-center pe-6 text-gray-900 hover:text-lime-700 
//         dark:text-gray-400 dark:hover:text-blue-500 transition-all duration-200 ease-in-out"
//         aria-label="Submit search"
//       >
//         <Search className="w-6 h-6 hover:text-lime-800" />
//       </button>

//       {/* رسالة الخطأ */}
//       <span id="search-error" className="sr-only" aria-live="polite">
//         Please enter a search term.
//       </span>
//     </form>
//   );
// }



"use client";

import { DoorOpen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm({ customization = {} }) {
  const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization.isActive ?? true;
  
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  function handleSearch(data) {
    const { searchTerm } = data;
    if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
    reset();
    router.push(`/search?search=${searchTerm}`);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
      role="search"
    >
      {/* أيقونة البحث */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
          <label htmlFor="search" className="sr-only">
            Search
          </label>
        </div>
        <input
          {...register("searchTerm", { required: true })}
          type="text"
          id="search"
          className="bg-transparent border text-gray-900 dark:text-white font-semibold shadow-md rounded-full 
          text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 
          placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
          placeholder="Search for products, categories, or markets..."
          required
          disabled={!isActive}
          aria-label="Search input"
          aria-describedby="search-error"
          style={{
            color: backgroundColor,
            fontFamily,
            borderColor: backgroundColor, // تخصيص لون الحدود
            borderWidth: "1px", // التأكد من وجود الحد
            borderStyle: "solid", // تحديد شكل الحد
          }}
        />
      </div>

      {/* زر البحث */}
      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-6"
        aria-label="Submit search"
        style={{
          color: primaryColor,
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Search className="w-6 h-6" style={{ color: primaryColor }} />
      </button>

      {/* رسالة الخطأ */}
      <span id="search-error" className="sr-only" aria-live="polite">
        Please enter a search term.
      </span>
    </form>
  );
}
