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
      colors: {
        "miss-ivy-green": "#013729",
        "miss-ivy-gold": "#A6995A",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
