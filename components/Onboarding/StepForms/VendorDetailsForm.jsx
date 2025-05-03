
import React, { useState } from 'react';
import TextInput from "../../Forminputs/TextInput";
import ArrayItemsInput from "../../Forminputs/ArrayItemsInput";
import NavButtons from '../NavButtons';
import { Circle, Truck } from 'lucide-react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
import RadioButtonCardsImage from "../../Forminputs/RadioButtonCardsImage"
export default function VendorDetailsForm({templates}) {
  const [products, setProducts] = useState([]);
  const [shippingCost, setShippingCost] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { ...existingFormData }
  });

  const processData = async (data) => {
    data.templateId = selectedTemplate;
    data.products = products;
    data.shippingCost = shippingCost;
    data.selectedCompanies = selectedCompanies; // Send selected companies
    dispatch(updateOnboardingFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  };

  const handleCompanyToggle = (company) => {
    setSelectedCompanies(prevState => 
      prevState.includes(company) 
        ? prevState.filter(c => c !== company) 
        : [...prevState, company]
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(processData)}>
        <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Vendor Details</h2>
          <RadioButtonCardsImage templates={templates} 
         register={register}
         onSelectTemplate={(template) => setSelectedTemplate(template)}
         />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
{/* 
          <ArrayItemsInput
            setItems={setProducts}
            items={products}
            itemTitle="product"
          /> */}

          <div className="col-span-full">
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="shipping-8"
                  name="shipping"
                  value="8"
                  className="hidden peer"
                  required
                  onChange={(e) => setShippingCost(e.target.value)} 
                />
                <label 
                  htmlFor="shipping-8" 
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex gap-2 items-center">
                    <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
                    <div>
                      <p>UPS</p>
                      <p>Delivery Cost: $8</p>
                    </div>
                  </div>
                  <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="shipping-20"
                  name="shipping"
                  value="20"
                  className="hidden peer"
                  onChange={(e) => setShippingCost(e.target.value)} 
                />
                <label 
                  htmlFor="shipping-20" 
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex gap-2 items-center">
                    <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
                    <div>
                      <p>DHL Express</p>
                      <p>Delivery Cost: $20</p>
                    </div>
                  </div>
                  <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
                </label>
              </li>
            </ul>
          </div>

          {/* Shipping companies toggle */}
          <div className="col-span-full">
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Shipping Companies</h3>
            {["البريد اليمني | سبل", "سمسا", "أرامكس", "DHL Express", "Fastlo", "ريدبوكس", "أي مكان"].map((company, index) => (
              <div key={index} className="card p-4 mb-4 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <imgae alt={`Logo of ${company}`} className="w-10 h-10" src={`https://storage.googleapis.com/a1aa/image/logo${index + 1}.jpg`} />
                    </div>
                    <div className="mr-4">
                      <h2 className="font-bold">{company}</h2>
                      <p className="text-gray-600">Description of {company}</p>
                    </div>
                  </div>
                  <div>
                    <label className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        onChange={() => handleCompanyToggle(company)}
                      />
                      <span className="block overflow-hidden h-6 rounded-full bg-gray-300"></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NavButtons />
      </form>
    </div>
  );
}







// "use client"
// import React, { useState } from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ArrayItemsInput from "../../Forminputs/ArrayItemsInput"
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { Circle, Truck } from 'lucide-react';
// import { useDispatch , useSelector  } from 'react-redux';
// import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';

// export default function VendorDetailsForm() {
//   const [products, setProducts] = useState([])
//   const dispatch = useDispatch()
//   const currentStep = useSelector ((store)=> store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });
//     async function processData(data){
//             console.log(data)
//             data.products=products;
//                // Update the checkout Data
//             dispatch(updateOnboardingFormData(data));
//            // Update the Current Step
//            dispatch(setCurrentStep(currentStep + 1));
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">Vendor Details</h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="What is the size"
//                     name="landSize"
//                     type='number'
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                <TextInput lable="What is your main Crop "
//                     name="mainCrop"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
//                 <ArrayItemsInput
//                 setItems={setProducts}
//                 items={products}
//                 itemTitle="product" 
//                 />
          

            
// {/*       
//              <div className="col-span-full">
//              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//               <ul className="grid w-full gap-6 md:grid-cols-2">
//                    <li>
//         <input 
//         type="radio" id="hosting-small"
//          name="hosting" value="8"
//           className="hidden peer" required
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
//           {/*Design */}
//             {/* <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $8</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
//     <li>
//         <input
//         type="radio" id="hosting-big"
//          name="hosting" value="20"
//          className="hidden peer"
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $20</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
// </ul> */}
//              {/* </div>  */}

//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }

// "use client"
// import React, { useState } from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ArrayItemsInput from "../../Forminputs/ArrayItemsInput"
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { Circle, Truck } from 'lucide-react';
// import { useDispatch , useSelector  } from 'react-redux';
// import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';

// export default function VendorDetailsForm() {
//   const [products, setProducts] = useState([])
//   const dispatch = useDispatch()
//   const currentStep = useSelector ((store)=> store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });
//     async function processData(data){
//             console.log(data)
//             data.products=products;
//                // Update the checkout Data
//             dispatch(updateOnboardingFormData(data));
//            // Update the Current Step
//            dispatch(setCurrentStep(currentStep + 1));
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">صف نشاط متجرك لعملاك
//               <h3 className="text-sm   text-slate-500 font-medium mb-42
//            dark:text-lime-400">سيضهر  الشعار والتعريف المكتوب ادناه في متجرك الالكتروني العمادل ويمكنك التعديل علية لاحقا</h3>
//            </h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="ما فئه تجارتكم "
                
//                     name="landSize"
//                     type='number'
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                <TextInput lable="What is your main Crop "
//                     name="mainCrop"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
//                 <ArrayItemsInput
//                 setItems={setProducts}
//                 items={products}
//                 itemTitle="product" 
//                 />
          

            
// {/*       
//              <div className="col-span-full">
//              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//               <ul className="grid w-full gap-6 md:grid-cols-2">
//                    <li>
//         <input 
//         type="radio" id="hosting-small"
//          name="hosting" value="8"
//           className="hidden peer" required
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
//           {/*Design */}
//             {/* <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $8</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
//     <li>
//         <input
//         type="radio" id="hosting-big"
//          name="hosting" value="20"
//          className="hidden peer"
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $20</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
// </ul> */}
//              {/* </div>  */}

//             </div>
   
        // <NavButtons />
//     </form>
//   )
// }
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function SellerPaymentTerms() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       // Simulate API call
//       console.log("Submitting Payment Terms:", data);
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setSuccess(true);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           إضافة شروط الدفع للبائع
//         </h1>

//         {success ? (
//           <div className="text-center p-6 bg-green-100 border border-green-400 text-green-700 rounded">
//             <p>تم حفظ شروط الدفع بنجاح!</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Payment Method */}
//             <div>
//               <label
//                 htmlFor="paymentMethod"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 اختر طريقة الدفع
//               </label>
//               <select
//                 id="paymentMethod"
//                 className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                   errors.paymentMethod ? "border-red-500" : ""
//                 }`}
//                 {...register("paymentMethod", {
//                   required: "يرجى اختيار طريقة الدفع",
//                 })}
//               >
//                 <option value="">اختر طريقة الدفع</option>
//                 <option value="bank">التحويل البنكي</option>
//                 <option value="paypal">الدفع عبر PayPal</option>
//                 <option value="cash">الدفع نقدًا عند الاستلام</option>
//                 <option value="credit_card">الدفع عبر بطاقة ائتمان</option>
//               </select>
//               {errors.paymentMethod && (
//                 <p className="mt-1 text-sm text-red-500">
//                   {errors.paymentMethod.message}
//                 </p>
//               )}
//             </div>

//             {/* Payment Frequency */}
//             <div>
//               <label
//                 htmlFor="paymentFrequency"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 اختر تكرار الدفع
//               </label>
//               <select
//                 id="paymentFrequency"
//                 className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                   errors.paymentFrequency ? "border-red-500" : ""
//                 }`}
//                 {...register("paymentFrequency", {
//                   required: "يرجى اختيار تكرار الدفع",
//                 })}
//               >
//                 <option value="">اختر تكرار الدفع</option>
//                 <option value="monthly">شهري</option>
//                 <option value="weekly">أسبوعي</option>
//                 <option value="on_demand">عند الطلب</option>
//                 <option value="immediate">دفع فوري</option>
//               </select>
//               {errors.paymentFrequency && (
//                 <p className="mt-1 text-sm text-red-500">
//                   {errors.paymentFrequency.message}
//                 </p>
//               )}
//             </div>

//             {/* Payment Terms */}
//             <div>
//               <label
//                 htmlFor="paymentTerms"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 شروط الدفع للبائع
//               </label>
//               <textarea
//                 id="paymentTerms"
//                 rows={4}
//                 className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                   errors.paymentTerms ? "border-red-500" : ""
//                 }`}
//                 {...register("paymentTerms", {
//                   required: "يرجى إدخال شروط الدفع",
//                 })}
//               />
//               {errors.paymentTerms && (
//                 <p className="mt-1 text-sm text-red-500">
//                   {errors.paymentTerms.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "جاري الحفظ..." : "حفظ الشروط"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import TextInput from "../../Forminputs/TextInput";
// import ArrayItemsInput from "../../Forminputs/ArrayItemsInput";
// import NavButtons from "../NavButtons";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../redux/slices/onboardingSlice";

// export default function VendorDetailsForm() {
//   const [products, setProducts] = useState([]);
//   const [isSubscribed, setIsSubscribed] = useState(false); // For payment activation
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const paymentMethods = [
//     { id: 1, name: "البطاقة الإئتمانية", logo: "visa_mastercard_logo.png", active: false },
//     { id: 2, name: "مدى", logo: "mada_logo.png", active: false },
//     { id: 3, name: "Apple Pay", logo: "apple_pay_logo.png", active: false },
//     { id: 4, name: "+12 وسائل دفع أخرى", logo: "more_methods_logo.png", active: false },
//   ];

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   async function processData(data) {
//     data.products = products;
//     dispatch(updateOnboardingFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   const handleSubscription = () => {
//     setIsSubscribed(true);
//     alert("تم الاشتراك في الباقة المدفوعة بنجاح!");
//   };

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">Vendor Details</h2>
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <TextInput
//           lable="What is the size"
//           name="landSize"
//           type="number"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />
//         <TextInput
//           lable="What is your main Crop"
//           name="mainCrop"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />
//         <ArrayItemsInput setItems={setProducts} items={products} itemTitle="product" />
//       </div>

//       {/* Payment Activation Section */}
//       <div className="my-6">
//         <h3 className="text-lg font-semibold mb-4">تفعيل وسائل الدفع الإلكتروني</h3>
//         <p className="mb-4 text-gray-600">
//           ستفعل سبل الدفع بعد إتمام الاشتراك للباقات المدفوعة. يمكنك لاحقاً إضافة أو استبدال الخيارات.
//         </p>
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {paymentMethods.map((method) => (
//             <div key={method.id} className={`flex items-center border p-4 rounded-lg ${isSubscribed ? "bg-green-50" : "bg-gray-100"}`}>
//               <image src={method.logo} alt={method.name} className="w-10 h-10 mr-4" />
//               <div>
//                 <h4 className="font-bold">{method.name}</h4>
//                 {isSubscribed ? <span className="text-green-600 text-sm">مفعلة</span> : <span className="text-gray-500 text-sm">غير مفعلة</span>}
//               </div>
//             </div>
//           ))}
//         </div>
//         {!isSubscribed && (
//           <button
//             onClick={handleSubscription}
//             className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
//           >
//             الاشتراك الآن
//           </button>
//         )}
//       </div>

//       {/* Navigation Buttons */}
//       <NavButtons />
//     </form>
//   );
// }
