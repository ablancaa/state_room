import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createBootstrap} from 'bootstrap-vue-next'
// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //Importa componentes de Bootstrap





import {createPinia} from 'pinia'
const pinia = createPinia()
createApp(App)
    .use(router)
    .use(createBootstrap())
    .use(pinia)
    .mount('#app')
