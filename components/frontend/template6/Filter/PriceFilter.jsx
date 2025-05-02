// // import Link from 'next/link';
// // import { useSearchParams } from 'next/navigation';
// // import React from 'react'
// // import { useRouter } from "next/navigation";
// // import { useForm } from 'react-hook-form';
// // import { Circle } from 'lucide-react';

// // export default function PriceFilter({slug , isSearch}) {
// // const searchParams = useSearchParams();
// // const minParam = searchParams.get("min");
// // const maxParam = searchParams.get("max");
// // console.log(minParam, maxParam);

// // const priceRanges =[{
// // display:"under 300",
// // max:"300"
// //     },{
// //         display:"Between 300 and 500",
// // max:"500",
// // min:"300"        
// //     },
// //     {
// //         display:"Between 500 and 700",
// // max:"700",
// // min:"500"        
// //     },
// //     {
// //         display:"Above 700",
// // min:"700"        
// //     },];
// //  const router = useRouter();
// //  const {handleSubmit, reset, register} = useForm();
// //  function onSubmit(data){
// //     const { min, max } = data;
// //     // min = parseInt(data.min);
// //     // max = parseInt(data.max);
// //     console.log(min, max);
// //     if(min && max){
// //         router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`);
// //         reset();
// //     }else if(min){
// //         router.push(`/category/${slug}?sort=asc&min=${min}`);
// //         reset();
// //     }else if(max){
// //         router.push(`/category/${slug}?sort=asc&max=${max}`);
// //         reset();
// //     }
// //  }
// //     return (
// //         <div>
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-xl font-medium" >Price</h2>
// //                 <Link
// //                 className='text-white bg-lime-700 hover:bg-lime-800
// //                 focus:ring-4 focus:ring-lime-300 font-medium 
// //                 rounded-lg text-sm px-5 py-2.5 me-2 mb-2
// //                 dark:bg-lime-600 dark:hover:bg-lime-700
// //                 focus:outline-none dark:focus:ring-lime-800 '
// //                 href={`/category/${slug}?sort=asc`}>Reset Filters</Link>
// //               </div>

// //                 {/*Filters */}
// //                  <div className="flex flex-col gap-3">
// //                  {
// //                     priceRanges.map((range, i) => {
// //                         return(
// //                             <Link 
// //                             key={i}
// //                              href={range.max && range.min 
// //                             ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}` 
// //                             : range.max ? `/category/${slug}?sort=asc&max=${range.max}`
// //                             :`/category/${slug}?sort=asc&min=${range.min}` 
// //                         } 
// //                              className={`${
// //                                 (range.min && range.min == minParam) ||
// //                                 (range.max && range.max == maxParam) ||
// //                                 (range.min &&
// //                                     range.max && 
// //                                     range.min == minParam &&
// //                                     range.max == maxParam)
// //                                     ? "flex gap-2 items-center text-lime-500"
// //                                     : "flex gap-2 items-center"
// //                             }`}    
// //                             >
// //                                 <Circle className='w-4 h-4 flex-shrink-0' />
// //                             {range.display}
// //                             </Link>
// //                         )
// //                     })
// //                 }
// //                  </div>
// //                  <form 
// //                  onSubmit={handleSubmit(onSubmit)}
// //                  className='grid grid-cols-3 gap-4 my-4'
// //                  >
// //                     <div className='col-span-1'>
// //                         <input 
// //                         {...register("min")}
// //                         type='number'
// //                         id="cvv-input"
// //                         aria-describedby='helper-text-explanation'
// //                         className='bg-gray-50 border border-gray-300
// //                         text-gray-900 text-sm rounded-lg focus:ring-lime-500
// //                         focus:border-lime-500 block w-full p-2.5
// //                         dark:bg-gray-700 dark:border-gray-600
// //                         dark:placeholder-gray-400 dark:text-white
// //                         dark:focus:ring-lime-500 dark:focus:border-lime-500 '
// //                         placeholder='min'
// //                         />
// //                     </div>

// //                     <div className='col-span-1'>
// //                         <input 
// //                         {...register("max")}
// //                         type='number'
// //                         id="cvv-input"
// //                         aria-describedby='helper-text-explanation'
// //                         className='bg-gray-50 border border-gray-300
// //                         text-gray-900 text-sm rounded-lg focus:ring-lime-500
// //                         focus:border-lime-500 block w-full p-2.5
// //                         dark:bg-gray-700 dark:border-gray-600
// //                         dark:placeholder-gray-400 dark:text-white
// //                         dark:focus:ring-lime-500 dark:focus:border-lime-500 '
// //                         placeholder='Max'
// //                         />
// //                     </div>

// //                     <div className='col-span-1'>
// //                         <button 
// //                         type='submit'
// //                         className='text-white bg-lime-700 border hover:bg-lime-800
// //                         focus:ring-4 focus:ring-lime-300 font-medium
// //                         rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
// //                         dark:bg-lime-600 dark:hover:bg-lime-700
// //                         focus:outline-none dark:focus:ring-lime-800'
// //                         >
// //                             Go
// //                             </button>
// //                     </div>

// //                  </form>
              
// //             </div>
       
// //     );
// // }

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import React from 'react'
// import { useRouter } from "next/navigation";
// import { useForm } from 'react-hook-form';
// import { Circle } from 'lucide-react';

// export default function PriceFilter({ slug, isSearch }) {
//   const searchParams = useSearchParams();
//   const minParam = searchParams.get("min");
//   const maxParam = searchParams.get("max");

//   const priceRanges = [
//     { display: "أقل من 300", max: "300" },
//     { display: "من 300 إلى 500", max: "500", min: "300" },
//     { display: "من 500 إلى 700", max: "700", min: "500" },
//     { display: "أعلى من 700", min: "700" },
//   ];

