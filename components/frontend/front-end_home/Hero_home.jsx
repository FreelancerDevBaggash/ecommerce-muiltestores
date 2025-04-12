// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";
// import heroImage from "@/public/reshotqq.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Herohome() {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       offset: 200,
//     });

//     // يمكنك إضافة الدالة fetchBanners إذا كنت تستخدم بيانات حقيقية.
//   }, []);

//   return (
//     <div className="bg-slate-50 dark:bg-gray-800 py-9 w-full h-full">
//       <div className="text-content-container-foreground container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* القسم الأول */}
//         <h1 className="text-indigo-700 dark:text-white font-mono text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//           منصة ميجاشوب .. تجارة ذكية وسهلة
//         </h1>
//         <p className="text-violet-950 dark:text-slate-200 text-center text-lg sm:text-xl lg:text-2xl mb-8">
//           أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button className="bg-secondary font-bold rounded-xl px-6 py-2 text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white transition">
//             أنشئ متجرك مجانًا
//           </button>
//           <button className="bg-indigo-700 font-bold rounded-xl px-6 py-2 text-white border-2 border-indigo-700 hover:bg-secondary hover:text-indigo-700 transition">
//             تجربة المنصة
//           </button>
//         </div>

//         {/* القسم الثاني */}
//         <div className="relative mt-12 h-64 sm:h-96 lg:h-[500px]   w-full" data-aos="fade-up">
//           <Image
//             src={heroImage}
//             alt="صورة بطل"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* القسم الثالث */}
//         <div className="py-16">
//           <h2 className="text-center text-2xl dark:bg-gray-800sm:text-3xl lg:text-4xl font-bold mb-12 text-indigo-700">
//             حلولنا تناسب جميع الأنشطة التجارية
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: "عبايات وأزياء", desc: "مزايا عديدة تلائم تجارتك" },
//               { title: "المطاعم والمقاهي", desc: "جميع ما تحتاجه لإدارة أعمالك رقميا" },
//               { title: "قطاع الجملة", desc: "نقلة نوعية في البيع للشركات والمؤسسات" },
//               { title: "صناعة المحتوى", desc: "المكان الأنسب لتحويل شغفك إلى أرباح" },
//               { title: "تقديم الخدمات", desc: "حلول مميزة لإدارة أعمالك" },
//               { title: "المنتجات الرقمية", desc: "المكان الأنسب لبيع المنتجات الرقمية" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center bg-white dark:bg-gray-300 text-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//                 data-aos="fade-up"
//               >
//                 <FaCheckCircle className="text-4xl text-primary mb-4" />
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-center">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import heroImage from "@/public/reshotqq.svg";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Herohome() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
    });

    // يمكنك إضافة الدالة fetchBanners إذا كنت تستخدم بيانات حقيقية.
  }, []);

  return (
    <section
    id="hero"
    className="min-h-screen relative  rounded-3xl mx-4 mt-1 overflow-hidden bg-black"
  >
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute  inset-0 w-full h-full  object-cover z-0"
      >
        <source src="/images/home3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className=" dark:bg-gray-800   min-h-screen  container mx-auto  pt-32  relative z-10">
      <div className="text-content-container-foreground container mx-auto px-4 sm:px-6 lg:px-8">
        {/* القسم الأول */}
        <h1 className="text-indigo-700 font-arabic dark:text-white  text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          منصة ميجاشوب .. تجارة ذكية وسهلة
        </h1>
        <p className="text-violet-950 dark:text-slate-200 text-center text-lg sm:text-xl lg:text-2xl mb-8">
          أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-secondary font-bold rounded-xl px-6 py-2 text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white transition">
            أنشئ متجرك مجانًا
          </button>
          <button className="bg-indigo-700 font-bold rounded-xl px-6 py-2 text-white border-2 border-indigo-700 hover:bg-secondary hover:text-indigo-700 transition">
            تجربة المنصة
          </button>
        </div>
        {/* <div className="relative mt-12 sm:h-96 lg:h-[600px] w-[200px]" data-aos="fade-up">
  <Image
    src={heroImage}
    alt="صورة بطل"
    fill
    className="w-full h-full object-cover"
  />
</div> */}

        {/* القسم الثاني */}
        <div className=" mt-12 relative sm:h-96 lg:h-[500px]   " data-aos="fade-up">
          <Image
            src={heroImage}
            alt="صورة بطل"
            layout="fill"
            // objectFit="cover"
            className=" w-full  object-cover h-full"
          />
        </div>
{/* <div className="mt-12 relative sm:h-full lg:h-[500px]" data-aos="fade-up">
  <video
    src="/images/home1.mp4" // ضع مسار الفيديو هنا
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div> */}

  
      </div>
    </div> 
       </section> 
  )
}
