"use client";
import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}