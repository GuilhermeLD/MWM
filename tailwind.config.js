import { CrimsonPro_700Bold } from "@expo-google-fonts/crimson-pro"
import { fontFamily } from "./src/styles/font-family"


/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily,
      colors: {
        primary: '#536C51',
        third: '#5D9B6E',
        fourth: '#2A9B71',
        sixth: '#32B8B3',
        unselected: "#B7B7B7",
        
      }
    },
  },
  plugins: [],
}