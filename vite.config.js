import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      axios: 'node_modules/axios/dist/axios.min.js',
      // autres alias si nécessaire
    }
  },
  plugins: [
    // Autres plugins nécessaires pour Vite
  ]
});
