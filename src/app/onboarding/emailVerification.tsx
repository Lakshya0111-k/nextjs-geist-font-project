"use client";

import React, { useState } from "react";

export default function EmailVerification() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    // TODO: Implement verification logic here

    alert("Verification code submitted (demo)");
  };

  const handleResend = () => {
    setResendMessage("Verification code resent.");
    // TODO: Implement resend code logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark text-white px-6">
      <h2 className="text-3xl font-bold font-heading mb-6 text-center">
        Email Verification
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-cosmic-blue bg-opacity-80 rounded-xl p-8 shadow-lg"
      >
        {error && (
          <div className="mb-4 text-red-400 font-semibold text-center">{error}</div>
        )}
        <label htmlFor="code" className="block mb-2 font-semibold">
          Enter 6-digit verification code
        </label>
        <input
          id="code"
          type="text"
          maxLength={6}
          className="w-full mb-6 px-4 py-2 rounded-md text-black tracking-widest text-center text-xl"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/, ""))}
          required
          autoComplete="one-time-code"
        />
        <button
          type="submit"
          className="w-full bg-accent-teal text-black font-bold py-3 rounded-md hover:bg-teal-500 transition"
        >
          Verify
        </button>
      </form>
      <button
        onClick={handleResend}
        className="mt-4 text-sm text-ethereal-lavender hover:underline"
      >
        Resend Code
      </button>
      {resendMessage && (
        <p className="mt-2 text-sm text-green-400 text-center">{resendMessage}</p>
      )}
    </div>
  );
}
