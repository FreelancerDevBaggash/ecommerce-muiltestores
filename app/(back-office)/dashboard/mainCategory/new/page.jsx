import React from 'react'
import NewMainCategoryForm from "../../../../../components/backoffice/NewMainCategoryForm";
import {getData} from "../../../../../lib/getData"


export default async function NewMainCategory() {
        //Categories 
// const categoriesData = await getData("categories")
// const categories = categoriesData.map((category)=>{
// return{
//     id:category.id,
//     title: category.title,
// };
// });
  return (
   <NewMainCategoryForm />
  )
}
