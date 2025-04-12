// use client";
// import React, { useState } from "react"
// import {useForm} from "react-hook-form";
// // import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import FormHeader from "@/components/backoffice/FormHeader";
// import TextInput from "../../components/Forminputs/TextInput";
// import FormHeader from "../../components/backoffice/FormHeader";
// import SubmitButton from "../../components/Forminputs/SubmitButton";
// // import TextareaInput from "../../components/Forminputs/TextAreainput";
// import { generateSlug } from "../../lib/generateSlug";
// import { generateUserCode } from "../../lib/generateUserCode";
// import MultipleImageInput from "../../components/Forminputs/MultipleImageInput"
// import SelectInput from "../../components/Forminputs/SelectInput";
// import ArrayItemsInput from "../../components/Forminputs/ArrayItemsInput";
// import ToggleInput from "../../components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";
// import { da } from "@faker-js/faker";


// export default function NewProductForm({categoryId,storeId}){
//     const [imageUrl, setImageUrl] = useState("");


// const [tags, setTags]=useState(["tag1","tag2", "tag3"]);
// console.log(tags)
//     const [loading, setLoading] = useState(false);
//     const {register, reset,watch , handleSubmit, formState:{errors}} =
//     useForm({   
//          defaultValues: {
//         isActive: true,
//         isWholesale:false
//       },});


//       //Watch it to be change off and on
//   const isActive = watch("isActive");
//   const isWholesale = watch("isWholesale");
//   console.log(isActive)
//   const router = useRouter()
//   function redirect(){
//     router.push("/dashboard/products")
//   }
//   const [productImages, setProductImages]=useState([])
  
//     async function onSubmit(data) {
//      // data.categoryId=categoryId;
//       const selectedCategory = categoryId.find(categoryId => categoryId.id === data.categoryId);
//       if (selectedCategory) {
//           data.categoryId = selectedCategory.id; // تعيين title في storeType
//      }
//      console.log("gggggggggggggggggg", data.categoryId)
//         const slug =generateSlug(data.title)
//         const productCode = generateUserCode('LLP',data.title)
//         data.slug= slug;
//         data.storeId=storeId;
//         data.productImages = productImages;
//         // data.categoryId=categoryId;
//         data.tags =tags;
//         data.qty = 1,
//         data.productCode= productCode;
//         console.log(data);
//         // if(id){
//         //   data.id = id;
//         // }else{
//         makePostRequest(
//             setLoading,
//             'api/products',
//             data,
//             'Product',
//             reset ,
//             redirect
//           ) ;
//           setProductImages([]);
//           setTags([])
//         //}
//     }
//     {/*- id => auto()
//         -title
//         -slug => auto()
//         -description
//         -image/images[]
//         -sku
//         -barcode
//         -productPrice
//         -sakePrice
//         -category
//         -Vendor 
//         -tags[]
//         */}
//     return(
//         <div>
//             <FormHeader title="New Product" />
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
             
//           <MultipleImageInput imageUrls={productImages} setImageUrls={setProductImages} endpoint="multipleProductsUploader" label="Product Image Images"/>

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
//                 <SubmitButton isLoading={loading} buttonTitle="Create Product"
//                 loadingButtonTitle="Create Product please wait..."/> 
//             </form>




//         </div>

//     );
// }   

// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../components/Forminputs/TextInput";
// import FormHeader from "../../components/backoffice/FormHeader";
// import SubmitButton from "../../components/Forminputs/SubmitButton";
// import MultipleImageInput from "../../components/Forminputs/MultipleImageInput";
// import SelectInput from "../../components/Forminputs/SelectInput";
// import ArrayItemsInput from "../../components/Forminputs/ArrayItemsInput";
// import ToggleInput from "../../components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";
// import { generateSlug } from "../../lib/generateSlug";
// import { generateUserCode } from "../../lib/generateUserCode";

// export default function NewProductForm({ categoryId, storeId }) {
//   const [imageUrl, setImageUrl] = useState("");
//   const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
//   const [loading, setLoading] = useState(false);
//   const [productImages, setProductImages] = useState([]);
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       isActive: true,
//       isWholesale: false,
//     },
//   });

//   const isActive = watch("isActive");
//   const isWholesale = watch("isWholesale");
//   const router = useRouter();

//   function redirect() {
//     router.push("/dashboard/products");
//   }

//   async function onSubmit(data) {
//     const slug = generateSlug(data.title);
//     const productCode = generateUserCode("LLP", data.title);
//     data.slug = slug;
//     data.storeId = storeId;
//     data.productImages = productImages;
//     data.tags = tags;
//     data.qty = 1;
//     data.productCode = productCode;

//     console.log(data);

//     makePostRequest(
//       setLoading,
//       "api/products",
//       data,
//       "Product",
//       reset,
//       redirect
//     );
//     setProductImages([]);
//     setTags([]);
//   }

