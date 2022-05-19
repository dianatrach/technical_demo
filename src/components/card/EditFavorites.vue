<template>
    <div class="icon">
        <button v-on:click="editFavorites()" v-if="!this.isFavourite">
            <img class="icon_img" src='@/assets/like_icon.png'>
        </button>
         <button v-on:click="editFavorites()" v-if="this.isFavourite" >
            <img class="icon_img" src='@/assets/delete_icon.png'>
        </button>
    </div>
</template>

<script>
import store from '@/vuex/store.js'
export default ({
    name: "editFavorites",
    data() {
        return {
            isFavourite : false
        };
    },
    props: ['index'],
    created () {
        this.isFavourite = store.state.cards[this.index].isFavourite;
    },
    methods: {
        editFavorites() {
            this.isFavourite = !this.isFavourite;
            store.commit('EDIT_FAVORITE', this.index);
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
