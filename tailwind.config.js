/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
      colors: {
        orange: "#ea5e11",
        section: "#e6eaec",
        title: "#000000",
        normal: "#3b4b58",
        button: "#7f7f7f",
        input: "#727473",
      },
      backgroundImage: {
        bannerBg: "url(assets/images/banner.jpg)",
        featureBg: "url(assets/images/featureBg.jpg)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        work: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      screens: {
        custom: "1233px",
      },
    },
  },
  plugins: [],
};
