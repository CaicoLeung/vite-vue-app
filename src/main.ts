import { createApp } from 'vue'
import App from './App.vue'
import { message } from 'ant-design-vue';

const app = createApp(App)

app.config.globalProperties.$message = message

app.mount('#app')
