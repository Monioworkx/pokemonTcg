import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import './CardNameHolder.css'
import PokemonApi from "../../utils/PokemonApi";
import useMounted from "../../Hooks/useMounted";
import { useOutletContext } from "react-router-dom";

const CardNameHolder = (props) => {
    const firebaseManager = useOutletContext();
    const removeCardInDeck = firebaseManager?.removeCardInDeck;
    const cardId = props.cardId;
    const deckId = props.deckId;
    const [cardData, setCardData] = useState();
    const isMounted = useMounted();

    useEffect(() => {
        PokemonApi.getCardData(cardId)
            .then(cardData => { 
                if (!isMounted) return; 
                setCardData(cardData)
            });
    }, [cardId, isMounted]); 

    const handleRemoveCardOnClick = (event) => {
        removeCardInDeck(cardId, deckId);
    }
    
    if (cardData !== undefined) {
        return (
            <div onClick={(event) => handleRemoveCardOnClick(event)} className="card">
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