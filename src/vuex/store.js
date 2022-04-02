import actions from '@/vuex/actions/actions'
import mutations from '@/vuex/mutations/mutations'
import getters from '@/vuex/getters/getters';
import CardModel from '@/classes/CardModel'
import { createStore } from 'vuex'


let store = createStore ({
  state: {
    searchValue: '',
    cards: [CardModel]
  },
  mutations,
  actions,
  getters,
});

export default store;
