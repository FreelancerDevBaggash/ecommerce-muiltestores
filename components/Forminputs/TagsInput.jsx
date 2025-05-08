import React, { useState } from 'react';

export default function TagsInput({ label, value, onChange }) {
  const [input, setInput] = useState('');

  const addFeature = () => {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput('');
  };

  const removeFeature = (index) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addFeature();
    }
  };

  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">{label}</label>
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 rounded">
        {value.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeFeature(i)}
              className="text-red-500 dark:text-red-400"
            >
              ×
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow min-w-[100px] bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none"
          placeholder="أدخل ميزة واضغط Enter"
        />
      </div>
    </div>
  );
}
