import React from 'react';

export default function ColorColumn({ color }) {
  // التأكد من أن القيمة ليست فارغة
  if (!color) {
    return <span>No Color</span>; // في حال كانت القيمة فارغة
  }

  return (
    <div className="flex items-center">
      <div
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full mr-2"
      ></div>
      <span>{color}</span>
    </div>
  );
}
