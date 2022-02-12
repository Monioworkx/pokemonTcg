import React, { useEffect, useState } from "react";

import PokemonCard from "../PokemonCard/PokemonCard";

import PokemonApi from "../../utils/PokemonApi";


const Main = () => {
    const [cards, setCards] = useState();

    useEffect(() =>{
        PokemonApi.getCards().then((cards) => {
            setCards(cards);
        });
    }, []); 

    return (
        <div>
            <h1>Main</h1>
            {(cards?.slice(0,10))?.map(card => (
                <PokemonCard cardId={card.id} />
            ) )}
        </div>
    );
}

export default Main;