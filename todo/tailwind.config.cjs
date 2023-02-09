/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}