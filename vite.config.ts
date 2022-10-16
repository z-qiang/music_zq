import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 5010,
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    // proxy: {
    //   '/api': {
    //     target:'http://localhost:3000/',   //代理接口
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '/'),
    //   },
    // }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname,'src'),  //路径别名
    },
    // extensions: ['.ts'], //  使用路径别名是想要省略的后缀名
  },
});


