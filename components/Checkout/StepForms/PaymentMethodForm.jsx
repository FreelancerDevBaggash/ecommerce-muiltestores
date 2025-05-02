// "use client"
// import React, { useState } from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { Circle, HeartHandshake, CreditCard } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';


// export default function PaymentMethodForm8() {
//   const dispatch = useDispatch()
//   const currentStep = useSelector ((store)=> store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData)


//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });
//         const initialPaymentMethod =existingFormData.paymentMethod || "" ;
//     const [paymentMethod,setPaymentMethod]=useState(initialPaymentMethod);
//     console.log(paymentMethod)

//     async function processData(data){
//             data.paymentMethod= paymentMethod
//             console.log(data)
//             // Update the checkout Data
//             dispatch(updateCheckoutFormData(data))
//            // Update the Current Step
//            dispatch(setCurrentStep(currentStep + 1));
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">Payment Method</h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
  
//                     {/*Payment Method */}
      
//              <div className="col-span-full">
//              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which Payment Method do You Prefer?</h3>
//               <ul className="grid w-full gap-6 md:grid-cols-2">
//                    <li>
//         <input 
//         type="radio" id="hosting-small"
//          name="hosting" value="Cash On Delivery"
//           className="hidden peer" required
//           onChange={(e) => 
//             setPaymentMethod(e.target.value)} />
//         <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-indigo-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
//           {/*Design */}
//             <div className="flex gap-2 items-center">
//               <HeartHandshake className='w-8 h-8 ms-3 flex-shrink-0' />
//               <p>Cash On Delivery</p>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
//     <li>
//         <input
//         type="radio" id="hosting-big"
//          name="hosting" value="Credit Card"
//          className="hidden peer"
//           onChange={(e) => 
//             setPaymentMethod(e.target.value)} />
//         <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <div className="flex gap-2 items-center">
//               <CreditCard className='w-8 h-8 ms-3 flex-shrink-0' />
//               <p>Credit  Card</p>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
// </ul>
//              </div>

//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }



// "use client";
// import React, { useState } from "react";
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, HeartHandshake, CreditCard } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// export default function PaymentMethodForm8() {
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });
//   const initialPaymentMethod = existingFormData.paymentMethod || "";
//   const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
//   console.log(paymentMethod);

