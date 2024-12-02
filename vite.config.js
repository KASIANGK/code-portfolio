import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';


export default defineConfig({
  plugins: [react()],
  base: '/code-portfolio/',
});
