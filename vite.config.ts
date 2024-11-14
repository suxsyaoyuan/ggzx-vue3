// vite.config.ts
import { UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
export default ({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@use "./src/styles/variable" as *;',
        },
      },
    },
    // 代理跨域
    server: {
      proxy: {
        "^/dev-api": {
          target: "http://sph-api.atguigu.cn",
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/dev-api/, ""),
        },
      },
    },
  };
};
