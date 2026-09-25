import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    // The ported pages are large and image-heavy; keep asset inlining off so
    // the reference artwork stays byte-identical in dist/.
    assetsInlineLimit: 0,
  },
});
