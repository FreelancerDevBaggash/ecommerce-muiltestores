"use client"
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "../Forminputs/TextInput";
import FormHeader from "./FormHeader";
import SubmitButton from "../Forminputs/SubmitButton";
import ImageInput from "../Forminputs/ImageInput"
import { makePostRequest } from "../../lib/apiRequest";
import ToggleInput from "../Forminputs/ToggleInput";
import { useRouter } from "next/navigation";

import { generateIsoFormattedDate } from "../../lib/generateIsoFormattedDate";

export default  function NewBannerForm({storeId}){
  
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false)
    const {register, reset,watch, handleSubmit, formState:{errors}} =useForm(
     {   defaultValues: {
            isActive: true,
          },}
    );
    const router = useRouter();
    function redirect(){
        router.push('/dashboard/banners')
 }
    const isActive = watch("isActive");
    async function onSubmit(data) {
        const iosFormattedDate = generateIsoFormattedDate(data.expiryDate)
data.expiryDate=iosFormattedDate
data.storeId = storeId;

   
         data.imageUrl= imageUrl;
         console.log(data);
        makePostRequest( setLoading, 'api/banners', data,
            'Banner',
            reset ,
            redirect) ;
  setImageUrl("");
    }
    {/*- id
        -title
        -link
        -image
       - isActive
        */}
    return(
        <div>
            <FormHeader title="لافتة جديدة" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
             border-gray-200 rounded-lg shadow sm:p-6 md:p-8
            dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="عنوان الافتة"
                    name="title"
                    register={register}
                    errors={errors} 
                   />
                       <TextInput lable="رابط الاعلان"
                    name="link"
                    type="url"
                    register={register}
                    errors={errors}
                      />
                           <TextInput lable="تاربخ انتهاء عرض الاعلان "
                    name="expiryDate"
                    type="date"
                    register={register}
                    errors={errors}
                    className="w-full"
                      />
{/* Configure this endpoint in the core js*/}
<ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "bannerImageUploader" label="صورة الاعلان/اللافته"/>

<ToggleInput
    label="نشر لافتة متجرك"
     name="isActive"
     trueTitle="Active"
     falseTitle="Draft"
     register={register}
    />
            </div>
                <SubmitButton isLoading={loading} buttonTitle="انشاء اللافتة"
                loadingButtonTitle="جاري انشاء لافتة متجرك يرجى الانتظار..."/> 
            </form>




        </div>

    );
}