// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function CountdownFloatingBox({ endDate }) {
//   const [timeLeft, setTimeLeft] = useState(null);

//   useEffect(() => {
//     if (!endDate) return;

//     const targetDate = new Date(endDate);

//     const updateCountdown = () => {
//       const now = new Date();
//       const diff = targetDate - now;

//       if (diff <= 0) {
//         setTimeLeft({ expired: true });
//         return;
//       }

//       const totalSeconds = Math.floor(diff / 1000);
//       const days = Math.floor(totalSeconds / (3600 * 24));
//       const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
//       const minutes = Math.floor((totalSeconds % 3600) / 60);
//       const seconds = totalSeconds % 60;

//       setTimeLeft({ days, hours, minutes, seconds });
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(interval);
//   }, [endDate]);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && timeLeft?.days === 1) {
//       Notification.requestPermission().then(perm => {
//         if (perm === "granted") {
//           new Notification("تنبيه!", {
//             body: "يتبقى يوم واحد على انتهاء اشتراكك"
//           });
//         }
//       });
//     }
//   }, [timeLeft]);

//   if (!timeLeft) return null;

//   const isNearExpiry = timeLeft.days <= 3;
//   const bgColor = timeLeft.expired ? 'bg-red-500' : isNearExpiry ? 'bg-orange-400' : 'bg-yellow-300';
//   const borderColor = timeLeft.expired ? 'border-red-600' : isNearExpiry ? 'border-orange-500' : 'border-yellow-500';
//   const textColor = timeLeft.expired ? 'text-white' : 'text-black';

//   return (
//     <div className={`fixed top-4 left-6 z-50 ${bgColor} ${textColor} shadow-lg rounded-lg px-4 py-3 border ${borderColor}`}>
//       <p className="font-bold mb-1 text-sm text-center">
//         {timeLeft.expired ? '❗ اشتراكك انتهى' : `⏳ ${isNearExpiry ? "اقترب موعد انتهاء اشتراكك!" : "انتهاء الاشتراك:"}`}
//       </p>
      
//       {!timeLeft.expired && (
//         <p className="text-center text-sm font-semibold mb-2">
//           {timeLeft.days > 0 && <span>{timeLeft.days} يوم </span>}
//           {String(timeLeft.hours).padStart(2, '0')}:
//           {String(timeLeft.minutes).padStart(2, '0')}:
//           {String(timeLeft.seconds).padStart(2, '0')}
//         </p>
//       )}
      
//       <div className="text-center">
//         <Link 
//           href="/dashboard/pricing" 
//           className={`text-sm ${timeLeft.expired ? 'text-blue-300' : 'text-blue-600'} underline`}
//         >
//           تجديد الاشتراك
//         </Link>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CountdownFloatingBox({ endDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!endDate) return;
    const targetDate = new Date(endDate);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ expired: true });
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  useEffect(() => {
    if (typeof window !== 'undefined' && timeLeft?.days === 1) {
      Notification.requestPermission().then(perm => {
        if (perm === "granted") {
          new Notification("تنبيه!", {
            body: "يتبقى يوم واحد على انتهاء اشتراكك"
          });
        }
      });
    }
  }, [timeLeft]);

  if (!timeLeft) return null;

  const isNearExpiry = timeLeft.days <= 3;
  const bgColor = timeLeft.expired
    ? 'bg-red-500'
    : isNearExpiry
      ? 'bg-orange-400'
      : 'bg-yellow-300';
  const borderColor = timeLeft.expired
    ? 'border-red-600'
    : isNearExpiry
      ? 'border-orange-500'
      : 'border-yellow-500';
  const textColor = timeLeft.expired ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center gap-1 ${bgColor} ${textColor} shadow rounded-md px-3 py-1 border ${borderColor}`}>
      <p className="font-semibold text-xs whitespace-nowrap">
        {timeLeft.expired
          ? '❗ انتهى الاشتراك'
          : `⏳ ${isNearExpiry ? 'اقترب انتهاء الاشتراك!' : 'ينتهي خلال:'}`}
      </p>
      {!timeLeft.expired && (
        <span className="font-mono text-xs">
          {timeLeft.days > 0 && <span>{timeLeft.days}ي </span>}
          {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      )}
      <Link
        href="/dashboard/pricing"
        className={`ml-2 underline text-xs ${timeLeft.expired ? 'text-blue-200' : 'text-blue-600'}`}
      >
        تجديد
      </Link>
    </div>
  );
}
