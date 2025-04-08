import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts"; // Добавляем поддержку деклараций
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true, // Добавляет `index.d.ts` в `dist`
    }),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts", // Главный файл
      name: "wd-ui-components",
      formats: ["es", "cjs"], // ESM и CJS форматы
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // External dependencies
    },
  },
});
