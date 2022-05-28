<template>
    <div class="icon">
        <button v-on:click="toggleFavorites()" v-if="!this.isFavourite">
            <img class="icon_img" src='@/assets/like_icon.png'>
        </button>
         <button v-on:click="toggleFavorites()" v-if="this.isFavourite" >
            <img class="icon_img" src='@/assets/delete_icon.png'>
        </button>
    </div>
</template>

<script>
import store from '@/vuex/store.js';

export default ({
    name: "FavoriteButton",
    data() {
        return {
            isFavourite : false,
            index: -1
        };
    },
    props: ['id'],
    created () {
        this.index = store.state.cards.findIndex(object => {
            return object.id === this.id;
        });
      
        if(store.state.cards[this.index]) {
            this.isFavourite = store.state.cards[this.index].isFavourite;
        }
    },
    methods: {
        toggleFavorites() {
            this.isFavourite = !this.isFavourite;
            store.commit('TOGGLE_FAVORITE', this.index);
            let json = JSON.stringify(store.state.cards[this.index]);
            if(store.state.cards[this.index].isFavourite){
                this.$cookies.set(`favoriteGIF-${this.id}`, json);
            }
            else {
                this.$cookies.remove(`favoriteGIF-${this.id}`)
            }
        }
    }
})
</script>

<style scoped>
.icon {
    position: absolute;
    z-index: 2;
    right: 16px;
    top: 16px;
    width: 40px;
    height: 32px;
    border-radius: 2px;
}
.icon_img {
    position: relative;
    padding: 9.25px;
}
</style>
