const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",

    // Or if using `src` directory:
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#1a202c",
        },
        // Background Colors
        background: {
          light: "#212f64",
        },
        // Border Colors
        border: {
          light: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
});