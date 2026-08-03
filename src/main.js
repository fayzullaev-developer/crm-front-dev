import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@fontsource/poppins'
import '@fontsource/open-sans'
import router from '@/plugins/router.js'
import {createPinia} from "pinia";

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')

document.querySelector('html').setAttribute('lang', 'en')