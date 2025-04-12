"use client";
import React, { useState } from 'react';
import ImageInput from "../../Forminputs/ImageInput";
import TextareaInput from "../../Forminputs/TextareaInput";
import { useForm } from "react-hook-form";
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
import SelectInput from "../../Forminputs/SelectInput";
import {getData} from "../../../lib/getData"
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';


export default async  function AdditionalInformationForm() {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });
  //   // الحصول على الجلسة والمستخدم الحالي
  //   const session = await getServerSession(authOptions);
  //   const userId = session?.user?.id;
  // console.log(userId)
  //   if (!userId) {
  //     // إذا لم يكن هناك userId، يمكنك معالجة الحالة (مثل إعادة توجيه المستخدم أو عرض رسالة)
  //     return <p>You need to log in to create a store.</p>;
  //   }
  // const [subCategories, setSubCategories] = useState([]);
  const initialPaymentMethod = existingFormData.paymentMethod || "";
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const mainCategoriesData = await getData("mainCategories" , { mode: 'real-time' });
  const mainCategories = mainCategoriesData.map((mainCategory)=>{
      return{
          id:mainCategory.id,
          title: mainCategory.title,
      };
      });

      console.log(mainCategoriesData)
  // const categories = {
  //   "الملابس": ["تيشيرتات", "بنطلونات", "أحذية", "فستان", "معاطف", "ملابس رياضية", "ملابس نوم", "ملابس داخلية", "ملابس شتوية", "ملابس صيفية"],
  //   "الإلكترونيات": ["هواتف", "أجهزة كمبيوتر", "شاشات", "أجهزة صوت", "كاميرات", "أجهزة منزلية", "ملحقات الكمبيوتر", "أجهزة لوحية", "ساعات ذكية", "إكسسوارات"],
  //   "الأغذية": ["خضروات", "فاكهة", "لحوم", "معلبات", "منتجات الألبان", "مخبوزات", "حلويات", "مشروبات", "مكملات غذائية", "أطعمة مجمدة"],
  //   "الأثاث": ["غرف نوم", "غرف معيشة", "مكاتب", "كراسي", "طاولات", "خزائن", "رفوف", "أثاث حدائق", "أثاث مكتبي", "ديكورات"],
  //   "الصناعات اليدوية": ["سجاد", "مجوهرات", "أدوات خشبية", "أدوات خزفية", "ملابس يدوية", "تحف فنية", "منتجات جلدية", "حرف يدوية", "مفروشات يدوية", "أدوات فنية"],
  //   "الخدمات": ["توصيل", "تركيب", "خدمات صيانة", "تصميم", "استشارات", "دورات تدريبية", "تنظيف", "خدمات طبية", "خدمات قانونية", "خدمات تعليمية"]
  // };

  // عندما يتم اختيار فئة، يتم تحديث الفئات الفرعية
  // const handleCategoryChange = (e) => {
  //   const selectedCategory = e.target.value;
  //   setSubCategories(categories[selectedCategory] || []);
  // };

  async function processData(data) {
    const selectedCategory = mainCategories.find(mainCategories => mainCategories.id === data.mainCategoryId);
    if (selectedCategory) {
        data.storeType = selectedCategory.title; // تعيين title في storeType
   }
    data.profileImageUrl = imageUrl;
    // Update the checkout Data
    dispatch(updateOnboardingFormData(data));
    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        صف نشاط متجرك لعملائك
      </h2>
      <h3 className="text-sm text-slate-500 font-medium mb-4 dark:text-lime-400">
        سيظهر الشعار والتعريف المكتوب أدناه في متجرك الإلكتروني العام ويمكنك التعديل عليه لاحقًا
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            ما فئة تجارتكم
          </label>
          <SelectInput  lable="Select MainCategory"
                    name="mainCategoryId"
                    register={register}
                    errors={errors}
                    className="w-full"
                    options={mainCategories} 
                    />
          {/* <select
            id="category"
            {...register("category", { required: "يرجى اختيار فئة التجارة" })}
            onChange={handleCategoryChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">اختر الفئة</option>
            <option value="الملابس">الملابس</option>
            <option value="الإلكترونيات">الإلكترونيات</option>
            <option value="الأغذية">الأغذية</option>
            <option value="الأثاث">الأثاث</option>
            <option value="الصناعات اليدوية">الصناعات اليدوية</option>
            <option value="الخدمات">الخدمات</option>
          </select> */}
          {errors.mainCategoryId && <p className="text-red-500 text-sm">{errors.mainCategoryId.message}</p>}
        </div>

        {/* {subCategories.length > 0 && (
          <div className="w-full">
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              اختر فئة فرعية
            </label>
            <select
              id="subCategory"
              {...register("subCategory", { required: "يرجى اختيار فئة فرعية" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">اختر الفئة الفرعية</option>
              {subCategories.map((subCategory, index) => (
                <option key={index} value={subCategory}>{subCategory}</option>
              ))}
            </select>
            {errors.subCategory && <p className="text-red-500 text-sm">{errors.subCategory.message}</p>}
          </div>
        )} */}

        <ImageInput 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="vendorProfileUploader"
          label="صورة الملف الشخصي للبائع"
        />
<TextareaInput
          label="وصف المتجر"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />
        {/* <TextareaInput
          lable="شروط الدفع للبائع"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        /> */}

        {/* <TextareaInput
          lable="ملاحظات"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false} */}
        {/* /> */}
      </div>

      <NavButtons />
    </form>
  );
}


// "use client"
// import React, { useState } from 'react'
// import ImageInput from "../../Forminputs/ImageInput";
// import TextareaInput from "../../Forminputs/TextareaInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { Circle, HeartHandshake, CreditCard } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
// import { useSession } from 'next-auth/react';

// export default function AdditionalInformationForm() {
//   const [imageUrl, setImageUrl] = useState("");
//   const dispatch = useDispatch()
//   const currentStep = useSelector ((store)=> store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


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
//       data.profileImageUrl= imageUrl;
//             // Update the checkout Data
//             dispatch(updateOnboardingFormData(data))
//            // Update the Current Step
//            dispatch(setCurrentStep(currentStep + 1));
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">Additional Information</h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
  
//                   <ImageInput 
//                   imageUrl={imageUrl}
//                   setImageUrl={setImageUrl}
//                   endpoint="vendorProfileUploader"
//                   label="Vendor Profile Image" />

//                   <TextareaInput
//                   lable="Vendor's Payment Terms"
//                   name="terms"
//                   register={register}
//                   errors={errors}
//                   isRequired={false} />

//                    <TextareaInput
//                   lable="Notes"
//                   name="notes"
//                   register={register}
//                   errors={errors}
//                   isRequired={false} />

//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }



