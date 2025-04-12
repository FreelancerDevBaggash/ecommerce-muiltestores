"use client"
// import {FormHeader} from "../../../../../../components/backoffice/FormHeader";
// import {NewCustomizationForm} from "../../../../../../components/backoffice/Forms/NewCustomizationForm";
import { getData } from '../../../../../../lib/getData';
import React from "react";
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../../lib/authOptions';
import { redirect } from 'next/navigation'; // لإعادة التوجيه في حالة عدم وجود جلسة
// import FormHeader from "../../../../../../components/backoffice/FormHeader";
//import NewProductForm from "../../../../../../components/backoffice/NewProductForm";
// import NewProductForm from '../../../../../../../components/backoffice/Forms/NewProductForm'
//import NewProductForm from '../../../../../../components/backoffice/Forms/NewProductForm'
// import { getData } from '@/lib/getData'
// import React from "react"
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';

export default async function UpdateCustomization({ params: { id } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    // في حال عدم وجود جلسة للمستخدم، إعادة التوجيه لصفحة تسجيل الدخول أو صفحة أخرى
    redirect('/login');
  }

  let storeId = "";

  try {
    // استرداد المتجر المرتبط بالمستخدم
    const storeData = await getData(`stores?vendorId=${userId}`);
    if (storeData && storeData.length > 0) {
      storeId = storeData[0].id;
    } else {
      throw new Error('No store found for this user.');
    }

    // استرداد التخصيص الخاص بالمتجر
    const customization = await getData(`customizations/${id}`);
    if (!customization) {
      throw new Error('Customization not found.');
    }

    return (
      <div>
        {/* <FormHeader title="Update Customization" /> */}
        {/* <NewCustomizationForm updateData={customization} storeId={storeId} /> */}
      </div>
    );

  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
}
