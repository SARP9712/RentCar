/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
        abc:["Toboto", "sans-serif"],
        web:["Archivo", "sans-serif"],
        oswald:["Oswald", "sans-serif"]
    },
  },
  plugins: [],
};