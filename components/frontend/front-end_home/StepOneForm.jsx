import { useState } from "react";

export default function Steps() {
  const [currentStep, setCurrentStep] = useState(1); // الخطوة الحالية
  const [experience, setExperience] = useState("");
  const [hasProduct, setHasProduct] = useState("");
  const [goal, setGoal] = useState("");

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">
        {/* العناوين */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-lg font-bold ${
              currentStep === 1 ? "text-green-600" : "text-gray-400"
            }`}
          >
            1. إنشاء حساب
          </h2>
          <h2
            className={`text-lg font-bold ${
              currentStep === 2 ? "text-green-600" : "text-gray-400"
            }`}
          >
            2. تعرف عليك
          </h2>
          <h2
            className={`text-lg font-bold ${
              currentStep === 3 ? "text-green-600" : "text-gray-400"
            }`}
          >
            3. جاهزية متجرك
          </h2>
        </div>

        {/* محتوى الخطوات */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              إنشاء حساب
            </h3>
            <p className="text-gray-500 mb-6">
              قم بإعداد حسابك للوصول إلى متجرك بسهولة.
            </p>
            {/* محتوى إضافي يمكن إضافته هنا */}
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              تعرف عليك
            </h3>
            <p className="text-gray-500 mb-6">
              ساعدنا للتعرف عليك أكثر لتقديم تجربة تلائم نشاطاتك التجارية.
            </p>

            {/* السؤال الأول */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                هل لديك خبرة في التجارة؟ <span className="text-red-500">(مطلوب)</span>
              </h4>
              <div className="flex items-center gap-4">
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    experience === "yes"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setExperience("yes")}
                >
                  نعم
                </button>
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    experience === "no"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setExperience("no")}
                >
                  ليس بعد
                </button>
              </div>
            </div>

            {/* السؤال الثاني */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                هل لديك منتج أو خدمة جاهزة للبيع؟{" "}
                <span className="text-red-500">(مطلوب)</span>
              </h4>
              <div className="flex items-center gap-4">
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    hasProduct === "yes"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setHasProduct("yes")}
                >
                  نعم، لدي منتج أو خدمة
                </button>
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    hasProduct === "no"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setHasProduct("no")}
                >
                  لا، ليس لدي منتج أو خدمة بعد
                </button>
              </div>
            </div>

            {/* السؤال الثالث */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                ما هو هدفك من فتح متجر على سلة؟{" "}
                <span className="text-red-500">(مطلوب)</span>
              </h4>
              <div className="flex items-center gap-4">
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    goal === "platform"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setGoal("platform")}
                >
                  استكشاف المنصة
                </button>
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    goal === "dropshipping"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setGoal("dropshipping")}
                >
                  تجربة الدروبشيبنغ
                </button>
                <button
                  className={`py-2 px-4 rounded-lg border ${
                    goal === "both"
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => setGoal("both")}
                >
                  الاثنين معاً
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              جاهزية متجرك
            </h3>
            <p className="text-gray-500 mb-6">
              هل تحتاج إلى مساعدتنا لتجهيز متجرك؟ يمكنك بدء الاستفادة من خدماتنا
              فوراً.
            </p>
            {/* محتوى إضافي يمكن إضافته هنا */}
          </div>
        )}

        {/* أزرار التحكم */}
        <div className="flex justify-between items-center mt-6">
          <button
            className={`py-2 px-4 rounded-lg ${
              currentStep === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            السابق
          </button>
          <button
            className={`py-2 px-6 rounded-lg ${
              currentStep === 3
                ? "bg-green-400 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
            onClick={handleNext}
            disabled={currentStep === 3}
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
}
