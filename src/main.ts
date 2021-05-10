import { createApp } from 'vue'
import App from './app'
import { message } from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App)

app.config.globalProperties.$message = message

app.use(router)

app.mount('#app')
