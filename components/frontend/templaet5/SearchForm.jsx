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

// import { DoorOpen, Search, Mic } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Fuse from "fuse.js"; // مكتبة التصحيح التلقائي

// export default function SearchForm({ customization = {}, products = [], slugDomain = "" }) {
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true;

//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isListening, setIsListening] = useState(false);

//   // إعداد Fuse.js للبحث التلقائي
//   const fuse = new Fuse(products, {
//     keys: ['name'], // يمكن تخصيص هذه المفتاح حسب البيانات (مثل 'name' أو 'title')
//     includeScore: true,
//     threshold: 0.3, // تخصيص مستوى التصحيح التلقائي
//   });

//   const handleSearch = (data) => {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
//     reset();
//     router.push(`/search?search=${searchTerm}&slug=${slugDomain}`);
//   };

//   // إضافة تصحيح تلقائي أو اقتراحات أثناء الكتابة
//   const fetchSuggestions = (query) => {
//     if (query.trim() === "") {
//       setSuggestions([]);
//       return;
//     }
//     const results = fuse.search(query);
//     setSuggestions(results.map(result => result.item.name)); // افترض أن المنتجات تحتوي على مفتاح 'name'
//   };

//   // وظيفة البحث الصوتي
//   const handleVoiceSearch = () => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US';

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.onresult = (event) => {
//       const spokenText = event.results[0][0].transcript;
//       setQuery(spokenText);
//       fetchSuggestions(spokenText);
//     };

//     recognition.start();
//   };

//   useEffect(() => {
//     if (query.trim()) {
//       fetchSuggestions(query);
//     }
//   }, [query]);

//   return (
//     <form onSubmit={handleSubmit(handleSearch)} className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4" role="search">
//       {/* أيقونة البحث */}
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
//           <label htmlFor="search" className="sr-only">Search</label>
//         </div>
//         <input
//           {...register("searchTerm", { required: true })}
//           type="text"
//           id="search"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             fetchSuggestions(e.target.value);
//           }}
//           className="bg-transparent border text-gray-900 dark:text-white font-semibold shadow-md rounded-full text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
//           placeholder="Search for products, categories, or markets..."
//           required
//           disabled={!isActive}
//           aria-label="Search input"
//           aria-describedby="search-error"
//           style={{
//             color: backgroundColor,
//             fontFamily,
//             borderColor: backgroundColor,
//             borderWidth: "1px",
//             borderStyle: "solid",
//           }}
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0 end-0 flex items-center pe-6"
//         aria-label="Submit search"
//         style={{
//           color: primaryColor,
//           transition: "all 0.2s ease-in-out",
//         }}
//       >
//         <Search className="w-6 h-6" style={{ color: primaryColor }} />
//       </button>

//       {/* زر البحث الصوتي */}
//       <button
//         type="button"
//         className="absolute inset-y-0 end-0 flex items-center pe-12"
//         aria-label="Voice search"
//         onClick={handleVoiceSearch}
//         disabled={!isActive}
//       >
//         <Mic className="w-6 h-6" style={{ color: isListening ? accentColor : primaryColor }} />
//       </button>

//       {/* عرض الاقتراحات */}
//       {suggestions.length > 0 && (
//         <div className="absolute w-full bg-white border border-gray-300 rounded-b-lg mt-2 z-10">
//           {suggestions.map((suggestion, index) => (
//             <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
//               {suggestion}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* رسالة الخطأ */}
//       <span id="search-error" className="sr-only" aria-live="polite">
//         Please enter a search term.
//       </span>
//     </form>
//   );
// }

"use client";

import { DoorOpen, Search, Mic } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Fuse from "fuse.js"; // مكتبة التصحيح التلقائي

export default function SearchForm({ customization = {}, products = [], slugDomain = "" }) {
  const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization.isActive ?? true;

  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isListening, setIsListening] = useState(false);

  // إعداد Fuse.js للبحث التلقائي
  const fuse = new Fuse(products, {
    keys: ['name'], // يمكن تخصيص هذه المفتاح حسب البيانات (مثل 'name' أو 'title')
    includeScore: true,
    threshold: 0.3, // تخصيص مستوى التصحيح التلقائي
  });

  const handleSearch = (data) => {
    const { searchTerm } = data;
    if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
    reset();
    router.push(`/search?search=${searchTerm}&slug=${slugDomain}`);
  };

  // إضافة تصحيح تلقائي أو اقتراحات أثناء الكتابة
  const fetchSuggestions = (query) => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const results = fuse.search(query);
    setSuggestions(results.map(result => result.item.name)); // افترض أن المنتجات تحتوي على مفتاح 'name'
  };

  // وظيفة البحث الصوتي
  const handleVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setQuery(spokenText);
      fetchSuggestions(spokenText);
    };

    recognition.start();
  };

  useEffect(() => {
    if (query.trim()) {
      fetchSuggestions(query);
    }
  }, [query]);

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4" role="search">
      {/* أيقونة البحث */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
          <label htmlFor="search" className="sr-only">Search</label>
        </div>
        <input
          {...register("searchTerm", { required: true })}
          type="text"
          id="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            fetchSuggestions(e.target.value);
          }}
          className="bg-transparent text-gray-900 dark:text-white font-semibold shadow-md rounded-full text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
          placeholder="Search for products, categories, or markets..."
          required
          disabled={!isActive}
          aria-label="Search input"
          aria-describedby="search-error"
          style={{
            color: secondaryColor,
            fontFamily,
            backgroundColor,
            borderColor: primaryColor,
            borderWidth: "1px",
            borderStyle: "solid",
            boxShadow: `0 0 0 2px ${accentColor}33`,
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
        }}
      >
        <Search className="w-6 h-6" style={{ color: primaryColor }} />
      </button>

      {/* زر البحث الصوتي */}
      <button
        type="button"
        className="absolute inset-y-0 end-0 flex items-center pe-12"
        aria-label="Voice search"
        onClick={handleVoiceSearch}
        disabled={!isActive}
      >
        <Mic className="w-6 h-6" style={{ color: isListening ? accentColor : primaryColor }} />
      </button>

      {/* عرض الاقتراحات */}
      {suggestions.length > 0 && (
        <div
          className="absolute w-full rounded-b-lg mt-2 z-10"
          style={{
            backgroundColor,
            border: `1px solid ${primaryColor}`,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer"
              style={{
                color: secondaryColor,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {/* رسالة الخطأ */}
      <span id="search-error" className="sr-only" aria-live="polite">
        Please enter a search term.
      </span>
    </form>
  );
}


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



// "use client";

// import { DoorOpen, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function SearchForm({ customization = {} }) {
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
//           <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//         </div>
//         <input
//           {...register("searchTerm", { required: true })}
//           type="text"
//           id="search"
//           className="bg-transparent border text-gray-900 dark:text-white font-semibold shadow-md rounded-full 
//           text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 
//           placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
//           placeholder="Search for products, categories, or markets..."
//           required
//           disabled={!isActive}
//           aria-label="Search input"
//           aria-describedby="search-error"
//           style={{
//             color: backgroundColor,
//             fontFamily,
//             borderColor: backgroundColor, // تخصيص لون الحدود
//             borderWidth: "1px", // التأكد من وجود الحد
//             borderStyle: "solid", // تحديد شكل الحد
//           }}
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0 end-0 flex items-center pe-6"
//         aria-label="Submit search"
//         style={{
//           color: primaryColor,
//           transition: "all 0.2s ease-in-out",
//         }}
//       >
//         <Search className="w-6 h-6" style={{ color: primaryColor }} />
//       </button>

//       {/* رسالة الخطأ */}
//       <span id="search-error" className="sr-only" aria-live="polite">
//         Please enter a search term.
//       </span>
//     </form>
//   );
// }
// "use client";

// import { DoorOpen, Search } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function SearchForm({ customization = {} }) {
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true;

//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleSearch = (data) => {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return; // منع البحث إذا كان الحقل فارغًا
//     reset();
//     router.push(`/search?search=${searchTerm}`);
//   };

//   // إضافة تصحيح تلقائي أو اقتراحات أثناء الكتابة
//   const fetchSuggestions = (query) => {
//     if (query.trim() === "") {
//       setSuggestions([]);
//       return;
//     }
//     // هنا يمكنك استبدال هذه الوظيفة بطلب API لإحضار اقتراحات
//     const mockSuggestions = ["Product 1", "Product 2", "Product 3"].filter((product) =>
//       product.toLowerCase().includes(query.toLowerCase())
//     );
//     setSuggestions(mockSuggestions);
//   };

//   return (
//     <form onSubmit={handleSubmit(handleSearch)} className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4" role="search">
//       {/* أيقونة البحث */}
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
//           <label htmlFor="search" className="sr-only">Search</label>
//         </div>
//         <input
//           {...register("searchTerm", { required: true })}
//           type="text"
//           id="search"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             fetchSuggestions(e.target.value);
//           }}
//           className="bg-transparent border text-gray-900 dark:text-white font-semibold shadow-md rounded-full text-sm focus:ring-2 focus:ring-lime-600 focus:border-lime-600 block w-full ps-12 py-2.5 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-in-out"
//           placeholder="Search for products, categories, or markets..."
//           required
//           disabled={!isActive}
//           aria-label="Search input"
//           aria-describedby="search-error"
//           style={{
//             color: backgroundColor,
//             fontFamily,
//             borderColor: backgroundColor,
//             borderWidth: "1px",
//             borderStyle: "solid",
//           }}
//         />
//       </div>

//       {/* زر البحث */}
//       <button
//         type="submit"
//         className="absolute inset-y-0 end-0 flex items-center pe-6"
//         aria-label="Submit search"
//         style={{
//           color: primaryColor,
//           transition: "all 0.2s ease-in-out",
//         }}
//       >
//         <Search className="w-6 h-6" style={{ color: primaryColor }} />
//       </button>

//       {/* عرض الاقتراحات */}
//       {suggestions.length > 0 && (
//         <div className="absolute w-full bg-white border border-gray-300 rounded-b-lg mt-2 z-10">
//           {suggestions.map((suggestion, index) => (
//             <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
//               {suggestion}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* رسالة الخطأ */}
//       <span id="search-error" className="sr-only" aria-live="polite">
//         Please enter a search term.
//       </span>
//     </form>
//   );
// }

// "use client";

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { DoorOpen, Search } from "lucide-react";

// export default function SearchForm({ customization = {} }) {
//   const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization?.isActive ?? true;

//   const { register, handleSubmit, reset } = useForm();
//   const router = useRouter();

//   function handleSearch(data) {
//     const { searchTerm } = data;
//     if (!searchTerm.trim()) return;
//     reset();
//     router.push(`/search?search=${searchTerm}`);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(handleSearch)}
//       className="relative w-full max-w-3xl mx-auto lg:max-w-5xl px-4"
//       role="search"
//       dir="rtl"
//       style={{ fontFamily }}
//     >
//       <div className="relative w-full">
//         {/* أيقونة الباب */}
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <DoorOpen className="w-5 h-5" style={{ color: primaryColor }} />
//           <label htmlFor="search" className="sr-only">
//             Search
//           </label>
//         </div>

//         {/* حقل البحث */}
//         <input
//           {...register("searchTerm", { required: true })}
//           type="text"
//           id="search"
//           className="bg-gray-50 dark:bg-gray-800 border rounded-full text-sm block w-full ps-12 py-2.5 
//           text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
//           focus:ring-2 focus:ring-lime-600 focus:border-lime-600 transition-all shadow-sm"
//           placeholder="ابحث عن منتجات أو أقسام أو متاجر..."
//           required
//           disabled={!isActive}
//           aria-label="Search input"
//           aria-describedby="search-error"
//           style={{
//             borderColor: backgroundColor,
//             fontFamily,
//           }}
//         />

//         {/* زر البحث */}
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-6"
//           aria-label="Submit search"
//           style={{
//             color: primaryColor,
//             transition: "all 0.2s ease-in-out",
//           }}
//         >
//           <Search className="w-6 h-6" style={{ color: primaryColor }} />
//         </button>
//       </div>

//       {/* رسالة الخطأ (مخفية للشاشات المساعدة) */}
//       <span id="search-error" className="sr-only" aria-live="polite">
//         الرجاء إدخال كلمة للبحث.
//       </span>
//     </form>
//   );
// }
