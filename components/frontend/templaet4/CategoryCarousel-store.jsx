// "use client"
// import React from 'react'
// import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css"
// //import Product from "@/components/frontend/Product"
// import Product from '../../../components/frontend/Product'
// import { BaggageClaim } from 'lucide-react'
// import ProductSwitch from './ProductSwitch'

// export default function CategoryCarouselstore({ isMarketPage=false, products={} ,customization= {}}){
//   const primaryColor = customization.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; 
//   const accentColor = customization.accentColor || "#FFC107"; 
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization.darkBackground || "#1E293B"; 
//   const fontFamily = customization.fontFamily || "sans-serif"; 

//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: isMarketPage ? 3 : 4,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: isMarketPage ? 2: 3,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items:  2,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       };
    
//   return (
//  <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={true}
//   autoPlaySpeed={5000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={1000}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//  // deviceType={}
//   dotListClass="custom-dot-list-style"
//   itemClass="px-4"
// >


//  {
//  products.map((product, i)=>{
//  return(
//  <ProductSwitch product={product} key={i} customization={customization}/>
//  );

//  })

//  }

//  </Carousel>

//   );
//       }
// "use client"; // Ensures client-side rendering

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // import Product from "@/components/frontend/Product"; // Uncomment if needed
// import Product from "../../../components/frontend/Product";
// import ProductSwitch from "./ProductSwitch"; // Custom product switch component

// export default function CategoryCarouselstore({
//   isMarketPage = false,
//   products = [],
//   customization = {},
// }) {
//   // Destructure customization object or set default values
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟

//   // Define responsive breakpoints for carousel
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: isMarketPage ? 3 : 4,
//       slidesToSlide: 3, // optional, default to 1
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: isMarketPage ? 2 : 3,
//       slidesToSlide: 2, // optional, default to 1
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2,
//       slidesToSlide: 1, // optional, default to 1
//     },
//   };

//   return (
//     <Carousel
//       swipeable={false}
//       draggable={false}
//       showDots={true}
//       responsive={responsive}
//       ssr={true} // Render carousel on the server-side for SSR
//       infinite={true} // Enable infinite loop of items
//       autoPlay={true} // Enable autoplay
//       autoPlaySpeed={5000} // Speed of autoplay in milliseconds
//       keyBoardControl={true} // Allow keyboard control for navigation
//       customTransition="all .5" // Custom smooth transition for items
//       transitionDuration={1000} // Duration of the transition
//       containerClass="carousel-container"
//       removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on small devices
//       dotListClass="custom-dot-list-style"
//       itemClass="px-4" // Add padding to carousel items
//       style={{ backgroundColor: backgroundColor, fontFamily: fontFamily }} // Apply dynamic background color and font
//     >
//       {/* Render products dynamically using map */}
//       {products.length > 0 ? (
//         products.map((product, i) => (
//           <ProductSwitch product={product} key={i} customization={customization} />
//         ))
//       ) : (
//         <div>No products available</div> // Display a message if no products exist
//       )}
//     </Carousel>
//   );
// }


"use client"; // Ensures client-side rendering

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductSwitch from "./ProductSwitch"; // Custom product switch component

// مكون السهم الأيسر المخصص
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
      style={{ border: "2px solid #ccc" }}
    >
      <svg width="20" height="20" fill="currentColor" className="text-gray-700" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.293 16.293a1 1 0 01-1.414 0L5.586 11.999l5.293-5.293a1 1 0 011.414 1.414L8.414 12l3.879 3.879a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

