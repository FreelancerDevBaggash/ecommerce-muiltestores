import React from 'react';
import CategoryList from "../../../../components/frontend/CategoryList"
import { Link } from 'lucide-react';
import { getData } from "@/lib/getData";
// import Image from 'faker/lib/image';
import Breadcrumb from '../../../../components/frontend/Breadcrumb'
import Image from 'next/image';
export default async function page({params:{slug}}) {
    const mainCategory = await getData(`mainCategories/details/${slug}`);
    const mainCategoryIds = mainCategory.categoryIds ;
    console.log(mainCategoryIds);

    const categoriesData = await getData('categories')
    const categories = categoriesData.filter((category) =>{
      return category.products.length > 3;
    });
    const marketCategories=categories.filter((category) =>
    mainCategoryIds.includes(category.id));
    console.log(marketCategories);


   return (
   <>
   <Breadcrumb/>  
   <div className=' bg-white border border-gray-300 rounded-lg
    dark:bg-gray-700 dark:border-gray-700 p-4 text-sm   text-slate-800
dark:text-slate-200 ovreflow-hidden  flex items-center 
 gap-6' >
<div className=" ">
<Image src={mainCategory.logoUrl}
    width={50}
    height={50}
    alt={mainCategory.title}
    className="w-16 h-16 rounded-full object-cover"
    />
</div>
<div className="">
<h2 className='py-4 text-base  lg:text-4xl'>{mainCategory.title}
    </h2>
<p className='text-sm line-clamp-2 mb-4'>{mainCategory.description}</p>
</div>
</div>


<div className='grid grid-cols-12 gap-6 py-8 w-full' >
<div className='col-span-full sm:col-span-12  rounded-md'>
{
marketCategories.map((category, i)=> {
  return(
    <div className="space-y-8" key={i}>
    <CategoryList isMarketPage={false} category={category} />
    </div>
  );
})}
</div>
</div>


   </>
   
    );
    }













// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { getData } from "@/lib/getData";
// import CategoryList from '../../../../components/frontend/CategoryList';

// export default async function page() {
//   const allCategories = await getData("categories")
//     return (
     
//           <div className='grid grid-cols-12 gap-6 py-8 w-full'>
//           <div className="sm:col-span-2 sm:block bg-white border 
//     border-gray-300 rounded-lg dark:bg-gray-700 
//     dark:border-gray-700 p-4 text-slate-800 dark:text-slate-200
//     ovreflow-hidden hidden">
//                <div className="">
//                 <div className="flex items-center justify-center">
//                 <Image src="/tomato.webp" width={50} height={50} alt="" className='w-16 h-16
//              rounded-full object-cover' />
//                 </div>
//              <h2 className='py-4 text-sm text-center'>Sproute Vendors Market</h2>
//              <p className='text-sm line-clamp-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum aliquam. Praesentium ad ut deserunt delectus tempore molestiae ratione non asperiores maxime aspernatur voluptatum,
//                aliquam quae recusandae alias ea maiores.</p>
//                </div>
//                <div className="">
//                  <Link className='py-2' href="#">Category 1 </Link>
//                  <Link className='py-2' href="#">Category 1 </Link>
//                  <Link className='py-2' href="#">Category 1 </Link>
//                  <Link className='py-2' href="#">Category 1 </Link>
//                  <Link className='py-2' href="#">Category 1 </Link>
//                </div>
//           </div>
//           <div className="col-span-full sm:col-span-10  bg-blue-600  rounded-md">
//           {
//         allCategories.map((category, i)=> {
//           return(
//             <div className="py-8" key={i}>
//             <CategoryList category={category} />
//             </div>
//           )
//         })
//       }
//        </div>
//         </div>
//     );
// }

