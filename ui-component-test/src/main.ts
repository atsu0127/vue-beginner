import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { worker } from './mock'

if (import.meta.env.DEV) {
  worker.start()
}

createApp(App).mount('#app')
