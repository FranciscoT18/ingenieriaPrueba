import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "https://github.com/FranciscoT18/ingenieriaPrueba",
  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   sourcemap: true,
  // },
});
