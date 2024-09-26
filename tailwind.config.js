const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "25px"
    },
      screens: {
        sm: '640px',
        md:'768px',
        lg:'960px',
        xl:'1200px'
      },
    fontFamily:{

      primary: "var('--font-jetBrainsMono')"

    },
    extend: {
      colors: {
        primary:'#1c1c22',
        accent:{
          DEFAULT:'#00ff99',
          hover: '#00e187 '
        }        
        },
        
      keyframes: {
        
      },
      animation: {
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}