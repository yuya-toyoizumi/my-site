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
      spacing: {
        "screen-without-header-and-footer": "calc(100svh - 64px * 2)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fefefe",
            a: {
              color: "#fefefe",
            },
            li: {
              "&::marker": {
                color: "#fefefe",
              },
            },
            blockquote: {
              borderLeftColor: "#fefefe",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
