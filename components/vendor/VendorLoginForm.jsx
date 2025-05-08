// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react"
// import { FaGoogle, FaGithub } from "react-icons/fa"

// export default function VendorLoginForm() {
//   const router = useRouter()
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()
//   const [loading, setLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   async function onSubmit(data) {
//     try {
//       setLoading(true)
//       console.log("محاولة تسجيل الدخول:", data)

//       // محاكاة عملية تسجيل الدخول
//       setTimeout(() => {
//         setLoading(false)

//         // إظهار رسالة النجاح قبل التوجيه
//         const successElement = document.getElementById("login-success")
//         if (successElement) {
//           successElement.classList.remove("hidden")

//           setTimeout(() => {
//             router.push("/dashboard")
//           }, 1500)
//         }
//       }, 1500)
//     } catch (error) {
//       setLoading(false)
//       console.error("خطأ في الشبكة:", error)
//     }
//   }

//   // متغيرات الحركة
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <>
//       <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <motion.div variants={itemVariants} className="space-y-2">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               البريد الإلكتروني
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 {...register("email", { required: true })}
//                 type="email"
//                 id="email"
//                 className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
//                   errors.email ? "border-red-500 ring-1 ring-red-500" : ""
//                 }`}
//                 placeholder="name@company.com"
//               />
//             </div>
//             <AnimatePresence>
//               {errors.email && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="text-red-600 text-sm flex items-center gap-1"
//                 >
//                   <AlertCircle className="h-3 w-3" />
//                   هذا الحقل مطلوب
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           <motion.div variants={itemVariants} className="space-y-2">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               كلمة المرور
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 {...register("password", { required: true })}
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 placeholder="••••••••"
//                 className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
//                   errors.password ? "border-red-500 ring-1 ring-red-500" : ""
//                 }`}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//               </button>
//             </div>
//             <AnimatePresence>
//               {errors.password && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="text-red-600 text-sm flex items-center gap-1"
//                 >
//                   <AlertCircle className="h-3 w-3" />
//                   هذا الحقل مطلوب
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex gap-4 items-center">
//             <Link
//               href="/forgot-password"
//               className="shrink-0 font-medium text-indigo-600 hover:underline dark:text-indigo-500"
//             >
//               نسيت كلمة المرور؟
//             </Link>
//             {loading ? (
//               <button
//                 disabled
//                 type="button"
//                 className="w-full text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center"
//               >
//                 <svg
//                   aria-hidden="true"
//                   role="status"
//                   className="inline w-4 h-4 ml-3 text-white animate-spin"
//                   viewBox="0 0 100 101"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                     fill="#E5E7EB"
//                   />
//                   <path
//                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 جاري تسجيل الدخول...
//               </button>
//             ) : (
//               <motion.button
//                 whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
//                 whileTap={{ scale: 0.97 }}
//                 type="submit"
//                 className="w-full text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 تسجيل الدخول
//               </motion.button>
//             )}
//           </motion.div>

//           <motion.div variants={itemVariants} className="relative flex items-center justify-center my-4">
//             <div className="border-t border-gray-300 absolute w-full"></div>
//             <span className="bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 relative">أو الدخول عبر</span>
//           </motion.div>

//           <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
//             <motion.button
//               whileHover={{ scale: 1.02, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               type="button"
//               className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all dark:border-gray-600 dark:hover:bg-gray-700"
//             >
//               <FaGoogle className="text-red-500" />
//               <span className="text-sm">جوجل</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.02, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               type="button"
//               className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all dark:border-gray-600 dark:hover:bg-gray-700"
//             >
//               <FaGithub className="text-gray-800 dark:text-white" />
//               <span className="text-sm">جيت هب</span>
//             </motion.button>
//           </motion.div>

//           <motion.p variants={itemVariants} className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
//             ليس لديك حساب؟{" "}
//             <Link href="/register" className="font-medium text-indigo-600 hover:underline dark:text-blue-500">
//               إنشاء حساب جديد
//             </Link>
//           </motion.p>
//         </form>
//       </motion.div>

//       {/* رسالة نجاح تسجيل الدخول - مخفية افتراضياً */}
//       <div id="login-success" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="bg-white rounded-lg p-8 flex flex-col items-center max-w-sm mx-auto dark:bg-gray-800"
//         >
//           <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
//             <motion.svg
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="w-8 h-8 text-green-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </motion.svg>
//           </div>
//           <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">تم تسجيل الدخول بنجاح!</h3>
//           <p className="text-gray-500 text-center dark:text-gray-400">جاري توجيهك إلى لوحة التحكم...</p>
//         </motion.div>
//       </div>
//     </>
//   )
// }

// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import toast from "react-hot-toast";
// import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
// import { FaGoogle, FaGithub } from "react-icons/fa";

// export default function VendorLoginForm() {
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   async function onSubmit(data) {
//     try {
//       setLoading(true);
//       console.log("محاولة تسجيل الدخول باستخدام الاعتماديات:", data);

//       const result = await signIn("credentials", {
//         ...data,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error("خطأ في تسجيل الدخول: تحقق من البيانات");
//         setLoading(false);
//       } else {
//         toast.success("تم تسجيل الدخول بنجاح");
//         router.push("/dashboard");
//       }
//     } catch (error) {
//       console.error("خطأ في الشبكة:", error);
//       toast.error("حدث خطأ في الشبكة");
//       setLoading(false);
//     }
//   }

//   // متغيرات الحركة
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="relative"
//       >
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <motion.div variants={itemVariants} className="space-y-2">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               البريد الإلكتروني
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 {...register("email", { required: true })}
//                 type="email"
//                 id="email"
//                 className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
//                   errors.email ? "border-red-500 ring-1 ring-red-500" : ""
//                 }`}
//                 placeholder="name@company.com"
//               />
//             </div>
//             <AnimatePresence>
//               {errors.email && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="text-red-600 text-sm flex items-center gap-1"
//                 >
//                   <AlertCircle className="h-3 w-3" />
//                   هذا الحقل مطلوب
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           <motion.div variants={itemVariants} className="space-y-2">
//             <label
//               htmlFor="password"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               كلمة المرور
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 {...register("password", { required: true })}
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 placeholder="••••••••"
//                 className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
//                   errors.password ? "border-red-500 ring-1 ring-red-500" : ""
//                 }`}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//               </button>
//             </div>
//             <AnimatePresence>
//               {errors.password && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="text-red-600 text-sm flex items-center gap-1"
//                 >
//                   <AlertCircle className="h-3 w-3" />
//                   هذا الحقل مطلوب
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex gap-4 items-center">
//             <Link
//               href="/forgot-password"
//               className="shrink-0 font-medium text-indigo-600 hover:underline dark:text-indigo-500"
//             >
//               نسيت كلمة المرور؟
//             </Link>
//             {loading ? (
//               <button
//                 disabled
//                 type="button"
//                 className="w-full text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center"
//               >
//                 <svg
//                   aria-hidden="true"
//                   role="status"
//                   className="inline w-4 h-4 ml-3 text-white animate-spin"
//                   viewBox="0 0 100 101"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {/* spinner paths */}
//                 </svg>
//                 جاري تسجيل الدخول...
//               </button>
//             ) : (
//               <motion.button
//                 whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
//                 whileTap={{ scale: 0.97 }}
//                 type="submit"
//                 className="w-full text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 تسجيل الدخول
//               </motion.button>
//             )}
//           </motion.div>

      
//           <motion.p variants={itemVariants} className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
//             ليس لديك حساب؟{' '}
//             <Link href="/register" className="font-medium text-indigo-600 hover:underline dark:text-blue-500">
//               إنشاء حساب جديد
//             </Link>
//           </motion.p>
//         </form>
//       </motion.div>
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import toast from "react-hot-toast";
// import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
// import { FaGoogle, FaGithub } from "react-icons/fa";

// export default function VendorLoginForm() {
//   const router = useRouter();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   async function onSubmit(data) {
//     try {
//       setLoading(true);
//       const result = await signIn("credentials", {
//         ...data,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error("خطأ في تسجيل الدخول: تحقق من البيانات");
//         setLoading(false);
//       } else {
//         toast.success("تم تسجيل الدخول بنجاح");
//         router.push("/dashboard");
//       }
//     } catch (error) {
//       console.error("خطأ في الشبكة:", error);
//       toast.error("حدث خطأ في الشبكة");
//       setLoading(false);
//     }
//   }

//   // motion variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.08 },
//     },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
//     >
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Email Field */}
//         <motion.div variants={itemVariants} className="space-y-1">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//             البريد الإلكتروني
//           </label>
//           <div className="relative">
//             <Mail className="absolute inset-y-0 right-0 pr-3 text-gray-400" />
//             <input
//               {...register("email", { required: true })}
//               type="email"
//               id="email"
//               placeholder="name@company.com"
//               className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 ${
//                 errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
//               }`}
//             />
//           </div>
//           <AnimatePresence initial={false}>
//             {errors.email && (
//               <motion.p
//                 variants={itemVariants}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="flex items-center text-red-600 text-sm"
//               >
//                 <AlertCircle className="mr-1 h-4 w-4" />
//                 هذا الحقل مطلوب
//               </motion.p>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Password Field */}
//         <motion.div variants={itemVariants} className="space-y-1">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//             كلمة المرور
//           </label>
//           <div className="relative">
//             <Lock className="absolute inset-y-0 right-0 pr-3 text-gray-400" />
//             <input
//               {...register("password", { required: true })}
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="••••••••"
//               className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 ${
//                 errors.password ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
//               }`}
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 left-0 pl-3 text-gray-400 hover:text-gray-600"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff /> : <Eye />}
//             </button>
//           </div>
//           <AnimatePresence initial={false}>
//             {errors.password && (
//               <motion.p
//                 variants={itemVariants}
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="flex items-center text-red-600 text-sm"
//               >
//                 <AlertCircle className="mr-1 h-4 w-4" />
//                 هذا الحقل مطلوب
//               </motion.p>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Actions */}
//         <motion.div variants={itemVariants} className="space-y-4">
//           <div className="flex justify-between text-sm">
//             <Link href="/forgot-password" className="text-indigo-600 hover:underline dark:text-indigo-400">
//               نسيت كلمة المرور؟
//             </Link>
//           </div>

