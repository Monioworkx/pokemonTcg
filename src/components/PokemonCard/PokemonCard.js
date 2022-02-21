import React, { useEffect, useState} from "react";

import './PokemonCard.css';

import PokemonApi from '../../utils/PokemonApi'
import useMounted from "../../Hooks/useMounted";
import useFirebase from "../../Hooks/useFirebase";

const PokemonCard = (props) => {
    const firebaseManager = useFirebase();
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
    }, []); 

    const handleIsClicked = (event) => {
        setIsClick(true);
    } 

    const handleAddCardToDeck = (event) => {
        firebaseManager.addCardsToDeck(cardId, deckId);
    } 

    return (
        <div className="pokemon-card-container">
            <img onClick={handleAddCardToDeck} src={cardData?.images.small} alt='Searching card!' />
            <div style={isClicked ? props.style : null} className="editor-options-box">
                hola
            </div>
        </div>
    );
}

export default PokemonCard;