<template>
    <div id="app">
        <AppHeader></AppHeader>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <Home/>
    </div>
</template>

<script>
import AppHeader from '@/layouts/Header.vue';
import Home from '@/pages/Home.vue';

export default {
    name: 'AppLayout',
    components: {
        AppHeader,
        Home
    }
};
</script>