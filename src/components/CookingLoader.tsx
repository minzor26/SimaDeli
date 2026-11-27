import React, { useEffect, useState } from 'react';

export const CookingLoader: React.FC = () => {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setFadingOut(true);
    }, 850);

    const hideTimer = window.setTimeout(() => {
      setHidden(true);
    }, 1250);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Laddar Sima Deli"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF7F2] transition-opacity duration-400 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        {/* Simmering Persian Cooking Pot SVG */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg
            viewBox="0 0 96 96"
            className="w-24 h-24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Soft ice-blue glow behind pot */}
            <circle cx="48" cy="54" r="34" fill="#D6EFF6" opacity="0.65" />

            {/* Rising steam wisps */}
            <path
              d="M36 33 C33 27, 39 22, 36 16"
              stroke="#C6A04A"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="cooking-steam-1"
            />
            <path
              d="M48 31 C45 24, 51 19, 48 12"
              stroke="#1E5F6E"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="cooking-steam-2"
            />
            <path
              d="M60 33 C57 27, 63 22, 60 16"
              stroke="#C6A04A"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="cooking-steam-3"
            />

            {/* Pot lid */}
            <g className="cooking-lid">
              <circle cx="48" cy="36" r="3.2" fill="#C6A04A" />
              <path
                d="M27 44 C27 38.5, 36 36, 48 36 C60 36, 69 38.5, 69 44 Z"
                fill="#C6A04A"
              />
            </g>

            {/* Pot handles */}
            <path
              d="M22 49 H26 M70 49 H74"
              stroke="#1C1917"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Pot body */}
            <path
              d="M26 46 H70 V63 C70 69.6274 64.6274 75 58 75 H38 C31.3726 75 26 69.6274 26 63 V46 Z"
              fill="#1E5F6E"
            />
            <path
              d="M26 46 H70"
              stroke="#1C1917"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Gentle flame under pot */}
            <path
              d="M42 82 C42 78.5, 45 77, 48 77 C51 77, 54 78.5, 54 82 C54 84.5, 51.5 86, 48 86 C44.5 86, 42 84.5, 42 82 Z"
              fill="#C6A04A"
              className="cooking-flame"
            />
          </svg>
        </div>

        {/* Brand & Caption */}
        <div className="space-y-1.5">
          <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            SIMA DELI
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1E5F6E]">
            Tillagar med kärlek…
          </p>
        </div>
      </div>
    </div>
  );
};

