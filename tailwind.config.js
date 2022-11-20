/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dark1: "#141419",
        dark2: "#191A21",
        dark3: "#1F2128",
        gray1: "#40444B",
        gray2: "#6A6D76",
        gray3: "#8D9197",
      },
    },
  },
  plugins: [],
};
