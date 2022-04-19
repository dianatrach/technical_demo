<template>
    <div class="home">
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
    height: 2080px;
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
