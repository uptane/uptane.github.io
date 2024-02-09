/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans'],
        openSans: ['OpenSans', 'sans'],
        heading: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        content: ['OpenSans', 'ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      screens: {
        'max-sm': {'max': '489px'},
        'max-md': {'max': '649px'},
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(130deg, #0C64D6 0%, rgba(12, 100, 214, 0.87) 0%, rgba(12, 100, 214, 0.78) 47.69%, rgba(12, 100, 214, 0.62) 99.61%, rgba(12, 100, 214, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}
