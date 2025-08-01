import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@models': path.resolve(__dirname, 'src/types'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@modules': path.resolve(__dirname, 'src/modules'),
    },
  },
  server: {
  open: true,
  proxy: {
    '/api': {
      target: 'http://localhost:8000/api/v1',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},

});
