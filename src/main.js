import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '1052054161616-ierb817mjstfe847c2diep8911njsgap.apps.googleusercontent.com'
  })

  
app.mount('#app')
