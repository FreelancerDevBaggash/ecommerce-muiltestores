// /** @type {import('next').NextConfig} */
// const nextConfig = {


//     images: {
//       remotePatterns:[{
//         protocol: "https"    ,
//         hostname:  "utfs.io"   ,
    
//       }]
//     },
//   };


// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.salla.sa',
      },
    ],
  },
};

export default nextConfig;