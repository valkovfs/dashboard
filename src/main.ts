import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from "@/utils/firebaseConfig";

import App from './App.vue'
import router from './router'

import './assets/main.css'

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
