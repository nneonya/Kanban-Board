import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Алиас для папки src
      "@components": path.resolve(__dirname, "./src/components"), // Алиас для папки components
      "@store": path.resolve(__dirname, "./src/store"), // Алиас для папки store
      "@styles": path.resolve(__dirname, "./src/styles"), // Алиас для папки styles
      "@constants": path.resolve(__dirname, "./src/constants"), // Алиас для папки styles
      // Добавьте другие алиасы по необходимости
    },
  },
});
