<template>
    <div class="home">
        <div class="centered">
            <button class="button" @click=getGifs()>Search</button>
            <div class="card" v-for="gif in gifs" :key="gif.id">
                <img  :src="gif" >
            </div>        
        </div>
    </div>
</template>

<script>
const apiKey ="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb";
const limit = 20;
export default ({
    name: 'Home',
    data(){
        return {
            cards:[],
            gifs: []
        };

    },
    async mounted() {
        // const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=3&offset=0&rating=g&lang=en`)
        // const cards = await res.json();
        // this.cards = cards.data;
        // console.log(cards);
    
    },
  methods: {
    getGifs() {
    
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
        return `https://media.giphy.com/media/${gifId}/giphy.gif`;
      });
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