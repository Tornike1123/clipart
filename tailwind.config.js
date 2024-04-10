/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      notoSans: ["Noto Sans Georgian", "sans-serif"],
    },
    colors: {
      primary: "#585EE3",
      interfaceBlack200: "#1D2D35",
      primaryLight: "#F5F8FF",
      interfaceBlack: "#000000",
      interface300: "#21343D",
      interface200: "#657178",
      background: "#F2F3F7",
      interfaceWhite: "#ffffff",
    },
  },
  plugins: [],
};
