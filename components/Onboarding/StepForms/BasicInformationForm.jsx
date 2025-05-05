"use client"
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Store, Phone, User, MapPin } from 'lucide-react'

import NavButtons from "../NavButtons"
import { setCurrentStep, updateOnboardingFormData } from "../../../redux/slices/onboardingSlice";

export default function BasicInformationForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)

  const [storeUrl, setStoreUrl] = useState(existingFormData.storeUrl || "")
  const [entityType, setEntityType] = useState(existingFormData.entityType || "فرد")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      ...existingFormData,
      isActive: existingFormData.isActive !== undefined ? existingFormData.isActive : true,
    },
  })

  const businessNameEnValue = watch("businessNameEn")
  const isActive = watch("isActive")
  const dispatch = useDispatch()

  useEffect(() => {
    const generatedUrl = (businessNameEnValue || "").replace(/\s+/g, "-").toLowerCase()
    setStoreUrl(generatedUrl)
  }, [businessNameEnValue])

  const handleStoreNameChange = (event) => {
    const storeName = event.target.value
    const generatedUrl = storeName.replace(/\s+/g, "-").toLowerCase()
    setStoreUrl(generatedUrl)
  }

  async function processData(data) {
    data.slugDomain = storeUrl
    data.entityType = entityType

    dispatch(updateOnboardingFormData(data))
    dispatch(setCurrentStep(currentStep + 1))
  }

  return (
    <div className="p-1">
      <form onSubmit={handleSubmit(processData)} dir="rtl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-400 mb-2">معلومات المتجر الأساسية</h2>
          <p className="text-gray-600 dark:text-gray-300">أدخل اسم المتجر ومعلومات الاتصال الخاصة بك</p>
        </div>
        
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                اسم المتجر
              </label>
              <div className="relative">
                <Store className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="businessName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="اسم المتجر"
                  {...register("businessName", { required: "اسم المتجر مطلوب" })}
                />
              </div>
              {errors.businessName && <p className="mt-2 text-sm text-red-600">{errors.businessName.message}</p>}
            </div>

            <div>
              <label htmlFor="businessNameEn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                اسم المتجر بالإنجليزية
              </label>
              <input
                type="text"
                id="businessNameEn"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full
                 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Store Name in English"
                {...register("businessNameEn", {
                  pattern: {
                    value: /^[a-zA-Z0-9\-\s]+$/,
                    message: "اسم المتجر يجب أن يحتوي فقط على حروف وأرقام وعلامات -",
                  },
                })}
                onChange={handleStoreNameChange}
              />
              {errors.businessNameEn && <p className="mt-2 text-sm text-red-600">{errors.businessNameEn.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="storeUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              رابط المتجر
            </label>
            <div className="flex items-center  bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
            <span className="font-medium text-gray-900 dark:text-white">{storeUrl || ""}</span>
              <span className="text-gray-500 dark:text-gray-400 text-right"> /https://www.etjer.store </span>

            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">سيكون رابط المتجر الذي يمكن للعملاء الدخول عليه للطلب</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="+9677xxxxxxxx"
                  {...register("phone", { required: "رقم الهاتف مطلوب" })}
                />
              </div>
              {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="physicalAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                العنوان الفعلي
              </label>
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="physicalAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="العنوان الفعلي للمتجر"
                  {...register("physicalAddress", { required: "العنوان مطلوب" })}
                />
              </div>
              {errors.physicalAddress && <p className="mt-2 text-sm text-red-600">{errors.physicalAddress.message}</p>}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contactPerson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                اسم الشخص المسؤول عن المتجر
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="contactPerson"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="اسم الشخص المسؤول"
                  {...register("contactPerson", { required: "اسم الشخص المسؤول مطلوب" })}
                />
              </div>
              {errors.contactPerson && <p className="mt-2 text-sm text-red-600">{errors.contactPerson.message}</p>}
            </div>

            <div>
              <label htmlFor="whatsappPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                رقم هاتف الشخص المسؤول
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="whatsappPhone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="+9677xxxxxxxx"
                  {...register("whatsappPhone", { required: "رقم هاتف الشخص المسؤول مطلوب" })}
                />
              </div>
              {errors.whatsappPhone && <p className="mt-2 text-sm text-red-600">{errors.whatsappPhone.message}</p>}
            </div>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isActive}
                onChange={(e) => setValue("isActive", e.target.checked)}
                {...register("isActive")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">تفعيل المتجر</span>
            </label>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {isActive ? "المتجر نشط ومتاح للعملاء" : "المتجر غير نشط ولن يظهر للعملاء"}
            </p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نوع الكيان</label>
            <div className="flex flex-wrap gap-3 justify-start">
              {["فرد", "مؤسسة", "شركة", "مؤسسة خيرية"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    entityType === type
                      ? "bg-indigo-500 text-white dark:bg-indigo-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setEntityType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <NavButtons />
      </form>
    </div>
  )
}

// import React, { useState , useEffect } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../Forminputs/TextInput";
// import NavButtons from "../NavButtons";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../redux/slices/onboardingSlice";
// import ToggleInput from "../../Forminputs/ToggleInput";
// export default function StoreInformationForm() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const [storeUrl, setStoreUrl] = useState(existingFormData.storeUrl || "");
//   const [entityType, setEntityType] = useState(existingFormData.entityType || "فرد");

//   const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
//     defaultValues: {
//       ...existingFormData,
//       isActive: true,
//     },
//   });
//   const businessNameEnValue = watch("businessNameEn");
//   const isActive = watch("isActive");
// console.log(isActive)
//   useEffect(() => {
//     const generatedUrl = (businessNameEnValue || "").replace(/\s+/g, "-").toLowerCase();
//     setStoreUrl(generatedUrl);
//   }, [businessNameEnValue]);

//   const dispatch = useDispatch();

//   // التحقق الفوري أثناء الكتابة
//   // const handleStoreNameChange = (event) => {
//   //   const storeName = event.target.value;
//   //   const generatedUrl = storeName.replace(/\s+/g, "-").toLowerCase();
//   //   setStoreUrl(generatedUrl);
//   // };


//   // التحقق الفوري عند مغادرة الحقل (onBlur)
//   // const handleStoreNameChangeBlur = (event) => {
//   //   const storeName = event.target.value;
//   //   const generatedUrl = storeName.replace(/\s+/g, "-").toLowerCase();
//   //   setStoreUrl(generatedUrl);
//   // };

//   async function processData(data) {
//     data.slugDomain = storeUrl;
//     data.entityType = entityType;

//     dispatch(updateOnboardingFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">معلومات المتجر</h2>
//       <p className="text-gray-600 mb-4">ادخل اسم المتجر ومعلومات خاصة بمتجرك</p>
      
//       <div className="grid gap-4 sm:grid-cols-1 sm:gap-6">
//         <div className="w-full">
//           <TextInput 
//             lable="اسم المتجر"
//             name="businessName"
//             register={register}
//             errors={errors} 
//             className="w-full" 
//           />
//         </div>

//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">اسم المتجر بالإنجليزية</label>
//           <input
//             type="text"
//             {...register("businessNameEn", { 
//               // required: "اسم المتجر بالإنجليزية مطلوب",
//               pattern: {
//                 value: /^[a-zA-Z0-9\-]+$/,
//                 message: "اسم المتجر يجب أن يحتوي فقط على حروف وأرقام وعلامات -"
//               }
//             })}
//          //   onChange={handleStoreNameChange} // تحقق أثناء الكتابة
//             // onBlur={handleStoreNameChangeBlur}  // تحقق عند مغادرة الحقل
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
//           />
//           {errors.businessNameEn && <p className="text-red-500 text-sm">{errors.businessNameEn.message}</p>}
//         </div>

//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">رابط المتجر</label>
//           <input
//             type="text"
//             value={storeUrl}
//             readOnly
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm dark:bg-gray-800 dark:text-gray-200"
//           />
//           <p className="text-sm mt-1 text-gray-500">سيكون رابط المتجر الذي يمكن للعملاء الدخول عليه للطلب</p>
//         </div>
//       </div>

//       <TextInput 
//         lable="رقم الهاتف"
//         name="phone"
//         type='tel'
//         register={register}
//         errors={errors} 
//         className="w-full" 
//       />

//       <TextInput 
//         lable="العنوان الفعلي"
//         name="physicalAddress"
//         register={register}
//         errors={errors} 
//         className="w-full" 
//       />

//       <TextInput 
//         lable="اسم الشخص المسؤول عن المتجر"
//         name="contactPerson"
//         register={register}
//         errors={errors} 
//         className="w-full" 
//       />

//       <TextInput 
//         lable="رقم الهاتف الشخص المسؤول"
//         name="whatsappPhone"
//         type='tel'
//         register={register}
//         errors={errors} 
//         className="w-full" 
//       />
//                 {/* <ToggleInput
//     label="Publish your MainCategory"
//      name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     /> */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">نوع الكيان</label>
//         <div className="flex gap-4 mt-2">
//           {["فرد", "مؤسسة", "شركة", "مؤسسة خيرية"].map((type) => (
//             <button
//               type="button"
//               key={type}
//               onClick={() => setEntityType(type)}
//               className={`px-4 py-2 border rounded-md ${
//                 entityType === type ? "bg-lime-400 text-white" : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }

// "use client"
// import React from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
// import { useSession } from 'next-auth/react';
// export default function BasicInformationForm() {
//   const currentStep = useSelector ((store)=> store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)   
//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });

//         const dispatch = useDispatch();
//         async function processData(data){
//             // Update the checkout Data
//              dispatch(updateOnboardingFormData(data))
//             // Update the Current Step
//             dispatch(setCurrentStep(currentStep + 1));
        
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4 dark:text-lime-400">معلومات المتجر</h2>
//           <h3 className=' text-x1  font-semibold mb-4 dark:text-lime-400'> ادخل اسم المتجر ومعلومات خاصة بمتجرك</h3>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="أسم المتجر"
//                     name="NameSort"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
// {/* 
//                <TextInput lable="Last Name"
//                     name="lastName"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" /> */}

//               {/* <TextInput lable="Email Address"
//                     name="email"
//                     type="email"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" /> */}

//               {/* <TextInput lable="Phone Number"
//                     name="phone"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" /> */}
// {/*                     
//                     <TextInput lable="Vendor's Physical Address"
//                     name="physicalAddress"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" /> */}


//                     <TextInput lable="رابط المتجر "
//                     name="contactPerson"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                    <TextInput lable="Vendor's Contact Person Phone"
//                     name="whatsappPhone"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
      
//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../redux/slices/onboardingSlice";

// export default function StoreInformationForm() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const [storeUrl, setStoreUrl] = useState(existingFormData.storeUrl || "");
//   const [entityType, setEntityType] = useState(existingFormData.entityType || "فرد");

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const dispatch = useDispatch();

//   // توليد رابط المتجر تلقائيًا بناءً على اسم المتجر
//   const generateStoreUrl = (storeName) => {
//     if (!storeName) return "";
//     return `www.salla.sa/${storeName.replace(/\s+/g, "-").toLowerCase()}`;
//   };

//   // تحديث رابط المتجر عند تغيير اسم المتجر
//   const handleStoreNameChange = (event) => {
//     const storeName = event.target.value;
//     const generatedUrl = generateStoreUrl(storeName);
//     setStoreUrl(generatedUrl);
//   };

//   async function processData(data) {
//     data.storeUrl = storeUrl;
//     data.entityType = entityType; // إضافة نوع الكيان
//     // تحديث بيانات النموذج
//     dispatch(updateOnboardingFormData(data));
//     // تحديث الخطوة الحالية
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">معلومات المتجر</h2>
//       <p className="text-gray-600 mb-4">ادخل اسم المتجر ومعلومات خاصة بمتجرك</p>
      
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         {/* إدخال اسم المتجر */}
//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">اسم المتجر</label>
//           <input
//             type="text"
//             {...register("storeName", { required: "اسم المتجر مطلوب" })}
//             onChange={handleStoreNameChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
//           />
//           {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName.message}</p>}
//         </div>

//         {/* عرض رابط المتجر */}
//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">رابط المتجر</label>
//           <input
//             type="text"
//             value={storeUrl}
//             readOnly
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
//           />
//           <p className="text-sm text-gray-500 mt-1">سيكون رابط المتجر الذي يمكن للعملاء الدخول عليه للطلب</p>
//         </div>
//       </div>

//       {/* اختيار نوع الكيان */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">نوع الكيان</label>
//         <div className="flex gap-4 mt-2">
//           {["فرد", "مؤسسة", "شركة", "مؤسسة خيرية"].map((type) => (
//             <button
//               type="button"
//               key={type}
//               onClick={() => setEntityType(type)}
//               className={`px-4 py-2 border rounded-md ${
//                 entityType === type ? "bg-lime-400 text-white" : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../Forminputs/TextInput";
// import NavButtons from "../NavButtons";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../redux/slices/onboardingSlice";
// import axios from "axios"; // لإجراء طلبات التحقق من الرابط

// export default function StoreInformationForm() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const [storeUrl, setStoreUrl] = useState(existingFormData.storeUrl || "");
//   const [entityType, setEntityType] = useState(existingFormData.entityType || "فرد");
//   const [isUrlAvailable, setIsUrlAvailable] = useState(true); // حالة توفر الرابط

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const dispatch = useDispatch();

//   // ترجمة اسم المتجر إلى الإنجليزية
//   const translateStoreName = async (storeName) => {
//     try {
//       const response = await axios.post("/api/translate", { text: storeName, targetLang: "en" });
//       return response.data.translatedText;
//     } catch (error) {
//       console.error("Error translating store name:", error);
//       return storeName; // إذا فشلت الترجمة، نعيد النص الأصلي
//     }
//   };

//   // التحقق من توفر الرابط
//   const checkUrlAvailability = async (url) => {
//     try {
//       const response = await axios.post("/api/check-url", { url });
//       return response.data.isAvailable;
//     } catch (error) {
//       console.error("Error checking URL availability:", error);
//       return false; // إذا حدث خطأ، نفترض أن الرابط غير متوفر
//     }
//   };

//   // تحديث رابط المتجر عند تغيير اسم المتجر
//   const handleStoreNameChange = async (event) => {
//     const storeName = event.target.value;

//     // ترجمة الاسم إلى الإنجليزية
//     const translatedName = await translateStoreName(storeName);

//     // إنشاء الرابط
//     const generatedUrl = `www.salla.sa/${translatedName.replace(/\s+/g, "-").toLowerCase()}`;
//     setStoreUrl(generatedUrl);

//     // التحقق من توفر الرابط
//     const available = await checkUrlAvailability(generatedUrl);
//     setIsUrlAvailable(available);
//   };

//   async function processData(data) {
//     data.storeUrl = storeUrl;
//     data.entityType = entityType; // إضافة نوع الكيان

//     if (!isUrlAvailable) {
//       alert("الرابط غير متوفر. يرجى اختيار اسم متجر آخر.");
//       return;
//     }

//     // تحديث بيانات النموذج
//     dispatch(updateOnboardingFormData(data));
//     // تحديث الخطوة الحالية
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">معلومات المتجر</h2>
//       <p className="text-gray-600 mb-4">ادخل اسم المتجر ومعلومات خاصة بمتجرك</p>
      
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         {/* إدخال اسم المتجر */}
//         <div className="w-full">
//         <TextInput lable=" اسم المتجر"
//                      name="Name"
//                      register={register}
//                      errors={errors} 
//                      className="w-full" />
//         </div>
//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">اسم المتجر بالإنجليزية </label>
//           <input
//             type="text"
//             {...register("storeName", { required: "اسم المتجر مطلوب" })}
//             onChange={handleStoreNameChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
//           />
//           {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName.message}</p>}
//         </div>

//         {/* عرض رابط المتجر */}
//         <div className="w-full">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">رابط المتجر</label>
//           <input
//             type="text"
//             value={storeUrl}
//             readOnly
//             className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
//               isUrlAvailable ? "border-gray-300" : "border-red-500"
//             } dark:bg-gray-800 dark:text-gray-200`}
//           />
//           <p className={`text-sm mt-1 ${isUrlAvailable ? "text-gray-500" : "text-red-500"}`}>
//             {isUrlAvailable
//               ? "سيكون رابط المتجر الذي يمكن للعملاء الدخول عليه للطلب"
//               : "الرابط غير متوفر. يرجى اختيار اسم متجر آخر."}
//           </p>
//         </div>
//       </div>

//       {/* اختيار نوع الكيان */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">نوع الكيان</label>
//         <div className="flex gap-4 mt-2">
//           {["فرد", "مؤسسة", "شركة", "مؤسسة خيرية"].map((type) => (
//             <button
//               type="button"
//               key={type}
//               onClick={() => setEntityType(type)}
//               className={`px-4 py-2 border rounded-md ${
//                 entityType === type ? "bg-lime-400 text-white" : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }

