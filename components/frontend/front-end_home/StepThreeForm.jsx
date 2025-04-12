"use client";

export default function StepThreeForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">جاهزية متجرك</h1>
      <form>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>لدي منتجات أو خدمات جاهزة لإضافتها</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>لدي تصميم جاهز لواجهة متجري الإلكتروني</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>لدي الوثائق الحكومية الخاصة بالتجارة الإلكترونية</span>
          </label>
        </div>
      </form>
    </div>
  );
}
