import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    // Use env variable if set, otherwise default to GitHub Pages path
    base: env.VITE_BASE_URL || "/eternal-embrace/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
