
// vite.config.ts

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import postcss from './postcss.config'

// @param {Object} param - Parameter konfigurasi Vite
// @param {string} param.mode - Mode saat ini ('development' atau 'production')
// @returns {import('vite').UserConfig} - Objek konfigurasi Vite
export default defineConfig(({ mode }) => {
  // Memuat variabel dari file .env ke dalam object
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Alias untuk direktori src
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss,
    },
    server: {
      // @param {string} VITE_PORT - Port server dari .env, default 3000 jika tidak ada
      port: parseInt(env.VITE_PORT) || 3000,
      open: true,
    },
    build: {
      sourcemap: mode === 'development',
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
  }
})
