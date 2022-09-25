import {RouteRecordRaw } from 'vue-router'
const routes = [
    {
        path:'/',
        name: 'Home',
        component: () => import('../components/home/index.vue'),

    },
    {
        path: '/musiclistitem',
        name: 'MusicListItem',
        component:() => import('../components/home/musicList/index.vue'),
    },
]
export default  routes