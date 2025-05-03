// "use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import { makePostRequest } from "@/lib/apiRequest";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";
// import ImageInput from "@/components/Forminputs/ImageInput"
// import { generateSlug } from "@/lib/generateSlug";

// export default  function NewTemplate(){
// //     const session = await getServerSession(authOptions);
// //     const userId = session?.user?.id;
// //     let storeId = "";
// //     let mainCategoryId = "";

// //     if (userId) { 
// //        // استرداد المتجر المرتبط بالمستخدم
// //        const storeData = await getData(`stores?userId=${userId}`);
      
// //         if (storeData && storeData.length > 0) {
// //             const store = storeData[0];
// //            storeId = store.id;
// //            mainCategoryId = store.mainCategoryId;
// //         }
// //     }
   
// //     console.log(storeId)
// //   console.log(mainCategoryId)
// const [imageUrl, setImageUrl] = useState("");
// const [loading, setLoading] = useState(false)
// const {register, reset, watch, handleSubmit, formState:{errors}} =useForm(  {
//        defaultValues: {
//     isActive: true,
//     isDefault: false
//     //  ...user
//   },
// });
//   const router = useRouter();
//   function redirect(){
//       router.push('/dashboard/templates')
// }
// const isActive = watch("isActive");
// const isDefault = watch("isDefault");
// async function onSubmit(data) {

//      const slug =generateSlug(data.title)
//      data.slug= slug;
//      data.thumbnail= imageUrl;
//      console.log(data);
//     makePostRequest( setLoading, 'api/templates', data,
//         'Template',
//         reset,
//         redirect ) ;
//         setImageUrl("")
        

// }
//     return(
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//         border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//        dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

//                <TextInput lable="title Of Your Template"
//                name="title"
//                register={register}
//                errors={errors} 
//                className="w-full" />

//                <TextInput lable="description of Template"
//                name="description"
//                register={register}
//                errors={errors} 
//                className="w-full" />


//           {/* Configure this endpoint in the core js*/}
//              <ImageInput imageUrl={imageUrl} 
//            setImageUrl={setImageUrl} 
//           endpoint = "templateUploader" 
//           label="Template Image"/>
             
//                 <ToggleInput
// label="Publish your Template"
// name="isActive"
// trueTitle="Active"
// falseTitle="Draft"
// register={register}
// />

// <ToggleInput
// label="Publish your Template"
// name="isDefault"
// trueTitle="Default"
// falseTitle="Draft"
// register={register}
// />    
//        </div>
//            <SubmitButton isLoading={loading} buttonTitle="Create template"
//            loadingButtonTitle="Create template please wait..."/> 
//        </form>

//     );
// }









// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function SelectTemplate() {
//   const [templates, setTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // جلب بيانات القوالب عند تحميل الصفحة
//   useEffect(() => {
//     async function fetchTemplates() {
//       try {
//         const res = await fetch("/api/templates");
//         if (!res.ok) {
//           throw new Error("فشل في جلب بيانات القوالب");
//         }
//         const data = await res.json();
//         setTemplates(data);
//       } catch (error) {
//         console.error("خطأ:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchTemplates();
//   }, []);

//   // التعامل مع اختيار القالب، يتم توجيه المستخدم لصفحة التحديث أو أي صفحة أخرى
//   const handleSelectTemplate = (templateId) => {
//     router.push(`/dashboard/templates/update/${templateId}`);
//   };

//   if (loading) {
//     return <div className="text-center py-8">جاري التحميل...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8" dir="rtl">
//       <h1 className="text-3xl font-bold mb-6 text-center">اختر قالبك</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {templates.map((template) => (
//           <div
//             key={template.id}
//             className="border rounded-lg shadow hover:shadow-xl transition-all overflow-hidden bg-white"
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={template.thumbnail || "/placeholder.svg"}
//                 alt={template.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{template.title}</h2>
//               <p className="text-gray-600 mb-4">{template.description}</p>
//               <button
//                 onClick={() => handleSelectTemplate(template.id)}
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 اختر هذا القالب
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function SelectTemplate() {
//   const [templates, setTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // جلب بيانات القوالب عند تحميل الصفحة
//   useEffect(() => {
//     async function fetchTemplates() {
//       try {
//         const res = await fetch("/api/templates");
//         if (!res.ok) {
//           throw new Error("فشل في جلب بيانات القوالب");
//         }
//         const data = await res.json();
//         setTemplates(data);
//       } catch (error) {
//         console.error("خطأ:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchTemplates();
//   }, []);

//   // التعامل مع اختيار القالب، يتم توجيه المستخدم لصفحة التحديث أو أي صفحة أخرى
//   const handleSelectTemplate = (templateId) => {
//     router.push(`/dashboard/templates/update/${templateId}`);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800" dir="rtl">
//         <p className="text-lg text-gray-600 dark:text-gray-200">جاري التحميل...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8" dir="rtl">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             اختر القالب المناسب لمتجرك
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             قم بتخصيص القالب بما يناسب هويتك التجارية واستعرض القوالب المتاحة أدناه.
//           </p>
//         </header>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {templates.map((template) => (
//             <div
//               key={template.id}
//               className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
//             >
//               <div className="relative h-56">
//                 <Image
//                   src={template.thumbnail || "/images/placeholder.svg"}
//                   alt={template.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
//               </div>
//               <div className="p-4 flex flex-col h-full">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//                   {template.title}
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300 flex-1">
//                   {template.description || "لا يوجد وصف لهذا القالب"}
//                 </p>
//                 <div className="mt-4 flex justify-end gap-2">
//                   <button
//                     onClick={() => handleSelectTemplate(template.id)}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
//                   >
//                     استخدام القالب
//                   </button>
//                   <a
//                     href={`/templates/${template.id}`}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
//                   >
//                     معاينة
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// مكوّنات النموذج
import TextInput from "@/components/Forminputs/TextInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import ImageInput from "@/components/Forminputs/ImageInput";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
// ----------------------------------------------------------------------
// 1) مكوّن عرض القوالب
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// مكوّن نموذج إضافة قالب جديد
// ----------------------------------------------------------------------
export default function NewTemplateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isDefault: false,
    },
  });

  const isActive = watch("isActive");
  const isDefault = watch("isDefault");

  // بعد الإضافة، إعادة التوجيه لصفحة القوالب الرئيسية
  function redirect() {
    router.push("/dashboard/templates");
  }

  // عند إرسال النموذج
  async function onSubmit(data) {
    // const slug = generateSlug(data.title);
    // data.slug = slug;
    data.thumbnail = imageUrl;

    makePostRequest(setLoading, "api/templates", data, "Template", reset, redirect);
    setImageUrl("");
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">أضف قالبًا جديدًا</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          lable="اسم القالب"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          lable="معرف القالب"
          name="slug"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          lable="وصف القالب"
          name="description"
          register={register}
          errors={errors}
          className="w-full"
        />

        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="templateUploader"
          label="صورة القالب"
        />

        <ToggleInput
          label="حالة القالب"
          name="isActive"
          trueTitle="نشط"
          falseTitle="تعطيل"
          register={register}
        />

        <ToggleInput
          label="افتراضي؟"
          name="isDefault"
          trueTitle="افتراضي"
          falseTitle="عادي"
          register={register}
        />

        <div className="col-span-2">
          <SubmitButton
            isLoading={loading}
            buttonTitle="إضافة القالب"
            loadingButtonTitle="جاري الإضافة، انتظر من فضلك..."
          />
        </div>
      </form>
    </div>
  );
}
