import React from 'react'
import NewPaymentProviderForm from "../../../../../components/backoffice/NewPaymentProviderForm";
import {getData} from "../../../../../lib/getData"


export default async function NewPaymentProvider() {
        //Categories 
// const categoriesData = await getData("categories")
// const categories = categoriesData.map((category)=>{
// return{
//     id:category.id,
//     title: category.title,
// };
// });
  return (
   <NewPaymentProviderForm />
  )
}
