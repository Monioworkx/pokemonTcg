import React, { useEffect, useState} from "react";

import './PokemonCard.css';

import PokemonApi from '../../utils/PokemonApi'

const PokemonCard = (props) => {
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    
    useEffect(() =>{
        PokemonApi.getCardData(cardId)
            .then(cardData => setCardData(cardData));
    }, []); 

    return (
        <div className="pokemon-card-container">
            <img src={cardData?.images.small} alt='Searching card!' />
        </div>
    );
}

export default PokemonCard;