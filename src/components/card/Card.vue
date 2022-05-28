<template>
    <div class="card" @mouseover="hover = true"
        @mouseleave="hover = false">
        <FavoriteButton class="icon" v-if="hover" v-bind:id="id"/>
        <img v-lazy="todo" class="gif">
    </div>
</template>

<script>
import FavoriteButton from '@/components/card/FavoriteButton.vue'
export default ({
    name: "card",
    components: {
        FavoriteButton
    },
    data() {
        return {
            hover: false
        };
    },
    props: ['todo', 'id']
})
</script>

<style scoped>

img.gif {
    width: 100%;
    max-height: 368px;
}

.card {
    position: relative;
    left: 0px;
    top: 0px;
    width: 312px;
    height: 368px;
    background-color: #464646;
    margin: 24px 24px 0px 0px;
}

.gif {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
}

</style>