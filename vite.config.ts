import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
