import CardModel from "@/classes/CardModel";
export default{
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
      },
    SET_CARDS: (state,value) => {
      state.cards = value;
    },
    CARD_REQUEST: (state,json) => {
      const cards = json.data.map(gif => gif.id).map(gifId => {
        return new CardModel(gifId)
      });
      if(state.cards!=null){
        state.cards = state.cards.concat(cards);
      }
      else {
        state.cards = cards;
      }
    },
    EDIT_FAVORITE: (state, index) => {
      state.cards[index].isFavourite = !state.cards[index].isFavourite;
    },
    CLEAR_CARDS: (state) => {
      state.cards = null;
    }
}