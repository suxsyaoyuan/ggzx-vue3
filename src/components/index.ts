/* 对外暴露插件对象 */
// 引入所有全部全局组件
import SvgIcon from "./SvgIcon/index.vue";
import Pagination from "./Pagination/index.vue";
import Category from "./Category/index.vue";

// 引入element-plus全部图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import type { App, Component } from "vue";
const components: { [name: string]: Component } = { SvgIcon,Pagination,Category };
export default {
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
    // 将element-plus图标注册为全局组件  数组 组件、组件名字
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
};
