import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0000cd",
        primaryLighter: "#9ED3FD",
        primaryDarker: "#1414b9",
        grayPrimary: "#717171",
        greenPrimary: "#00a200",
        redPrimary: "#FF0000",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
