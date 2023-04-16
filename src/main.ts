import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue3-cookies'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/main.css'




const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueCookies)
pinia.use(piniaPluginPersistedstate)
app.mount('#app')
