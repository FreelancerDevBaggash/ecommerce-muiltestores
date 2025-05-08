import React from 'react'
import NewSubscriptionPlanPage from "../../../../../components/backoffice/NewSubscriptionPlanPage";
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
   <NewSubscriptionPlanPage />
  )
}
