import { RouteRecordRaw } from 'vue-router';
// import { mainStore } from '../store/index';
// const store = mainStore();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/home/index.vue'),

    },
    {
        path: '/musiclistitem',
        name: 'MusicListItem',
        component: () => import('../components/home/musicList/index.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import("../components/search/index.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../components/login/index.vue"),
        meta: {
            bottomMusic: false,
        }
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../components/login/user.vue'),
        beforeEnter: (to:any, from:any, next:any) => {
            if(sessionStorage.getItem('isLogin') == 'true'){
                console.log('已经登录');
            }else{
                next('/login');
                console.log('没登陆');
                
            }
        }
    }
]
export default routes