<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引入设置logo和标题的配置文件
import setting from "@/setting";
</script>

<style scoped lang="scss">
.logo {
  width: $base-menu-width;
  height: 50px;
  color: aliceblue;
  display: flex;
  align-items: center;
  padding: 0px 20px 20px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 20px;
    margin-left: 5px;
  }
}
</style>
