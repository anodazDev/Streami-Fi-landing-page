/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'Primary': {
        100: 'DC90FF',
        200: '#C954FF',
        300: '#B820FF',
        400: '#9100D4',
        500: '#6D00A0',
        600: '#56007E', //main
        700: '#41005F',
        800: '#E22D8D',
      },
    },
  },
  plugins: [],
}
