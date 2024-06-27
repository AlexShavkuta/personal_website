/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-100": "#778DA9",
        "blue-200": "#415A77",
        "blue-300": "#1B263B",
        "blue-400": "#0D1B2A",
        "creme-100": "#E0E1DD",
        // "green-100": "#7C897D",
        // "green-200": "#80ed99",
        // "green-300": "#57cc99",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
