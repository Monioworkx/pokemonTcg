const apiKey = '6b3f665b-a497-4f89-b21a-d7f30f033338';

const getOptions = () => {
    const options = {
        headers: {},
    };
    options.headers['X-Api-Key'] = apiKey;
    return options;
}
 
const pokemonApiFetch = (...args) => {
    return fetch(...args)
        .then(response => response.json())
        .then(responseData => responseData.data)
        .catch(error => console.log(error))
};

const PokemonApi = {
    async getCardData(cardId) {
        return pokemonApiFetch(`https://api.pokemontcg.io/v2/cards/${cardId}`, getOptions());
    },

    async getCards() {
        return pokemonApiFetch(`https://api.pokemontcg.io//v2/cards`, getOptions());
    },

    async getPokemonAll(arg) {
        return pokemonApiFetch(`https://api.pokemontcg.io/v2/cards?${arg}&pageSize=250`, getOptions());
    }
}




export default PokemonApi;