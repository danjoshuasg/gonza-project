import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: '/src/main.jsx' // Trata de externalizar este módulo si es necesario
    }
  }
});