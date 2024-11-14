<script lang="ts">
export default {
    name: "Breadcrumb"
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
//获取layout配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore();
//获取路由对象
let $route = useRoute();
//点击图标的方法
const changeIcon = () => {
    //图标进行切换 因为祖先组件也要使用 所以把这个状态放到仓库中
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}

</script>

<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right:10px" @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 组件得写动态的-->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包动态展示路由名字与标题 $route.matched一个包含当前路由和其父路由的所有路由记录的数组 v-if优先级更高 所以这里用v-show to路由跳转目标 -->
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <!-- 图标 -->
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑展示匹配路由的标题 -->
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped></style>