// "use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import TextAreainput from "@/components/Forminputs/TextAreainput";
// import { generateUserCode } from "@/lib/generateUserCode";
// import { makePostRequest } from "@/lib/apiRequest";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";
// import SelectInput from "../../components/Forminputs/SelectInput";
// import ImageInput from "@/components/Forminputs/ImageInput"
// import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";
// import { generateSlug } from "../../lib/generateSlug";

// export default function NewStoreForm({mainCategories, user}){
//     const [imageUrl, setImageUrl] = useState("");
//     const [loading, setLoading] = useState(false)
//   //const [couponCode, setCouponCode] = useState()
//   // const [products, setProducts] = useState([])
//     const {register, reset, watch, handleSubmit, formState:{errors}} =useForm(  {
//            defaultValues: {
//         isActive: true,
//         //  ...user
//       },
//     });
//       const router = useRouter();
//       function redirect(){
//           router.push('/dashboard/stores')
//    }
//     const isActive = watch("isActive");
//     async function onSubmit(data) {
//       const selectedCategory = mainCategories.find(mainCategories => mainCategories.id === data.mainCategoryId);
//       if (selectedCategory) {
//           data.storeType = selectedCategory.title; // تعيين title في storeType
//      }
//          const slug =generateSlug(data.businessNameEn)
//          const code = generateUserCode("LFF",  data.businessName);
//          data.slugDomain= slug;
//          data.code= code;
//          data.userId =user;
//          data.profileImageUrl= imageUrl;
//          console.log(data);
//         makePostRequest( setLoading, 'api/stores', data,
//             'Store',
//             reset,
//             redirect ) ;
//             setImageUrl("")
            
  
//     }
 
//     return(
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

//                     <TextInput lable="name Of Your Store"
//                     name="businessName"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                     <TextInput lable="name Of Your Store in English"
//                     name="businessNameEn"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                 <TextInput lable="store phone"
//                     name="phone"
//                     type='tel'
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
//                           <TextInput lable="vendor's Physical Address"
//                     name="physicalAddress"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                    <TextInput lable="store's Contact Person"
//                     name="contactPerson"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                     <TextInput lable="store's Contact Person Phone"
//                     name="whatsappPhone"
//                     type='tel'
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
                       


//                        <SelectInput  lable="Select MainCategory"
//                     name="mainCategoryId"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={mainCategories} 
//                     />
//                       {/* <SelectInput  lable="Select MainCategory"
//                     name="storeType"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={mainCategories} 
//                     /> */}

//                {/* Configure this endpoint in the core js*/}
//                   <ImageInput imageUrl={imageUrl} 
//                 setImageUrl={setImageUrl} 
//                endpoint = "StoreUploader" 
//                label="store Image"/>
//                        <TextAreainput 
//                    lable="Notes"
//                     name="notes"
//                     register={register}
//                     errors={errors} 
//                     isRequired ={false}
//                      />
//                      <ToggleInput
//     label="Publish your Vendor"
//      name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     />
                  
//             </div>
//                 <SubmitButton isLoading={loading} buttonTitle="Create vendor"
//                 loadingButtonTitle="Create vendor please wait..."/> 
//             </form>
//     );
// }
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/Forminputs/TextInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextAreainput from "@/components/Forminputs/TextAreainput";
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

        <TextAreainput 
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
