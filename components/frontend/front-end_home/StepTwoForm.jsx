"use client";

export default function StepTwoForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">نتعرف عليك</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">الاسم الكامل</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="الاسم الكامل"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">رقم الهاتف</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="رقم الهاتف"
          />
          
        </div>
      </form>
    </div>
  );
}

