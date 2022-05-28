<template>
    <div class="favorites">
         <div class="centered">
            <Card v-for="gif in gifs" v-bind:todo="gif.url" v-bind:key="gif.id" v-bind:id="gif.id"></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card/Card.vue';
import store from '@/vuex/store.js';
import CardModel from "@/classes/CardModel";
export default ({
    name: "Favorites",
    components: {
    Card
    },
    data() {
        return {
            gifs: []
        };
    },
    created() {
        this.getCardsFromCookies();
        if(!store.state.cards){
            store.state.cards = this.gifs;
        }
        else {
            for(let i = 0; i < this.gifs.length; i++) {
                if(!store.state.cards.includes(this.gifs[i])) {
                    store.commit('ADD_TO_CARDS', this.gifs[i]) 
                }
            }
        }
    },
    methods: {
        getCardsFromCookies(){
            let keys = this.$cookies.keys();
            let cards = [];
            for(let a = 0; a < keys.length; a++){
                let card = new CardModel(this.$cookies.get(keys[a]).id)
                card.isFavourite = true;
                if(cards){
                    cards = cards.concat(card);
                }
                else {
                    cards = card;
                }
            }
            this.gifs = cards;
        }
    }
})
</script>

<style scoped>
h1{
    color: black;
}
.favorites {
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
/* .favorites {
    
} */

</style>