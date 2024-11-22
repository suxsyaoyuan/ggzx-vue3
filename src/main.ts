import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// console.log(import.meta.env);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import gloablComponent from "./components/index";
import router from "./router";
import pinia from "./store";

//@ts-ignore忽略当前文件ts类型的检测 否则有红色提示(打包会失败)
const app = createApp(App);
app.use(gloablComponent);
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.config.errorHandler = (err, vm, info) => {
  console.error("捕获到全局错误:", err, info);
};
app.mount("#app");

