import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    outDir: 'dist/',
    rollupOptions: {
      input: {
        app: 'src/main.js',
      },
    },
  },
  plugins: [],
})
