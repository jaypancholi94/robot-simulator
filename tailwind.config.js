const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Frank Ruhl Libre'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: "#212121",
        background: "#efeae6",
        primary: "#e25c1d",
        secondary: "#8fb0ab00",
        accent: "#f7f7f7",
      },
      animation: {
        "robot-spin": "spin 3s linear infinite",
      },
      rotate: {
        270: "270deg",
      },
      boxShadow: {
        button: "0 27px 15px -17px rgba(0,0,0,.3),0 2px 4px rgba(0,0,0,.3)",
        "button-hover":
          "0 20px 15px -17px rgba(0,0,0,.3),0 1px 2px rgba(0,0,0,.3)",
      },
    },
  },
  plugins: [],
};
