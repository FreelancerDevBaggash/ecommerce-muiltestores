
import React from "react"

// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import { getServerSession } from 'next-auth';
import {getData} from "../../../../../../lib/getData";
import NewCouponForm from '../../../../../../components/backoffice/NewCouponForm'
import { authOptions } from '@/lib/authOptions';
export default async function NewCoupon(){

    // if(status === "loading"){
    //     return <p>Loading... </p>
    //   }
    const sessions = await getServerSession(authOptions)

    const vendorId = sessions?.user?.id;  
    let storeId = "";

    if (vendorId) { 
       // استرداد المتجر المرتبط بالمستخدم
       const storeData = await getData(`stores?vendorId=${vendorId}`);
      
        if (storeData && storeData.length > 0) {
            const store = storeData[0];
           storeId = store.id;
        }
    }
    console.log(vendorId)
  
  
    return(
 
    <NewCouponForm storeId={storeId}/>

    );
}