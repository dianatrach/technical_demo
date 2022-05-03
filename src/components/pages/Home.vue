<template>
    <div class="home" id="home" ref="home">
        <div class="centered">
            <Card v-for="gif in gifs" v-bind:todo="gif.url" v-bind:key="gif.id"></Card>
        </div>
    </div>
</template>

<script lang='js'>
import Card from '@/components/card/Card.vue'
import CardModel from '@/classes/CardModel.js'
import store from '@/vuex/store.js'
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
    created() {
      this.gifs = store.state.cards;
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      async handleScroll(event) {
        const elmnt = document.getElementById("home");
        let summaryScrolled = document.documentElement.scrollTop + window.innerHeight
        let bottomOfWindow = this.$refs.home.clientHeight - summaryScrolled <= 50;
        if (bottomOfWindow) {
          store.state.offset+=20;
          if(store.state.searchValue==""){
            store.state.searchValue="cat"
          }
          store.dispatch('CARD_REQUEST', store.state.searchValue);
          this.gifs = this.gifs.concat(store.state.cards);
          console.log("<<<<<<<<")
        }
      }
    },
    mounted() {
      emitter.on('search', () => {
      this.gifs = store.state.cards
      })   
    }
});
</script>


<style scoped>
.home {
    display: flex;
    background-color: #fff;
    width: 1920px;
    position: absolute;
    left: 0px;
    top: 104px;
    align-content: center;
}

.centered {
    width: 1344px;
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content: center;
    margin:auto;
}

</style>
