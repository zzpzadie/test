import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   // https://cn.vitejs.dev/config/#resolve-alias
  //   alias: {
  //     // 设置路径
  //     '~':
  //         path.resolve( './test/'),
  //     // // 设置别名
  //     // '@':
  //     //     path.resolve(__dirname, './src'),
  //   }
  //   ,
  //   // https://cn.vitejs.dev/config/#resolve-extensions
  //   // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  // }
})