// مكون السهم الأيمن المخصص
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
      style={{ border: "2px solid #ccc" }}
    >
      <svg width="20" height="20" fill="currentColor" className="text-gray-700" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.707 16.293a1 1 0 010-1.414L11.586 12 7.707 8.121a1 1 0 011.414-1.414l4.293 4.293a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default function CategoryCarouselstore({
  isMarketPage = false,
  products = [],
  customization = {},
}) {
  // إعداد متغيرات التخصيص مع القيم الافتراضية
  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true; // هل التخصيص مفعل؟

  // تحديد نقاط الانكسار (breakpoints) للكاروسيل
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isMarketPage ? 3 : 4,
      slidesToSlide: isMarketPage ? 3 : 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: isMarketPage ? 2 : 3,
      slidesToSlide: isMarketPage ? 2 : 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className="relative py-8"
      style={{ backgroundColor: backgroundColor, fontFamily: fontFamily }}
    >
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // للعرض على الخادم (SSR)
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="px-2"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {products.length > 0 ? (
          products.map((product, i) => (
            <div key={i} className="p-2">
              <ProductSwitch product={product} customization={customization} />
            </div>
          ))
        ) : (
          <div className="text-center p-8" style={{ color: secondaryColor }}>
            No products available
          </div>
        )}
      </Carousel>
      {/* تنسيق خاص للنقاط (dots) */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          padding: 0 40px; /* تعديل المسافة للأزرار */
        }
        .custom-dot-list-style {
          bottom: -25px;
        }
        .custom-dot-list-style li {
          display: inline-block;
          margin: 0 5px;
        }
        .custom-dot-list-style li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${accentColor};
          border: none;
          transition: background 0.3s ease;
        }
        .custom-dot-list-style li.slick-active button {
          background: ${primaryColor};
        }
      `}</style>
    </div>
  );
}


        // يمكن إضافة المزيد من المنتجات هنا
        // const products = [
        //   {
        //     id: 1,
        //     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //     title: "Nike Air MX Super 2500 - Red",
        //     price: "$449",
        //     oldPrice: "$699",
        //     discount: "39% OFF",
        //     rating: "5.0",
        //   },
        //   {
        //     id: 2,
        //     image: "https://images.unsplash.com/photo-1533090255985-620d48b5a0b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwzNjJ8c2VhcmNofDJ8fG5pa2UuY2Fpc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
        //     title: "Adidas Ultra Boost 2021 - Blue",
        //     price: "$379",
        //     oldPrice: "$599",
        //     discount: "25% OFF",
        //     rating: "4.8",
        //   },
        //   {
        //     id: 3,
        //     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //     title: "Adidas Ultra Boost 2021 - Blue",
        //     price: "$379",
        //     oldPrice: "$599",
        //     discount: "25% OFF",
        //     rating: "4.8",
        //   },
        //   {
        //     id: 4,
        //     image: "https://images.unsplash.com/photo-1533090255985-620d48b5a0b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwzNjJ8c2VhcmNofDJ8fG5pa2UuY2Fpc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
        //     title: "Adidas Ultra Boost 2021 - yellow",
        //     price: "$379",
        //     oldPrice: "$599",
        //     discount: "25% OFF",
        //     rating: "4.8",
        //   },
        //   {
        //     id: 5,
        //     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //     title: "Adidas Ultra Boost 2021 - orange",
        //     price: "$379",
        //     oldPrice: "$599",
        //     discount: "25% OFF",
        //     rating: "4.8",
        //   },
        //   {
        //     id: 6,
        //     image: "https://images.unsplash.com/photo-1533090255985-620d48b5a0b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwzNjJ8c2VhcmNofDJ8fG5pa2UuY2Fpc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
        //     title: "Adidas Ultra Boost 2021 - plue",
        //     price: "$379",
        //     oldPrice: "$599",
        //     discount: "25% OFF",
        //     rating: "4.8",
        //   },];
      


// "use client"
// import React from 'react'
// import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css"
// import Link from 'next/link'
// import Image from 'next/image'
// import { BaggageClaim } from 'lucide-react'

// export default function CategoryCarousel({products}){

//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 4,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 3,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 2,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       };

      
//   return (
//  <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={true}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//  // deviceType={}
//   dotListClass="custom-dot-list-style"
//   itemClass="px-4"
// >


// {
// products.map((product, i)=>{
// return(
//     <div key={i}  className='rounded-lg mr-3  bg-white
//     dark:bg-slate-900 overflow-hidden border shadow'>
//       <Link href={`/products/${product.slug}`}>
//       <Image src={product.imageUrl}
//      alt={product.title}
//      width={290} height={174} className="w-full h-48 object-cover" />
//       </Link>
//      <div className="px-4">
//      <Link href={`/products/${product.slug}`}>
//         <h2 className='text-center text-slate-800
//      dark:text-slate-200 my-2 font-semibold'> {product.title} </h2>
//         </Link>
//         <div className="flex items-center justify-between
//          gap-2 pb-3 dark:text-slate-200 text-slate-800">
//           <p>UGX {product.price} </p>
//           <button className='flex items-center space-x-2
//            bg-lime-600 px-4 py-2 rounded-md text-white'>
//             <BaggageClaim/>
//             <span>Add</span>
//           </button>
//         </div>
//      </div>
//       </div>
// )

// })

// }

// </Carousel>
//   );
// }