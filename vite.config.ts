import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Sitemap from 'vite-plugin-sitemap'
import { routes } from "./src/routes/routes"

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.theochemmerida.org/',
      dynamicRoutes: routes.asValues()
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
