import {Plus} from "lucide-react";
import React from 'react'

export default function SubmitButton({ 
    isLoading = false,
    buttonTitle,
    loadingButtonTitle,
    disabled = false
}) {
  return (
    <div className="sm:col-span-1">
        {isLoading ? (
            <button
              disabled
              type="button"
              className="mt-4 text-white bg-purple-900 opacity-75
              font-medium rounded-lg text-sm px-5 py-2.5 text-center
              inline-flex items-center cursor-not-allowed"
              aria-label="جاري التحميل"
            >
                {/* أيقونة التحميل */}
                {loadingButtonTitle}
            </button>
        ) : (
            <button
              type='submit'
              disabled={disabled}
              aria-disabled={disabled}
              className={`mt-4 text-white bg-purple-900 focus:ring-4 focus:ring-indigo-200
              font-medium rounded-lg text-sm px-5 py-3 text-center
              inline-flex items-center dark:bg-purple-600
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
            >
                <Plus className="w-5 h-5 mr-2" />
                <span>{buttonTitle}</span>
            </button>
        )}
    </div>
  );
}