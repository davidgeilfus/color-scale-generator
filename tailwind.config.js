module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: '#F4F8FF',
          50: '#EEF4FD',
          100: '#CFDFFD',
          200: '#B1CCFD',
          300: '#83ADFD',
          400: '#528CFD',
          500: '#126CF2',
          600: '#135EEE',
          700: '#004EEA',
          800: '#0040C1',
          900: '#00359E',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
