<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 这里应该要根据路由去创建菜单-->
      <!-- 滚动组件 如果很多的话 就让他滚动-->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu class="Meun">
          <!-- 根据路由动态生成菜单 把路由数据传给Menu-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabber">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <p style="height: 1000px; background-color: red">段落</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, reactive, toRefs, onMounted} from 'vue'
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%; // 确保容器占满整个宽度
  height: 100vh; // 使元素的高度等于当前浏览器视口的高度
  background: red;
  display: flex; // 使用 flex 布局

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);

      .el-menu {
        background-color: $base-menu-background;
        border-right: none;
      }
    }
  }

  .layout_tabber {
    position: fixed;
    width: calc(100% - $base-menu-width); // 调整为 100%
    height: $base-tabbar-height;
    background: blue;
    top: 0px;
    left: $base-menu-width;
  }

  .layout_main {
    flex: 1; // 自动调整剩余空间
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    padding: 20px;
    overflow: auto;
    margin-top: $base-tabbar-height; // 确保内容区域从导航栏下方开始
  }
}

//滚动条外观设置
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $base-menu-background;
}

::-webkit-scrollbar-thumb {
  width: 10px;
  background-color: yellowgreen;
  border-radius: 10px;
}
</style>
