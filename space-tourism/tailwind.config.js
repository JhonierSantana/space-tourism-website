/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "54p": "54%",
        "274px": "274px",
        "445p": "445px",
      },
      height: {
        "382px": "382px",
        "274px": "274px",
        "445p": "445px",
        "472p": "472px",
        "90vh": "90vh",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
<<<<<<< HEAD
        "bellefair": ["Bellefair", "serif"],  // Añadida la fuente Bellefair
=======
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
>>>>>>> e65eaa3de97ba10990cd87b2136aac605a27358d
      },
      spacing: {
        "4.75px": "4.75px",
      },
      fontSize: {
<<<<<<< HEAD
        '28px': '28px',
        '56px': '56px',  // Añadido tamaño de fuente 56px
=======
        "100p": "100px",
        "28px": "28px",
        "14px": "14px",
      },
      lineHeight: {
        "114.6px": "114.6px",
>>>>>>> e65eaa3de97ba10990cd87b2136aac605a27358d
      },
      letterSpacing: {
        4.75: "4.75px",
      },
<<<<<<< HEAD
      lineHeight: {
        '64.18px': '64.18px',  // Añadido line-height de 64.18px
      },
=======
>>>>>>> e65eaa3de97ba10990cd87b2136aac605a27358d
      maxWidth: {
        "440px": "440px",
        "28rem": "28rem",
      },
      textColor: {
        gray: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
