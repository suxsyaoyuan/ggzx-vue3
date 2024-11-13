import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";

let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为 无论何时发生路由跳转，页面都会自动滚动到最顶部，最左侧的位置。这是一种常见的用户体验（UX）设计，确保用户在进入新的页面或视图时，总是从屏幕的起始位置开始阅读内容。
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
export default router;
