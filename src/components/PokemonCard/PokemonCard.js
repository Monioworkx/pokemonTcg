import React, { useEffect, useState} from "react";

import './PokemonCard.css';

import PokemonApi from '../../utils/PokemonApi'
import useMounted from "../../Hooks/useMounted";
import { useOutletContext } from "react-router-dom";

const PokemonCard = (props) => {
    let firebaseManager = useOutletContext();
    const addCardsToDeck = firebaseManager?.addCardsToDeck;
    const updateDeck = firebaseManager?.getDeck;

    const cardId = props.cardId;
    const deckId = props.deckId;
    const [cardData, setCardData] = useState();
    const isMounted = useMounted();
    const [isClicked, setIsClick] = useState(false)

    useEffect(() => {
        PokemonApi.getCardData(cardId)
            .then(cardData => { 
                if (!isMounted) return; 
                setCardData(cardData)
            });
    }, [cardId, isMounted]); 

/*     const handleIsClicked = (event) => {
        setIsClick(true);
    }  */

    const handleAddCardToDeck = (event) => {
        addCardsToDeck(cardId, deckId);
        updateDeck(deckId);
    } 

    return (
        <div className="pokemon-card-container">
            <img onClick={() => handleAddCardToDeck()} src={cardData?.images.small} alt='Searching card!' />
            <div style={isClicked ? props.style : null} className="editor-options-box">
            </div>
        </div>
    );
}

export default PokemonCard;