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
        "swish-bg": "#05020D",
        "swish-blue": "#18A6E2",
        "gradient-text-purple": "#7030F6",
        "gradient-text-green": "#0BDA5A",
        "swish-light-text": "#B1B8C1",
        "dark-gray": "#3B3842",
        "light-gray": "#6B6972",
        "dark-gray2": "#121016",
        "light-gray2": "#1F1B26",
        "phone-whitish": "##ffffff33",
        "phone-battery": "#ffffffb5",
        "app-init-buttons": "#222224",
        "app-md-gray": "#18191E",
        "app-dark-gray": "#131418",
        "app-light-gray": "#929290",
        "button-active": "#1AB2F2",
      },
      blur: {
        "4xl": "120px",
      },
    },
  },
  plugins: [],
};
export default config;
