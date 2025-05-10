
import React from "react"

// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import { getServerSession } from 'next-auth';
import {getData} from "../../../../../../lib/getData";
import NewCouponForm from '../../../../../../components/backoffice/NewCouponForm'
import { authOptions } from '@/lib/authOptions';
export default async function NewCoupon(){
  const sessions = await getServerSession(authOptions)
  console.log("➡ sessions:", sessions)

  const vendorId = sessions?.user?.id
  console.log("➡ vendorId:", vendorId)

  if (!vendorId) {
    // إذا لم يكن مسجلاً فقم بإعادة التوجيه إلى تسجيل الدخول
    redirect("/login")
  }

  const storeData = await getData(`stores?vendorId=${vendorId}`)
  console.log("➡ storeData:", storeData)

  const storeId = storeData?.[0]?.id
  console.log("➡ storeId:", storeId)

  return <NewCouponForm storeId={storeId}/>
}
