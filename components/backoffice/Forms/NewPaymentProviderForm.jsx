// "use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "@/components/Forminputs/TextInput";
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import TextareaInput from "@/components/Forminputs/TextareaInput";
// import { generateSlug } from "@/lib/generateSlug";
// import ImageInput from "@/components/Forminputs/ImageInput"
// import SelectInput from "@/components/Forminputs/SelectInput";
// import { makePostRequest } from "@/lib/apiRequest";
// import { makePutRequest } from "@/lib/apiRequest";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";

// export default function NewPaymentProviderForm({updateData={}}){
//     const initialImageUrl = updateData?.imageUrl?? "";
//     const id = updateData?.id ?? "";
//     const [imageUrl, setImageUrl] = useState(initialImageUrl);
//     // const markets =[  ]
//     const [loading, setLoading] = useState(false);
//     const {register, reset,watch, handleSubmit, formState:{errors}} =useForm({
//         defaultValues: {
//             isActive: true,
//             ...updateData
//           }

//     });
//     const router = useRouter();
//     function redirect(){
//         router.push('/dashboard/payments')
//  }

//     const isActive = watch("isActive");

//     async function onSubmit(data) {
      
//         // const slug =generateSlug(data.title)
//         // data.slug= slug;
//         data.imageUrl = imageUrl;
//         console.log(data);
//         if(id){
//             data.id = id;
//             // make put request (update)
//             makePutRequest(setLoading, `api/PaymentProvider/${id}` , data,
//                 "PaymentProvider", redirect);

//             console.log("update Request: " , data);
//         } else {
//            // make put request (update)
//             makePostRequest(
//                 setLoading,
//                 'api/PaymentProvider',
//                 data,
//                 'PaymentProvider',
//                 reset,
//                 redirect
//               ) ;
//               setImageUrl("");
//         }
        
          
//     }
   
//     return(
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput
//                  lable="PaymentProvider Name"
//                    name="name"
//                     register={register}
//                     errors={errors}
//                      />

//                     {/* <SelectInput  lable="Select Markets"
//                     name="marketIds"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={markets} 
//                     multiple={true} /> */}


//                   <TextareaInput
//           lable="PaymentProvider API URL"
//                         name="apiUrl"
//             register={register}
//             errors={errors}
//           />
          
//           <TextInput 
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
        
//           <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "paymentProviderLogoUploader" label="PaymentProvider Logo"/>

//           <ToggleInput
//    lable="Publish your PaymentProvider"
//         name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     />
//      </div>

//          <SubmitButton isLoading={loading}
//           buttonTitle= {id? "Update PaymentProvider" : "Create PaymentProvider"}
//          loadingButtonTitle={`${
//             id ? "Updateing" : "Creating"
//          } PaymentProvider please wait...`}
//          /> 
//      </form>
//     );
// }


//rtl dd 
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/Forminputs/TextInput";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "@/components/Forminputs/ImageInput";
import SelectInput from "@/components/Forminputs/SelectInput";
import { makePostRequest } from "@/lib/apiRequest";
import { makePutRequest } from "@/lib/apiRequest";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";

export default function NewPaymentProviderForm({ updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/payments");
  }

  const isActive = watch("isActive");

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    if (id) {
      data.id = id;
      makePutRequest(setLoading, `api/PaymentProvider/${id}`, data, "PaymentProvider", redirect);
      console.log("طلب التحديث:", data);
    } else {
      makePostRequest(setLoading, "api/PaymentProvider", data, "PaymentProvider", reset, redirect);
      setImageUrl("");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
      <FormHeader title={id ? "تحديث مزود الدفع" : "إنشاء مزود الدفع"} />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          lable="اسم مزود الدفع"
          name="name"
          register={register}
          errors={errors}
        />

        <TextareaInput
          lable="رابط API لمزود الدفع"
          name="apiUrl"
          register={register}
          errors={errors}
        />

        <TextInput
          lable="مفتاح API لمزود الدفع"
          name="apiKey"
          register={register}
          errors={errors}
        />

        <TextInput
          lable="سر API لمزود الدفع"
          name="apiSecret"
          register={register}
          errors={errors}
        />

        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="paymentProviderLogoUploader"
          label="شعار مزود الدفع"
        />

        <ToggleInput
          lable="نشر مزود الدفع"
          name="isActive"
          trueTitle="نشط"
          falseTitle="مسودة"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "تحديث مزود الدفع" : "إنشاء مزود الدفع"}
        loadingButtonTitle={id ? "جاري تحديث مزود الدفع، الرجاء الانتظار..." : "جاري إنشاء مزود الدفع، الرجاء الانتظار..."}
      />
    </form>
  );
}
