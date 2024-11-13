<template>
    <!-- v-for遍历menulist中所有已有路由 -->
    <template v-for="(item, index) in menuList" :key="item.path">
        <!--没有子路由 v-if不能和v-for写一起 -->
        <template v-if="!item.children">
            <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute(item)">
                <el-icon>
                    <!-- component全局组件  :is是动态组件语法 具体渲染哪个图标取决于 item.meta.icon 的值 -->
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由但是只有一个子路由 -->
        <template v-if="item.children && item.children.length === 1">
            <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute(item)">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由且个数大于一个1 -->
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <!-- 组件递归 -->
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

//获取父组件传递过来的全部路由数组
defineProps(['menuList']);

//获取路由器对象
let $router = useRouter();
//点击菜单的回调
const goRoute = (vc: any) => {
    //路由跳转
    $router.push(vc.index);
}
</script>
<!-- 递归组件必须有名字 -->
<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style scoped></style>