"use client";

import React, { useState } from "react";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: Implement signup logic here

    alert("Signup submitted (demo)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark text-white px-6">
      <h2 className="text-3xl font-bold font-heading mb-6 text-center">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-cosmic-blue bg-opacity-80 rounded-xl p-8 shadow-lg"
      >
        {error && (
          <div className="mb-4 text-red-400 font-semibold text-center">{error}</div>
        )}
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full mb-4 px-4 py-2 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <label htmlFor="password" className="block mb-2 font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full mb-4 px-4 py-2 rounded-md text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <label htmlFor="confirmPassword" className="block mb-2 font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="w-full mb-6 px-4 py-2 rounded-md text-black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button
          type="submit"
          className="w-full bg-accent-teal text-black font-bold py-3 rounded-md hover:bg-teal-500 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
