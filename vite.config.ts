import { defineConfig } from 'vite'
import devManifest from 'vite-plugin-dev-manifest'

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
  plugins: [
    devManifest()
  ],
})
