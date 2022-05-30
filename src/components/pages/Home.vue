<template>
    <div class="home" id="home" ref="home">
        <div class="centered">
            <Card v-for="gif in gifs" v-bind:todo="gif.url" v-bind:key="gif.id" v-bind:id="gif.id"></Card>
        </div>
    </div>
</template>

<script lang='js'>
import Card from '@/components/card/Card.vue';
import store from '@/vuex/store.js';
import emitter from '@/main.js';

export default ({
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      gifs: []
    };
  },
  async created() {
    await store.dispatch('CARD_REQUEST', store.state.searchValue);
    store.dispatch('SET_CARDS_FROM_COOKIES', this.$cookies);
    this.gifs = store.state.cards;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const elmnt = document.getElementById("home");
      let summaryScrolled = document.documentElement.scrollTop + window.innerHeight;
      let bottomOfWindow = this.$refs.home.clientHeight - summaryScrolled <= 50;
      if (bottomOfWindow) {
        this.createCard();
      };
    },
    async createCard() {
      store.state.offset+=20;
      await store.dispatch('CARD_REQUEST', store.state.searchValue);
      this.gifs = store.state.cards;
    } 
  },
  mounted() {
    emitter.on('search', async () => {
    store.commit('CLEAR_CARDS');
    await store.dispatch('CARD_REQUEST', store.state.searchValue);
    this.gifs = store.state.cards;
    });   
  }
});
</script>