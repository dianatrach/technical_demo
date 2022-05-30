<template>
    <div class="card" @mouseover="hover = true"
        @mouseleave="hover = false">
        <FavoriteButton v-if="hover" v-bind:id="id"/>
        <img v-lazy="todo" class="gif">
    </div>
</template>

<script>
import FavoriteButton from '@/components/card/FavoriteButton.vue';

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
});
</script>