export default class CardModel {
    id: number;
    url: string;
    isFavourite = false;
    constructor(id) 
    {
      this.id = id;
      this.url = "'https://media.giphy.com/media/'+id+'/giphy.gif'";
      this.isFavourite = isFavourite;
    }
}