import CardModel from "@/classes/CardModel";
export default {
    SET_CARDS_FROM_COOKIES(context, cookies) {
        let keys = cookies.keys();
        let cards = [];
        for(let a = 0; a < keys.length; a++) {
            let card = new CardModel(cookies.get(keys[a]).id);
            card.isFavourite = true;
            if(cards) {
                cards = cards.concat(card);
            }
            else {
                cards = card;
            };
        }
        context.commit('SET_CARDS_FROM_COOKIES', cards)
    }
};