
// import  Link  from "next/link";
// import React from 'react'
// import MarketList from '../../components/frontend/MarketList';
// import CategoryList from '../../components/frontend/CategoryList';
// import Hero from '../../components/frontend/Hero'
// import CommunityTrainings from '../../components/frontend/CommunityTrainings'
// import { getData } from "@/lib/getData";
// import { authOptions } from "../../lib/authOptions"
// import { getServerSession } from "next-auth";
  
// export default async function Home() {
//   const categoriesData = await getData('categories');
//   const categories = categoriesData.filter((category)=>{
//     return category.products.length > 2;
//   });
//   const trainings = await getData('trainings')
//   const session = await getServerSession(authOptions);
//   console.log(session?.user)
//   return (
//   <div className="min-h-screen">
//     <Hero/>
//     <MarketList/>


//       {
//         categoriesData.map((category, i)=> {
//           return(
//             <div className="py-8" key={i}>
//             <CategoryList isMarketPage={false} category={category} />
//             </div>
//           )
//         })
//       }
//     <CommunityTrainings title=" Featured Trainings" trainings={trainings.slice(0, 3)}/>
   

//      </div>
//   );
// }

// import React from 'react';
// import logo from '../../public/reshotq.svg';
// import Link from 'next/link';
// import Image from 'next/image';
// import Herohome from'@/components/frontend/front-end_home/Hero_home'
// export default function Page() {
//   return (



// <div className=' '>
// {/* القسم الأول: العنوان والنص والأزرار */}

// <Herohome  className=" " />
// </div>

    


//   );
// }

import React from 'react';
import logo from '../../public/reshotq.svg';
import Link from 'next/link';
import Image from 'next/image';
import Herohome from'../../components/frontend/front-end_home/Hero_home'
import NeuralVision from'../../components/frontend/front-end_home/NeuralVision'
// import Skills from'../../components/frontend/front-end_home/Skills'
import BeautySection from'../../components/frontend/front-end_home/BeautySection'
import PartnersSection from'../../components/frontend/front-end_home/PartnersSection'



export default function Page() {
  return (



<div className=' '>
{/* القسم الأول: العنوان والنص والأزرار */}

<Herohome  className=" " />
<NeuralVision/>
{/* <Skills/> */}
<BeautySection/>
<PartnersSection/>

</div>

    


  );
}
// import Hero_home from "@/components/frontend/templaet5/Hero_home"
// import FeaturedProduct1 from "@/components/frontend/templaet5/FeaturedProduct1"
// import Categories from "@/components/frontend/templaet5/Categories"
// import SpecialOffers from "@/components/frontend/templaet5/SpecialOffers"
// import Testimonials from "@/components/frontend/templaet5/Testimonials"
// import Newsletter from "@/components/frontend/templaet5/Newsletter"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <Hero_home />
//       <Categories />
//       <FeaturedProduct1 />
//       <SpecialOffers />
//       <Testimonials />
//       <Newsletter />
//     </main>
//   )
// }

