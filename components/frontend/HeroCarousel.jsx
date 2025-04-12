// "use client"
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Carousel  } from 'nuka-carousel';
// import React from 'react';



// export default function HeroCarousel({banners}){
//     const config = {
//         nextButtonClassName: "rounded-full",
//         nextButtonStyle:  <ChevronRight/>,
//         pagingDotsClassName: "me-2 w-4 h-4",
//         prevButtonClassName: "rounded-full",
//         prevButtonText: <ChevronLeft/>,

//       }
//   return (
//     <Carousel defaultControlsConfig={config} autoplay  className='rounded-md overflow-hidden' 
//     wrapAround >


//       {/* {
//         banners.map((banner, i) => {
//          return(
        
//           <Link key={i} href={banner.link} className=''> 
//           <Image src={banner.imageUrl}
//             className='w-full' width={712} height={384} 
//             alt={banner.title} />
//           </Link>
//          )
//         })
//       } */}


//     </Carousel>

//   );
// };
// "use client";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {Carousel} from 'nuka-carousel';
// import React from 'react';

// export default function HeroCarousel({banners}) {
//   console.log( Carousel)

//   const config = {
//             nextButtonClassName: "rounded-full",
//             nextButtonStyle:  <ChevronRight/>,
//             pagingDotsClassName: "me-2 w-4 h-4",
//             prevButtonClassName: "rounded-full",
//             prevButtonText: <ChevronLeft/>,
    
//           }
//   return (
   
//       <Carousel defaultControlsConfig={config} autoplay  className='rounded-md overflow-hidden' 
//     wrapAround >
//       {/* {banners.map((banner, i) => (
//         <Link key={i} href={banner.link}>
//           <div className="relative w-full h-64">
//             <Image 
//               src={banner.imageUrl} 
//               layout="fill" 
//               objectFit="cover" 
//               className="rounded-full"
//               alt={banner.title} 
//             />
//           </div>
//         </Link>
//       ))} */}
//       {
//        banners.map((banner, i) => {
//          return(
        
//           <Link key={i} href={banner.link} className=''> 
//           <Image src={banner.imageUrl}
//             className='w-full' width={712} height={384} 
//             alt={banner.title} />
//           </Link>
//          )
//         })}
      
//     </Carousel>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel({ banners = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(
        () => setCurrentIndex((i) => (i + 1) % banners.length),
        5000
      );
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  if (banners.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 md:h-[500px] bg-gray-200 rounded-lg">
        <p className="text-gray-500">No banners available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 md:h-[500px] overflow-hidden rounded-lg">
      {/* النص وزر تسوق الآن */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-30">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          مرحبًا بكم في متجرنا
        </h1>
        <Link href="/shop">
          <button className="mt-4 px-6 py-3 bg-lime-600 text-white rounded-lg text-lg shadow-lg hover:bg-lime-700">
            تسوق الآن
          </button>
        </Link>
      </div>

      {/* الصورة الرئيسية */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href={banner.link || "#"} className="block">
            <Image
              src={banner.imageUrl}
              alt={banner.title || "Banner"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </Link>
        </div>
      ))}

      {/* أزرار التنقل */}
      <button
        onClick={() =>
          setCurrentIndex((i) => (i - 1 + banners.length) % banners.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrentIndex((i) => (i + 1) % banners.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
