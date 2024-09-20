import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default ({mode}: { mode: string }) => defineConfig({
  plugins: [react()],
  base: './',
  root: './src/main/webapp',
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: [{find: 'app', replacement: resolve(__dirname, './src/main/webapp')}],
  },
  server: {
    open: true
  },
  css: {
    devSourcemap: mode !== 'production',
  }
})
