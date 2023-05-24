/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        zelena: "#27FFBE",
        ruzova: "#C07CD1",
        pozadie: "#0B0C16",
        pozadie2: "#020C20",
        "dynamic-shadow": "var(--dynamic-shadow-color)",
      },
      boxShadow: {
        dynamic: "var(--dynamic-shadow)",
      },
    },
  },
  plugins: [],
};
