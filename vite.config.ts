/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsConfigPath from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsConfigPath(), checker({ typescript: true })],
  server: { port: 3000 }
});
