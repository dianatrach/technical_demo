<template>
    <div class="home">
        <div class="centered">
            <div class="card" v-for="card in cards" :key="card.id">
                <img src="https://giphy.com/gifs/hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM">
                <h1>{{card.id}}</h1>
            </div>        
        </div>
    </div>
</template>

<script>
const apiKey ="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb"
export default ({
    data(){
        return {
            cards:[]
        };

    },
    async mounted() {
        const res =await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=3&offset=0&rating=g&lang=en`)
        const cards = await res.json();
        this.cards = cards.data;
        console.log(cards);
    }
    
})
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