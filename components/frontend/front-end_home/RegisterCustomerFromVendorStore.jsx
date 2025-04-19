// "use client";
// // import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import SubmitButton from "../../Forminputs/SubmitButton";
// // import TextInput from "@/Forminputs/TextInput";
// import TextInput  from "../../Forminputs/TextInput";
// // import { FaGithub, FaGoogle } from "react-icons/fa";

// export default function RegisterFormHome({ role = "USER" }) {
//   const router = useRouter(); //Redirecting on the client side
//   //const searchParams = useSearchParams()
//   // const plan = searchParams.get("plan")
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [emailErr, setEmailErr] = useState("");

//   async function onSubmit(data) {
//     try {
//       console.log(data);
//       setLoading(true);
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/users`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         console.log(responseData);
//         setLoading(false);
//         toast.success("تم إنشاء المستخدم بنجاح");
//         reset();
//         if (role === "USER") {
//           router.push("/");
//         } else {
//           router.push("/verify-email");
//         }
//       } else {
//         setLoading(false);
//         if (response.status === 409) {
//           setEmailErr("هذا البريد الإلكتروني مسجل بالفعل");
//           toast.error("هذا البريد الإلكتروني مسجل بالفعل");
//         } else {
//           console.error("Server Error:", responseData.error);
//           toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
//         }
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Network Error:", error);
//       toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="">
//       <TextInput
//         lable=""
//         name="role"
//         register={register}
//         errors={errors}
//         type="hidden"
//         defaultValue={role}
//         className="sm:col-span-2 mb-3"
//       />

//       <TextInput
//         lable="الاسم الكريم"
//         name="name"
//         register={register}
//         errors={errors}
//         type="text"
//         className="sm:col-span-2 mb-3"
//       />

//       <TextInput
//         lable="البريد الإلكتروني"
//         name="email"
//         register={register}
//         errors={errors}
//         type="email"
//         className="sm:col-span-2 mb-3"
//       />
//       {emailErr && <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>}


//       <TextInput
//         lable="رقم الجوال"
//         name="phone"
//         register={register}
//         errors={errors}
//         type="text"
//         placeholder="+967"
//         className="sm:col-span-2 mb-3"
//       />

//       <TextInput
//         lable="كلمة المرور"
//         name="password"
//         register={register}
//         errors={errors}
//         type="password"
//         className="sm:col-span-2 mb-3"
//       />

//       <SubmitButton
//         isLoading={loading}
//         buttonTitle="تسجيل"
//         loadingButtonTitle="جاري الإنشاء، يرجى الانتظار..."
//       />

//       <div className="flex gap-2 justify-between">
//         <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 py-4">
//           لديك حساب بالفعل؟ {" "}
//           <Link
//             href="/login"
//             className="font-medium text-purple-600 hover:underline dark:text-purple-500"
//           >
//             تسجيل الدخول
//           </Link>
//         </p>

//         {role === "USER" ? (
//           <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 py-4">
//             هل أنت بائع؟ {" "}
//             <Link
//               href="/register-vendor"
//               className="font-medium text-purple-600 hover:underline dark:text-purple-500"
//             >
//               سجل هنا
//             </Link>
//           </p>
//         ) : (
//           <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 py-4">
//             هل أنت مستخدم؟ {" "}
//             <Link
//               href="/register"
//               className="font-medium text-purple-600 hover:underline dark:text-purple-500"
//             >
//               سجل هنا
//             </Link>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../../Forminputs/SubmitButton";
import TextInput from "../../Forminputs/TextInput";
import ToggleInput from "../../Forminputs/ToggleInput";
export default function RegisterCustomerFromVendorStore({ storeId, slugDomain }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm( 
    {
      defaultValues: {
        isBlocked: false,
 },});
 const isBlocked = watch("isBlocked");
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  async function onSubmit(data) {
    try {
      setLoading(true);
      setEmailErr("");
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
      const response = await fetch(`${baseUrl}/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        toast.success("تم إنشاء المستخدم وربطه بالمتجر بنجاح");
        reset();
        router.push(`/${slugDomain}/verifyCustomer-email/${responseData.id}?slug=${slugDomain}`);

        if (response.status === 409) {
          // البريد الإلكتروني موجود مسبقًا، نحاول نربطه بالمتجر فقط
          const existingCustomerId = responseData.customerId;
  
          // نربط العميل الموجود بالمتجر الحالي
          const connectRes = await fetch(`${baseUrl}/api/customer-store`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customerId: existingCustomerId,
              storeId: storeId,
            }),
          });
  
          if (connectRes.ok) {
            toast.success("تم ربط الحساب الموجود بهذا المتجر بنجاح");
            reset();
            router.push(`/${slugDomain}`);
          } else {
            toast.error("فشل ربط المستخدم بالمتجر. حاول مجددًا.");
          }
        } else {
          toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
          console.error("Server Error:", responseData.error);
        }
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white  dark:bg-gray-800 dark:border-gray-700 shadow-2xl rounded-3xl p-8 w-full max-w-lg mx-auto transform transition-transform duration-500 hover:scale-105">
  
<input 
  type="hidden" 
  name="storeId" 
  value={storeId} 
  {...register('storeId')} 
/>

      <TextInput
        lable="البريد الإلكتروني"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      {emailErr && <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>}


    

      {/* <TextInput
        lable="كلمة المرور"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2 mb-3"
      />
  <ToggleInput
    label="Publish "
     name="isBlocked"
     trueTitle="Not Block"
     falseTitle="Bloked"
     register={register}
    />  */}
      <SubmitButton
        isLoading={loading}
        buttonTitle="تسجيل"
        loadingButtonTitle="جاري الإنشاء، يرجى الانتظار..."
      />

      <div className="flex gap-2 justify-between">
        <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 py-4">
          لديك حساب بالفعل؟ {" "}
          <Link
            href={`/${slugDomain}/loginCustomer`} 
            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
          >
            تسجيل الدخول
          </Link>
        </p>

      </div>
      
    </form>
  );
}
