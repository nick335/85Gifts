/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF0000',
        'primary': '#072AC8',
        'accent': '#FFDA1F',
        'black': '#000000',
        'dark': '#020200',
        'grey': '#545454',
        'lightgrey': '#D9D7D7',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}