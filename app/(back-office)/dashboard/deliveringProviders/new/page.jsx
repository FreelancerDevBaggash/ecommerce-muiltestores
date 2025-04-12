import React from 'react'
import NewDeliveringProviderForm from "../../../../../components/backoffice/NewDeliveringProviderForm";
import {getData} from "../../../../../lib/getData"


export default async function NewDeliveringProvider() {
        //Categories 
// const categoriesData = await getData("categories")
// const categories = categoriesData.map((category)=>{
// return{
//     id:category.id,
//     title: category.title,
// };
// });
  return (
   <NewDeliveringProviderForm />
  )
}
