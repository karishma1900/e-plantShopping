import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: './dist', // Update this line
    emptyOutDir: true,
  },
  base: "/shoppingreact",
  plugins: [react()],

});
