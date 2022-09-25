import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/CSS/reset.less';
import './assets/CSS/icon.less';
import 'vant/lib/index.css';
import { createPinia } from 'pinia';


const app = createApp(App);
const pinia = createPinia();

app
.use(router)
.use(pinia)
.mount('#app')
