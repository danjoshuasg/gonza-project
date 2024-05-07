// vite.config.js
import { defineConfig } from 'vite';
import history from 'vite-plugin-history';

export default defineConfig({
  plugins: [
    history({
      index: '/index.html', // asegúrate de que apunta al archivo correcto
    }),
  ],
  // Otras configuraciones...
});