//   const router = useRouter();
//   const { handleSubmit, reset, register } = useForm();

//   function onSubmit(data) {
//     const { min, max } = data;
//     if (min && max) {
//       router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`);
//     } else if (min) {
//       router.push(`/category/${slug}?sort=asc&min=${min}`);
//     } else if (max) {
//       router.push(`/category/${slug}?sort=asc&max=${max}`);
//     }
//     reset();
//   }

//   return (
//     <div dir="rtl">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-medium">السعر</h2>
//         <Link
//           className='text-white bg-lime-700 hover:bg-lime-800
//           focus:ring-4 focus:ring-lime-300 font-medium 
//           rounded-lg text-sm px-5 py-2.5 ms-2 mb-2
//           dark:bg-lime-600 dark:hover:bg-lime-700
//           focus:outline-none dark:focus:ring-lime-800'
//           href={`/category/${slug}?sort=asc`}
//         >
//           إعادة التصفية
//         </Link>
//       </div>

//       {/* خيارات السعر */}
//       <div className="flex flex-col gap-3">
//         {priceRanges.map((range, i) => {
//           const isActive =
//             (range.min && range.min == minParam) ||
//             (range.max && range.max == maxParam) ||
//             (range.min && range.max && range.min == minParam && range.max == maxParam);

//           return (
//             <Link
//               key={i}
//               href={
//                 range.max && range.min
//                   ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}`
//                   : range.max
//                   ? `/category/${slug}?sort=asc&max=${range.max}`
//                   : `/category/${slug}?sort=asc&min=${range.min}`
//               }
//               className={`${isActive
//                 ? "flex gap-2 items-center text-lime-500"
//                 : "flex gap-2 items-center"
//                 }`}
//             >
//               <Circle className="w-4 h-4 flex-shrink-0" />
//               {range.display}
//             </Link>
//           );
//         })}
//       </div>

//       {/* الإدخال اليدوي */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid grid-cols-3 gap-4 my-4"
//       >
//         <div className="col-span-1">
//           <input
//             {...register("min")}
//             type="number"
//             className="bg-gray-50 border border-gray-300
//               text-gray-900 text-sm rounded-lg focus:ring-lime-500
//               focus:border-lime-500 block w-full p-2.5
//               dark:bg-gray-700 dark:border-gray-600
//               dark:placeholder-gray-400 dark:text-white
//               dark:focus:ring-lime-500 dark:focus:border-lime-500"
//             placeholder="الأدنى"
//           />
//         </div>

//         <div className="col-span-1">
//           <input
//             {...register("max")}
//             type="number"
//             className="bg-gray-50 border border-gray-300
//               text-gray-900 text-sm rounded-lg focus:ring-lime-500
//               focus:border-lime-500 block w-full p-2.5
//               dark:bg-gray-700 dark:border-gray-600
//               dark:placeholder-gray-400 dark:text-white
//               dark:focus:ring-lime-500 dark:focus:border-lime-500"
//             placeholder="الأعلى"
//           />
//         </div>

//         <div className="col-span-1">
//           <button
//             type="submit"
//             className="text-white bg-lime-700 border hover:bg-lime-800
//               focus:ring-4 focus:ring-lime-300 font-medium
//               rounded-lg text-sm px-5 py-2.5 mb-2 
//               dark:bg-lime-600 dark:hover:bg-lime-700
//               focus:outline-none dark:focus:ring-lime-800"
//           >
//             تطبيق
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { Circle } from 'lucide-react';

export default function PriceFilter({ slug, isSearch }) {
  const searchParams = useSearchParams();
  const minParam = searchParams.get("min");
  const maxParam = searchParams.get("max");

  const priceRanges = [
    { display: "أقل من 300", max: "300" },
    { display: "من 300 إلى 500", max: "500", min: "300" },
    { display: "من 500 إلى 700", max: "700", min: "500" },
    { display: "أعلى من 700", min: "700" },
  ];

  const router = useRouter();
  const { handleSubmit, reset, register } = useForm();

  function onSubmit(data) {
    const { min, max } = data;
    if (min && max) {
      router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`);
    } else if (min) {
      router.push(`/category/${slug}?sort=asc&min=${min}`);
    } else if (max) {
      router.push(`/category/${slug}?sort=asc&max=${max}`);
    }
    reset();
  }

  return (
    <div dir="rtl" className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">السعر</h2>
        <Link
          className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 transition"
          href={`/category/${slug}?sort=asc`}
        >
          إعادة التصفية
        </Link>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {priceRanges.map((range, i) => {
          const isActive =
            (range.min && range.min === minParam) ||
            (range.max && range.max === maxParam) ||
            (range.min && range.max && range.min === minParam && range.max === maxParam);

          return (
            <Link
              key={i}
              href={
                range.max && range.min
                  ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}`
                  : range.max
                    ? `/category/${slug}?sort=asc&max=${range.max}`
                    : `/category/${slug}?sort=asc&min=${range.min}`
              }
              className={`flex items-center gap-2 text-sm font-medium transition ${
                isActive ? "text-lime-600 dark:text-lime-400" : "text-gray-700 dark:text-gray-300 hover:text-lime-500"
              }`}
            >
              <Circle className="w-4 h-4 flex-shrink-0" />
              {range.display}
            </Link>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          {...register("min")}
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="الأدنى"
        />

        <input
          {...register("max")}
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="الأعلى"
        />

        <button
          type="submit"
          className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 transition"
        >
          تطبيق
        </button>
      </form>
    </div>
  );
}
