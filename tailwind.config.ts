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
        primary:'#0f172a',
        secondary:'#1e293b',
        accent:'#facc15',
        textMain: '#ffffff',
        textSecondary: '#94a3b8',
        cardBg: '#2d3748'
      },
      fontFamily:{
        vazir:['Vazir'],
      }
    },
  },
  plugins: [],
};
export default config;
