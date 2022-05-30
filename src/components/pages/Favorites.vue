<template>
    <div class="favorites">
         <div class="centered">
            <Card v-for="gif in gifs" v-bind:todo="gif.url" v-bind:key="gif.id" v-bind:id="gif.id"></Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardModel from "@/classes/CardModel";
import emitter from '@/main.js';

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
        this.gifs = this.getCardsFromCookies();
    },
    methods: {
        getCardsFromCookies() {
            let keys = this.$cookies.keys();
            let cards = [];
            for(let a = 0; a < keys.length; a++) {
                let card = new CardModel(this.$cookies.get(keys[a]).id);
                card.isFavourite = true;
                if(cards) {
                    cards = cards.concat(card);
                }
                else {
                    cards = card;
                };
            };
            return cards;
        }
    },
    mounted() {
      emitter.on('toggleFavorites', (index) => {
        this.getCardsFromCookies();
      })   
    }
});
</script>