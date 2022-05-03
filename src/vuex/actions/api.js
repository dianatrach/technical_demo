export default {
   CARD_REQUEST(context,searchValue){
        let apiKey ="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb";
        let limit = 20;
        let offset = context.state.offset

        const response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
        .then(response => {
          return response.json();
        })
        .then(json => {
            context.commit('CARD_REQUEST',json)
          })
        .catch(err => console.log(err));
    }
}