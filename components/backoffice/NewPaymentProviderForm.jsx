// "use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "../Forminputs/TextInput";
// import FormHeader from "./FormHeader";
// import SubmitButton from "../Forminputs/SubmitButton";
// import ImageInput from "../Forminputs/ImageInput"
// import { makePostRequest } from "../../lib/apiRequest";
// import { generateSlug } from "../../lib/generateSlug";
// import TextareaInput from "../Forminputs/TextareaInput"
// import ToggleInput from "../Forminputs/ToggleInput";
// import SelectInput from "../Forminputs/SelectInput";
// import { useRouter } from "next/navigation";

// export default function NewPaymentProviderForm(){
//     //const [imageUrl, setImageUrl] = useState("");
//     const [logoUrl , setLogoUrl] = useState("")
//     const [loading, setLoading] = useState(false)
//     const {register, reset,watch, handleSubmit, formState:{errors}} =useForm(
//         {
//             defaultValues: {
//          isActive: true,
//        },}
//     )
//     const isActive = watch("isActive");
//     const router = useRouter()
//     function redirect(){
//         router.push("/dashboard/Payments")
//     }
//     async function onSubmit(data) {
      



//         const slug =generateSlug(data.title)
//         data.slug= slug;
//          data.logoUrl= logoUrl;
//          console.log(data);
//         makePostRequest( setLoading, 'api/PaymentProvider', data,
//             'PaymentProvider',
//             reset, redirect ) ;
//             setLogoUrl("");
//     }
//     {/*- id
//         -title
//         -slug => auto()
//         -Logo
//         -desc
       
//         */}
//     return(
//         <div>
//             <FormHeader title="New PaymentProvider" />
//             <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="MainCategory Title"
//                     name="title"
//                     register={register}
//                     errors={errors} 
//                     className="w-full"
//                    />
                   
//                  {/* <SelectInput  lable="Select Categories"
//                     name="categoryIds"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={categories} 
//                     multiple={true} /> */}


// {/* Configure this endpoint in the core js*/}
//                   <ImageInput imageUrl={logoUrl} 
//                 setImageUrl={setLogoUrl} 
//                endpoint = "PaymentProviderLogoUploader" label="PaymentProvider Logo"/>
                     
//                      <TextareaInput 
//                    lable="PaymentProvider Description"
//                     name="description"
//                     register={register}
//                     errors={errors} 
//                      />
//                 <ToggleInput
//     label="Publish your PaymentProvider"
//      name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     />
//             </div>
//                 <SubmitButton isLoading={loading} buttonTitle="Create PaymentProvider"
//                 loadingButtonTitle="Create PaymentProvider please wait..."/> 
//             </form>




//         </div>

//     );
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../Forminputs/TextInput";
// import FormHeader from "./FormHeader";
// import SubmitButton from "../Forminputs/SubmitButton";
// import ImageInput from "../Forminputs/ImageInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { generateSlug } from "../../lib/generateSlug";
// import TextareaInput from "../Forminputs/TextareaInput";
// import ToggleInput from "../Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";

// export default function NewPaymentProviderForm() {
//     const [logoUrl, setLogoUrl] = useState("");
//     const [loading, setLoading] = useState(false);
//     const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             isActive: true,
//         },
//     });
//     const isActive = watch("isActive");
//     const router = useRouter();

//     function redirect() {
//         router.push("/dashboard/Payments");
//     }

//     async function onSubmit(data) {
//         data.logoUrl = logoUrl; // إضافة رابط الشعار
//         console.log(data);
//         makePostRequest(setLoading, 'api/PaymentProvider', data, 'PaymentProvider', reset, redirect);
//         setLogoUrl("");
//     }

//     return (
   
//          <div>
//                     <FormHeader title="New Category" />
//                     <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//                      border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//                     dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//                     <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                         <TextInput lable="Category Title"
//                             name="name"
//                             register={register}
//                             errors={errors}
//                              />
        
