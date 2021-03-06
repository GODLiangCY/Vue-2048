import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windi from 'vite-plugin-windicss'
import path from 'path'
import elementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  plugins: [
    vue(),
    windi(),
    elementPlus()
  ]
})
