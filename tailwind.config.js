/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nanum: ["Nanum Gothic"],
    },
    screens: {
      desktop: { max: "1200px" },
      tablet: { max: "768px" },
      moblie: { max: "375px" },
    },
  },
  plugins: [],
};
