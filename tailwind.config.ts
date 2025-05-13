import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "toggleKnob": "var(--toggle-knob)",
        "toggleBack": "var(--toggle-back)",

        "dark": '#232A3C',
        "medium": '#293245',
      },
    },
  },
  plugins: [],
};
export default config;
