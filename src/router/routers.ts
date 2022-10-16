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
    },
    {
        path: '/daily',
        name: 'Daily',
        component: () => import('@/pages/dailyRec/index.vue'),
        meta: {
            name: '每日推荐',
        }
    },
    {
        path: '/musiclist',
        name: 'MusicList',
        component: () => import('@/pages/musicList/index.vue'),
        meta: {
            name: '歌单',
        }
    },
    {
        path: '/rank',
        name: 'SingerRank',
        component: () => import('@/pages/singerRank/index.vue'),
        meta: {
            name: '排行榜',
        }
    },
    {
        path: '/singer-song/:id',
        name: 'SingerSong',
        component: () => import('@/pages/singerRank/singer_song.vue'),
    }
]
export default routes