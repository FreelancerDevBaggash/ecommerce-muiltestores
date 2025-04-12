// components/backoffice/SectionDivider.js
import React from "react";

const SectionDivider = ({ title }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 pb-2 mb-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionDivider;
