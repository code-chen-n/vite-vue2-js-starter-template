// 路由配置文件
import { createRouter,  createWebHistory } from "vue-router";

import baseRouter from './modules/base'

const routes = [...baseRouter];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(){
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router