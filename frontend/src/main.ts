import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue-router
import {router} from "./router";
// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
