import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from '@/views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'Home',
            path: '/home',
            component: Home,
        },
        {
            name: 'Classify',
            path: "/classify",
            component: () => import('@/views/Classify'),
            children: [{
                    name: "ClassifyDetails",
                    path: "classifyDetails",
                    component: () => import('@/views/Classify/classifyDetails')
                },
            ]
        },
        {
            name: 'MusicPlayer',
            path: '/musicPlayer',
            component: () => import('@/views/musicPlayer')
        },
        {
            name: 'Login',
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            name:'Transceiver',
            path:'/transceiver',
            component:()=>import("@/views/Transceiver")
        },
        {
            path: '/test',
            component: () => import('@/views/Test')
        },
        {
            path: '/',
            component: Home
        }
    ],
    scrollBehavior(){
        return {y:0}
    }
})

export default router