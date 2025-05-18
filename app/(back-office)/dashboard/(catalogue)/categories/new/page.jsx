export const dynamic = "force-static";

import React from "react"
import NewCategoryForm from "../../../../../../components/backoffice/NewCategoryForm";
import {getData} from "../../../../../../lib/getData";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function NewCategory(){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    let storeId = "";
    let mainCategoryId = "";

    if (userId) { 
       // استرداد المتجر المرتبط بالمستخدم
       const storeData = await getData(`stores?vendorId=${userId}` , { mode: 'real-time'});
      
        if (storeData && storeData.length > 0) {
            const store = storeData[0];
           storeId = store.id;
           mainCategoryId = store.mainCategoryId;
        }
    }
   
    console.log(storeId)
  console.log(mainCategoryId)

    return(
    <NewCategoryForm 
    storeId={storeId}
         mainCategoryId={mainCategoryId}
    />

    );
}









