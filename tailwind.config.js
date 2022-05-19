module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zelena: "#156058",
        modra: "#8BBBB6",
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
    backgroundImage: {
      dark: "url(/hviezdy_background.svg)",
      darkClean:
        "linear-gradient(to top, #01041f, #050622, #0a0725, #0e0928, #120a2b);",
      light:
        "linear-gradient(to right top, #badaea, #d0e2f1, #e3ebf7, #f3f4fb, #ffffff);",
    },
  },
  plugins: [],
  darkMode: "class",
};
