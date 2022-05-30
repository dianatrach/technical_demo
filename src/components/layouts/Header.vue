<template>
    <div class="header">
        <div class="menu">
            <nav class="nav">
                <router-link :to="{name: 'Home'}" class="nav_link fav_link">home</router-link>
                <router-link :to="{name: 'Favorites'}" class="nav_link fav_link">favorites</router-link>
            </nav>
        </div>
        <div class="search_box">
            <div class="text-field__icon text-field__icon_search">
                <input class="text-field__input" type="text" placeholder="Search GIF" v-model="searchValue" @keyup.enter="pressEnter">
                
            </div>
        </div>

        
    </div>
</template>

<script>
import store from '@/vuex/store.js';
import emitter from '@/main.js';

export default ({
    name: 'Header',
    props: {},
    data() {
      return {};
    },
    computed: {
        searchValue: {
            get() {
                return store.state.searchValue;
            },
            set(value) {
                store.commit('SET_SEARCH_VALUE_TO_VUEX', value);
            }
        }
    },
    methods: {
        pressEnter: function() {
            emitter.emit('search');
        }
    }
});
</script>
