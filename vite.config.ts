// @ts-ignore
// * No declaration file for less-vars-to-js
import lessToJS from "less-vars-to-js";
import { defineConfig, loadEnv } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import { ViteAliases } from "vite-aliases";
import Inspect from "vite-plugin-inspect";
import reactJsx from "vite-react-jsx";
import { resolve,join } from "path";
import fs from "fs";
// mock数据
import { viteMockServe } from 'vite-plugin-mock';

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(
  fs.readFileSync(pathResolver("./config/variables.less"), "utf8")
);



export default  defineConfig (({mode}) => {
  const env = loadEnv(mode, process.cwd());
  const config: object = {
    base: "./",
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    plugins: [
      Inspect(),
      ViteAliases({}),
      reactJsx(),
      reactRefresh(),
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => {
              if (name === "col" || name === "row") {
                return "antd/lib/style/index.less";
              }
              return `antd/es/${name}/style/index.less`;
            },
          },
        ],
      }),
      viteMockServe({
        mockPath: './src/mock', // 设置模拟.ts 文件的存储文件夹
        localEnabled: mode === 'mock' ? true : false, // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        prodEnabled: false, //command !== 'serve' && prodMock, // 设置打包是否启用 mock 功能
        supportTs: true, // 打开后，可以读取 ts ⽂件模块。请注意，打开后将⽆法监视.js ⽂件。
        watchFiles: true, // 监视⽂件更改，并重新加载 mock 数据
        /* 如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
        这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包。
        如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.js
        */
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `
      })
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.sass', '.scss', '.less'],
      alias: {
        "@assets": join(__dirname, "src/assets"),
      },
    },
    css: {
      //* css模块化
      modules: { // css模块化 文件以.module.[css|less|scss]结尾
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
        localsConvention: 'camelCase',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    server: {
      port: 3000,
      open: false, //自动打开
      base: "./ ", //生产环境路径
      proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
        // 正则表达式写法
        '^/api': {
          // target: 'http://xxx.xxx.xxx.xxx:9999', // 后端服务实际地址
          changeOrigin: true, //开启代理
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    },
  }
  return config
});
