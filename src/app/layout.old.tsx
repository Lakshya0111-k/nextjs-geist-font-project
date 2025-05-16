import React from "react";
import { Inter, Montserrat, Nunito } from "next/font/google";

import "./globals.css";
import "./theme.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading-alt",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Harmyonics - Vibrational Well-being Platform",
  description:
    "Harmyonics is a cutting-edge vibrational well-being streaming platform for mental, emotional, physical, and spiritual health.",
};

import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 px-4 py-2 bg-accent-teal text-black rounded-md shadow-md hover:bg-teal-500 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Azonix&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-[#1A237E] text-white min-h-screen`}
        style={{
          fontFamily:
            "var(--font-body), 'Inter', 'Open Sans', 'Lato', sans-serif",
        }}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
