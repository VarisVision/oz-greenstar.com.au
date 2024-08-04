import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ozgsYellow": "#F0C62B",
        "ozgsLightYellow": "#ffffc5",
        "ozgsGreen": "#006128",
        "ozgsDarkGreen": "#003A17",
        "ozgsLightGreen": "#dcffe1",
        "blackHalf": "rgba(0, 0, 0, .5)"
      }
    },
  },
  plugins: [],
};
export default config;
