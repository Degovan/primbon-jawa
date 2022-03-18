module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
      height: {
        custom: "700px",
      },
      colors: {
        primary: "#BA7030",
        secondary: "#1E0F02",
        darkchoco: "#150B03",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
    },
  },
  plugins: [],
};
