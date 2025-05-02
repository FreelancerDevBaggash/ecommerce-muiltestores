  // 'use client';
  // import React, { useState, useEffect } from 'react';
  // import { Heart } from 'lucide-react';
  // import Link from 'next/link';

  // const WishlistButton = ({slugDomain={}}) => {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     // تحديث العدد عند التحميل
  //     const updateCount = () => {
  //       const wishlist = JSON.parse(localStorage.getItem(`/${slugDomain}/wishlist`)) || [];
  //       setCount(wishlist.length);
  //     };

  //     updateCount();

  //     // الاستماع للتغييرات في localStorage
  //     window.addEventListener('storage', updateCount);

  //     return () => {
  //       window.removeEventListener('storage', updateCount);
  //     };
  //   }, []);

  //   return (
  //     <Link href={`/${slugDomain}/wishlist`} className="relative p-2">
  //       <Heart className="w-6 h-6" />
  //       {count > 0 && (
  //         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
  //           {count}
  //         </span>
  //       )}
  //     </Link>
  //   );
  // };

  // export default WishlistButton;
  'use client';
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

const WishlistButton = ({ slugDomain={}  }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem(`wishlist`)) || [];
      setCount(wishlist.length);
    } catch (e) {
      console.error("Error reading wishlist:", e);
    }
  };

  useEffect(() => {
    updateCount(); // تحديث أولي

    const interval = setInterval(updateCount, 2000); // تحديث كل ثانيتين

    // لو تغير من نافذة ثانية
    window.addEventListener('storage', updateCount);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', updateCount);
    };
  }, [slugDomain]);

  return (
    <Link 
      href={`/${slugDomain}/wishlist`} 
      aria-label="المفضلة"
    >
      <Heart className="w-6 h-6" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
};

export default WishlistButton;
