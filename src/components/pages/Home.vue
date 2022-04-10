<template>
    <div class="home">
        <div class="centered">
            <button class="button" @click=getGifs()>Search</button>
            <Card v-for="gif in gifs" v-bind:todo="gif.url" v-bind:key="gif.id"></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardModel from '@/classes/CardModel.js'
import store from '@/vuex/store.js'
import CardsRequest from '@/vuex/actions/api.js'
const apiKey ="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb";
import Vue from 'vue';
const limit = 20;
export default ({
    name: 'Home',
    components: {
    Card
  },
    data(){
        return {
            gifs: [CardModel]
        };

    },
  methods: {
    getGifs: function() {
      this.gifs =  store.state.cards;
    
    },
    buildGifs(json) {
      this.gifs = json.data.map(gif => gif.id).map(gifId => {
        return new CardModel(gifId);
      });
      console.log(this.gifs);
    }
  }

  
    
});
</script>


<style scoped>
.home {
    height: 2080px;
    background-color: #fff;
    width: 1920px ;
    position: absolute;
    left: 0px;
    top: 104px;
}

.centered {
    width:auto;
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content: center;
    margin:auto;
}

.card {
    max-width: 312px;
    max-height: 368px;
    padding: 24px;
    box-shadow: 0 0 8px #666;
}

</style>
