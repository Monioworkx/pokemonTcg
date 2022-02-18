import React, { useEffect, useState} from "react";

import './PokemonCard.css';

import PokemonApi from '../../utils/PokemonApi'
import useMounted from "../../Hooks/useMounted";

const PokemonCard = (props) => {
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    const isMounted = useMounted();

    useEffect(() => {
        PokemonApi.getCardData(cardId)
            .then(cardData => { 
                if (!isMounted) return; 
                setCardData(cardData)
            });
    }, []); 

    return (
        <div className="pokemon-card-container">
            <img src={cardData?.images.small} alt='Searching card!' />
        </div>
    );
}

export default PokemonCard;