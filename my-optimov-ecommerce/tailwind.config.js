/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C",
        secondary: "#F7F7F7",
        accent: "#2AC5BF",
        accentBlue: "#007AFF"
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}
