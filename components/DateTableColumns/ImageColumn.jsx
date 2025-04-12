// import React from 'react';
// import Image from 'next/image'

// export default function ImageColumn({row,accessorKey}) {
// const imageUrl = row.getValue(`${accessorKey}`);
// return(
//     <div className='shrink-0'>
//         <Image
//         src={imageUrl}
//         width={600}
//         height={600}
//         alt={`${accessorKey}`}
//         className="w-16 h-16 rounded-lg object-cover"
//         />

//     </div>
  


//   );
// }

import React from 'react';
import Image from 'next/image'

export default function ImageColumn({ row, accessorKey }) {
  const imageUrl = row.getValue(accessorKey);

  // تحقق إذا كان الرابط موجود وصحيح (سلسلة تبدأ بـ http أو / )
  const isValidUrl = typeof imageUrl === 'string' && imageUrl.length > 0;

  return (
    <div className="shrink-0">
      <Image
        src={isValidUrl ? imageUrl : "/default-logo.png"} // صورة افتراضية
        width={600}
        height={600}
        alt={accessorKey}
        className="w-16 h-16 rounded-lg object-cover"
      />
    </div>
  );
}
