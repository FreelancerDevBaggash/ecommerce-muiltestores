// import FormHeader from "@/components/backoffice/FormHeader";
// //import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
// import NewProductForm from '../../../../../../../components/backoffice/Forms/NewProductForm'
// //import NewProductForm from '../../../../../../components/backoffice/Forms/NewProductForm'
// import { getData } from '@/lib/getData'
// import React from "react"
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';

// export default async function UpdateProduct({params:{id}}){
    
//      const session = await getServerSession(authOptions);
//         const userId = session?.user?.id;
    
//         let storeId = "";
//         let categoryId = "";
    
//         if (userId) { 
//             // استرداد المتجر المرتبط بالمستخدم
//             const storeData = await getData(`stores?vendorId=${userId}`);
//             if (storeData && storeData.length > 0) {
//                 storeId = storeData[0].id;
                
//                 // استرداد الفئات المرتبطة بالمتجر
//                 if (storeId) {
//                     const categoriesData = await getData(`categories?storeId=${storeId}`);
//                     categoryId = categoriesData.map((category) => {
//                         return {
//                             id: category.id,
//                             title: category.title,
//                         };
//                     });
//                 }
//             }
//         }
//     const product = await getData(`products/${id}`) ;
    
  
//     return(
//         <div>
//             <FormHeader title="Update Product" />
//             <NewProductForm updateData = {product} categoryId={categoryId}/>
//         </div>

//     );
// }

import FormHeader from "@/components/backoffice/FormHeader";
import NewProductForm from "@/components/backoffice/Forms/NewProductForm";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import React from "react";

export default async function UpdateProduct({ params: { id } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  let storeId = "";
  let categories = [];
  let subCategories = [];

  if (userId) {
    const storeData = await getData(`stores?vendorId=${userId}`);
    if (storeData && storeData.length > 0) {
      storeId = storeData[0].id;

      if (storeId) {
        const categoriesData = await getData(`categories?storeId=${storeId}`);
        categories = categoriesData.map((category) => ({
          id: category.id,
          title: category.title,
        }));

        const subcategoriesData = await getData(`subcategory?storeId=${storeId}`);
        subCategories = subcategoriesData.map((subcategory) => ({
          id: subcategory.id,
          title: subcategory.title,
          categoryId: subcategory.categoryId,
        }));
      }
    }
  }

  const product = await getData(`products/${id}`);

  return (
    <div>
      <FormHeader title="تحديث المنتج" />
      <NewProductForm
        updateData={product}
        categoryId={categories}
        subCategoryId={subCategories}
        storeId={storeId}
      />
    </div>
  );
}
