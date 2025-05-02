// import {getData} from '../../lib/getData'
import {getData} from '../../../lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarouselstore from './HeroCarousel-store'     
import { CircleDollarSign, FolderSync, HelpCircle, HelpCircleIcon, LinkedinIcon } from 'lucide-react'
import advert from '../../../public/div.gif'
// import Brands from './Brands'

export default async function Herostore({storeId , customization ={}}) {
  const categoriesData = await getData(`categories?storeId=${storeId}`);
   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
    const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
    const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
    const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
    const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
    const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟
//         const categories = categoriesData.filter((category)=>{
//           return category.products.length > 0;
//         });
 const banners = await getData(`banners?storeId=${storeId}`)
  return (
    <div className="col-span-full sm:col-span-7   bg-blue-600  rounded-md"  >
      
    <HeroCarouselstore banners={banners} category={categoriesData}   customization={customization}/>


</div>


    // <div className='grid grid-cols-12 gap-8 mp-6 '>
    //  {/* <SidebarCategories categoriesData={categoriesData} /> */}
     
    // {/* <div className="col-span-2 hidden sm:block bg-white p-3 dark:bg-slate-800 rounded-lg ">
    //   <Link href="#" className="flex items-center space-x-1 mb-3">
    //     <HelpCircle className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900 "/>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="uppercase text-sm" >help Center</h2>
    //       <p className="text-[0.7rem]">Guide to customar care </p>
    //     </div>
    //   </Link>
    //   <Link href="#" className="flex items-center space-x-1 mb-3">
    //     <FolderSync className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900"/>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="uppercase text-sm" >Easy Return</h2>
    //       <p className="text-[0.7rem]">Quick Return </p>
    //     </div>
    //   </Link>

    //   <Link href="#" className="flex items-center space-x-1 mb-6">
    //     <CircleDollarSign className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900 "/>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="uppercase text-sm" >Sell on Limi</h2>
    //       <p className="text-[0.7rem]">Million of Vistors </p>
    //     </div>
    //   </Link>

    //   <Image src={advert} alt='' className='w-full rounded-lg'/>
    // </div> */}
    // </div>
  )
}
