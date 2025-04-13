// "use client";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../Forminputs/TextInput";
// import FormHeader from "../FormHeader";
// import SubmitButton from "../../Forminputs/SubmitButton";
// import { generateSlug } from "../../../lib/generateSlug";
// import { generateUserCode } from "../../../lib/generateUserCode";
// import MultipleImageInput from "../../Forminputs/MultipleImageInput";
// import SelectInput from "../../Forminputs/SelectInput";
// import ArrayItemsInput from "../../Forminputs/ArrayItemsInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import { makePostRequest, makePutRequest, makeGetRequest } from "../../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function NewProductForm({updateData={} , categoryId }) {

//      const initialImageUrl = updateData?.imageUrl?? "";
//      const initialTags = updateData?.tags?? '';
//         const id = updateData?.id ?? "";
//         const storeId = updateData?.storeId;
//     //    const categoryId = updateData?.categoryId ?? "";
//         const [imageUrl, setImageUrl] = useState([initialImageUrl]);
//         const [tags , setTags] = useState(initialTags);
//         // const markets =[  ]
//         const [loading, setLoading] = useState(false);
//         const {register, reset,watch, handleSubmit, formState:{errors}} =useForm({
//             defaultValues: {
//                 isActive: true,
//                 categoryId: updateData?.categoryId,
//                 ...updateData
//               } });


//     const isActive = watch("isActive");
//     const isWholesale = watch("isWholesale");
//     const router = useRouter();

//     //const [productImages, setProductImages] = useState([]);    

//     function redirect() {
//         router.push("/dashboard/products");
//     }
//       const [productImages, setProductImages]=useState([])


//     // Handle form submission
//     async function onSubmit(data) {
//         // data.categoryId=categoryId;
//       const selectedCategory = categoryId.find(categoryId => categoryId.id === data.categoryId);
//       if (selectedCategory) {
//           data.categoryId = selectedCategory.id; // تعيين title في storeType
//       }
//         const slug = generateSlug(data.title);
//         const code = generateUserCode("LLP", data.title);
//         data.slug = slug;
//         data.storeId = storeId;
//         data.productImages = productImages;
//         data.tags = tags;
//         data.productCode = code;
//         data.qty = 1;

//         if (id) {
//             // If productId exists, update the product
//             data.id = id;
//             makePutRequest(setLoading, `api/products/${id}`, data, "Product", redirect);
//         } else {
//             // If productId doesn't exist, create a new product
//             makePostRequest(setLoading, "api/products", data, "Product", reset, redirect);
//         }
//     }                
//     console.log('categoryId:', categoryId);
// console.log('updateData?.categoryId:', updateData?.categoryId);

// console.log('storeid',storeId);
//   return(
//         <div>
//             {/* <FormHeader title="New Product" /> */}
//             <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="Product Title"
//                     name="title"
//                     register={register}
//                     errors={errors}
//                       />

//                <TextInput lable="Product SKU"
//                     name="sku"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />


//                   <TextInput lable="Product Barcode"
//                     name="barcode"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />

//                     <TextInput lable="Product Price (Before Discount"
//                     name="productPrice"
//                     type="number"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />

//                       <TextInput lable="Product Sale Price (Discounted)"
//                     name="salePrice"
//                     type="number"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />

//                   <TextInput lable="Product Stock"
//                     name="productStock"
//                     type="number"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />


//                 <TextInput 
//                     lable="Unit of Measurement(eg Kilograms)"
//                     name="unit"
//                     register={register}
//                     errors={errors}  /> 

//                     <SelectInput  lable="Select Category"
//                     name="categoryId"
//                     register={register}
//                     errors={errors}
//                     className="w-full"
//                     options={categoryId} 
//                     defaultValue={updateData?.categoryId}
//                     />




//      <ToggleInput
//          label="Supports Wholesale Selling"
//      name="isWholesale"
//      trueTitle="Supported"
//      falseTitle="Not Supported "
//      register={register}
//     />      
//                   {
//                     isWholesale&&(
//                         <>

//                <TextInput lable="Wholesale  Price"
//                     name="wholesalePrice"
//                     type="number"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />      

//                  <TextInput lable="Minimum Wholesale Qty"
//                     name="wholesaleQty"
//                     type="number"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  />  


//                         </>
//                     )
//                   }

//           <MultipleImageInput imageUrls={imageUrl} setImageUrls={setImageUrl} endpoint="multipleProductsUploader" label="Product Image Images"/>

//        {/*Tags*/}
//                <ArrayItemsInput setItems={setTags}  items={tags}
//                itemTitle="Tag"/>

// <TextInput lable="Product Description"
//                     name="descripti"
//                     register={register}
//                     errors={errors}
//                     className="w-full"  /> 
//           {/* <TextareaInput
//             label="Product Description"
//             name="description"
//             register={register}
//             errors={errors}
//           /> */}
//     <ToggleInput
//     label="Publish your Product"
//      name="isActive"
//      trueTitle="Active"
//      falseTitle="Draft"
//      register={register}
//     />


