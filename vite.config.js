import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true,
    mkdirs: true, // Add this option
  },
  base: "/",
  plugins: [react()],
});
