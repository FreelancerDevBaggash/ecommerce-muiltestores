// components/CountdownFloatingBox.jsx
'use client';

import React, { useEffect, useState } from 'react';

export default function CountdownFloatingBox({ endDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff <= 0) {
      return null;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="fixed  left-4 z-50 bg-yellow-300 text-black shadow-lg rounded-lg px-4 py-3 border border-yellow-500">
      <p className="font-bold mb-1 text-sm text-center">⏳ انتهاء الاشتراك:</p>
      <p className="text-center text-sm font-semibold">
        {timeLeft.days > 0 && <span>{timeLeft.days}ي </span>}
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </p>
    </div>
  );
}
