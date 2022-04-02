import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/vuex/store'
// import '@/scss/fonts.scss'
// import '@/scss/global.scss'
// import '@/scss/variables.scss'

 createApp(App).use(router).use(store).mount('#app')


