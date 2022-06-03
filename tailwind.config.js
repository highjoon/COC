module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./layouts/**/*.tsx"],
  theme: {
    colors: {
      layout: "#171A21",
      title: "#F8F9FB",
      input: "#3D3D3D",
      white: "#ffffff",
      black: "#000000",
      lightgray: "#383838",
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
