import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--colorBtn)",
        segundary: "var(--colorsegundary)",
        textLinght: "var(--colortextLigth)",
        primaryColorBg: "var(--colorPrimary)",
        colorBodybg: "var(--colorBodybg)",
      },
    },
  },
  plugins: [],
};
export default config;
