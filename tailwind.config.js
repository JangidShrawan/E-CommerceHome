/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'paleOrange': 'hsl(26, 100%, 94%)',
        'veryDarkBlue': 'hsl(220, 13%, 13%)',
        'DarkGrayishBlue': 'hsl(219, 9%, 45%)',
        'grayishBlue': 'hsl(220, 14%, 75%)',
        'lightGrayishBlue': 'hsl(233,64%, 98%)',
      },
      fontFamily: {
        sans : ["Kumbh Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

