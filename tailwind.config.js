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
    },
  },
  plugins: [],
}

