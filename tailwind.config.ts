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
        "1.26": "1.26px",
        "-2.68": "-2.68px",
        "8.71": "8.71px",
        "25.9": "25.9px",
        "9.48": "9.48px",
      },
      lineHeight: {
        "custom-tight": "1",
        "custom-thin": "0.5",
        "20": "20px",
        "56": "56px",
        "80": "80px",
      },
      fontSize: {
        custom: "40px",
        "custom-37": "37px",
        "custom-10": "10px",
        "43": "43px",
        "13": "13px",
        "67": "67px",
        "22": "22px",
      },
      margin: {
        "66": "66px",
      },
      width: {
        "button-mobile": "280px",
        "paragraph-mobile": "180px",
        "image-mobile": "280px",
        "480": "480px",
        "768": "768px",
        "1280": "1280px",
        "157": "157px",
        "275": "275px",
        "230": "230px",
        "118": "118px",
        "463": "463px",
        "220": "220px",
        "225": "225px",
      },
      height: {
        "53": "53px",
        "50": "50px",
        "228": "228px",
        "220": "220px",
        "370": "370px",
        "213": "213px",
      },
      backgroundColor: {
        "--button-background": "rgba(255, 255, 255, 0.1)",
        "hover-button": "rgba(255, 255, 255, 0.20)",
      },
      padding: {
        "54": "54px",
      },
    },
  },
  plugins: [],
};
export default config;
