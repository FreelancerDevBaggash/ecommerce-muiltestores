// "use client"
// import { setCurrentStep } from '../../../redux/slices/onboardingSlice';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import { makePostRequest } from "../../../lib/apiRequest";
// import { generateUserCode } from "../../../lib/generateUserCode";

// export default function Summary({vendorId}) {
//   const [loading, setLoading]= useState(false)
//   const router =useRouter()
//   const onboardingFormData = useSelector((store) => store.onboarding.onboardingFormData);
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const dispatch =useDispatch();
//   function handlePrevious(){
//      dispatch(setCurrentStep(currentStep - 1));
//   }
// // console.log("gggggggggggggggggggggggggggggg", vendorId)
//   async function submitData(){
//     const data = {
//       ...onboardingFormData
//     };
//     const fullName =`${data.businessNameEn}`
//     const code = generateUserCode("LFF",  fullName);
//     data.code= code;
//     data.vendorId =vendorId;
//     console.log(data);
//     const redirect = () => router.push('/dashboard');
//    makePostRequest( setLoading, 'api/stores', data,
//        'Stores',
//       // reset,
//        redirect ) ;
//   }
//   return (
//     <div className='my-6'>
//                 <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">Summary</h2>
//            <div className="flex">
//              <h2>Here are your Details</h2>
//            </div>
//         <div className="mt-4 flex items-center justify-between">
//         <button  
//           onClick={handlePrevious}
//           type="button"
//           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
//           text-sm font-medium text-center text-white
//            bg-slate-900 rounded-lg focus:ring-4
//             focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
//              dark:bg-lime-600 dark:hover:bg-lime-700"
//         >
//           <ChevronLeft className="w-5 h-5 mr-2" />
//           <span>Previous</span>
//         </button>

//        {
//         loading?(
//           <button disabled  className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
//           text-sm font-medium text-center text-white
//            bg-slate-900 rounded-lg focus:ring-4
//             focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
//              dark:bg-lime-600 dark:hover:bg-lime-700"> Processing Please wait...</button>
//         ):(
//           <button  
//           onClick={submitData}
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
//             text-sm font-medium text-center text-white
//              bg-slate-900 rounded-lg focus:ring-4
//               focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
//                dark:bg-lime-600 dark:hover:bg-lime-700"
//           >
            
//             <span>Submit Data</span>
//             <ChevronRight className="w-5 h-5 mr-2" />
//           </button>
//         )
//        }
//         </div>
//     </div>
//   )
// }
"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { Loader2, ChevronRight } from "lucide-react"
import { setCurrentStep } from "@/redux/slices/onboardingSlice"
import { makePostRequest } from "@/lib/apiRequest"
import { generateUserCode } from "@/lib/generateUserCode"

export default function Summary({ vendorId }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onboardingFormData = useSelector((store) => store.onboarding.onboardingFormData)
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const dispatch = useDispatch()

  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1))
  }

  async function submitData() {
    const data = {
      ...onboardingFormData,
    }
    const fullName = `${data.businessNameEn}`
    const code = generateUserCode("LFF", fullName)
    data.code = code
    data.vendorId = vendorId

    const redirect = () => router.push("/dashboard")
    makePostRequest(setLoading, "api/stores", data, "Stores", redirect)
  }

  // Helper function to render summary items
  const SummaryItem = ({ label, value, isImage = false }) => (
    <div className="mb-4">
      <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{label}</span>
      {isImage ? (
        value ? (
          <img src={value || "/placeholder.svg"} alt={label} className="w-20 h-20 object-cover rounded-md" />
        ) : (
          <span className="text-sm text-gray-400">لا توجد صورة</span>
        )
      ) : (
        <span className="font-medium text-gray-900 dark:text-white">{value || "—"}</span>
      )}
    </div>
  )

  return (
    <div className="p-1">
      <div dir="rtl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-400 mb-2">ملخص المعلومات</h2>
          <p className="text-gray-600 dark:text-gray-300">راجع معلومات متجرك قبل الإرسال النهائي</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">معلومات المتجر</h3>
              <div className="space-y-2">
                <SummaryItem label="اسم المتجر" value={onboardingFormData.businessName} />
                <SummaryItem label="اسم المتجر بالإنجليزية" value={onboardingFormData.businessNameEn} />
                <SummaryItem label="رابط المتجر" value={onboardingFormData.slugDomain} />
                <SummaryItem label="رقم الهاتف" value={onboardingFormData.phone} />
                <SummaryItem label="نوع الكيان" value={onboardingFormData.entityType} />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">معلومات إضافية</h3>
              <div className="space-y-2">
                <SummaryItem label="فئة المتجر" value={onboardingFormData.storeType} />
                <SummaryItem label="صورة الملف الشخصي" value={onboardingFormData.profileImageUrl} isImage={true} />
                <SummaryItem label="وصف المتجر" value={onboardingFormData.notes} />
              </div>
            </div>
          </div>

          {onboardingFormData.shippingCost && (
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">معلومات الشحن</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-lime-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    ${onboardingFormData.shippingCost}
                  </span>
                  <span>تكلفة الشحن</span>
                </div>

                {onboardingFormData.selectedCompanies && onboardingFormData.selectedCompanies.length > 0 && (
                  <div className="space-y-2">
                    <span className="block">شركات الشحن المختارة:</span>
                    <div className="flex flex-wrap gap-2">
                      {onboardingFormData.selectedCompanies.map((company, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs
                           font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium 
              text-center text-gray-700 bg-white border border-gray-300
              rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-indigo-200 
              dark:text-white dark:bg-gray-700 dark:border-gray-600 
              dark:hover:bg-gray-600 dark:focus:ring-indigo-900 transition-colors"
          >
            <ChevronRight className="w-5 h-5 ml-2 rtl:rotate-180" />
            <span>السابق</span>
          </button>

          <button
            onClick={submitData}
            disabled={loading}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium 
              text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 
              focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 
              transition-colors ml-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                جاري المعالجة...
              </>
            ) : (
              "إرسال البيانات"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
