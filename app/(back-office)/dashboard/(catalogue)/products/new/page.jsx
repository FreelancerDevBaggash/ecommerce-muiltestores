// import React from 'react'
// import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
// import {getData} from "../../../../../../lib/getData"
// import FormHeader from '../../../../../../components/backoffice/FormHeader';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';

// export default async function NewProduct() {
//     //Categories and Vendors
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;

//     let storeId = "";
//     let categoryId = "";

//     if (userId) { 
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores?vendorId=${userId}`);
//         if (storeData && storeData.length > 0) {
//             storeId = storeData[0].id;
            
//             // استرداد الفئات المرتبطة بالمتجر
//             if (storeId) {
//                 const categoriesData = await getData(`categories?storeId=${storeId}`);
//                 categoryId = categoriesData.map((category) => {
//                     return {
//                         id: category.id,
//                         title: category.title,
//                     };
//                 });
//             }
//         }
//     }
// console.log(categoryId)

//   return (
//      <div>
//          {/* <FormHeader title="New Product" /> */}
//     <NewProductForm categoryId={categoryId} storeId={storeId} />
//      </div>
//   )
// }

// import React from 'react'
// import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
// import {getData} from "../../../../../../lib/getData"
// import FormHeader from '../../../../../../components/backoffice/FormHeader';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '../../../../../../lib/authOptions';

// export default async function NewProduct() {
//     //Categories and Vendors
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;

//     let storeId = "";
//     let categoryId = "";

//     if (userId) { 
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores?vendorId=${userId}`);
//         if (storeData && storeData.length > 0) {
//             storeId = storeData[0].id;
            
//             // استرداد الفئات المرتبطة بالمتجر
//             if (storeId) {
//                 const categoriesData = await getData(`categories?storeId=${storeId}`);
//                 categoryId = categoriesData.map((category) => {
//                     return {
//                         id: category.id,
//                         title: category.title,
//                     };
//                 });
//             }
//         }
//     }
// console.log(categoryId)

//   return (
//      <div>
//          {/* <FormHeader title="New Product" /> */}
//     <NewProductForm categoryId={categoryId} storeId={storeId} />
//      </div>
//   )
// }


import React from 'react'
import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
import { getData } from "../../../../../../lib/getData"
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../../lib/authOptions';

export default async function NewProduct() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    let storeId = "";
    let categoriesWithSub = [];

    if (userId) {
        // 1. جلب المتجر المرتبط بالمستخدم
        const storeData = await getData(`stores?vendorId=${userId}`);
        if (storeData && storeData.length > 0) {
            storeId = storeData[0].id;

            // 2. جلب الفئات المرتبطة بالمتجر
            const categoriesData = await getData(`categories?storeId=${storeId}`);

            // 3. جلب الأقسام الفرعية لكل فئة
            const categoriesWithSubsPromises = categoriesData.map(async (category) => {
                const subcategories = await getData(`subcategory?categoryId=${category.id}`);
                return {
                    id: category.id,
                    title: category.title,
                    subcategories: subcategories.map((sub) => ({
                        id: sub.id,
                        title: sub.title,
                        categoryId: sub.categoryId
                    }))
                };
   
            });

            categoriesWithSub = await Promise.all(categoriesWithSubsPromises);
        }
    }
    return (
        <div>
            {/* <FormHeader title="New Product" /> */}
            <NewProductForm categories={categoriesWithSub} storeId={storeId} />
        </div>
    );
}
