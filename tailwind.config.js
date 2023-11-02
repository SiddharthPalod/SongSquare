/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#323232',
        'ipink' : '#FF3179',
        'ipurple' : '#B41EB2',
      },

      fontFamily: {
        'gothic' : ['League Gothic'],        
      }
    }
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark"],
  },

}

