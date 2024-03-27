/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#414A58",
        secondary: "  #d8c79F",
        white: " #FFFFFF",
        black: "#000000",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "870px",
      md: "1060px",
      lg: "1200px",
      xg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};
