/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "54p": "54%",
        "274px": "274px",
        "445p": "445px",
        "57%": "57%",
        "15px": "15px",
        "568.07px": "568.07px",
      },
      height: {
        "382px": "382px",
        "274px": "274px",
        "445p": "445px",
        "472p": "472px",
        "90vh": "90vh",
        "15px": "15px",
        "712px": "712px",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      spacing: {
        "4.75px": "4.75px",
      },
      fontSize: {
        "100p": "100px",
        "28px": "28px",
        "14px": "14px",
        "32px": "32px",
        "56px": "56px",
      },
      lineHeight: {
        "114.6px": "114.6px",
      },
      letterSpacing: {
        4.75: "4.75px",
      },
      maxWidth: {
        "440px": "440px",
        "28rem": "28rem",
        "25rem": "25rem",
      },
      textColor: {
        grayy: "#d4d4d4",
      },
    },
    plugins: [],
  },
};
