/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       // blur: 'url(/src/assets/lmoz.png)',

      },
      fontFamily:{
        sans:'Roboto, sans-serif',

      },
    },
  },
  plugins: [],
}