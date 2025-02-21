/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};