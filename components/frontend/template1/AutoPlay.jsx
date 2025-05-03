// import React from "react";

// const App = () => {
//   return (
//     <div className="min-h-screen m-10 bg-white text-center">
//       <h1 className="mt-10 text-2xl font-bold text-left mr-3">Who are you shopping for?</h1>
//       <div className="flex justify-center items-center mt-10 gap-5">
//         <div className="relative w-74 h-72 mr-3 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <img
//             src="/images/ww.jpg"
//             alt="Kids"
//             className="w-full h-full object-cover"
//           />
//           <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 text-lg font-medium rounded shadow-lg hover:bg-gray-100">
//              Kids →
//           </button>
//         </div>
//         <div className="relative w-74 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <img
//             src="/images/image-8.jpg"
//             alt="Women"
//             className="w-full h-full object-cover"
//           />
//           <button className="absolute items-center bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 text-lg font-medium rounded shadow-lg hover:bg-gray-100">
//           Women →
//           </button>
//         </div>
//         <div className="relative w-74 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <img
//             src="/images/image-8.jpg"
//             alt="Men"
//             className="w-full h-full object-cover"
//           />
//           <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 text-lg font-medium rounded shadow-lg hover:bg-gray-100">
//              Men →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;









// "use client";

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ShoppingCart } from "lucide-react";

// class AutoPlay extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//     //   centerMode: true, // لتوفير المسافات بين البطاقات
//     //   centerPadding: "20px", // مسافة أفقية
//     };

//     const products = [
//       {
//         id: 1,
//         name: "Product 1",
//         price: "$20",
//         image: "/images/image-7.jpg",
//         title: "Adidas Ultra Boost 2021 - Blue",
//         price: "$379",
//         oldPrice: "$599",
//         discount: "25% OFF",
//         rating: "4.8",
//       },
//       {
//         id: 2,
//         name: "Product 2",
//         price: "$30",
//         image: "/images/image-7.jpg",
//         title: "Adidas Ultra Boost 2021 - Blue",
//         price: "$379",
//         oldPrice: "$599",
//         discount: "25% OFF",
//         rating: "4.8",
//       },
//       {
//         id: 3,
//         name: "Product 3",
//         price: "$40",
//         image: "/images/image-7.jpg",
//         title: "Adidas Ultra Boost 2021 - Blue",
//         price: "$379",
//         oldPrice: "$599",
//         discount: "25% OFF",
//         rating: "4.8",
//       },
//       {
//         id: 4,
//         name: "Product 4",
//         price: "$50",
//         image: "/images/image-7.jpg",
//       },
//       {
//         id: 5,
//         name: "Product 5",
//         price: "$60",
//         image: "/images/image-7.jpg",
//       },
//       {
//         id: 6,
//         name: "Product 6",
//         price: "$70",
//         image: "/images/image-7.jpg",
//       },
//     ];

//     return (

     
//      <div className="slider-container  p-6  w-auto h-auto   ">
//            <h2 className="text-2xl font-bold text-right text-gray-800 dark:text-gray-100 ">
//         وصل حديثا
//       </h2>
//         <Slider {...settings}>
      
//           {products.map((product) => (
            
//             <div key={product.id} className="carousel-container overflow-hidden rounded-sm m-2 p-6 relative grid   gap-5  hover:shadow-xl transition-shadow">
            
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 title={product.title} 
//                 price={product.price} 
//                 oldPrice={product.oldPrice}
//                 discount={product.discount}
//                 rating={product.rating}
//                 className="product-image w-auto h-auto"
//               />
//               <h3 className="product-name text-1xl font-semibold ">{product.name}</h3>
//               <p className="product-price text-1xl ">{product.title}</p>
//               <p className="product-price text-2xl font-bold">{product.price}</p>
//               <p className="product-price text-sm ml-2 font-sans text-lime-600 ">{product.discount}</p>

//               <button  className="flex items-center bg-lime-700 text-white p-1 px-1 ml-auto rounded-md hover:bg-lime-800 transition">
//                   <ShoppingCart size={12} />
//                   <span className="ml-2 ">Add to Cart</span>
//                 </button>
//             </div>
//           ))}
//         </Slider>
//         </div>
  
//     );
//   }
// }

// export default AutoPlay;
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

export default function AutoPlay({ customization = {} }) {
  const { theme } = useTheme(); // تحديد وضع الثيم الحالي

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Define color and styling options
  const primaryColor = customization?.primaryColor || "#4CAF50";
  const secondaryColor = customization?.secondaryColor || "#2C3E50";
  const accentColor = customization?.accentColor || "#FFC107";
  const backgroundColor = customization?.backgroundColor || "#FFFFFF";
  const darkBackground = customization?.darkBackground || "#1E293B"; // Ensure darkBackground is defined
  const fontFamily = customization?.fontFamily || "sans-serif";

  const products = [
    { id: 1, name: "Adidas Ultra Boost 2021", price: "$379", discount: "25% OFF", image: "/images/image-7.jpg" },
    { id: 2, name: "Nike Air Max 2022", price: "$379", discount: "25% OFF", image: "/images/image-7.jpg" },
    { id: 3, name: "Puma RS-X", price: "$379", discount: "25% OFF", image: "/images/image-7.jpg" },
    { id: 4, name: "New Balance 574", price: "$50", image: "/images/image-7.jpg" },
    { id: 5, name: "Vans Old Skool", price: "$60", image: "/images/image-7.jpg" },
    { id: 6, name: "Reebok Classic", price: "$70", image: "/images/image-7.jpg" },
  ];

  return (
    <div
      className="p-6 w-auto m-5 h-auto dark:bg-slate-800"
      style={{ 
        backgroundColor: theme === "dark" ? darkBackground : backgroundColor, 
        fontFamily 
      }}
    >
      {/* Section Title */}
      <h2
        className="text-2xl font-bold text-right mb-4"
        style={{ color: secondaryColor }}
      >
        New Arrivals
      </h2>

      {/* Slider Component */}
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-md m-2 p-6 relative grid gap-5 
            shadow-md hover:shadow-lg transition-shadow dark:bg-gray-900"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Details */}
            <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-green-600">{product.price}</p>
              {product.discount && (
                <span className="text-sm font-medium text-red-500">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex items-center justify-center bg-lime-700 text-white py-2 px-4 
              rounded-md hover:bg-lime-800 transition-all w-full"
              style={{ backgroundColor: primaryColor }}
            >
              <ShoppingCart size={18} />
              <span className="ml-2">Add to Cart</span>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
