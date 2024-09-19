/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Rubik, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      food: {
        50: "#faf5f0",
        100: "#f5eae1",
        150: "#f0e0d2",
        200: "#ebd6c3",
        250: "#e7ccb4",
        300: "#e2c1a5",
        350: "#ddb796",
        400: "#d8ad87",
        450: "#d3a278",
        500: "#ce9869",
        550: "#b9895f",
        600: "#a57a54",
        650: "#906a4a",
        700: "#7c5b3f",
        750: "#674c35",
        800: "#523d2a",
        850: "#3e2e1f",
        900: "#291e15",
        950: "#150f0a",
      },
    },
    extend: {},
  },
  plugins: [],
};