//         <TextInput lable="PaymentProvider name "
//                             name="name"
//                             register={register}
//                             errors={errors}
//                              />
        
                          
//         <TextInput lable="PaymentProvider apiUrl "
//                             name="apiUrl"
//                             register={register}
//                             errors={errors}
//                              />
//                               <TextInput lable="PaymentProvider apiKey "
//                             name="apiKey"
//                             register={register}
//                             errors={errors}
//                              />
//                                <TextInput lable="PaymentProvider apiSecret "
//                             name="apiSecret"
//                             register={register}
//                             errors={errors}
//                              />
                             
                        
         
                         
//                   <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "PaymentProvidermageUploader" label="Category Image"/>
        
//                   <ToggleInput
//             label="Publish your Category"
//              name="isActive"
//              trueTitle="Active"
//              falseTitle="Draft"
//              register={register}
//             />
//                     </div>
//                         <SubmitButton isLoading={loading} buttonTitle="Create Category"
//                         loadingButtonTitle="Create Category please wait..."/> 
//                     </form>
        
        
        
        
//                 </div>
        
//     );
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../Forminputs/TextInput";
// import FormHeader from "./FormHeader";
// import SubmitButton from "../Forminputs/SubmitButton";
// import ImageInput from "../Forminputs/ImageInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { generateSlug } from "../../lib/generateSlug";
// import TextareaInput from "../Forminputs/TextareaInput";
// import ToggleInput from "../Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";

// export default function NewPaymentProviderForm() {
//     const [imageUrl, setImageUrl] = useState("");  // تغيير لتخزين رابط الشعار
//     const [loading, setLoading] = useState(false);
//     const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             isActive: true,
//         },
//     });
//     const isActive = watch("isActive");
//     const router = useRouter();

//     function redirect() {
//         router.push("/dashboard/payments");
//     }

//     async function onSubmit(data) {
//         data.imageUrl = imageUrl; // إضافة رابط الشعار
//         console.log(data);
//         makePostRequest(setLoading, 'api/PaymentProvider', data, 'PaymentProvider', reset, redirect);
//         setImageUrl("");
//     }

//     return (
//         <div>
//             <FormHeader title="New PaymentProvider" />
//             <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">           
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//             <TextInput 
//                         lable="PaymentProvider Name"
//                         name="name"
//                         register={register}
//                         errors={errors}
//                     />
        
//                     <TextInput 
//                         lable="PaymentProvider API URL"
//                         name="apiUrl"
//                         register={register}
//                         errors={errors}
//                     />
        
//                     <TextInput 
//                         lable="PaymentProvider API Key"
//                         name="apiKey"
//                         // type="password" // لضمان الخصوصية
//                         register={register}
//                         errors={errors}
//                     />
        
//                     <TextInput 
//                         lable="PaymentProvider API Secret"
//                         name="apiSecret"
//                         // type="password" // لضمان الخصوصية
//                         register={register}
//                         errors={errors}
//                     />
        
//                     <ImageInput 
//                         imageUrl={imageUrl} 
//                         setImageUrl={setImageUrl} 
//                         endpoint="paymentProviderLogoUploader" 
//                         label="PaymentProvider Logo"
//                     />
        
                 
        
//                     <ToggleInput
//                         lable="Publish your PaymentProvider"
//                         name="isActive"
//                         trueTitle="Active"
//                         falseTitle="Draft"
//                         register={register}
//                     />
//                 </div>
//                 <SubmitButton 
//                     isLoading={loading} 
//                     buttonTitle="Create PaymentProvider"
//                     loadingButtonTitle="Creating PaymentProvider... Please wait"
//                 />
//             </form>
//         </div>
//     );
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../Forminputs/TextInput";
// import FormHeader from "./FormHeader";
// import SubmitButton from "../Forminputs/SubmitButton";
// import ImageInput from "../Forminputs/ImageInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { generateSlug } from "../../lib/generateSlug";
// import TextareaInput from "../Forminputs/TextareaInput";
// import ToggleInput from "../Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";

