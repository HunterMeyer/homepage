/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.vue"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "my-black": {
          100: "#BABABA", // "#787878",
          200: "#9F9F9F", // #6B6B6B",
          300: "#5C5C5C",
          400: "#4C4C4C",
          500: "#2B2B2C", // "#3A3A3A",
          600: "#262626",
          700: "#1E1E1F",
          800: "#181819",
          900: "#121212",
          950: "#0F0F0F",
        },
      },
      animation: {
        "scale-up": "scaleUp 0.25s ease forwards",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.4)" },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
