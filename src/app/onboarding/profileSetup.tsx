"use client";

import React, { useState } from "react";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("Name is required.");
      return;
    }

    // TODO: Implement profile setup logic here

    alert("Profile setup submitted (demo)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark text-white px-6">
      <h2 className="text-3xl font-bold font-heading mb-6 text-center">
        Profile Setup
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-cosmic-blue bg-opacity-80 rounded-xl p-8 shadow-lg"
      >
        {error && (
          <div className="mb-4 text-red-400 font-semibold text-center">{error}</div>
        )}
        <label htmlFor="profilePic" className="block mb-2 font-semibold">
          Profile Picture
        </label>
        <input
          id="profilePic"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-6"
        />
        {profilePic && (
          <img
            src={URL.createObjectURL(profilePic)}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full mb-6 object-cover mx-auto"
          />
        )}
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full mb-6 px-4 py-2 rounded-md text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-accent-teal text-black font-bold py-3 rounded-md hover:bg-teal-500 transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
