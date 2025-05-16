"use client";

import React from "react";

const trendingTracks = [
  { id: 1, title: "Focus Flow", artist: "Harmyonics", duration: "3:45" },
  { id: 2, title: "Calm Mind", artist: "Zen Waves", duration: "4:20" },
  { id: 3, title: "Deep Sleep", artist: "Night Harmonics", duration: "5:10" },
];

const newReleases = [
  { id: 1, title: "Energy Boost", artist: "Vibe Masters", duration: "3:30" },
  { id: 2, title: "Meditation Bliss", artist: "Soul Sounds", duration: "4:00" },
  { id: 3, title: "Healing Frequencies", artist: "Aura Tones", duration: "6:15" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-primary-dark text-white px-6 py-8">
      <h1 className="text-4xl font-bold font-heading mb-8">Harmyonics Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Trending</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingTracks.map((track) => (
            <div
              key={track.id}
              className="bg-cosmic-blue bg-opacity-80 rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-sm mb-1">Artist: {track.artist}</p>
              <p className="text-sm">Duration: {track.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newReleases.map((track) => (
            <div
              key={track.id}
              className="bg-cosmic-blue bg-opacity-80 rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-sm mb-1">Artist: {track.artist}</p>
              <p className="text-sm">Duration: {track.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
