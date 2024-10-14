import { createApp } from 'vue'
import App from './App.vue'
// 样式的初始化
import "@/assets/less/index.less"
import router from './router'

// element-plus
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 引入pinia 跨组件联动
import {createPinia} from "pinia";

// 引入本地 mock 数据，需要关掉config中的线上mock
// 加入 全局api管理之后，如果使用线上的mock, 这个可以不用引用了
import "@/api/mock.js"

// 引入全局api：线上mock 需要在config中开一下
import api from '@/api/api';

// 引入store
import {useAllDataStore} from "@/assets/stores/index.js";

// 路由守卫
function isRoute(to){
    return router.getRoutes().filter((item)=> item.path === to.path).length > 0;
}
router.beforeEach((to, from) => {
    if(to.path !== "/login" && ! store.state.token){
        return {
            name:'login',
        }
    }
    if(!isRoute(to)){
        return {
            name:'404',
        }
    }
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const store = useAllDataStore()
store.addMenu(router, "refresh")
app.use(router).mount('#app')
app.use(ElementPlus)
// createApp(App).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.config.globalProperties.$api = api;
