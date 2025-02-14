"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    let valentinesDay = new Date(now.getFullYear(), 1, 14).getTime();

    // If Valentine's Day has passed this year, set it for next year
    if (now.getTime() > valentinesDay) {
      valentinesDay = new Date(now.getFullYear() + 1, 1, 14).getTime();
    }

    const updateTime = () => {
      const now = new Date().getTime();
      const difference = valentinesDay - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTime(); // Ensure the UI updates immediately
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-red-500 text-white p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        ❤️ Countdown to Valentine's Day ❤️
      </h2>

      <div className="flex gap-4 p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white/30 text-white p-4 rounded-lg w-24 text-center">
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-lg capitalize">{unit}</div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-lg italic">Love is in the air! 💕</p>
    </div>
  );
}
