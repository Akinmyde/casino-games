import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "theme" | 'darkMode' | "prefix" | "presets" | "content"> = {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  prefix: "",
  presets: [sharedConfig],
  theme: {
    container: {
      center: true,
      
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
      },
    },
  },

};

export default config;
