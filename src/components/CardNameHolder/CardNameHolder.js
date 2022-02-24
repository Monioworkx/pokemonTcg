import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import './CardNameHolder.css'
import PokemonApi from "../../utils/PokemonApi";
import useMounted from "../../Hooks/useMounted";

const CardNameHolder = (props) => {
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    const isMounted = useMounted();

    useEffect(() => {
        PokemonApi.getCardData(cardId)
            .then(cardData => { 
                if (!isMounted) return; 
                setCardData(cardData)
            });
    }, [cardId, isMounted]); 

    if (cardData !== undefined) {
        return (
            <div className="card">
                <p className="cardName">{cardData?.name}</p>
                <img className="cardLogo set-logo" src={cardData?.set.images.symbol} alt="not" />
            </div>
        );
    }
    
    return (
        <></>
    );
}

export default CardNameHolder;