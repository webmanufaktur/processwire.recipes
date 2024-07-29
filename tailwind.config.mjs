/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sofia: ["Sofia Sans", ...defaultTheme.fontFamily.sans],
        // sans: [
        //   "Montserrat Variable",
        //   "Rubik Variable",
        //   ...defaultTheme.fontFamily.sans,
        // ],
        // sans: [
        //   "Seravek",
        //   "Gill Sans Nova",
        //   "Ubuntu",
        //   "Calibri",
        //   "DejaVu Sans",
        //   "source-sans-pro",
        //   "sans-serif",
        // ],
        // mono: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        "pw-gradient": `linear-gradient(
          to bottom,
          white 4rem,
          #2480e6 4rem calc(100% - 4rem),
          white calc(100% - 4rem)
        )`,
      },
      screens: {
        xs: "375px",
      },
      colors: {
        pwblue: "#2480E6",
        pwpink: "#e83561",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
