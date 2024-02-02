/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans'],
        openSans: ['OpenSans', 'sans'],
      },
      screens: {
        'max-sm': {'max': '489px'},
        'max-md': {'max': '649px'},
      },
    },
  },
  plugins: [],
}

