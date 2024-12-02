import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Répertoire où sera généré le build
    assetsDir: 'assets', // Où mettre les fichiers statiques
  },
  base: '/code-portfolio/',  // Remplace par le nom de ton dépôt GitHub si nécessaire (ex: /mon-projet/)
});

