// import FormHeader from "@/components/backoffice/FormHeader";
// import NewCategoryForm from "../../../../../../components/backoffice/Forms/NewCategoryForm";

// import { getData } from '@/lib/getData'
// import React from "react"

// export default async function UpdateCategory({params:{id}}){
//     const category = await getData(`categories/${id}`) ;
    
  
//     return(
//         <div>
//             <FormHeader title="Update Category" />
//             <NewCategoryForm updateData = {category} />
//         </div>

//     );
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { useForm } from 'react-hook-form';
// import Image from 'next/image';

// export default function UpdateTemplate({ templateData }) {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm({
//     defaultValues: templateData,
//   });
//   const router = useRouter();
//   const { id } = router.query;
//   const [imageUrl, setImageUrl] = useState(templateData.thumbnail || '');

//   useEffect(() => {
//     if (templateData) {
//       setValue('title', templateData.title);
//       setValue('description', templateData.description);
//       setValue('isActive', templateData.isActive);
//       setValue('isDefault', templateData.isDefault);
//     }
//   }, [templateData, setValue]);

//   const onSubmit = async (data) => {
//     const response = await fetch(`/api/templates/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ ...data, thumbnail: imageUrl }),
//     });

//     if (response.ok) {
//       router.push('/dashboard/templates');
//     } else {
//       console.error('Failed to update the template');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">عنوان القالب</label>
//           <input
//             id="title"
//             {...register('title', { required: 'هذا الحقل مطلوب' })}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//           />
//           {errors.title && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.title.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">وصف القالب</label>
//           <textarea
//             id="description"
//             {...register('description')}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//           />
//         </div>

//         <div>
//           <label htmlFor="isActive" className="block text-sm font-medium text-gray-700 dark:text-gray-300">تفعيل القالب</label>
//           <input
//             type="checkbox"
//             id="isActive"
//             {...register('isActive')}
//             className="mt-1"
//           />
//         </div>

//         <div>
//           <label htmlFor="isDefault" className="block text-sm font-medium text-gray-700 dark:text-gray-300">القالب الافتراضي</label>
//           <input
//             type="checkbox"
//             id="isDefault"
//             {...register('isDefault')}
//             className="mt-1"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">صورة القالب</label>
//           {imageUrl && (
//             <div className="relative w-32 h-32">
//               <Image src={imageUrl} alt="صورة القالب" layout="fill" objectFit="cover" className="rounded-md" />
//             </div>
//           )}
//           <input
//             type="file"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               if (file) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                   setImageUrl(reader.result.toString());
//                 };
//                 reader.readAsDataURL(file);
//               }
//             }}
//             className="mt-2"
//           />
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//       >
//         تحديث القالب
//       </button>
//     </form>
//   );
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const response = await fetch(`https://your-api-endpoint/templates/${id}`);
//   const templateData = await response.json();

//   return {
//     props: {
//       templateData,
//     },
//   };
// }

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function UpdateTemplate() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [templateData, setTemplateData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/templates/${id}`);
      const data = await res.json();
      setTemplateData(data);
      setImageUrl(data.thumbnail || '');

      // إعداد القيم الافتراضية للفورم
      setValue('title', data.title);
      setValue('description', data.description);
      setValue('isActive', data.isActive);
      setValue('isDefault', data.isDefault);
    };

    if (id) fetchData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const response = await fetch(`/api/templates/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, thumbnail: imageUrl }),
    });

    if (response.ok) {
      router.push('/dashboard/templates');
    } else {
      console.error('فشل التحديث');
    }
  };

  if (!templateData) return <p>جارٍ تحميل البيانات...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow mx-auto my-3">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">عنوان القالب</label>
          <input id="title" {...register('title', { required: 'هذا الحقل مطلوب' })} className="input" />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">وصف القالب</label>
          <textarea id="description" {...register('description')} className="input" />
        </div>

        <div>
          <label htmlFor="isActive" className="block text-sm font-medium">تفعيل القالب</label>
          <input type="checkbox" id="isActive" {...register('isActive')} />
        </div>

        <div>
          <label htmlFor="isDefault" className="block text-sm font-medium">القالب الافتراضي</label>
          <input type="checkbox" id="isDefault" {...register('isDefault')} />
        </div>

        <div>
          <label className="block text-sm font-medium">صورة القالب</label>
          {imageUrl && (
            <div className="relative w-32 h-32">
              <Image src={imageUrl} alt="صورة القالب" layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          )}
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl(reader.result.toString());
                };
                reader.readAsDataURL(file);
              }
            }}
            className="mt-2"
          />
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">تحديث القالب</button>
    </form>
  );
}
