import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@constants": resolve(__dirname, "src/constants"),
      "@features": resolve(__dirname, "src/features"),
      "@src/types": resolve(__dirname, "src/types"),
      "@assets": resolve(__dirname, "src/assets"),
      "@pages": resolve(__dirname, "src/pages"),
      "@app": resolve(__dirname, "src/app"),
      "@api": resolve(__dirname, "src/api"),
    },
  },
  plugins: [tailwindcss(), react()],
});
