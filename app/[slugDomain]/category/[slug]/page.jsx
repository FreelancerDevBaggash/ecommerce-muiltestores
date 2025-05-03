// import React from 'react'
// import FilterComponent from '../../../../components/frontend/Filter/FilterComponent'
// import { getData } from '@/lib/getData'

// export default async function Page({params:{slug}, searchParams}) {
//    // اخر تعديل لم يتم تنفيذه
//     // const  {sort = "asc" , min = 0 , max = "" , page = 1} = searchParams;
//     // const category = await getData(`categories/filter/${slug}`);
//     // let products = await getData(`products?catId=${category.id}&page=${page}&sort=${sort}&min=${min}&max=${max}`)


//     const  {sort , min , max} = searchParams;
//     const page = searchParams.page || 1 ;
//     const category = await getData(`categories/filter/${slug}`)
//     let products;
//    if(page){
//     products = await getData(`products?catId=${category.id}&page=${page}`)
//    }else if(max && min){
//         products = await getData(`products?catId=${category.id}&sort=asc&min=${min}&max=${max}`)
//     }else  if(min){
//         products = await getData(`products?catId=${category.id}&sort=asc&min=${min}`)
//     }else if(max){
//         products = await getData(`products?catId=${category.id}&sort=asc&max=${max}`)
//     }else if(sort){
//         products = await getData(`products?catId=${category.id}&sort=${sort}`)
//    }else{
//          products = await getData(`products?catId=${category.id}`)
//     }
   
//     //Pagination

//     //const  products  = category;
//    // console.log(products)
//     return (
//         <div>
//             <h2> قسم- {slug}</h2>
//             <FilterComponent category={category} products={products} />
            
//         </div>
//     )
// }


import React from 'react';
import FilterComponent from '../../../../components/frontend/template6/Filter/FilterComponent';
import { getData } from '@/lib/getData';

export default async function Page({ params: { slug }, searchParams }) {
  // استخدم قيم البحث الافتراضية
  const { sort, min, max, page = 1 } = searchParams;

  // جلب بيانات التصنيف
  const category = await getData(`categories/filter/${slug}`);

  // بناء سلسلة استعلام ديناميكية لتقليل الشروط المتفرعة
  const queryParams = new URLSearchParams();
  queryParams.append('catId', category.id);
  queryParams.append('page', page);
  if (sort) queryParams.append('sort', sort);
  if (min) queryParams.append('min', min);
  if (max) queryParams.append('max', max);

  // جلب المنتجات باستخدام سلسلة الاستعلام الموحدة
  const products = await getData(`products?${queryParams.toString()}`);

  return (
    <div dir='rtl'>
      {/* <h2>قسم - {slug}</h2> */}
      <FilterComponent category={category} products={products} />
    </div>
  );
}