//             </div>
//                 <SubmitButton isLoading={loading} buttonTitle="Update Product"
//                 loadingButtonTitle="Update Product please wait..."/> 
//             </form>




//         </div>

//     );


// }


// rtl dd


// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../Forminputs/TextInput";
// import SubmitButton from "../../Forminputs/SubmitButton";
// import { generateSlug } from "../../../lib/generateSlug";
// import { generateUserCode } from "../../../lib/generateUserCode";
// import MultipleImageInput from "../../Forminputs/MultipleImageInput";
// import SelectInput from "../../Forminputs/SelectInput";
// import ArrayItemsInput from "../../Forminputs/ArrayItemsInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import { makePostRequest, makePutRequest } from "../../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function NewProductForm({ updateData = {}, categoryId }) {
//   const initialImageUrl = updateData?.imageUrl ?? "";
//   const initialTags = updateData?.tags ?? '';
//   const id = updateData?.id ?? "";
//   const storeId = updateData?.storeId;
//   const [imageUrl, setImageUrl] = useState([initialImageUrl]);
//   const [tags, setTags] = useState(initialTags);
//   const [loading, setLoading] = useState(false);
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       isActive: true,
//       categoryId: updateData?.categoryId,
//       ...updateData
//     }
//   });

//   const isActive = watch("isActive");
//   const isWholesale = watch("isWholesale");
//   const router = useRouter();
//   const [productImages, setProductImages] = useState([]);

//   function redirect() {
//     router.push("/dashboard/products");
//   }

//   async function onSubmit(data) {
//     const selectedCategory = categoryId.find(cat => cat.id === data.categoryId);
//     if (selectedCategory) {
//       data.categoryId = selectedCategory.id;
//     }
//     const slug = generateSlug(data.title);
//     const code = generateUserCode("LLP", data.title);
//     data.slug = slug;
//     data.storeId = storeId;
//     data.productImages = productImages;
//     data.tags = tags;
//     data.productCode = code;
//     data.qty = 1;

//     if (id) {
//       data.id = id;
//       makePutRequest(setLoading, `api/products/${id}`, data, "المنتج", redirect);
//     } else {
//       makePostRequest(setLoading, "api/products", data, "المنتج", reset, redirect);
//     }
//   }

//   return (
//     <div dir="rtl" className="text-right">
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput lable="عنوان المنتج" name="title" register={register} errors={errors} />
//           <TextInput lable="رمز المنتج SKU" name="sku" register={register} errors={errors} />
//           <TextInput lable="باركود المنتج" name="barcode" register={register} errors={errors} />
//           <TextInput lable="سعر المنتج قبل الخصم" name="productPrice" type="number" register={register} errors={errors} />
//           <TextInput lable="السعر بعد الخصم" name="salePrice" type="number" register={register} errors={errors} />
//           <TextInput lable="الكمية في المخزون" name="productStock" type="number" register={register} errors={errors} />
//           <TextInput lable="وحدة القياس (مثل: كيلوجرام)" name="unit" register={register} errors={errors} />

//           <SelectInput
//             lable="اختر القسم"
//             name="categoryId"
//             register={register}
//             errors={errors}
//             className="w-full"
//             options={categoryId}
//             defaultValue={updateData?.categoryId}
//           />

//           <ToggleInput
//             label="دعم البيع بالجملة"
//             name="isWholesale"
//             trueTitle="مدعوم"
//             falseTitle="غير مدعوم"
//             register={register}
//           />

//           {isWholesale && (
//             <>
//               <TextInput lable="سعر الجملة" name="wholesalePrice" type="number" register={register} errors={errors} />
//               <TextInput lable="أقل كمية بالجملة" name="wholesaleQty" type="number" register={register} errors={errors} />
//             </>
//           )}

//           <MultipleImageInput
//             imageUrls={imageUrl}
//             setImageUrls={setImageUrl}
//             endpoint="multipleProductsUploader"
//             label="صور المنتج"
//           />

//           <ArrayItemsInput
//             setItems={setTags}
//             items={tags}
//             itemTitle="كلمة مفتاحية"
//           />

//           <TextInput lable="وصف المنتج" name="description" register={register} errors={errors} className="w-full" />

//           <ToggleInput
//             label="نشر المنتج"
//             name="isActive"
//             trueTitle="نشط"
//             falseTitle="مسودة"
//             register={register}
//           />
//         </div>

//         <SubmitButton
//           isLoading={loading}
//           buttonTitle={id ? "تحديث المنتج" : "إضافة المنتج"}
//           loadingButtonTitle="جاري حفظ المنتج..."
//         />
//       </form>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/Forminputs/TextInput";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import MultipleImageInput from "@/components/Forminputs/MultipleImageInput";
import SelectInput from "@/components/Forminputs/SelectInput";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { Package } from "lucide-react";

