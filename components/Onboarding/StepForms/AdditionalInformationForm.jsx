// "use client";
// import React, { useState } from 'react';
// import ImageInput from "../../Forminputs/ImageInput";
// import TextareaInput from "../../Forminputs/TextareaInput";
// import { useForm } from "react-hook-form";
// import NavButtons from '../NavButtons';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
// import SelectInput from "../../Forminputs/SelectInput";
// import {getData} from "../../../lib/getData"
// // import { getServerSession } from 'next-auth';
// // import { authOptions } from '@/lib/authOptions';


// export default async  function AdditionalInformationForm() {
//   const [imageUrl, setImageUrl] = useState("");
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...existingFormData
//     }
//   });
//   //   // الحصول على الجلسة والمستخدم الحالي
//   //   const session = await getServerSession(authOptions);
//   //   const userId = session?.user?.id;
//   // console.log(userId)
//   //   if (!userId) {
//   //     // إذا لم يكن هناك userId، يمكنك معالجة الحالة (مثل إعادة توجيه المستخدم أو عرض رسالة)
//   //     return <p>You need to log in to create a store.</p>;
//   //   }
//   // const [subCategories, setSubCategories] = useState([]);
//   const initialPaymentMethod = existingFormData.paymentMethod || "";
//   const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
//   const mainCategoriesData = await getData("mainCategories" , { mode: 'real-time' });
//   const mainCategories = mainCategoriesData.map((mainCategory)=>{
//       return{
//           id:mainCategory.id,
//           title: mainCategory.title,
//       };
//       });

//       console.log(mainCategoriesData)
//   // const categories = {
//   //   "الملابس": ["تيشيرتات", "بنطلونات", "أحذية", "فستان", "معاطف", "ملابس رياضية", "ملابس نوم", "ملابس داخلية", "ملابس شتوية", "ملابس صيفية"],
//   //   "الإلكترونيات": ["هواتف", "أجهزة كمبيوتر", "شاشات", "أجهزة صوت", "كاميرات", "أجهزة منزلية", "ملحقات الكمبيوتر", "أجهزة لوحية", "ساعات ذكية", "إكسسوارات"],
//   //   "الأغذية": ["خضروات", "فاكهة", "لحوم", "معلبات", "منتجات الألبان", "مخبوزات", "حلويات", "مشروبات", "مكملات غذائية", "أطعمة مجمدة"],
//   //   "الأثاث": ["غرف نوم", "غرف معيشة", "مكاتب", "كراسي", "طاولات", "خزائن", "رفوف", "أثاث حدائق", "أثاث مكتبي", "ديكورات"],
//   //   "الصناعات اليدوية": ["سجاد", "مجوهرات", "أدوات خشبية", "أدوات خزفية", "ملابس يدوية", "تحف فنية", "منتجات جلدية", "حرف يدوية", "مفروشات يدوية", "أدوات فنية"],
//   //   "الخدمات": ["توصيل", "تركيب", "خدمات صيانة", "تصميم", "استشارات", "دورات تدريبية", "تنظيف", "خدمات طبية", "خدمات قانونية", "خدمات تعليمية"]
//   // };

//   // عندما يتم اختيار فئة، يتم تحديث الفئات الفرعية
//   // const handleCategoryChange = (e) => {
//   //   const selectedCategory = e.target.value;
//   //   setSubCategories(categories[selectedCategory] || []);
//   // };

//   async function processData(data) {
//     const selectedCategory = mainCategories.find(mainCategories => mainCategories.id === data.mainCategoryId);
//     if (selectedCategory) {
//         data.storeType = selectedCategory.title; // تعيين title في storeType
//    }
//     data.profileImageUrl = imageUrl;
//     // Update the checkout Data
//     dispatch(updateOnboardingFormData(data));
//     // Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
//         صف نشاط متجرك لعملائك
//       </h2>
//       <h3 className="text-sm text-slate-500 font-medium mb-4 dark:text-lime-400">
//         سيظهر الشعار والتعريف المكتوب أدناه في متجرك الإلكتروني العام ويمكنك التعديل عليه لاحقًا
//       </h3>

//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <div className="w-full">
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
//             ما فئة تجارتكم
//           </label>
//           <SelectInput  lable="Select MainCategory"
//                     name="mainCategoryId"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={mainCategories} 
//                     />
//           {/* <select
//             id="category"
//             {...register("category", { required: "يرجى اختيار فئة التجارة" })}
//             onChange={handleCategoryChange}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="">اختر الفئة</option>
//             <option value="الملابس">الملابس</option>
//             <option value="الإلكترونيات">الإلكترونيات</option>
//             <option value="الأغذية">الأغذية</option>
//             <option value="الأثاث">الأثاث</option>
//             <option value="الصناعات اليدوية">الصناعات اليدوية</option>
//             <option value="الخدمات">الخدمات</option>
//           </select> */}
//           {errors.mainCategoryId && <p className="text-red-500 text-sm">{errors.mainCategoryId.message}</p>}
//         </div>

//         {/* {subCategories.length > 0 && (
//           <div className="w-full">
//             <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
//               اختر فئة فرعية
//             </label>
//             <select
//               id="subCategory"
//               {...register("subCategory", { required: "يرجى اختيار فئة فرعية" })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             >
//               <option value="">اختر الفئة الفرعية</option>
//               {subCategories.map((subCategory, index) => (
//                 <option key={index} value={subCategory}>{subCategory}</option>
//               ))}
//             </select>
//             {errors.subCategory && <p className="text-red-500 text-sm">{errors.subCategory.message}</p>}
//           </div>
//         )} */}

