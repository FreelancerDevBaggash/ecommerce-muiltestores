// استيراد React
import React from 'react';

export default function FontFamilyColumn({ font }) {
  return (
    <div className="font-display">
      <span>{font || "Default Font"}</span>
    </div>
  );
}
