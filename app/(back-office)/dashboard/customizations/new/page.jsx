// "use client";

import React from "react";
import CustomizationForm from "../../../../../components/backoffice/CustomizationForm";
import { getData } from "../../../../../lib/getData";
// import FormHeader from "../../../../../components/backoffice/FormHeader";
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/authOptions';

export default async function NewCustomization() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
let storeId = "";

if (userId) { 
   // استرداد المتجر المرتبط بالمستخدم
   const storeData = await getData(`stores?vendorId=${userId}`);
  
    if (storeData && storeData.length > 0) {
        const store = storeData[0];
       storeId = store.id;
       console.log('ghvkjdsuhjbsDc:', storeId)

    }
}
  
  return (
    <div>
      {/* <FormHeader title="Customization Settings" /> */}
      <CustomizationForm storeId={storeId}  />
    </div>
  );
}
