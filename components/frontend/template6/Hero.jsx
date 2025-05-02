// import {getData} from '../../lib/getData'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getData } from '../../../lib/getData';
import dynamic from 'next/dynamic';
import HeroCarousel from './HeroCarousel';
import CategoryList from './CategoryList'; // تأكد من المسار الصحيح
const AutoPlay = dynamic(() => import('./AutoPlay').catch(() => () => null));
const CategorySlider = dynamic(() => import('./CategorySlider'));
const Testimonials = dynamic(() => import('./Testimonials'));
// const AutoPlay = dynamic(() => import('./AutoPlay').catch(() => () => null));
export default async function Hero({ storeId, customization ={}, slugDomain }) {
  const banners = await getData(`/banners?storeId=${storeId}`);
  const categoriesData = await getData(`/categories?storeId=${storeId}`);
  const productsData = await getData(`/products?storeId=${storeId}`);

  const categories = categoriesData.filter(
    (category) => category.products && category.products.length > 0
  );

  const primaryColor = customization.primaryColor || '#4CAF50';
  const secondaryColor = customization.secondaryColor || '#2C3E50';
  const accentColor = customization.accentColor || '#FFC107';
  const backgroundColor = customization.backgroundColor || '#FFFFFF';
  const fontFamily = customization.fontFamily || 'sans-serif';
  const isActive = customization.isActive ?? true;

  return (
    <section className='mt-4'>
      <HeroCarousel banners={banners} category={categoriesData} customization={customization} />


      {categories.length > 0 && (
        <CategorySlider categories={categories} customization={customization} slugDomain={slugDomain} />

        
      )}
      
      <AutoPlay  className="container" customization={customization} products={productsData}  slugDomain={slugDomain}/>
      {categories.map((category, i) => (
        <div className="container py-4" key={i}>
          <CategoryList
            slugDomain={slugDomain}
            isMarketPage={false}
            category={category}
            customization={customization}
          />


        </div>


      ))}
                <Testimonials 
          storeId={storeId}
       
          customization={customization}
        />
    </section>
  );
}



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
  // )
// }
