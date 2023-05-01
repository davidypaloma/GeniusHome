/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#38816F',
        'mediumGreen': '#A3D1C6',
        'lightGreen': '#C1D0C3',
        'lightRed': '#F39F91',
        'darkBlue': '#171E37',
        'primaryWhite': '#EDEDED',
        'lightOrange': '#F4D289'
      },
      fontSize: {
        sizeSm1: '0.25rem',
        sizeSm2: '0.5rem',
        sizeSm3: '0.75rem',
        sizeMd1: '1rem',
        sizeMd2: '1.25rem',
        sizeMd3: '1.5rem',
        sizeLg1: '2rem',
        sizeLg2: '3rem',
        sizeLg3: '4rem',
      },

    },
  },
  plugins: [
    scrollbar
  ],
}