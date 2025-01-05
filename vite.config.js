import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.mp4', '**/*.webm'],
});
