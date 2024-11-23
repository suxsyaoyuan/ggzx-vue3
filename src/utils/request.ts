/* axio二次封装 目的：使用请求与响应拦截器 */

import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";

// 第一步：利用create方法创建axios实例（其他配置：基础路径、超时时间
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
});

// 第二步：request实力添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config 配置对象 headers属性请求头 经常给服务器携带公共参数
  // 获取token 登录成功之后携带
  const token = useUserStore().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // 返回配置对象
  // config.headers.token = '123'
  // console.log(config) config必须返回
  return config;
});

request.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response.data; // 成功回调 简化数据
  },
  (error) => {
    // 失败:处理http网络错误的
    let msg = "";
    switch (status) {
      case '401':
        msg = "token过期";
        break;
      case '403':
        msg = "无权访问";
        break;
      case '404':
        msg = "请求地址错误";
        break;
      case '500':
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }
    ElMessage({
      type: "error",
      message: msg,
    });
    return Promise.reject(error);
  }
);
export default request;
