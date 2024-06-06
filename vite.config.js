import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// import {
//     createStyleImportPlugin,
//     AntdResolve
// } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // createStyleImportPlugin({
        //     resolves: [AntdResolve()],
        //     libs: [
        //         // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        //         {
        //             libraryName: 'react',
        //             esModule: true,
        //             resolveStyle: (name) => {
        //                 return `../es/${name}/style/index`
        //             },
        //         },
        //     ],
        //     css: {
        //         preprocessorOptions: {
        //             less: {
        //                 javascriptEnabled: true,
        //             },
        //         },
        //     },
        //
        // })
    ],
    base: '/test/',
    // baseURL: 'http://192.168.0.90:2804/test/',
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
            // 设置路径
            '~':
                path.resolve('./test/'),
            // 设置别名相当于绝对路径
            '@':
                path.resolve(__dirname, './src'),
        }
        ,
        // https://cn.vitejs.dev/config/#resolve-extensions
        // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
})
