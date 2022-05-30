import commonActions from '@/vuex/actions/actions'
import mutations from '@/vuex/mutations/mutations'
import getters from '@/vuex/getters/getters';
import { createStore } from 'vuex';
import apiRequests from '@/vuex/actions/api';

const actions = {...commonActions,...apiRequests};

let store = createStore ({
  state: {
    searchValue: '',
    cards: [],
    offset: 0
  },
  mutations,
  actions,
  getters
});

export default store;
