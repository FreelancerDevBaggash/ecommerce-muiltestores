// import {getData} from '../../lib/getData'
import {getData} from '../../../lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel-store'     
import { CircleDollarSign, FolderSync, HelpCircle, HelpCircleIcon, LinkedinIcon } from 'lucide-react'
import advert from '../../../public/div.gif'
// import SidebarCategories from './SidebarCategories'

export default  function Bannering({storeId ,customization={},banners={} }) {
  // const categoriesData = await getData(`categories?storeId=${storeId}`);
//         const categories = categoriesData.filter((category)=>{
//           return category.products.length > 0;
//         });
//  const banners = await getData(`banners?storeId=${storeId}`)
  return (
    <div className="col-span-full sm:col-span-3   bg-blue-600  rounded-md"  >
    <HeroCarousel storeId={storeId} banners={banners} customization={customization} />
   

</div>


  )
}
