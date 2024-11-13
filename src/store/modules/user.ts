// 创建用户相关的小仓库
import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import type { loginForm, ResponseData } from "@/api/user/type";
import type { UserState } from "./types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";
// 引入路由（常量路由
import { constantRoute } from "@/router/routes";

let useUserStore = defineStore("User", {
  // 存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, // 仓库存储生成菜单需要的数组（路由）
    };
  },
  // 异步/逻辑
  actions: {
    // 用户登录方法
    async userLogin(data: loginForm) {
      let result: ResponseData = await reqLogin(data);
      // 成功200：token
      // 失败201：登陆错误的信息
      if (result.code == 200) {
        // pinia存储数据利用js对象 不持久
        this.token = result.data.token;
        // 用本地存储持久化数据
        SET_TOKEN(result.data.token as String);
        return "ok"; // 保证当前async函数返回一个成功的promise
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  // 计算属性
  getters: {},
  // persist: true,
});
export default useUserStore;
