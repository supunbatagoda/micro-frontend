import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext', // Ensure modern JavaScript output
    sourcemap: true,
    rollupOptions: {
      input: './src/main.js', // Update this path to your app's entry point
      output: {
        format: 'system', // Required for single-spa compatibility
        entryFileNames: 'js/app.js',
      },
    },
  },
  server: {
    port: 3000, // Specify the port for local development
    cors: true, // Enable CORS for single-spa integration
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    },
  },
});
