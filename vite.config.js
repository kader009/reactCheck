/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.js'],
    include:['**/__tests__/**/*.{js,jsx}', '**/*.{spec,test}.{js,jsx}']
  },
});
