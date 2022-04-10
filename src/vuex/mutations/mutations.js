import CardModel from "@/classes/CardModel";
export default{
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
        state.searchValue = value;
      },
    SET_CARDS: (state,value) => {
        state.cards = value;
    },
    CARD_REQUEST(state,json){
          const cards = json.data.map(gif => gif.id).map(gifId => {
              return new CardModel(gifId)
          });
          state.cards = cards
  }
}