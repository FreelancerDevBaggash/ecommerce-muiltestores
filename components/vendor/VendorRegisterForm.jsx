"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Mail, Lock, Phone, Eye, EyeOff, AlertCircle } from "lucide-react"
import toast from "react-hot-toast"

export default function VendorRegisterForm({ role = "VENDOR" }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isBloked: false,
      role: role,
    },
  })
  const [loading, setLoading] = useState(false)
  const [emailErr, setEmailErr] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formStep, setFormStep] = useState(0)

  const password = watch("password", "")

  const validateStep = (step) => {
    let isValid = true
    if (step === 0) {
      // حذف التحقق من حقل اسم المتجر
      if (!watch("name") || !watch("email")) {
        isValid = false
      }
    }
    return isValid
  }

  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  async function onSubmit(data) {
    try {
      setLoading(true)
      console.log(data)

      // إرسال البيانات إلى API
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const response = await fetch(`${baseUrl}/api/vendors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (response.ok) {
        console.log(responseData)
        setLoading(false)
        toast.success("تم إنشاء الحساب بنجاح")

        const { data: vendorData } = responseData
        // تخزين ID في localStorage
        localStorage.setItem("vendorId", vendorData.id)
        console.log("تم تخزين معرف التاجر:", vendorData.id)
        reset()

        // التوجيه إلى صفحة التحقق
        router.push(`/verify-email/${vendorData.id}`)
      } else {
        setLoading(false)
        if (response.status === 409) {
          setEmailErr("هذا البريد الإلكتروني مسجل بالفعل")
          toast.error("هذا البريد الإلكتروني مسجل بالفعل")
        } else {
          console.error("خطأ في الخادم:", responseData.error)
          toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى")
        }
      }
    } catch (error) {
      setLoading(false)
      console.error("خطأ في الشبكة:", error)
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى")
    }
  }

  // مؤشر قوة كلمة المرور
  const getPasswordStrength = () => {
    const password = watch("password", "")
    if (!password) return { strength: 0, label: "" }

    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    const labels = ["ضعيفة", "مقبولة", "جيدة", "قوية"]
    const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"]

    return {
      strength,
      label: labels[strength - 1] || "",
      color: colors[strength - 1] || "",
    }
  }

  const passwordStrength = getPasswordStrength()

  // متغيرات الحركة
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl rounded-3xl p-8 w-full max-w-lg mx-auto transform transition-transform duration-500 hover:scale-105">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {formStep === 0 && (
            <motion.div
              key="step1"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="space-y-4"
            >
              <motion.h2
                custom={0}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="text-lg font-medium text-center text-gray-800 dark:text-white"
              >
                المعلومات الشخصية
              </motion.h2>

              {/* الاسم الكامل */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.name ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      هذا الحقل مطلوب
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* البريد الإلكتروني */}
              <motion.div custom={2} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.email || emailErr ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    placeholder="name@company.com"
                    onChange={() => emailErr && setEmailErr("")}
                  />
                </div>
                <AnimatePresence>
                  {(errors.email || emailErr) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {emailErr || "هذا الحقل مطلوب"}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* رقم الهاتف */}
              <motion.div custom={3} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">
                  رقم الهاتف
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="+967"
                  />
                </div>
              </motion.div>

              {/* زر الاستمرار */}
              <motion.button
                custom={4}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={nextStep}
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                متابعة
              </motion.button>
            </motion.div>
          )}

          {formStep === 1 && (
            <motion.div
              key="step2"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="space-y-4"
            >
              <motion.h2
                custom={0}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="text-lg font-medium text-center text-gray-800 dark:text-white"
              >
                معلومات الأمان
              </motion.h2>

              {/* كلمة المرور */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
                  كلمة المرور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("password", { required: true, minLength: 8 })}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 pr-10 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.password ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* مؤشر قوة كلمة المرور */}
                {watch("password") && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">قوة كلمة المرور:</span>
                      <span
                        className={`text-xs font-medium ${
                          passwordStrength.strength < 2
                            ? "text-red-500"
                            : passwordStrength.strength < 3
                              ? "text-orange-500"
                              : passwordStrength.strength < 4
                                ? "text-yellow-500"
                                : "text-green-500"
                        }`}
                      >
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${passwordStrength.strength * 25}%` }}
                        className={`h-full ${passwordStrength.color}`}
                      />
                    </div>
                  </div>
                )}

                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {errors.password.type === "minLength"
                        ? "يجب أن تكون كلمة المرور 8 أحرف على الأقل"
                        : "هذا الحقل مطلوب"}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* تأكيد كلمة المرور */}
              <motion.div custom={2} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 dark:text-white">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password || "كلمات المرور غير متطابقة",
                    })}
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.confirmPassword ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    placeholder="••••••••"
                  />
                </div>
                <AnimatePresence>
                  {errors.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {errors.confirmPassword.message || "هذا الحقل مطلوب"}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* الشروط والأحكام */}
              <motion.div custom={3} initial="hidden" animate="visible" variants={itemVariants} className="space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      {...register("agreeToTerms", { required: true })}
                      id="agreeToTerms"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mr-3 text-sm">
                    <label htmlFor="agreeToTerms" className="text-gray-600 dark:text-gray-400">
                      أوافق على{" "}
                      <Link href="/terms" className="text-indigo-600 hover:underline dark:text-indigo-500">
                        شروط الخدمة
                      </Link>{" "}
                      و{" "}
                      <Link href="/privacy" className="text-indigo-600 hover:underline dark:text-indigo-500">
                        سياسة الخصوصية
                      </Link>
                    </label>
                  </div>
                </div>
                <AnimatePresence>
                  {errors.agreeToTerms && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      يجب الموافقة على الشروط والأحكام
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* أزرار التنقل */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex gap-3 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-all dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                >
                  رجوع
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all disabled:opacity-70 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري إنشاء الحساب...
                    </div>
                  ) : (
                    "إنشاء حساب"
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* مؤشر الخطوات */}
        <div className="flex justify-center gap-2 pt-4">
          <motion.div
            animate={{
              backgroundColor: formStep === 0 ? "#4f46e5" : "#d1d5db",
              scale: formStep === 0 ? 1.2 : 1,
            }}
            className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
          />
          <motion.div
            animate={{
              backgroundColor: formStep === 1 ? "#4f46e5" : "#d1d5db",
              scale: formStep === 1 ? 1.2 : 1,
            }}
            className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
          />
        </div>
      </form>

      <div className="flex justify-center mt-4">
        <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  )
}
