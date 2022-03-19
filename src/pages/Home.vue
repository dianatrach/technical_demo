<template>
    <div class="home">
        <div class="centered">
            <div class="card" v-for="card in cards" :key="card.id">
                <h1>{{card.title}}</h1>
            </div>        
        </div>
    </div>
</template>

<script>

export default ({
    data(){
        return {
            cards:[]
        };

    },
    async mounted() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
        const cards = await res.json();
        this.cards = cards;
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