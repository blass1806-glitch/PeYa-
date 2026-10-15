import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative paths support publishing the build under a GitHub Pages repository path.
export default defineConfig({
  base: './',
  plugins: [react()],
});
