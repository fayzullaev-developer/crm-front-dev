import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/css/style.css'
import '@fontsource/poppins'
import '@fontsource/open-sans'
import router from '@/plugins/router.js'

createApp(App)
    .use(router)
    .mount('#app')
