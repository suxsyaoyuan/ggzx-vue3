<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import useUserStore from '@/store/modules/user';

// 首页挂载保存用户信息 不持久 其他页面刷新就没了
onMounted(() => {
  useUserStore().userInfo()
})

</script>

<template>
  <div>
    <h1>一级路由home</h1>
  </div>
</template>

<style scoped lang="scss"></style>
