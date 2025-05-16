"use client";

import React from "react";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark text-white px-6">
      <h2 className="text-3xl font-bold font-heading mb-6 text-center">
        Welcome to Harmyonics
      </h2>
      <div className="max-w-lg bg-cosmic-blue bg-opacity-80 rounded-xl p-8 shadow-lg">
        <p className="text-lg mb-4">
          Discover a transformative well-being platform leveraging the power of
          precisely engineered sound frequencies.
        </p>
        <p className="text-lg mb-4">
          Align your mind, body, and spirit with harmonious vibrations designed
          to enhance mental clarity, emotional balance, and physical restoration.
        </p>
        <p className="text-lg">
          Let Harmyonics guide you on your journey to personal evolution and
          maximum potential.
        </p>
      </div>
    </div>
  );
}
