<template>
    <div id="app">
        <!-- <AppHeader></AppHeader> -->
        <AppContentHome></AppContentHome>
        <!-- <Card></Card> -->

       
        
    </div>
</template>

<script>
import AppHeader from '@/layouts/Header.vue'
import AppContentHome from '@/pages/Home.vue'
import Card from '@/components/Card.vue'

export default {
    name: 'AppLayout',
    components: {
        // AppHeader,
        AppContentHome,
        // Card
    }
}
</script>
