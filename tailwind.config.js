/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : "#161622",
        secondary : "#E50914"
      },
      fontFamily : {
          suse : ["Suse", "sans-serif"],
      },
    },
  },
  plugins: [],
}

