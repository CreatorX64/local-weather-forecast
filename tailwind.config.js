module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#53D2E3",
          medium: "#24C9DF"
        }
      },
      fontFamily: {
        primary: "Rubik, sans-serif"
      }
    }
  },
  plugins: []
};
