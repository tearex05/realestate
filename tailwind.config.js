/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
      '10xl': '13rem',
    },
    screens: {
      'xll': '1156px'
    }
    },
  },
  plugins: [],
}

