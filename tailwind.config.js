// // /** @type {import('tailwindcss').Config} */
// // import { withUt } from "uploadthing/tw";
// // const flowbite = require("flowbite-react/tailwind");
// // export default withUt({
// //   darkMode: ["class"],
// //   content: [
// //     flowbite.content(),
// //     './pages/**/*.{js,jsx}',
// //     './components/**/*.{js,jsx}',
// //     './app/**/*.{js,jsx}',
// //     './src/**/*.{js,jsx}',
// //   ],
// //   prefix: "",
// //   theme: {
// //     container: {
// //       center: true,
// //       padding: "2rem",
// //       screens: {
// //         "2xl": "1400px",
// //       },
// //     },
// //     extend: {
// //       colors: {
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "hsl(var(--primary))",
// //           foreground: "hsl(var(--primary-foreground))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //         },
// //         destructive: {
// //           DEFAULT: "hsl(var(--destructive))",
// //           foreground: "hsl(var(--destructive-foreground))",
// //         },
// //         muted: {
// //           DEFAULT: "hsl(var(--muted))",
// //           foreground: "hsl(var(--muted-foreground))",
// //         },
// //         accent: {
// //           DEFAULT: "hsl(var(--accent))",
// //           foreground: "hsl(var(--accent-foreground))",
// //         },
// //         popover: {
// //           DEFAULT: "hsl(var(--popover))",
// //           foreground: "hsl(var(--popover-foreground))",
// //         },
// //         card: {
// //           DEFAULT: "hsl(var(--card))",
// //           foreground: "hsl(var(--card-foreground))",
// //         },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       keyframes: {
// //         "accordion-down": {
// //           from: { height: "0" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0" },
// //         },
// //       },
// //       animation: {
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //       },
// //     },
// //   },
// //   plugins: [require("tailwindcss-animate"),
// //             require("@tailwindcss/forms"),
// //             require("flowbite/plugin"),
// //             flowbite.plugin(),],
// // });
// // /** @type {import('tailwindcss').Config} */
// // import { withUt } from "uploadthing/tw";
// // const flowbite = require("flowbite-react/tailwind");

// // export default withUt({
// //   darkMode: ["class"],
// //   content: [
// //     flowbite.content(),
// //     './pages/**/*.{js,jsx}',
// //     './components/**/*.{js,jsx}',
// //     './app/**/*.{js,jsx}',
// //     './src/**/*.{js,jsx}',
// //   ],
// //   prefix: "",
// //   theme: {
// //     container: {
// //       center: true,
// //       padding: "2rem",
// //       screens: {
// //         "2xl": "1400px",
// //       },
// //     },
// //     extend: {
// //       keyframes: {
// //         "move-to-cart": {
// //           "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
// //           "100%": {
// //             transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
// //             opacity: "0",
// //           },
// //         },
// //         "accordion-down": {
// //           from: { height: "0" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0" },
// //         },
// //       },
// //       animation: {
// //         "move-to-cart": "move-to-cart 1s ease-in-out forwards",
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //       },
// //       colors: {
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "#3B47B0", // اللون الأساسي
// //           foreground: "hsl(var(--primary-foreground))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //         },
// //         destructive: {
// //           DEFAULT: "hsl(var(--destructive))",
// //           foreground: "hsl(var(--destructive-foreground))",
// //         },
// //         muted: {
// //           DEFAULT: "hsl(var(--muted))",
// //           foreground: "hsl(var(--muted-foreground))",
// //         },
// //         accent: {
// //           DEFAULT: "hsl(var(--accent))",
// //           foreground: "hsl(var(--accent-foreground))",
// //         },
// //         popover: {
// //           DEFAULT: "hsl(var(--popover))",
// //           foreground: "hsl(var(--popover-foreground))",
// //         },
// //         card: {
// //           DEFAULT: "hsl(var(--card))",
// //           foreground: "hsl(var(--card-foreground))",
// //         },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       keyframes: {
// //         "accordion-down": {
// //           from: { height: "0" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0" },
// //         },
// //       },
// //       animation: {
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //       },
// //     },
// //   },
// //   plugins: [
// //     require("tailwindcss-animate"),
// //     require("@tailwindcss/forms"),
// //     require("flowbite/plugin"),
// //     flowbite.plugin(),
// //     require("tailwindcss-rtl"), // إضافة دعم RTL
// //   ],
// // });
// /** @type {import('tailwindcss').Config} */
// import { withUt } from "uploadthing/tw";
// const flowbite = require("flowbite-react/tailwind");

