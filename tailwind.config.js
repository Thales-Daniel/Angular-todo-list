/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "semi-pink-gray": "#565656",
        "semi-blue-gray": "#092F40",
        "ligh-pink": "#FFDFDB",
        "background-black": "#181A1A"
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px'},
        '2lg': {'max': '1024px'},
        'xl': { 'max': '1200px'},
        '2xl': {'min': '1536px'},
      }

    },
  },
  plugins: [],
}
