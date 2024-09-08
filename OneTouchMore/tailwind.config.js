const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "#ffffff",
        lightText: "#333333",
        darkBackground: "#121212",
        darkText: "#e0e0e0",
        scrollbarLight: "rgba(0, 0, 0, 0.1)",
        scrollbarDark: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".scrollbar": {
          "&::-webkit-scrollbar": {
            width: theme("width.2"),
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme("colors.scrollbarLight"),
            borderRadius: "9999px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme("colors.scrollbarLight"),
          },
          "@media (prefers-color-scheme: dark)": {
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme("colors.scrollbarDark"),
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme("colors.scrollbarDark"),
            },
          },
        },
      });
    }),
  ],
};