// export default withUt({
//   darkMode: ["class"],
//   content: [
//     flowbite.content(),
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true, // لا يتم التوسيط افتراضيًا (للشاشات الصغيرة)
//       padding: {
//         DEFAULT: '1rem', // تباعد افتراضي للشاشات الصغيرة
//         '2xl': '8rem',   // تباعد أعلى للشاشات الكبيرة (2xl وما فوق)
//       },
//       screens: {
//         '2xl': '1400px',
//       },
//       transitionTimingFunction: {
//         'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
//       },
//     },
    
//     extend: {
//       fontFamily: {
//         arabic: ['IBMPlexArabic', 'sans-serif'], // ✅ تم إضافة الخط هنا
//       },
//       keyframes: {
//         "move-to-cart": {
//           "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
//           "100%": {
//             transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
//             opacity: "0",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "move-to-cart": "move-to-cart 1s ease-in-out forwards",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "#211C84",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       // إضافة تخصيصات لتطبيق .scrollbar-hide
//       scrollbarWidth: {
//         hide: 'none',  // Firefox
//       },
//       scrollbarColor: {
//         hide: 'transparent',  // Firefox
//       },

//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/forms"),
//     require("flowbite/plugin"),
//     flowbite.plugin(),
//     require("tailwindcss-rtl"), // ✅ دعم RTL
//     // إضافة تخصيصات لـ scrollbar-hide
//     function ({ addComponents }) {
//       addComponents({
//         '.scrollbar-hide::-webkit-scrollbar': {
//           display: 'none',  // إخفاء شريط التمرير في متصفح WebKit
//         },
//         '.scrollbar-hide': {
//           '-ms-overflow-style': 'none',  // IE و Edge
//           'scrollbar-width': 'none',     // Firefox
//         },
//       });
//     },
//   ],
// });
// /** @type {import('tailwindcss').Config} */
// import { withUt } from "uploadthing/tw";
// const flowbite = require("flowbite-react/tailwind");
// export default withUt({
//   darkMode: ["class"],
//   content: [
//     flowbite.content(),
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"),
//             require("@tailwindcss/forms"),
//             require("flowbite/plugin"),
//             flowbite.plugin(),],
// });
// /** @type {import('tailwindcss').Config} */
// import { withUt } from "uploadthing/tw";
// const flowbite = require("flowbite-react/tailwind");

