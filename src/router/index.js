import {createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";

// 制定路由规则
const routes = [
    {
        path: "/",
        name: "main",
        component: () => import("@/views/Main.vue"),
        redirect: "/home", // 默认跳转到home
        // 当在src/assets/stores/index.js 中加入addMenu动态展示的时候，这里可以注释掉了
        children: [
        //     {
        //         path: "home",
        //         name: "home",
        //         component: () => import("@/views/Home.vue")
        //     },
        //     //添加用户管理
        //     {
        //         path: 'user',
        //         name: 'user',
        //         component: () => import('@/views/User.vue')
        //     },
        //     //下面三个是新添加的路由
        //     {
        //         path: 'mall',
        //         name: 'mall',
        //         component: () => import('@/views/Mall.vue')
        //     },
        //     {
        //         path: 'page1',
        //         name: 'page1',
        //         component: () => import('@/views/Page1.vue')
        //     },
        //     {
        //         path: 'page2',
        //         name: 'page2',
        //         component: () => import('@/views/Page2.vue')
        //     }
        ]
    },
    //也是一级路由
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    //也是一级路由
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;