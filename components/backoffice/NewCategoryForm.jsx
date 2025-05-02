"use client";
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "../../components/Forminputs/TextInput";
import FormHeader from "../../components/backoffice/FormHeader";
import SubmitButton from "../../components/Forminputs/SubmitButton";
//import TextareaInput from "../../components/Forminputs/TextareaInput";
import { generateSlug } from "../../lib/generateSlug";
import ImageInput from "../../components/Forminputs/ImageInput"
import SelectInput from "../../components/Forminputs/SelectInput";
import { makePostRequest } from "../../lib/apiRequest";
import ToggleInput from "../../components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";    
import { useSession } from "next-auth/react"


export default async  function NewCategoryForm({mainCategoryId, storeId}){
  
   
    const [imageUrl, setImageUrl] = useState("");
    // const markets =[  ]
    const [loading, setLoading] = useState(false);
    const {register, reset,watch, handleSubmit, formState:{errors}} =useForm({
        defaultValues: {
            isActive: true,
          }
    });
    const router = useRouter();
    function redirect(){
        router.push('/dashboard/categories')
 }

    const isActive = watch("isActive");

    async function onSubmit(data) {
      
        const slug =generateSlug(data.title)
        data.slug= slug;
        data.imageUrl = imageUrl;
        data.storeId = storeId;
        data.mainCategoryId = mainCategoryId;
        console.log(data);
        makePostRequest(
            setLoading,
            'api/categories',
            data,
            'Category',
            reset,
            redirect
          ) ;
          setImageUrl("")
    }

  
    {/*- id
        -title
        -slug
        -description
        -image
        */}
    return(
        <div>
            <FormHeader title="فئة جديدة" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
             border-gray-200 rounded-lg shadow sm:p-6 md:p-8
            dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="اسم الفئة"
                    name="title"
                    register={register}
                    errors={errors}
                     />

                    {/* <SelectInput  lable="Select Markets"
                    name="marketIds"
                    register={register}
                    errors={errors}
                    className="w-full"
                    options={markets} 
                    multiple={true} /> */}

<TextInput lable="وصف الفئة"
                    name="description"
                    register={register}
                    errors={errors}
                     />
                  {/* <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          /> */}

             {/* <SelectInput  lable="Select MainCategory"
                    name="mainCategoryId"
                    register={register}
                    errors={errors}
                    className="w-full"
                    options={mainCategories} 
                    /> */}
 
                 
          <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "categoryImageUploader" label="صورة الفئة"/>

          <ToggleInput
    label="انشر فئتك"
     name="isActive"
     trueTitle="Active"
     falseTitle="Draft"
     register={register}
    />
            </div>
                <SubmitButton isLoading={loading} buttonTitle="انشاء الفئة"
                loadingButtonTitle="...جاري انشاء الفئة يرجى الانتظار"/> 
            </form>




        </div>

    );
}