//   async function processData(data) {
//     data.paymentMethod = paymentMethod;
//     console.log(data);
//     // Update the checkout Data
//     dispatch(updateCheckoutFormData(data));
//     // Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)} dir="rtl">
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">طريقة الدفع</h2>
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         {/* طريقة الدفع */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
//             ما هي طريقة الدفع المفضلة لديك؟
//           </h3>
//           <ul className="grid w-full gap-6 md:grid-cols-2">
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-small"
//                 name="hosting"
//                 value="COD"
//                 className="hidden peer"
//                 required
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-small"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-indigo-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 {/* التصميم */}
//                 <div className="flex gap-2 items-center">
//                   <HeartHandshake className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <p>الدفع عند الاستلام</p>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-big"
//                 name="hosting"
//                 value="ELECTRONIC"
//                 className="hidden peer"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-big"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <CreditCard className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <p>دفع الكتروني</p>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }


// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice'
// import NavButtons from '../NavButtons'
// import TextInput from '../../Forminputs/TextInput'

// export default function PaymentMethodForm() {
//   const dispatch = useDispatch()
//   const currentStep = useSelector(s => s.checkout.currentStep)
//   const existingData = useSelector(s => s.checkout.checkoutFormData)

//   const {
//     register: r,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors }
//   } = useForm({ defaultValues: existingData })

//   // غلاف لدالة register لنطبق pattern خاص
//   const register = (name, opts) => {
//     if (name === 'providerMobile') {
//       return r(name, {
//         required: 'مطلوب إدخال رقم جوال يمني',
//         pattern: {
//           value: /^(07|7)[0-9]{8}$/,
//           message: 'رقم الجوال غير صالح'
//         }
//       })
//     }
//     // للحقول الأخرى نمرّر الخيارات كما هي
//     return r(name, opts)
//   }

//   const [providers, setProviders] = useState([])
//   const [open, setOpen] = useState(false)
//   const selectedProviderId = watch('paymentProvider')
//   const dropdownRef = useRef()

//   // جلب قائمة مزوّدي الدفع
//   useEffect(() => {
//     fetch('/api/PaymentProvider')
//       .then(res => res.json())
//       .then(list => setProviders(list || []))
//       .catch(console.error)
//   }, [])

//   // إغلاق القائمة عند النقر خارجها
//   useEffect(() => {
//     const onClick = e => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }
//     window.addEventListener('click', onClick)
//     return () => window.removeEventListener('click', onClick)
//   }, [])

//   const onSelect = id => {
//     setValue('paymentProvider', id, { shouldValidate: true })
//     setOpen(false)
//   }

//   const onSubmit = data => {
//     dispatch(updateCheckoutFormData({
//       ...existingData,
//       paymentProvider: data.paymentProvider,
//       providerMobile: data.providerMobile
//     }))
//     dispatch(setCurrentStep(currentStep + 1))
//   }

//   const selectedProvider = providers.find(p => p.id === selectedProviderId)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="space-y-6">
//       <h2 className="text-xl font-semibold mb-4">اختر مزود الدفع</h2>

//       {/* Dropdown مزود الدفع */}
//       <div className="sm:col-span-2 relative" ref={dropdownRef}>
//         <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
//           المزود
//         </label>
//         <button
//           type="button"
//           onClick={() => setOpen(o => !o)}
//           className="w-full flex items-center justify-between p-3 border rounded-md bg-white"
//         >
//           {selectedProvider ? (
//             <>
//               <img
//                 src={selectedProvider.imageUrl}
//                 alt={selectedProvider.name}
//                 className="h-6 w-6 rounded-full ml-2"
//               />
//               <span>{selectedProvider.name}</span>
//             </>
//           ) : (
//             <span className="text-gray-500">-- اختر المزود --</span>
//           )}
//           <span>{open ? '▲' : '▼'}</span>
//         </button>
//         {/* hidden input ليستقبل القيمة */}
//         <input
//           type="hidden"
//           {...register('paymentProvider', { required: 'الرجاء اختيار مزود دفع' })}
//         />
//         {errors.paymentProvider && (
//           <span className="text-sm text-red-600">{errors.paymentProvider.message}</span>
//         )}

//         {open && (
//           <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-auto">
//             {providers.map(p => (
//               <li
//                 key={p.id}
//                 onClick={() => onSelect(p.id)}
//                 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 <img src={p.imageUrl} alt={p.name} className="h-6 w-6 rounded-full ml-2" />
//                 <span>{p.name}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* حقل رقم الجوال يمني */}
//       {selectedProviderId && (
//         <TextInput
//           lable={`رقم الجوال في ${selectedProvider?.name || ''} (يمني)`}
//           name="providerMobile"
//           register={register}
//           errors={errors}
//           isRequired={true}         // هذا يتحكّم بالـ required الافتراضي
//           type="text"
//           defaultValue={existingData.providerMobile || ''}
//           className="sm:col-span-2"
//         />
//       )}

//       <NavButtons />
//     </form>
//   )
// }

'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice'
import NavButtons from '../NavButtons'
import TextInput from '../../Forminputs/TextInput'
import { Truck } from 'lucide-react'   // استيراد الأيقونة المناسبة

export default function PaymentMethodForm() {
  const dispatch = useDispatch()
  const currentStep = useSelector(s => s.checkout.currentStep)
  const existingData = useSelector(s => s.checkout.checkoutFormData)

  const {
    register: r,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: existingData })

  const register = (name, opts) => {
    if (name === 'providerMobile') {
      return r(name, {
        required: 'مطلوب إدخال رقم جوال يمني',
        pattern: {
          value: /^(07|7)[0-9]{8}$/,
          message: 'رقم الجوال غير صالح'
        }
      })
    }
    return r(name, opts)
  }

  const [providers, setProviders] = useState([])
  const [open, setOpen] = useState(false)
  const selectedProviderId = watch('paymentProvider')
  const dropdownRef = useRef()

  useEffect(() => {
    fetch('/api/PaymentProvider')
      .then(res => res.json())
      .then(list => {
        const arr = Array.isArray(list) ? list : []
        setProviders([
          // أولاً خيار COD بأيقونة Truck
          { id: 'COD', name: 'الدفع عند التسليم', isCod: true },
          ...arr
        ])
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    const onClick = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  const onSelect = id => {
    setValue('paymentProvider', id, { shouldValidate: true })
    setOpen(false)
  }

  const onSubmit = data => {
    dispatch(updateCheckoutFormData({
      ...existingData,
      paymentMethod: data.paymentProvider,
      providerMobile: data.providerMobile || ''
    }))
    dispatch(setCurrentStep(currentStep + 1))
  }

  const selectedProvider = providers.find(p => p.id === selectedProviderId)

  return (
    <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">اختر طريقة الدفع</h2>

      <div className="sm:col-span-2 relative" ref={dropdownRef}>
        <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-slate-50">
          طريقة الدفع
        </label>
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between p-3 border rounded-md bg-white"
        >
          {selectedProvider ? (
            <div className="flex items-center">
              {selectedProvider.isCod ? (
                <Truck className="w-6 h-6 ml-2 text-gray-700" />
              ) : (
                <img
                  src={selectedProvider.imageUrl}
                  alt={selectedProvider.name}
                  className="h-6 w-6 rounded-full ml-2"
                />
              )}
              <span>{selectedProvider.name}</span>
            </div>
          ) : (
            <span className="text-gray-500">-- اختر طريقة --</span>
          )}
          <span>{open ? '▲' : '▼'}</span>
        </button>

        <input
          type="hidden"
          {...register('paymentProvider', { required: 'الرجاء اختيار طريقة الدفع' })}
        />
        {errors.paymentProvider && (
          <span className="text-sm text-red-600">{errors.paymentProvider.message}</span>
        )}

        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-auto">
            {providers.map(p => (
              <li
                key={p.id}
                onClick={() => onSelect(p.id)}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                {p.isCod ? (
                  <Truck className="w-6 h-6 ml-2 text-gray-700" />
                ) : (
                  <img src={p.imageUrl} alt={p.name} className="h-6 w-6 rounded-full ml-2" />
                )}
                <span>{p.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedProviderId && selectedProviderId !== 'COD' && (
        <TextInput
          lable={`رقم الجوال في ${selectedProvider?.name} (يمني)`}
          name="providerMobile"
          register={register}
          errors={errors}
          isRequired={true}
          type="text"
          defaultValue={existingData.providerMobile || ''}
          className="sm:col-span-2"
        />
      )}

      <NavButtons />
    </form>
  )
}
