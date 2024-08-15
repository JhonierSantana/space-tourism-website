/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "54p": "54%",
        "274px": "274px",
      },
      height: {
        "382px": "382px",
        "274px": "274px",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        "bellefair": ["Bellefair", "serif"],  // Añadida la fuente Bellefair
      },
      spacing: {
        '4.75px': '4.75px',
      },
      fontSize: {
        '28px': '28px',
        '56px': '56px',  // Añadido tamaño de fuente 56px
      },
      letterSpacing: {
        '4.75': '4.75px',
      },
      lineHeight: {
        '64.18px': '64.18px',  // Añadido line-height de 64.18px
      },
      maxWidth: {
        '440px': '440px', 
      },
    },
  },
  plugins: [],
};
