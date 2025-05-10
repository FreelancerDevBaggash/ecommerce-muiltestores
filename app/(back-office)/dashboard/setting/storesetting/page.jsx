import { getData } from '@/lib/getData'
import React from "react"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import FormHeader from "../../../../../components/backoffice/FormHeader";
import UpdateStoreDataForm from "../../../../../components/backoffice/Forms/UpdateStoreDataForm"
export default async function UpdateStoreData(){

  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  
      // استرداد المتجر المرتبط بالمستخدم
      const storeData = await getData(`stores?vendorId=${userId}`, {mode:'real-time'});
     console.log("store dataaaaaaa", storeData)

return (
  <div>
    <FormHeader title="تحديث بيانات المتجر" />
    <UpdateStoreDataForm updateData={storeData}/>
  </div>
);

}
