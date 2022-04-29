module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zelena: "#82A571",
        modra: "#8BBBB6",
      },
    },
    screens: {
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