//         <ImageInput 
//           imageUrl={imageUrl}
//           setImageUrl={setImageUrl}
//           endpoint="vendorProfileUploader"
//           label="صورة الملف الشخصي للبائع"
//         />
// <TextareaInput
//           label="وصف المتجر"
//           name="notes"
//           register={register}
//           errors={errors}
//           isRequired={false}
//         />
//         {/* <TextareaInput
//           lable="شروط الدفع للبائع"
//           name="terms"
//           register={register}
//           errors={errors}
//           isRequired={false}
//         /> */}

//         {/* <TextareaInput
//           lable="ملاحظات"
//           name="notes"
//           register={register}
//           errors={errors}
//           isRequired={false} */}
//         {/* /> */}
//       </div>

//       <NavButtons />
//     </form>
//   );
// }


// // "use client"
// // import React, { useState } from 'react'
// // import ImageInput from "../../Forminputs/ImageInput";
// // import TextareaInput from "../../Forminputs/TextareaInput";
// // import {useForm} from "react-hook-form";
// // import NavButtons from '../NavButtons'
// // import { Circle, HeartHandshake, CreditCard } from 'lucide-react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
// // import { useSession } from 'next-auth/react';

// // export default function AdditionalInformationForm() {
// //   const [imageUrl, setImageUrl] = useState("");
// //   const dispatch = useDispatch()
// //   const currentStep = useSelector ((store)=> store.onboarding.currentStep);
// //   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


// //     const {register, reset,watch, handleSubmit, 
// //         formState:{errors}} =useForm({
// //           defaultValues:{
// //             ...existingFormData
// //           }
// //         });
// //         const initialPaymentMethod =existingFormData.paymentMethod || "" ;
// //     const [paymentMethod,setPaymentMethod]=useState(initialPaymentMethod);
// //     console.log(paymentMethod)

// //     async function processData(data){
// //       data.profileImageUrl= imageUrl;
// //             // Update the checkout Data
// //             dispatch(updateOnboardingFormData(data))
// //            // Update the Current Step
// //            dispatch(setCurrentStep(currentStep + 1));
// //         }
// //   return (
// //     <form onSubmit={handleSubmit(processData)}>
// //           <h2 className="text-x1  font-semibold mb-4
// //            dark:text-lime-400">Additional Information</h2>
// //                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
  
// //                   <ImageInput 
// //                   imageUrl={imageUrl}
// //                   setImageUrl={setImageUrl}
// //                   endpoint="vendorProfileUploader"
// //                   label="Vendor Profile Image" />

// //                   <TextareaInput
// //                   lable="Vendor's Payment Terms"
// //                   name="terms"
// //                   register={register}
// //                   errors={errors}
// //                   isRequired={false} />

// //                    <TextareaInput
// //                   lable="Notes"
// //                   name="notes"
// //                   register={register}
// //                   errors={errors}
// //                   isRequired={false} />

// //             </div>
   
// //         <NavButtons />
// //     </form>
// //   )
// // }



"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Upload } from "lucide-react"

import NavButtons from "../NavButtons"
import ImageInput from "../../Forminputs/ImageInput"
import { setCurrentStep, updateOnboardingFormData } from "@/redux/slices/onboardingSlice"

export default function AdditionalInformationForm() {
  const [imageUrl, setImageUrl] = useState("")
  const dispatch = useDispatch()
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  })

  const [mainCategories, setMainCategories] = useState([])

useEffect(() => {
  async function fetchMainCategories() {
    try {
      const res = await fetch("/api/mainCategories")
      const data = await res.json()
      setMainCategories(data)
    } catch (error) {
      console.error("حدث خطأ أثناء جلب الفئات:", error)
    }
  }

  fetchMainCategories()
}, [])


  async function processData(data) {
    const mainCategories = await fetch("/api/mainCategories").then((res) => res.json())
    const selectedCategory = mainCategories.find((mainCategory) => mainCategory.id === data.mainCategoryId)
    if (selectedCategory) {
      data.storeType = selectedCategory.title
    }
    data.profileImageUrl = imageUrl
    dispatch(updateOnboardingFormData(data))
    dispatch(setCurrentStep(currentStep + 1))
  }

  return (
    <div className="p-1">
      <form onSubmit={handleSubmit(processData)} dir="rtl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-400 mb-2">معلومات إضافية</h2>
          <p className="text-gray-600 dark:text-gray-300">صف نشاط متجرك لعملائك</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="mainCategoryId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ما فئة تجارتكم
            </label>
            <select
  id="mainCategoryId"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  {...register("mainCategoryId", { required: "يرجى اختيار فئة التجارة" })}
>
  <option value="">اختر الفئة</option>
  {mainCategories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.title}
    </option>
  ))}
</select>


            {errors.mainCategoryId && <p className="mt-2 text-sm text-red-600">{errors.mainCategoryId.message}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              شعار المتجر
            </label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 transition-all hover:border-lime-400 dark:border-gray-600 dark:hover:border-lime-500">
              {imageUrl ? (
                <div className="relative w-full h-40">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="شعار المتجر"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                    onClick={() => setImageUrl("")}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <ImageInput
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="vendorProfileUploader"
                  label=""
                  className="w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="h-10 w-10 text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">اضغط أو اسحب الصورة هنا</p>
                  </div>
                </ImageInput>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              وصف المتجر
            </label>
            <textarea
              id="notes"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="اكتب وصفاً مختصراً لمتجرك..."
              {...register("notes")}
            ></textarea>
          </div>
        </div>

        <NavButtons />
      </form>
    </div>
  )
}
