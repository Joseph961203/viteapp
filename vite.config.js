import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["d603a7ad9b4e3-8088.us-east-a.proxy.x-gpu.co"],
  },
});
