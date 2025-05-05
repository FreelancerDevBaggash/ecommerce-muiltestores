// "use client";
// import { ChevronRight } from "lucide-react";
// import React from "react";
// import { useSelector } from "react-redux";

// export default function Steps({ steps }) {
//   // استخدام Selector للوصول إلى currentStep مع التحقق من وجوده
//   const currentStep = useSelector((store) => store.onboarding?.currentStep || 0);

//   return (
//     <nav className="flex text-sm md:text-xl mb-8">
//       <ol
//         role="list"
//         className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
//       >
//         {/* الخطوة الأولى (Account) */}
//         <li>
//           <div className="-m-1">
//             <h2
//               className="inline-flex items-center p-1 text-sm font-medium text-gray-500 rounded-md 
//               focus:outline-none focus:ring-2 focus:text-gray-900
//               focus:ring-gray-900 hover:text-gray-700
//               dark:hover:text-lime-500 md:text-base"
//             >
//               انشاء حساب
//             </h2>
//           </div>
//         </li>

//         {/* الخطوات الديناميكية */}
//         {steps.map((step, i) => (
//           <li key={i}>
//             <div className="flex items-center">
//               <ChevronRight className="flex-shrink-0 w-4 h-4 text-gray-400" />
//               <div className="-m-1">
//                 <p
//                   className={`p-1 ml-1.5 text-sm md:text-base font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2
//                   focus:text-gray-900 ${
//                     step.number === currentStep ? "text-lime-400" : ""
//                   } `}
//                 >
//                   {step.title}
//                 </p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// }
"use client"
import { ChevronLeft } from "lucide-react"
import { useSelector } from "react-redux"

export default function Steps({ steps }) {
  // استخدام Selector للوصول إلى currentStep مع التحقق من وجوده
  const currentStep = useSelector((store) => store.onboarding?.currentStep || 0)

  return (
    <div className="mx-8">
      <h1 className="text-2xl font-bold text-right mb-6 text-gray-900 dark:text-white">إعداد المتجر</h1>
      <nav dir="rtl" className="flex justify-center md:justify-start">
        <ol className="flex flex-wrap items-center gap-2">
          {/* الخطوة الأولى (إنشاء حساب) */}
          <li className="flex items-center">
            <span className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">إنشاء حساب</span>
            <ChevronLeft className="mx-2 h-4 w-4 text-gray-400" />
          </li>

          {/* الخطوات الديناميكية */}
          {steps.map((step, i) => (
            <li key={i} className="flex items-center">
              <span
                className={`text-sm md:text-base font-medium rounded-md px-2 py-1 transition-colors
                  ${
                    step.number === currentStep
                      ? "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400"
                      : "text-gray-500 dark:text-gray-400"
                  }
                  ${step.number < currentStep ? "text-gray-900 dark:text-gray-300" : ""}
                `}
              >
                {step.title}
              </span>
              {i < steps.length - 1 && <ChevronLeft className="mx-2 h-4 w-4 text-gray-400" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* شريط التقدم */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6 dark:bg-gray-700">
        <div
          className="bg-lime-500 h-2.5 rounded-full transition-all duration-300 ease-in-out dark:bg-lime-600"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