//           <div>
//             {loading ? (
//               <button
//                 disabled
//                 className="w-full flex justify-center items-center py-2 bg-indigo-600 text-white rounded-lg animate-pulse"
//               >
//                 جاري تسجيل الدخول...
//               </button>
//             ) : (
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-2 bg-indigo-600 text-white rounded-lg"
//               >
//                 تسجيل الدخول
//               </motion.button>
//             )}
//           </div>

//           <p className="text-center text-sm text-gray-500 dark:text-gray-400">
//             ليس لديك حساب؟{" "}
//             <Link href="/register" className="text-indigo-600 hover:underline dark:text-indigo-400">
//               إنشاء حساب جديد
//             </Link>
//           </p>
//         </motion.div>
//       </form>
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function VendorLoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("🧪 نتيجة تسجيل الدخول:", result);


      if (result?.error) {
        toast.error(result[0].error || "حدث خطأ غير متوقع");        setLoading(false);
      } else {
        toast.success("تم تسجيل الدخول بنجاح");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("خطأ في الشبكة:", error);
      toast.error("حدث خطأ في الشبكة");
      setLoading(false);
    }
  }

  // motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <motion.div variants={itemVariants} className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <Mail className="absolute inset-y-0 right-0 pr-3 text-gray-400" />
            <input
              {...register("email", { required: "البريد الإلكتروني مطلوب" })}
              type="email"
              id="email"
              placeholder="name@company.com"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <AnimatePresence initial={false}>
            {errors.email && (
              <motion.p
                variants={itemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center text-red-600 text-sm"
              >
                <AlertCircle className="mr-1 h-4 w-4" />
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Password Field */}
        <motion.div variants={itemVariants} className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            كلمة المرور
          </label>
          <div className="relative">
            <Lock className="absolute inset-y-0 right-0 pr-3 text-gray-400" />
            <input
              {...register("password", { required: "كلمة المرور مطلوبة" })}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.password ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute inset-y-0 left-0 pl-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {errors.password && (
              <motion.p
                variants={itemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center text-red-600 text-sm"
              >
                <AlertCircle className="mr-1 h-4 w-4" />
                {errors.password.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex justify-between text-sm">
            <Link href="/forgot-password" className="text-indigo-600 hover:underline dark:text-indigo-400">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <div>
            {loading ? (
              <button
                disabled
                className="w-full flex justify-center items-center py-2 bg-indigo-600 text-white rounded-lg animate-pulse"
              >
                جاري تسجيل الدخول...
              </button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-indigo-600 text-white rounded-lg"
              >
                تسجيل الدخول
              </motion.button>
            )}
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="text-indigo-600 hover:underline dark:text-indigo-400">
              إنشاء حساب جديد
            </Link>
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}
