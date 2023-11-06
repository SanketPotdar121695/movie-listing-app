import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// import http from 'https';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  // If you don't want to use VITE_ prefix, add '' as a third parameter to the function given above.

  return {
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_baseURL,
          changeOrigin: true,
          secure: false
          // rewrite: (path) => path.replace(/^\/api/, ''),
          // agent: new http.Agent() // For local server use
        }
      }
    },
    plugins: [react()]
  };
});
