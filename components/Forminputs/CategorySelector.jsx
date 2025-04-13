"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useState, useEffect } from "react";

export default function CategorySelector({ categories, setValue, errors }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const selectedCategory = categories.find(
    (cat) => cat.id === selectedCategoryId
  );

  const handleCategoryChange = (value) => {
    setSelectedCategoryId(value);
    setValue("categoryId", value); // حفظ القسم الرئيسي في النموذج
    setValue("subCategoryId:", ""); // إعادة تعيين القسم الفرعي
  };

  const handleSubcategoryChange = (value) => {
    setValue("subCategoryId", value); // حفظ القسم الفرعي في النموذج
  };

  return (
    <div className="space-y-4">
      {/* اختيار القسم الرئيسي */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
          القسم الرئيسي
        </label>
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full  text-gray-700 dark:text-white">
            <SelectValue placeholder="اختر القسم الرئيسي" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.categoryId.message}
          </p>
        )}
      </div>

      {/* اختيار القسم الفرعي */}
      {selectedCategory && selectedCategory.subcategories?.length > 0 && (
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
            القسم الفرعي
          </label>
          <Select onValueChange={handleSubcategoryChange}>
            <SelectTrigger className="w-full text-gray-700 dark:text-white">
              <SelectValue placeholder="اختر القسم الفرعي" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory.subcategories.map((sub) => (
                <SelectItem key={sub.id} value={sub.id}>
                  {sub.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subcategoryId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subcategoryId.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
