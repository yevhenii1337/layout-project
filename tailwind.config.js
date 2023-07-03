/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
    screens: {
      sm: "576px",

      md: "960px",

      lg: "1440px",
    },
    colors: {
      black: "#000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
