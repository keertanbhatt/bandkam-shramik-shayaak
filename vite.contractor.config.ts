import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const frontendDir = path.dirname(fileURLToPath(import.meta.url));
const contractorDir = path.resolve(frontendDir, "../frontend-contractor");

/** Contractor persona — same app as workers, single React install in frontend/. */
export default defineConfig({
  plugins: [react()],
  envDir: contractorDir,
  cacheDir: path.join(contractorDir, ".vite"),
  server: {
    port: 5175,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: path.join(contractorDir, "dist"),
    emptyOutDir: true,
  },
});
