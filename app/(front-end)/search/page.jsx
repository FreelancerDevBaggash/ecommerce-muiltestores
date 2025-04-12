import React from 'react'
import FilterComponent from '../../../components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData'

export default async function Search({searchParams}) {

   // اخر تعديل لم يتم تنفيذه
    // const  {sort = "asc" , min = 0 , max = "" , page = 1 , search = ""} = searchParams;
    // const products = await getData(`products/search?search=${search}&page=${page}&sort=${sort}&min=${min}&max=${max}`)

    const  {sort , min , max , search } = searchParams;
    const page = searchParams.page || 1 ;
   
    let products;
   if(search){
    products = await getData(`products?search=${search}`)
   }else{
         products = await getData(`products?search=`)
    }
    const category = {
        title:search,
        slug:"",
        products,
        isSearch:true
    }
    //Pagination

    //const  products  = category;
   // console.log(products)
    return (
        <div>
            {/* <h2> Catagory Page- {slug}</h2> */}
            <FilterComponent  category={category} products={products} />
            
        </div>
  
    )
}

