module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    colors: {
      header: "#181818",
      title: "#F8F9FB",
    },
    typography: (theme) => ({}),
    extend: {
      backgroundImage: {
        homeBackground: "url('/assets/images/homeBackground.webp')",
        titleLogo: "url('/assets/images/titleLogo.webp')",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
