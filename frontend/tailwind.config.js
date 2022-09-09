/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Utils/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:'#DA0037',
        secondary:'#444444',
        darkColor:'#212121',
        // darkColor:'#171717',
        darkSecondary:'#292929',
        lightColor:'#EDEDED',
        reactionIconBg:'#F1F5F9',
        reactionIconBgDark:'#444444',
        reactionText:'#334155',
        brightPurple: '#5123CB',
      },
    },
    fontFamily: {
      poppins:['Poppins'],
      // nostalgia:['nostalgia', "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('flowbite/plugin')],
}