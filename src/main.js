
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import { store } from './store'

import '@/style/tailwind.css'
import '@/style/font.css'

const app = createApp(App)

app.use(router)
app.use(VueCookies, {expires: '10h'})
app.use(store)
app.mount('#app')