//   return (
//     <div>
//       <FormHeader title="New Product" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             lable="Product Title"
//             name="title"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="Product SKU"
//             name="sku"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Product Barcode"
//             name="barcode"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Product Price"
//             name="productPrice"
//             type="number"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Product Sale Price (Discounted)"
//             name="salePrice"
//             type="number"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Old Price"
//             name="oldPrice"
//             type="text"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Discount"
//             name="discount"
//             type="text"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Rating"
//             name="rating"
//             type="text"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Product Stock"
//             name="productStock"
//             type="number"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="Unit of Measurement (e.g., Kilograms)"
//             name="unit"
//             register={register}
//             errors={errors}
//           />

//           <SelectInput
//             lable="Select Category"
//             name="categoryId"
//             register={register}
//             errors={errors}
//             className="w-full"
//             options={categoryId}
//           />


//                      <SelectInput  lable="Select Category"
//                     name="categoryId"
//                      register={register}
//                      errors={errors}
//                      className="w-full"
//                      options={categoryId} 
//                      />

//           <ToggleInput
//             label="Supports Wholesale Selling"
//             name="isWholesale"
//             trueTitle="Supported"
//             falseTitle="Not Supported"
//             register={register}
//           />

//           {isWholesale && (
//             <>
//               <TextInput
//                 lable="Wholesale Price"
//                 name="wholesalePrice"
//                 type="number"
//                 register={register}
//                 errors={errors}
//                 className="w-full"
//               />

//               <TextInput
//                 lable="Minimum Wholesale Qty"
//                 name="wholesaleQty"
//                 type="number"
//                 register={register}
//                 errors={errors}
//                 className="w-full"
//               />
//             </>
//           )}

//           <MultipleImageInput
//             imageUrls={productImages}
//             setImageUrls={setProductImages}
//             endpoint="multipleProductsUploader"
//             label="Product Image Images"
//           />

//           <ArrayItemsInput
//             setItems={setTags}
//             items={tags}
//             itemTitle="Tag"
//           />

//           <TextInput
//             lable="Product Descripti"
//             name="descripti"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <ToggleInput
//             label="Publish your Product"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Draft"
//             register={register}
//           />
//         </div>

//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Create Product"
//           loadingButtonTitle="Create Product please wait..."
//         />
//       </form>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Forminputs/TextInput";
import FormHeader from "../../components/backoffice/FormHeader";
import SubmitButton from "../../components/Forminputs/SubmitButton";
import MultipleImageInput from "../../components/Forminputs/MultipleImageInput";
import SelectInput from "../../components/Forminputs/SelectInput";
import ArrayItemsInput from "../../components/Forminputs/ArrayItemsInput";
import ToggleInput from "../../components/Forminputs/ToggleInput";
import { makePostRequest } from "../../lib/apiRequest";
import { useRouter } from "next/navigation";
import { generateSlug } from "../../lib/generateSlug";
import { generateUserCode } from "../../lib/generateUserCode";
import button from "@/components/ui/button";
import { Package  } from "lucide-react";

export default function NewProductForm({ categoryId, storeId }) {
  const [productImages, setProductImages] = useState([]);
  const [tags, setTags] = useState(["وسم1", "وسم2"]);
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
      isActive: true,
      isWholesale: false,
    },
  });

  const isActive = watch("isActive");
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

    makePostRequest(
      setLoading,
      "api/products",
      data,
      "المنتج",
      reset,
      redirect
    );

    setProductImages([]);
    setTags([]);
    setShowModal(false);
  }

  return (
    <div dir="rtl">
      <FormHeader title="إضافة منتج جديد" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-4 bg-white border  dark:bg-gray-800 border-gray-200 rounded-lg shadow sm:p-6 mx-auto my-4"
      > 
        
             <MultipleImageInput
                imageUrls={productImages}
                setImageUrls={setProductImages}
                endpoint="multipleProductsUploader"
                label="صور المنتج"
              />
              <div className="grid gap-4">
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
                
              />

<button
  type="button"
  onClick={() => setShowModal(true)}
  className="flex items-center gap-2 w-36 bg-stone-950 text-white py-2 px-4 rounded-lg hover:bg-stone-700 transition"
>
  <Package  className="w-5 h-5" /> {/* الأيقونة */}
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
            buttonTitle="حفظ المنتج"
            loadingButtonTitle="جاري الحفظ..."
          />
        </div>
      </form>

      {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white w-full max-w-md  dark:bg-gray-800 h-auto rounded-lg shadow-xl relative">
      
      <button
      
        className="absolute left-3 top-3 text-gray-500 dark:text-gray-900 hover:text-red-500 text-2xl"
        onClick={() => setShowModal(false)}
      
      >
        &times;
      
      </button>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-center mb-4">
          بيانات إضافية للمنتج
        </h2>

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
            <ArrayItemsInput
              setItems={setTags}
              items={tags}
              itemTitle="وسم"
              className="text-sm"
            />
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