// export default withUt({
//   darkMode: ["class"],
//   content: [
//     flowbite.content(),
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       keyframes: {
//         "move-to-cart": {
//           "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
//           "100%": {
//             transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
//             opacity: "0",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "move-to-cart": "move-to-cart 1s ease-in-out forwards",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "#3B47B0", // اللون الأساسي
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/forms"),
//     require("flowbite/plugin"),
//     flowbite.plugin(),
//     require("tailwindcss-rtl"), // إضافة دعم RTL
//   ],
// });
// /** @type {import('tailwindcss').Config} */
// import { withUt } from "uploadthing/tw";
// const flowbite = require("flowbite-react/tailwind");

// export default withUt({
//   darkMode: ["class"],
//   content: [
//     flowbite.content(),
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true, // لا يتم التوسيط افتراضيًا (للشاشات الصغيرة)
//       padding: {
//         DEFAULT: '1rem', // تباعد افتراضي للشاشات الصغيرة
//         '2xl': '8rem',   // تباعد أعلى للشاشات الكبيرة (2xl وما فوق)
//       },
//       screens: {
//         '2xl': '1400px',
//       },
//     },
    
//     extend: {
//       fontFamily: {
//         arabic: ['IBMPlexArabic', 'sans-serif'], // ✅ تم إضافة الخط هنا
//       },
//       keyframes: {
//         "move-to-cart": {
//           "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
//           "100%": {
//             transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
//             opacity: "0",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "move-to-cart": "move-to-cart 1s ease-in-out forwards",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "#211C84",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       // إضافة تخصيصات لتطبيق .scrollbar-hide
//       scrollbarWidth: {
//         hide: 'none',  // Firefox
//       },
//       scrollbarColor: {
//         hide: 'transparent',  // Firefox
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/forms"),
//     require("flowbite/plugin"),
//     flowbite.plugin(),
//     require("tailwindcss-rtl"), // ✅ دعم RTL
//     // إضافة تخصيصات لـ scrollbar-hide
//     function ({ addComponents }) {
//       addComponents({
//         '.scrollbar-hide::-webkit-scrollbar': {
//           display: 'none',  // إخفاء شريط التمرير في متصفح WebKit
//         },
//         '.scrollbar-hide': {
//           '-ms-overflow-style': 'none',  // IE و Edge
//           'scrollbar-width': 'none',     // Firefox
//         },
//       });
//     },
//   ],
// });
/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";
const flowbite = require("flowbite-react/tailwind");

export default withUt({
  darkMode: ["class"],
  content: [
    flowbite.content(),
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '8rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        arabic: ['IBMPlexArabic', 'sans-serif'],
      },
      keyframes: {
        "move-to-cart": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
          "100%": {
            transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "move-to-cart": "move-to-cart 1s ease-in-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#211C84",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      scrollbarWidth: {
        hide: 'none',
      },
      scrollbarColor: {
        hide: 'transparent',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    flowbite.plugin(),
    require("tailwindcss-rtl"),
    function ({ addUtilities, addComponents }) {
      // Hide scrollbar (modern browsers)
      addUtilities({
        ".scrollbar-hide": {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }
      }, ['responsive']);
      addComponents({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        }
      });
    }
  ],
});

// // /** @type {import('tailwindcss').Config} */
// // const { withUt } = require("uploadthing/tw");
// // const flowbite = require("flowbite-react/tailwind");

// // module.exports = withUt({
// //   darkMode: ["class"],
// //   prefix: "",
// //   content: [
// //     flowbite.content(),
// //     "./pages/**/*.{js,jsx}",
// //     "./components/**/*.{js,jsx}",
// //     "./app/**/*.{js,jsx}",
// //     "./src/**/*.{js,jsx}",
// //     "*.{js,jsx,mdx}",
// //   ],
// //   theme: {
// //     container: {
// //       center: true,
// //       padding: {
// //         DEFAULT: "1rem",
// //         "2xl": "8rem",
// //       },
// //       screens: {
// //         "2xl": "1400px",
// //       },
// //     },
// //     extend: {
// //       fontFamily: {
// //         arabic: ["IBMPlexArabic", "sans-serif"],
// //         tajawal: ["var(--font-tajawal)"],
// //       },
// //       colors: {
// //         border: "hsl(var(--border))",
// //         input: "hsl(var(--input))",
// //         ring: "hsl(var(--ring))",
// //         background: "hsl(var(--background))",
// //         foreground: "hsl(var(--foreground))",
// //         primary: {
// //           DEFAULT: "#211C84",
// //           foreground: "hsl(var(--primary-foreground))",
// //         },
// //         secondary: {
// //           DEFAULT: "hsl(var(--secondary))",
// //           foreground: "hsl(var(--secondary-foreground))",
// //         },
// //         destructive: {
// //           DEFAULT: "hsl(var(--destructive))",
// //           foreground: "hsl(var(--destructive-foreground))",
// //         },
// //         muted: {
// //           DEFAULT: "hsl(var(--muted))",
// //           foreground: "hsl(var(--muted-foreground))",
// //         },
// //         accent: {
// //           DEFAULT: "hsl(var(--accent))",
// //           foreground: "hsl(var(--accent-foreground))",
// //         },
// //         popover: {
// //           DEFAULT: "hsl(var(--popover))",
// //           foreground: "hsl(var(--popover-foreground))",
// //         },
// //         card: {
// //           DEFAULT: "hsl(var(--card))",
// //           foreground: "hsl(var(--card-foreground))",
// //         },
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //       keyframes: {
// //         "move-to-cart": {
// //           "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
// //           "100%": {
// //             transform: "translate(calc(100vw - 60px), calc(-100vh + 60px)) scale(0.5)",
// //             opacity: "0",
// //           },
// //         },
// //         "accordion-down": {
// //           from: { height: "0" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0" },
// //         },
// //         float: {
// //           "0%, 100%": { transform: "translateY(0)" },
// //           "50%": { transform: "translateY(-10px)" },
// //         },
// //         "pulse-slow": {
// //           "0%, 100%": { opacity: "1" },
// //           "50%": { opacity: "0.5" },
// //         },
// //         morph: {
// //           "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
// //           "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
// //           "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
// //         },
// //         blob: {
// //           "0%": { transform: "translate(0px, 0px) scale(1)" },
// //           "33%": { transform: "translate(30px, -50px) scale(1.1)" },
// //           "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
// //           "100%": { transform: "translate(0px, 0px) scale(1)" },
// //         },
// //       },
// //       animation: {
// //         "move-to-cart": "move-to-cart 1s ease-in-out forwards",
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //         float: "float 6s ease-in-out infinite",
// //         "pulse-slow": "pulse-slow 4s ease-in-out infinite",
// //         morph: "morph 8s ease-in-out infinite",
// //         blob: "blob 7s infinite",
// //       },
// //       scrollbarWidth: {
// //         hide: "none",
// //       },
// //       scrollbarColor: {
// //         hide: "transparent",
// //       },
// //     },
// //   },
// //   plugins: [
// //     require("tailwindcss-animate"),
// //     require("@tailwindcss/forms"),
// //     require("flowbite/plugin"),
// //     flowbite.plugin(),
// //     require("tailwindcss-rtl"),
// //     function ({ addUtilities, addComponents }) {
// //       addUtilities(
// //         {
// //           ".scrollbar-hide": {
// //             "-ms-overflow-style": "none",
// //             "scrollbar-width": "none",
// //           },
// //         },
// //         ["responsive"]
// //       );
// //       addComponents({
// //         ".scrollbar-hide::-webkit-scrollbar": {
// //           display: "none",
// //         },
// //       });
// //     },
// //   ],
// // });
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//     "./app/**/*.{js,jsx}",
//     "./src/**/*.{js,jsx}",
//     "*.{js,jsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//         "pulse-slow": {
//           "0%, 100%": { opacity: "1" },
//           "50%": { opacity: "0.5" },
//         },
//         morph: {
//           "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
//           "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
//           "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
//         },
//         blob: {
//           "0%": { transform: "translate(0px, 0px) scale(1)" },
//           "33%": { transform: "translate(30px, -50px) scale(1.1)" },
//           "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
//           "100%": { transform: "translate(0px, 0px) scale(1)" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         float: "float 6s ease-in-out infinite",
//         "pulse-slow": "pulse-slow 4s ease-in-out infinite",
//         morph: "morph 8s ease-in-out infinite",
//         blob: "blob 7s infinite",
//       },
    
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//         "pulse-slow": {
//           "0%, 100%": { opacity: "1" },
//           "50%": { opacity: "0.5" },
//         },
//         morph: {
//           "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
//           "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
//           "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
//         },
//         blob: {
//           "0%": { transform: "translate(0px, 0px) scale(1)" },
//           "33%": { transform: "translate(30px, -50px) scale(1.1)" },
//           "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
//           "100%": { transform: "translate(0px, 0px) scale(1)" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         float: "float 6s ease-in-out infinite",
//         "pulse-slow": "pulse-slow 4s ease-in-out infinite",
//         morph: "morph 8s ease-in-out infinite",
//         blob: "blob 7s infinite",
//       },
//       fontFamily: {
//         tajawal: ["var(--font-tajawal)"],
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }
