/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        violet: {
          400: '#9674e5',
          500: '#8257e5',
          900: '#1c162c',
          950: '#130f1e',
        },
        zinc: {
          300: '#d9cdf7',
          600: '#6a617f',
          700: '#3c3748',
          950: '#0b0911',
        },
      },
    },
  },
  plugins: [],
}
