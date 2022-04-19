import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/vuex/store'
import mitt from "mitt";
import VueLazyLoad from 'vue3-lazyload';

const emitter = mitt();
// import '@/scss/fonts.scss'
// import '@/scss/global.scss'
// import '@/scss/variables.scss'

 const app = createApp(App).use(router).use(store).use(VueLazyLoad).provide('emitter', emitter).mount("#app");

export default emitter;