export default function NewProductForm({ updateData = {}, categoryId, subCategoryId, storeId }) {
  // إعداد القيم الابتدائية
  const initialImage = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];

  const [productImages, setProductImages] = useState(
    updateData?.productImages ? updateData.productImages : []
  );
  const [tags, setTags] = useState(initialTags.length ? initialTags : []);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: updateData?.isActive !== undefined ? updateData.isActive : true,
      isWholesale: updateData?.isWholesale !== undefined ? updateData.isWholesale : false,
      ...updateData,
    },
  });

  const isWholesale = watch("isWholesale");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/products");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.storeId = storeId;
    data.productImages = productImages;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;

    if (updateData?.id) {
      // تعديل المنتج إذا كان معرف المنتج موجودًا
      data.id = updateData.id;
      makePutRequest(setLoading, `api/products/${updateData.id}`, data, "المنتج", redirect);
    } else {
      // إضافة منتج جديد
      makePostRequest(setLoading, "api/products", data, "المنتج", reset, redirect);
    }

    setProductImages([]);
    setTags([]);
    setShowModal(false);
  }

  return (
    <div dir="rtl" className="min-h-screen p-4 dark:bg-gray-900">
      <FormHeader title={updateData?.id ? "تعديل المنتج" : "إضافة منتج جديد"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow sm:p-6 mx-auto my-4"
      >
        <div className="grid gap-4">
          <MultipleImageInput
            imageUrls={productImages}
            setImageUrls={setProductImages}
            endpoint="multipleProductsUploader"
            label="صور المنتج"
          />
          <TextInput
            lable="اسم المنتج"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            lable="رمز المنتج (SKU)"
            name="sku"
            register={register}
            errors={errors}
          />
          <TextInput
            lable="السعر"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
          />
          <SelectInput
            lable="اختر القسم"
            name="categoryId"
            register={register}
            errors={errors}
            options={categoryId}
            defaultValue={updateData?.categoryId}
          />

          <SelectInput
            lable="اختر القسم الفرعي"
            name="subCategoryId"
            register={register}
            errors={errors}
            options={subCategoryId}
            defaultValue={updateData?.subCategoryId}
          />
          {/* زر عرض البيانات الإضافية للمنتج */}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 w-36 bg-stone-950 dark:bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-stone-700 dark:hover:bg-gray-600 transition"
          >
            <Package className="w-5 h-5" />
            بيانات المنتج
          </button>
          <ToggleInput
            label="نشر المنتج"
            name="isActive"
            trueTitle="نشط"
            falseTitle="مسودة"
            register={register}
          />
          <SubmitButton
            isLoading={loading}
            buttonTitle={updateData?.id ? "تحديث المنتج" : "حفظ المنتج"}
            loadingButtonTitle={updateData?.id ? "جاري التحديث..." : "جاري الحفظ..."}
          />
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 w-full max-w-md h-auto rounded-lg shadow-xl relative">
            <button
              className="absolute left-3 top-3 text-gray-500 dark:text-gray-300 hover:text-red-500 p-1 rounded-full transition"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center mb-4">بيانات إضافية للمنتج</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* الصف الأول */}
                <div className="space-y-2">
                  <TextInput
                    lable="السعر بعد الخصم"
                    name="salePrice"
                    type="number"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                  <TextInput
                    lable="الباركود"
                    name="barcode"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                </div>
                {/* الصف الثاني */}
                <div className="space-y-2">
                  <TextInput
                    lable="السعر القديم"
                    name="oldPrice"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                  <TextInput
                    lable="نسبة الخصم"
                    name="discount"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                </div>
                {/* الصف الثالث */}
                <div className="space-y-2">
                  <TextInput
                    lable="التقييم"
                    name="rating"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                  <TextInput
                    lable="الكمية المتوفرة"
                    name="productStock"
                    type="number"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                </div>
                {/* الصف الرابع */}
                <div className="space-y-2">
                  <TextInput
                    lable="وحدة القياس"
                    name="unit"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                  <ToggleInput
                    label="يدعم البيع بالجملة؟"
                    name="isWholesale"
                    trueTitle="نعم"
                    falseTitle="لا"
                    register={register}
                    className="text-sm"
                  />
                </div>
                {isWholesale && (
                  <div className="sm:col-span-2 space-y-2">
                    <TextInput
                      lable="سعر الجملة"
                      name="wholesalePrice"
                      type="number"
                      register={register}
                      errors={errors}
                      className="text-sm"
                    />
                    <TextInput
                      lable="أقل كمية للبيع بالجملة"
                      name="wholesaleQty"
                      type="number"
                      register={register}
                      errors={errors}
                      className="text-sm"
                    />
                  </div>
                )}
                <div className="sm:col-span-2">
                  <ArrayItemsInput setItems={setTags} items={tags} itemTitle="وسم" className="text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <TextInput
                    lable="وصف المنتج"
                    name="descripti"
                    register={register}
                    errors={errors}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
