import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        xl: "1280px",
      },
      letterSpacing: {
        custom: "2.59px",
        "custom-heading": "-1.6px",
        "custom-paragraph": "-0.14px",
        "2.4": "2.4px",
      },
      lineHeight: {
        "custom-tight": "1",
        "custom-thin": "0.5",
        "20": "20px",
        "56": "56px",
      },
      fontSize: {
        custom: "40px",
        "custom-37": "37px",
        "custom-10": "10px",
        "43": "43px",
        "13": "13px",
      },
      width: {
        "button-mobile": "280px",
        "paragraph-mobile": "180px",
        "image-mobile": "280px",
        "440": "440px",
        "704": "704px",
        "1232": "1232px",
      },
    },
  },
  plugins: [],
};
export default config;
