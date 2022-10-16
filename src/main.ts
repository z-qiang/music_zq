import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index'
import './assets/CSS/reset.less';
import './assets/CSS/icon.less';
import 'vant/lib/index.css';



const app = createApp(App);
const pinia = createPinia();

app
.use(pinia)
.use(router)
.mount('#app')
