import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'
import App from './App.vue'
import router from "@/router";

const app = createApp(App)
app.config.globalProperties.$http = Axios
app.use(router)
app.use(ElementPlus)
app.mount('#app')

