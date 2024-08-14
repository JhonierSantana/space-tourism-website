/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "54p": "54%",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
