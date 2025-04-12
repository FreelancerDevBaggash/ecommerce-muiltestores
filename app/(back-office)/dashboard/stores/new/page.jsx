import React from 'react'
import NewStoreForm from "../../../../../components/backoffice/NewStoreForm";
import {getData} from "../../../../../lib/getData"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function NewMainCategory() {
    // الحصول على الجلسة والمستخدم الحالي
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
  console.log(userId)
    if (!userId) {
      // إذا لم يكن هناك userId، يمكنك معالجة الحالة (مثل إعادة توجيه المستخدم أو عرض رسالة)
      return <p>You need to log in to create a store.</p>;
    }

  const mainCategoriesData = await getData("mainCategories");
  const mainCategories = mainCategoriesData.map((mainCategory)=>{
      return{
          id:mainCategory.id,
          title: mainCategory.title,
      };
      });

  return (
   <NewStoreForm mainCategories={mainCategories} user={userId} />

  )
}
