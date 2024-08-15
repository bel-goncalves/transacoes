import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "public",
  build: {
    rollupOptions: {
      input: "public/index.html",
    },
  },
});
