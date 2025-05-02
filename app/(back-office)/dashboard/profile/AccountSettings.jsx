



"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";
import { toast } from "react-hot-toast";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function AccountSettings({ user = {} }) {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingSecurity, setLoadingSecurity] = useState(false);
  const router = useRouter();

  // Form تحديث المعلومات الشخصية
  const {
    register: regProfile,
    handleSubmit: submitProfile,
    formState: { errors: errorsProfile },
    reset: resetProfile,
  } = useForm({
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
    },
  });

  // Form تغيير كلمة المرور
  const {
    register: regSecurity,
    handleSubmit: submitSecurity,
    formState: { errors: errorsSecurity },
    reset: resetSecurity,
    watch,
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmitProfile = async (data) => {
    await makePutRequest(
      setLoadingProfile,
      `/api/vendors/${user.id}`,
      { name: data.name, email: data.email, phone: data.phone },
      "تحديث الحساب",
      (res) => {
        toast.success(res.message || "تم تحديث المعلومات الشخصية بنجاح!");
        resetProfile(data);
        router.refresh();
      },
      (err) => {
        toast.error(err.message || "حدث خطأ أثناء تحديث المعلومات الشخصية");
      }
    );
  };

  const onSubmitSecurity = async (data) => {
    // تحقق محلي من تطابق كلمة المرور الجديدة
    if (data.newPassword !== data.confirmNewPassword) {
      toast.error("كلمتا المرور الجديدتان غير متطابقتين. الرجاء المحاولة مرة أخرى.");
      return;
    }
    await makePutRequest(
      setLoadingSecurity,
      `/api/vendors/${user.id}/update-password`,
      { oldPassword: data.oldPassword, newPassword: data.newPassword },
      "تحديث كلمة المرور",
      (res) => {
        toast.success(res.message || "تم تغيير كلمة المرور بنجاح!");
        resetSecurity();
      },
      (err) => {
        // التعامل مع أخطاء الخادم
        if (err.status === 401) {
          toast.error("كلمة المرور الحالية غير صحيحة. الرجاء المحاولة مجدداً.");
        } else if (err.status === 404) {
          toast.error("المستخدم غير موجود.");
        } else {
          toast.error(err.message || "حدث خطأ أثناء تغيير كلمة المرور");
        }
      }
    );
  };

  const InputField = ({ label, name, register, errors, type = "text", icon, ...rest }) => (
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
      {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* بطاقة المعلومات الشخصية */}
        <form
          id="profile-form"
          onSubmit={submitProfile(onSubmitProfile)}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
              <FiUser className="text-lime-500" />
              المعلومات الشخصية
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="الاسم" name="name" register={regProfile} errors={errorsProfile} icon={<FiUser />} />
            <InputField label="البريد الإلكتروني" name="email" type="email" register={regProfile} errors={errorsProfile} icon={<FiMail />} />
            <InputField label="رقم الهاتف" name="phone" register={regProfile} errors={errorsProfile} icon={<FiPhone />} dir="ltr" />
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
            <button
              type="submit"
              disabled={loadingProfile}
              className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition flex items-center"
            >
              {loadingProfile && <FiRefreshCw className="animate-spin mr-2" />}
              حفظ المعلومات
            </button>
          </div>
        </form>

        {/* بطاقة إعدادات الأمان */}
        <form
          id="security-form"
          onSubmit={submitSecurity(onSubmitSecurity)}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
              <FiLock className="text-blue-500" />
              إعدادات الأمان
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <InputField label="كلمة المرور الحالية" name="oldPassword" type="password" register={regSecurity} errors={errorsSecurity} icon={<FiLock />} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="كلمة المرور الجديدة" name="newPassword" type="password" register={regSecurity} errors={errorsSecurity} icon={<FiRefreshCw />} />
              <InputField label="تأكيد كلمة المرور" name="confirmNewPassword" type="password" register={regSecurity} errors={errorsSecurity} icon={<FiCheckCircle />} />
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-300">
                يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وتشمل حروفًا كبيرة وصغيرة وأرقامًا.
              </p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
            <button
              type="submit"
              disabled={loadingSecurity}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              {loadingSecurity && <FiRefreshCw className="animate-spin mr-2" />}
              تغيير كلمة المرور
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
