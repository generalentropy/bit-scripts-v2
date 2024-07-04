/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00FF0B",
        accentDarker: "#01A108",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
