// "use client"
// import React from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
// import { useSession } from 'next-auth/react';
// export default function PersonalDetailsForm({storeId}) {
//   const {data:session, status} =useSession()
//   const customerId =session?.user?.id;

//   const dispatch = useDispatch();
//   const currentStep = useSelector ((store)=> store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData)   
//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });


//         async function processData(data){
//           if(customerId){
//             data.customersId = customerId;
//             data.storeId = storeId;
//             // Update the checkout Data
//              dispatch(updateCheckoutFormData(data))
//             // Update the Current Step
//             dispatch(setCurrentStep(currentStep + 1));
//           }
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4 dark:text-lime-400">Personal Details</h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="First Name"
//                     name="firstName"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                <TextInput lable="Last Name"
//                     name="lastName"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//               <TextInput lable="Email Address"
//                     name="email"
//                     type="email"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//               <TextInput lable="Phone Number"
//                     name="phone"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
                    
      
//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }

// "use client";
// import React from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import { useForm } from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
// import { useSession } from 'next-auth/react';

// export default function PersonalDetailsForm({storeId}) {
//   const { data: session, status } = useSession();
//   const customerId = session?.user?.id;
//   console.log('rrrrrrrrrr',user)

//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData);   
  
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...existingFormData
//     }
//   });

//   async function processData(data) {
//     if (customerId) {
//       data.customersId = customerId;
//       data.storeId = storeId;
//       dispatch(updateCheckoutFormData(data));
//       dispatch(setCurrentStep(currentStep + 1));
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)} dir="rtl" className="max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-lime-400">
//         التفاصيل الشخصية
//       </h2>
      
//       <div className="grid gap-6 md:grid-cols-2">
//         <TextInput 
//           lable="الاسم الأول" // تم تصحيح typo من lable إلى label
//           name="firstName"
//           register={register}
//           options={{ required: "مطلوب" }}
//           errors={errors}
//           className="w-full"
//           autoComplete="given-name"
//           placeholder="أحمد"
//         />

//         <TextInput 
//           lable="الاسم الأخير"
//           name="lastName"
//           register={register}
//           options={{ required: "مطلوب" }}
//           errors={errors}
//           className="w-full"
//           autoComplete="family-name"
//           placeholder="العمري"
//         />

//         <TextInput 
//           lable="البريد الإلكتروني"
//           name="email"
//           type="email"
//           register={register}
//           options={{
//             required: "مطلوب",
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               message: "بريد إلكتروني غير صالح"
//             }
//           }}
//           errors={errors}
//           className="w-full"
//           autoComplete="email"
//           placeholder="example@domain.com"
//         />

//         <TextInput 
//           lable="رقم الهاتف"
//           name="phone"
//           type="tel"
//           register={register}
//           options={{
//             required: "مطلوب",
//             pattern: {
//               value: /^\+9677\d{9}$/,
//               message: "رقم هاتف سعودي غير صالح (يجب أن يبدأ بـ +9677)"
//             }
//           }}
//           errors={errors}
//           className="w-full"
//           autoComplete="tel"
//           placeholder="+9677XXXXXXXX"
//         />
//       </div>

//       <div className="mt-8">
//         <NavButtons 
//           nextLabel="المتابعة إلى الشحن"
//           backLabel="العودة إلى السلة"
//           containerClass="flex gap-4 justify-end"
//           nextButtonClass="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg"
//           backButtonClass="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg"
//         />
//       </div>
//     </form>
//   );
// }

"use client";
import React, { useEffect, useState } from 'react';
import TextInput from "../../Forminputs/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
// import { useSession } from 'next-auth/react';
import useCustomerSession from "@/hooks/useCustomerSession";

export default function PersonalDetailsForm({ storeId }) {
  const { session, loading } = useCustomerSession();
  const customerId = session?.user.id;
  const [customerStore, setCustomerStore] = useState(null);
  // جلب customerStore بناءً على storeId و customerId
  useEffect(() => {
    if (loading === "authenticated" && customerId && storeId) {
      const fetchCustomerStore = async () => {
        try {
          const response = await fetch(`/api/customerStores?storeId=${storeId}&customerId=${customerId}`);
          const data = await response.json();
          if (data) {
            setCustomerStore(data);
          }
        } catch (error) {
          console.error("Failed to fetch customerStore:", error);
        }
      };
  
      fetchCustomerStore();
    }
  }, [loading, storeId, customerId]);
  

  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });

  async function processData(data) {
    if (customerId && customerStore) {
      data.customersId = customerId;
      data.storeId = storeId;
      data.CustomerStoreId = customerStore.id;  // إضافة ID الخاص بـ customerStore هنا
      dispatch(updateCheckoutFormData(data));
      dispatch(setCurrentStep(currentStep + 1));
    }
  }

  return (
    <form onSubmit={handleSubmit(processData)} dir="rtl" className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-lime-400">
        التفاصيل الشخصية
      </h2>

      {/* بيانات العميل */}
      {customerStore && (
        <div className="mb-4">
          <p>Customer Store ID: {customerStore.id}</p>
          {/* يمكنك إضافة المزيد من التفاصيل هنا بناءً على البيانات التي جلبتها */}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <TextInput
          lable="الاسم الأول"
          name="firstName"
          register={register}
          options={{ required: "مطلوب" }}
          errors={errors}
          className="w-full"
          autoComplete="given-name"
          placeholder="أحمد"
        />
        <TextInput
          lable="الاسم الأخير"
          name="lastName"
          register={register}
          options={{ required: "مطلوب" }}
          errors={errors}
          className="w-full"
          autoComplete="family-name"
          placeholder="العمري"
        />
        <TextInput
          lable="البريد الإلكتروني"
          name="email"
          type="email"
          register={register}
          options={{
            required: "مطلوب",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "بريد إلكتروني غير صالح"
            }
          }}
          errors={errors}
          className="w-full"
          autoComplete="email"
          placeholder="example@domain.com"
        />
        <TextInput
          lable="رقم الهاتف"
          name="phone"
          type="tel"
          register={register}
          options={{
            required: "مطلوب",
            pattern: {
              value: /^\+9677\d{9}$/,
              message: "رقم هاتف سعودي غير صالح (يجب أن يبدأ بـ +9677)"
            }
          }}
          errors={errors}
          className="w-full"
          autoComplete="tel"
          placeholder="+9677XXXXXXXX"
        />
      </div>

      <div className="mt-8">
        <NavButtons
          nextLabel="المتابعة إلى الشحن"
          backLabel="العودة إلى السلة"
          containerClass="flex gap-4 justify-end"
          nextButtonClass="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg"
          backButtonClass="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg"
        />
      </div>
    </form>
  );
}
