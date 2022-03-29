<template>
    <div class="home">
        <div class="centered">
            <button class="button" @click=getGifs()>Search</button>
            <Card v-for="gif in gifs" v-bind:todo="gif" v-bind:key="gif.id"></Card>
        </div>
    </div>
</template>

<script lang="js">
import Card from '@/components/Card.vue'
import CardModel from '@/classes/CardModel.vue'
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
    
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.buildGifs(json);
        })
        .catch(err => console.log(err));
    },
    buildGifs(json) {
      this.gifs = json.data.map(gif => gif.id).map(gifId => {
        return new CardModel.constructor(gifId)
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
    max-width: 1920px ;
}

.centered {
    width: 1320px;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-items: center;
    color: black;
}

.card {
    max-width: 312px;
    max-height: 368px;
    padding: 24px;
    box-shadow: 0 0 8px #666;
}

</style>