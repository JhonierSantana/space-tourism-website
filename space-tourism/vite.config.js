import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/",
  plugins: [react(), createHtmlPlugin()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,

    historyApiFallback: true,
  },
});
