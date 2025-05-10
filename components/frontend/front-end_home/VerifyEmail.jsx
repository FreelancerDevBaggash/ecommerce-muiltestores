"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmail({ verificationToken, vendorId }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [showResend, setShowResend] = useState(false);
  const [timer, setTimer] = useState(30);
  const [token, setToken] = useState(verificationToken);
  const [isVerifying, setIsVerifying] = useState(false); // ✅ حالة التحقق

  const router = useRouter();
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (/^[0-9۰-۹٠-٩]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const next = document.getElementById(`otp-${index + 1}`);
      if (value && next) next.focus();
    }
  };

  useEffect(() => {
    const code = otp.join("");
    if (code.length === 4 && code.split("").every((char) => char !== "")) {
      // ✅ تشغيل صوت
      const audio = new Audio("/sounds/success.mp3"); // تأكد من وجود هذا المسار
      audio.play().catch((e) => console.log("تعذر تشغيل الصوت", e));

      // ✅ اهتزاز الجهاز
      if (navigator.vibrate) navigator.vibrate(150);

      handleSubmit();
    }
  }, [otp]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const code = otp.join("");

    if (code === token) {
      try {
        setIsVerifying(true); // ✅ ابدأ التحقق
        const res = await fetch("/api/verify-email", {
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
      } finally {
        setIsVerifying(false); // ✅ انتهى التحقق
      }
    } else {
      setError("رمز التحقق غير صحيح.");
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      const res = await fetch("/api/verify-email", {
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
        setToken(data.verificationToken);
        setShowResend(false);
        setTimer(30);
        setOtp(["", "", "", ""]);
      }
    } catch (err) {
      setError("حدث خطأ أثناء إعادة إرسال الرمز.");
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
        <h1 className="text-2xl font-bold text-center mb-4">Verify Your Email</h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter the 4-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                ref={index === 0 ? firstInputRef : null}
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
            disabled={isVerifying} // ✅ تعطيل الزر عند التحقق
            className={`w-full ${
              isVerifying ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
            } text-white font-semibold py-2 rounded-xl transition duration-200`}
          >
            {isVerifying ? "Verifying..." : "Verify"}
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
