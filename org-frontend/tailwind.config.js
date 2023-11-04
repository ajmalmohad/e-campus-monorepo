const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  lightMode: "class",
  plugins: [nextui(
    {
      prefix: "nextui",
      addCommonColors: false, 
      defaultTheme: "light",
    }
  )],
}

