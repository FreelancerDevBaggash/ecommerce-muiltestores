"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiLock, FiRefreshCw, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function AccountSettings({ user={} }) {
  const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data) => {
    // تحقق من تطابق كلمات المرور الجديدة
    if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
      toast.error("كلمة المرور الجديدة غير متطابقة!");
      return;
    }

    // إعداد الحمولة للإرسال
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      profileImage: imageUrl,
      ...(data.newPassword ? { password: data.newPassword } : {}),
    };

    // طلب التحديث
    await makePutRequest(
      setLoading,
      `api/customers/${user.id}`,
      payload,
      "تحديث الحساب",
      () => {
        toast.success("تم حفظ التغييرات بنجاح!");
        router.refresh();
      },
      () => reset()
    );
  };

  const InputField = ({ label, name, type = "text", icon, ...rest }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          {...register(name, { required: `${label} مطلوب` })}
          className={`block w-full pr-10 border rounded-lg p-3 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-lime-500 focus:border-transparent ${
            errors[name] ? "border-red-500" : "border-gray-300"
          }`}
          {...rest}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );

  const ProfileCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
          <FiUser className="text-lime-500" />
          المعلومات الشخصية
        </h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="الاسم الأول"
          name="firstName"
          icon={<FiUser />}
        />
        <InputField
          label="اسم العائلة"
          name="lastName"
          icon={<FiUser />}
        />
        <InputField
          label="البريد الإلكتروني"
          name="email"
          type="email"
          icon={<FiMail />}
        />
        <InputField
          label="رقم الهاتف"
          name="phone"
          icon={<FiPhone />}
          dir="ltr"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            إعدادات الحساب
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            إدارة معلوماتك الشخصية وإعدادات الأمان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* العمود الجانبي */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={imageUrl || "/default-avatar.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute bottom-0 right-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => setImageUrl(reader.result);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <span className="absolute bottom-0 right-0 bg-lime-500 text-white p-2 rounded-full shadow-md hover:bg-lime-600 transition">
                    <FiUser className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-3 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <ProfileCard />

              {/* إعدادات الأمان */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                    <FiLock className="text-blue-500" />
                    إعدادات الأمان
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <InputField
                    label="كلمة المرور الحالية"
                    name="oldPassword"
                    type="password"
                    icon={<FiLock />}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="كلمة المرور الجديدة"
                      name="newPassword"
                      type="password"
                      icon={<FiRefreshCw />}
                    />
                    <InputField
                      label="تأكيد كلمة المرور"
                      name="confirmNewPassword"
                      type="password"
                      icon={<FiCheckCircle />}
                    />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                      يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وتشمل حروفًا كبيرة وصغيرة وأرقامًا.
                    </p>
                  </div>
                </div>
              </div>

              {/* أزرار الإجراءات */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition flex items-center justify-center"
                >
                  {loading ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    "حفظ التغييرات"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
