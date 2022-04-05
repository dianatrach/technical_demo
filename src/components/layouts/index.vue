<template>
    <div id="app">
        <AppHeader></AppHeader>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <Home/>
        <!-- <Card></Card> -->

       
        
    </div>
</template>

<script>
import AppHeader from '@/layouts/Header.vue'
import Home from '@/pages/Home.vue'
import Card from '@/components/Card.vue'

export default {
    name: 'AppLayout',
    components: {
        AppHeader,
        Home,
        // Card
    }
}
</script>