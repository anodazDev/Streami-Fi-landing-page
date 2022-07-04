/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'custom-green': '#66bb6a',
        'primary': {
          100: '#DC90FF',
          200: '#C954FF',
          300: '#B820FF',
          400: '#9100D4',
          500: '#6D00A0',
          600: '#56007E', //main
          700: '#41005F',
          800: '#E22D8D',
        },
        'secondary': {
          100: '#FFAFDA',
          200: '#FF89C7',
          300: '#FF6AB9',
          400: '#FF5BB3',
          500: '#FF3CA4',
          600: '#FA2094', //main
          700: '#DB0074',
          800: '#A70059',
        },
        'supplement': {
          100: '#EFFFC1',
          200: '#FFE8BB',
          300: '#FFDE9D',
          400: '#FFCA63',
          500: '#FF9A3D',
          600: '#FF764A', //main
          700: '#FF612E',
          800: '#FF3F01',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}