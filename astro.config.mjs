import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        config: path.resolve("./tailwind.config.js")
      })
    ]
  }
});