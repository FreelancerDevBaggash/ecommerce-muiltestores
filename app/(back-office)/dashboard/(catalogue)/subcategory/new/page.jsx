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
import React from 'react'
import NewSubCategoryForm from "../../../../../../components/backoffice/NewSubCategoryForm";
import {getData} from "../../../../../../lib/getData"
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../../lib/authOptions';

export default async function NewSubcategory() {
  // 1. جلب الجلسة
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  if (!userId) {
    console.log("User session not found.")
    return null
  }

  // 2. جلب متجر البائع
  const stores = await getData(`stores?vendorId=${userId}`, { mode: "real-time" })
  if (!stores || stores.length === 0) {
    console.log("No store found for the user.")
    return null
  }
  const store = stores[0]
  const storeId = store.id

  // 3. جلب بيانات الاشتراك من المتجر
  //    (افترضنا أن `store.subscription` موجود ضمن البيانات)
  const planId = store.subscription?.planId ?? 0
  console.log("planIdplanIdplanId",planId)
  // 4. تعيين الحد الأقصى للفئات الفرعية لكل خطة
  let subcategoryLimit = 0
  if (planId === 1) {
    subcategoryLimit = 1;
  } else if (planId === 2) {
    subcategoryLimit = 2;
  } else if (planId === 3) {
    subcategoryLimit = 10;
  }
  // 5. جلب جميع التصنيفات المرتبطة بالمتجر
  const categoriesData = await getData(`categories?storeId=${storeId}`, { mode: "real-time" })

  // 6. للوقوف على عدد الفئات الفرعية لكل تصنيف
  const categoriesOptions = await Promise.all(
    categoriesData.map(async (cat) => {
      // جلب الفئات الفرعية الخاصة بهذا التصنيف
      const subs = await getData(`subcategory?categoryId=${cat.id}`, { mode: "real-time" })
      const count = subs?.length ?? 0

      const disabled = count >= subcategoryLimit
      const message = disabled
        ? `تجاوزت الحد (${subcategoryLimit}) من الفئات الفرعية لهذه الفئة حسب باقتك.`
        : ""

      return {
        id: cat.id,
        title: cat.title,
        disabled,
        message,
      }
    })
  )

  console.log("Categories options with limits:", categoriesOptions)

  return (
    <div>
      <NewSubCategoryForm
        storeId={storeId}
        categories={categoriesOptions}
      />
    </div>
  )
}

