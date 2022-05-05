<template>
  <div class="main-wrapper">
    <Header />
      <router-view class="container">
      </router-view>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header.vue'
  import store from '@/vuex/store.js'
  export default {
    name: 'main-wrapper',
    components: {
      Header
    },
    props: {},
    data() {
      return {}
    },
    computed: {},
  }
</script>

<style>
</style>
