import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.axios=axios;
axios.defaults.baseURL='/api'
app.use(ElementPlus, {
    locale: zhCn,
  })

app.mount('#app')
