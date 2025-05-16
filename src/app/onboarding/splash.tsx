"use client";

import React from "react";

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark text-white">
      <svg
        className="w-32 h-32 mb-8 animate-pulse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Harmyonics Logo"
      >
        <circle cx="50" cy="50" r="40" stroke="#00BCD4" strokeWidth="5" />
        <circle cx="50" cy="50" r="30" stroke="#B39DDB" strokeWidth="5" />
        <circle cx="50" cy="50" r="20" stroke="#FFD700" strokeWidth="5" />
      </svg>
      <h1 className="text-4xl font-bold font-heading mb-4">Harmyonics</h1>
      <p className="text-lg max-w-md text-center">
        Align your internal state with harmonious vibrations. All you have to pay
        is your attention and let your body cash out the benefits.
      </p>
    </div>
  );
}
