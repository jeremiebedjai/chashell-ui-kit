const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        card: "4px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#ff8200",
        "primary-dark": "#ff9100",
        light1: "#dee5ea",
        light2: "#d4d5dc",
        dark1: "#232632",
        dark2: "#14161e",

        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
      animation: {
        scaleIn:
          "scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        scaleInSm:
          "scale-in-center-sm 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
      keyframes: {
        "scale-in-center": {
          "0%": {
            transform: "scaleX(0.97)",
          },
          "70%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "scale-in-center-sm": {
          "0%": {
            transform: "scaleX(0.97)",
          },
          "70%": {
            transform: "scaleX(1.03)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
