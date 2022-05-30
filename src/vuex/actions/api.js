export default {
  async CARD_REQUEST(context, searchValue) {
       let apiKey ="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb";
       let limit = 20;
       let offset = context.state.offset;
       let search;
       if(searchValue) {
         search = `search?api_key=${apiKey}&q=${searchValue}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
       } 
       else {
         search = `trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`;
       }
       const response = await fetch(`https://api.giphy.com/v1/gifs/${search}`)
       .then(response => {
         return response.json();
       })
       .then(json => {
           context.commit('CARD_REQUEST',json);
         })
       .catch(err => console.log(err));
   }
};