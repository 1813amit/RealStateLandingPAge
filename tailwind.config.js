module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f6f7",
          300: "#dedcda",
          600: "#757575",
          700: "#555555",
          900: "#071c1f",
          "900_01": "#0b2e29",
          "600_01": "#767676",
          "900_03": "#212529",
          "50_02": "#faf8f5",
          "900_02": "#232323",
          "50_01": "#f8f9fe",
        },
        black: { 900: "#000000" },
        blue_gray: { 600: "#5c727d", 900: "#07234b", "900_01": "#1f2744", "900_03": "#35373c" },
        white: { A700: "#ffffff" },
        green: { 400: "#65cf72", 500: "#2eca6a", "600_60": "#35985b60", "500_19": "#2eca6a19" },
        teal: { 50: "#e1e8ed", 300: "#69b99d" },
        light_blue: { A100: "#7adbff", A700: "#007bff" },
        deep_orange: { A200: "#ff5a3c" },
        colors: "#05f006",
        colors1: "#12e252",
      },
      boxShadow: {
        xs: "0px 10px 50px 0px #2e38dc33",
        sm: "0px 5px 20px 0px #172c5219",
        md: "0px 4px 6px -4px #00000019",
      },
      backgroundImage: {
        gradient: "linear-gradient(72deg, #2eca6a,#35985b)",
        gradient1: "linear-gradient(52deg, #2eca6a,#36995c)",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
        nunitosans: "Nunito Sans",
        plusjakartasans: "Plus Jakarta Sans",
        rubik: "Rubik",
        ibmplexserif: "IBM Plex Serif",
        manrope: "Manrope",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};