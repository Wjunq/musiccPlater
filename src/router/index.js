import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from '@/views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'Classify',
            path: "/classify",
            component: () => import('@/views/Classify'),
            children: [{
                    name: "classifyDetails",
                    path: "classifyDetails",
                    component: () => import('@/views/Classify/classifyDetails')
                },

            ]
        },
        {
            name: 'musicPlayer',
            path: '/musicPlayer',
            component: () => import('@/views/musicPlayer')
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            path: '/test',
            component: () => import('@/views/Test')
        },
        {
            path: '/',
            component: Home
        }
    ]
})

export default router