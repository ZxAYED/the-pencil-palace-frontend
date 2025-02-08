/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#424242",
        secondary: "#fff8e1",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"],
        anonymous: ["Anonymous Pro", "monospace"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "18px"],
        base: ["16px", "20px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "40px"],
        "4xl": ["36px", "48px"],
        "5xl": ["48px", "64px"],
        "6xl": ["64px", "80px"],
        "7xl": ["80px", "96px"],
      },
    },
  },
  important: true,
  plugins: [],
};
