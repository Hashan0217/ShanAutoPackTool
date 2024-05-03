import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    electron({
      // 主进程入口文件
      entry: 'electron/main.ts',
  })
  ],
  resolve: {
    // 配置路径别名
    alias:[{
      find: '@',
      replacement: resolve(__dirname, './src')
    }],
  },
  server: {
    // 端口
    port: 3000,
}
 
})

