"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyPhone({ verificationCode, vendorId }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [showResend, setShowResend] = useState(false);
  const [timer, setTimer] = useState(30);
  const [token, setToken] = useState(verificationCode); // ✅ حالة للتوكن

  const router = useRouter();

  const handleChange = (index, value) => {
    if (/^[0-9۰-۹٠-٩]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const next = document.getElementById(`otp-${index + 1}`);
      if (value && next) next.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (code === token) { // ✅ التحقق باستخدام التوكن المحدث
      try {
        const res = await fetch("/api/verify-phone", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vendorId }),
        });

        const data = await res.json();

        if (res.ok) {
          router.push(`/onboarding/${vendorId}`);
        } else {
          setError(data.message || "حدث خطأ أثناء تأكيد البريد.");
        }
      } catch (err) {
        setError("حدث خطأ أثناء تأكيد البريد.");
        console.log(err);
      }
    } else {
      setError("رمز التحقق غير صحيح.");
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      const res = await fetch("/api/verify-phone", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vendorId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "فشل في إرسال رمز جديد.");
      } else {
        alert("تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني.");
        setToken(data.verificationCode); // ✅ تحديث رمز التحقق
        setShowResend(false);
        setTimer(30);
        setOtp(["", "", "", ""]); // ✅ تفريغ الخانات السابقة
      }
    } catch (err) {
      setError("err حدث خطأ أثناء إعادة إرسال الرمز.");
      console.log(err);
    }
  };

  useEffect(() => {
    if (!showResend) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setShowResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showResend]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">التحقق من رقم هاتفك</h1>
        <p className="text-gray-600 text-center mb-6">
          الرجاء إدخال الرمز المكون من 4 أرقام المرسل إلى الواتساب        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl border text-slate-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Verify
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          {showResend ? (
            <button
              onClick={handleResend}
              className="text-primary hover:underline"
            >
              إعادة إرسال رمز التحقق
            </button>
          ) : (
            <p>يمكنك إعادة إرسال الرمز خلال {timer} ثانية</p>
          )}
        </div>
      </div>
    </div>
  );
}
