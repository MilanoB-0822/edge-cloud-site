import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Import our custom GitHub theme CSS instead of Primer CSS
import './assets/github-theme.css'
import 'github-markdown-css'

createApp(App)
  .use(router)
  .mount('#app')
