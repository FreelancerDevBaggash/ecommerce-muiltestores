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
//         <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
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



"use client";
import React, { useState } from "react";
import TextInput from "../../Forminputs/TextInput";
import ToggleInput from "../../Forminputs/ToggleInput";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { Circle, HeartHandshake, CreditCard } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

export default function PaymentMethodForm8() {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  const initialPaymentMethod = existingFormData.paymentMethod || "";
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  console.log(paymentMethod);

  async function processData(data) {
    data.paymentMethod = paymentMethod;
    console.log(data);
    // Update the checkout Data
    dispatch(updateCheckoutFormData(data));
    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)} dir="rtl">
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">طريقة الدفع</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* طريقة الدفع */}
        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            ما هي طريقة الدفع التي تفضلها؟
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="الدفع عند الاستلام"
                className="hidden peer"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-indigo-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* التصميم */}
                <div className="flex gap-2 items-center">
                  <HeartHandshake className="w-8 h-8 ms-3 flex-shrink-0" />
                  <p>الدفع عند الاستلام</p>
                </div>
                <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="دفع الكتروني"
                className="hidden peer"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <CreditCard className="w-8 h-8 ms-3 flex-shrink-0" />
                  <p>دفع الكتروني</p>
                </div>
                <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
              </label>
            </li>
          </ul>
        </div>
      </div>

      <NavButtons />
    </form>
  );
}
