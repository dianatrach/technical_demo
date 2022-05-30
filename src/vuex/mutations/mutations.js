import CardModel from "@/classes/CardModel";
export default {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
      },
    SET_CARDS: (state, value) => {
      state.cards = value;
    },
    CARD_REQUEST: (state, json) => {
      const cards = json.data.map(gif => gif.id).map(gifId => {
        return new CardModel(gifId)
      });
      if(state.cards!=null) {
        state.cards = state.cards.concat(cards);
      }
      else {
        state.cards = cards;
      };
    },
    ADD_TO_CARDS: (state, cards) => {
      if(state.cards!=null) {
        state.cards = state.cards.concat(cards);
      }
      else {
        state.cards = cards;
      };
    },
    TOGGLE_FAVORITE: (state, index) => {
      state.cards[index].isFavourite = !state.cards[index].isFavourite;
    },
    CLEAR_CARDS: (state) => {
      state.cards = null;
    },
    SET_CARDS_FROM_COOKIES: (state, cards) => {
      for(let i = 0; i < cards.length; i++) {
        let index = state.cards.findIndex(e => e.id === cards[i].id);
        if(index <= -1) {
          state.cards.concat(cards[i])
        }
        else { state.cards[index].isFavourite = true;
        };
      }
    },
};