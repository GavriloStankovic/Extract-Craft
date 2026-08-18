import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Assets are inlined as base64 below this size. The SVG illustrations in
    // this project are large; keeping the threshold at 0 emits them as real
    // files so they can be cached and lazily fetched instead of bloating the JS.
    assetsInlineLimit: 0,
  },
});
