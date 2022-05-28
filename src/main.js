import router from '@/router/router';
import store from '@/vuex/store';
import mitt from "mitt";
import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';
import VueCookies from 'vue3-cookies'

const emitter = mitt();
// import '@/scss/fonts.scss'
// import '@/scss/global.scss'
// import '@/scss/variables.scss'

 const app = createApp(App).use(router).use(store).use(VueLazyLoad).use(VueCookies).provide('emitter', emitter).mount("#app");

export default emitter;
