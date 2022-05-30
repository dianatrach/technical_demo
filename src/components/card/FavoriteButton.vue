<template>
    <button v-on:click="toggleFavorites()" v-if="!this.isFavourite">
        <img class="icon" src='@/assets/Favorite.png'>
    </button>
    <button v-on:click="toggleFavorites()" v-if="this.isFavourite" >
        <img class="icon" src='@/assets/Delete.png'>
    </button>
</template>

<script>
import store from '@/vuex/store.js';
import emitter from '@/main.js';

export default ({
    name: "FavoriteButton",
    data() {
        return {
            isFavourite : false,
            index: -1
        };
    },
    props: ['id'],
    created() {
        this.index = store.state.cards.findIndex(object => {
            return object.id === this.id;
        });
        if(store.state.cards[this.index]) {
            this.isFavourite = store.state.cards[this.index].isFavourite;
        };
    },
    methods: {
        toggleFavorites() {
            this.isFavourite = !this.isFavourite;
            store.commit('TOGGLE_FAVORITE', this.index);
            let json = JSON.stringify(store.state.cards[this.index]);
            if(store.state.cards[this.index].isFavourite) {
                this.$cookies.set(`favoriteGIF-${this.id}`, json);
            }
            else {
                this.$cookies.remove(`favoriteGIF-${this.id}`);
            };
            emitter.emit('toggleFavorites');
        }
    }
});
</script>
