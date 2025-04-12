import React from "react"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import NewBannerForm from "../../../../../../components/backoffice/NewBannerForm"
import {getData} from "../../../../../../lib/getData";

export default async function NewBanner(){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
  
  let storeId = "";

  if (userId) { 
     // استرداد المتجر المرتبط بالمستخدم
     const storeData = await getData(`stores?vendorId=${userId}`,  { mode: 'real-time' });
    
      if (storeData && storeData.length > 0) {
          const store = storeData[0];
         storeId = store.id;
      }
  }
  console.log("idddddddddddddddd", storeId)

    
    {/*- id
        -title
        -link
        -image
       - isActive
        */}
    return(
      <NewBannerForm storeId={storeId} />

    );
}














// "use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "../../../../../../components/Forminputs/TextInput";
// import FormHeader from "../../../../../../components/backoffice/FormHeader";
// import SubmitButton from "../../../../../../components/Forminputs/SubmitButton";
// import ImageInput from "../../../../../../components/Forminputs/ImageInput"
// import { makePostRequest } from "../../../../../../lib/apiRequest";
// import ToggleInput from "../../../../../../components/Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";


// export default function NewBanner(){
//     const [imageUrl, setImageUrl] = useState("");
//     const [loading, setLoading] = useState(false)
//     const {register, reset,watch, handleSubmit, formState:{errors}} =useForm(
//      {   defaultValues: {
//             isActive: true,
//           },}
//     );
//     const router = useRouter();
//     function redirect(){
//         router.push('/dashboard/banners')
//  }
//     const isActive = watch("isActive");
//     async function onSubmit(data) {
      



   
//          data.imageUrl= imageUrl;
//          console.log(data);
//         makePostRequest( setLoading, 'api/banners', data,
//             'Banner',
//             reset ,
//             redirect) ;
//   setImageUrl("");
//     }
//     {/*- id
//         -title
//         -link
//         -image
//        - isActive
//         */}
//     return(
//         <div>
//             <FormHeader title="New Banner" />
//             <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="Banner Title"
//                     name="title"
//                     register={register}
//                     errors={errors} 
//                    />
//                        <TextInput lable="Banner Link"
//                     name="link"
//                     type="url"
//                     register={register}
//                     errors={errors}
//                       />
// {/* Configure this endpoint in the core js*/}
// <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "bannerImageUploader" label="Banner Image"/>

// <ToggleInput
//     label="Publish your Banner"
//      name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     />
//             </div>
//                 <SubmitButton isLoading={loading} buttonTitle="Create Banner"
//                 loadingButtonTitle="Create Banner please wait..."/> 
//             </form>




//         </div>

//     );
// }