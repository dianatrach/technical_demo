export default class CardModel {
    id = null;
    url = "";
    isFavourite = false;
    constructor(id) {
      this.id = id;
      this.url = `https://media.giphy.com/media/${id}/giphy.gif`;
    };
};