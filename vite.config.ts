import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@common': path.resolve(__dirname, './src/common'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@router': path.resolve(__dirname, './src/router'),
    },
  },
});
