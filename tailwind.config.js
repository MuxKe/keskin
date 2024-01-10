/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ["Josefin Sans", "sans-serif"],
        "josefin-light": ["Josefin Sans Light", "sans-serif"],
        "josefin-normal": ["Josefin Sans Regular", "sans-serif"],
        "josefin-semibold": ["Josefin Sans SemiBold", "sans-serif"],
        "josefin-bold": ["Josefin Sans Bold", "sans-serif"],
        "josefin-italic": ["Josefin Sans Italic", "sans-serif"],
        "josefin-light-italic": ["Josefin Sans Light Italic", "sans-serif"],
        "josefin-normal-italic": ["Josefin Sans Regular Italic", "sans-serif"],
        "josefin-semibold-italic": [
          "Josefin Sans SemiBold Italic",
          "sans-serif",
        ],
        "josefin-bold-italic": ["Josefin Sans Bold Italic", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        imageHeight: "480",
      },
      width: {
        imageWidth: "480px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
