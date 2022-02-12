/* const apiKey = '6b3f665b-a497-4f89-b21a-d7f30f033338';
 */
const pokemonApiFetch = (...args) => {
    console.log(args)
    return fetch(...args)
        .then(response => response.json())
        .then(responseData => responseData.data)
        .catch(error => console.log(error))
};

const PokemonApi = {
    async getCardData(cardId) {
        return pokemonApiFetch(`https://api.pokemontcg.io/v2/cards/${cardId}`);
    },

    async getCards() {
        return pokemonApiFetch(`https://api.pokemontcg.io/v2/cards`);
    },
}

export default PokemonApi;