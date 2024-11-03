/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "miss-ivy-banner": "url('/ivy-banner.jpg')",
        "miss-ivy-food": 'url("/ivy-section-bg.webp")',
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
      },
      colors: {
        "miss-ivy-green": "#013729",
        "miss-ivy-gold": "#A6995A",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