// export default function NewPaymentProviderForm() {
//   const [imageUrl, setImageUrl] = useState(""); // لتخزين رابط الشعار
//   const [loading, setLoading] = useState(false);
//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       isActive: true,
//     },
//   });
//   const isActive = watch("isActive");
//   const router = useRouter();

//   function redirect() {
//     router.push("/dashboard/payments");
//   }

//   async function onSubmit(data) {
//     data.imageUrl = imageUrl; // إضافة رابط الشعار
//     console.log(data);
//     makePostRequest(
//       setLoading,
//       "api/PaymentProvider",
//       data,
//       "PaymentProvider",
//       reset,
//       redirect
//     );
//     setImageUrl("");
//   }

//   return (
//     <div dir="rtl">
//       <FormHeader title="مزود دفع جديد" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             lable="اسم مزود الدفع"
//             name="name"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="رابط API لمزود الدفع"
//             name="apiUrl"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="مفتاح API لمزود الدفع"
//             name="apiKey"
//             // type="password" // لضمان الخصوصية
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="سر API لمزود الدفع"
//             name="apiSecret"
//             // type="password" // لضمان الخصوصية
//             register={register}
//             errors={errors}
//           />

//           <ImageInput
//             imageUrl={imageUrl}
//             setImageUrl={setImageUrl}
//             endpoint="paymentProviderLogoUploader"
//             label="شعار مزود الدفع"
//           />

//           <ToggleInput
//             lable="نشر مزود الدفع الخاص بك"
//             name="isActive"
//             trueTitle="نشط"
//             falseTitle="مسودة"
//             register={register}
//           />
//         </div>
//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="إنشاء مزود دفع"
//           loadingButtonTitle="جاري إنشاء مزود الدفع... يرجى الانتظار"
//         />
//       </form>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/Forminputs/TextInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateUserCode } from "@/lib/generateUserCode";
import { makePostRequest } from "@/lib/apiRequest";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";
import SelectInput from "../../components/Forminputs/SelectInput";
import ImageInput from "@/components/Forminputs/ImageInput";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";
import { generateSlug } from "../../lib/generateSlug";

export default function NewStoreForm({ mainCategories, user }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/stores");
  }

  const isActive = watch("isActive");

  async function onSubmit(data) {
    const selectedCategory = mainCategories.find(cat => cat.id === data.mainCategoryId);
    if (selectedCategory) {
      data.storeType = selectedCategory.title; // تعيين الفئة الرئيسية
    }
    const slug = generateSlug(data.businessNameEn);
    const code = generateUserCode("LFF", data.businessName);
    data.slugDomain = slug;
    data.code = code;
    data.userId = user;
    data.profileImageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/stores", data, "Store", reset, redirect);
    setImageUrl("");
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      dir="rtl"
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput 
          lable="اسم متجرك"
          name="businessName"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <TextInput 
          lable="اسم متجرك بالإنجليزية"
          name="businessNameEn"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <TextInput 
          lable="هاتف المتجر"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <TextInput 
          lable="العنوان الفعلي"
          name="physicalAddress"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <TextInput 
          lable="الشخص المسؤول"
          name="contactPerson"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <TextInput 
          lable="هاتف الشخص المسؤول"
          name="whatsappPhone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full" 
        />

        <SelectInput  
          lable="اختر الفئة الرئيسية"
          name="mainCategoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={mainCategories} 
        />

        <ImageInput 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          endpoint="StoreUploader" 
          label="صورة المتجر"
        />

        <TextareaInput 
          lable="ملاحظات"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />

        <ToggleInput
          lable="نشر المتجر"
          name="isActive"
          trueTitle="نشط"
          falseTitle="مسودة"
          register={register}
        />
      </div>

      <SubmitButton 
        isLoading={loading} 
        buttonTitle="إنشاء المتجر" 
        loadingButtonTitle="جاري إنشاء المتجر، الرجاء الانتظار..."
      />
    </form>
  );
}
