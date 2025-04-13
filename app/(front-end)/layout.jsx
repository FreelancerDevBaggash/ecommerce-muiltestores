// import React from 'react'
// import Navbar from '../../components/frontend/Navbar'
// import Footer from '../../components/frontend/Footer'


// export default function Layout({children}) {
//   return (
//     <div>
//         <Navbar/>
//         <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0 ">
//         {children}
//         </div>
//       <Footer/>
//     </div>
//   )
// }

import React from 'react';
import Footer from '../../components/frontend/Footer';
import NavbarHome from '../../components/frontend/front-end_home/NavBar_Home';

export default function Layout({ children }) {
  return (
    <div dir="rtl"> {/* إضافة اتجاه RTL هنا */}
      <NavbarHome />

      {/* استخدام فئات Tailwind CSS المتجاوبة لتصميم مرن */}
      <div className="max-w-full mx-auto px-0 sm:px-0">
        {children}
      </div>

      <Footer />
    </div>
  );
}

// import React from 'react';
// import Footer from '../../components/frontend/templaet5/Footer';
// import Navbar from '@/components/frontend/templaet5/Navbar';

// export default function Layout({ children }) {
//   return (
//     <div dir="rtl"> {/* إضافة اتجاه RTL هنا */}
//       <Navbar />

//       {/* استخدام فئات Tailwind CSS المتجاوبة لتصميم مرن */}
//       <div className="max-w-full mx-auto px-0 sm:px-0">
//         {children}
//       </div>

//       <Footer />
//     </div>
//   );
// }
