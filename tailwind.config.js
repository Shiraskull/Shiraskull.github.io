/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container:{
        center:true
    },
    extend: {
      colors:{
        primary:'#2aa0f5'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

