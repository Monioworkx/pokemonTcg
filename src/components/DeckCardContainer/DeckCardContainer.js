import React from "react";

import './DeckCardContainer.css';
import CardNameHolder from "../CardNameHolder/CardNameHolder";
import { useOutletContext } from "react-router-dom";

const DeckCardContainer = (props) => {
    let firebaseManager = useOutletContext();
    const handleDeckNameChange = firebaseManager.handleDeckNameChange;
    const handleSaveDeckName = firebaseManager.handleSaveDeckName;
    const deck = firebaseManager.deck;
    const deckId= props.deckId;
    
    if (deck !== null) {
        return (
            <div className="deckCards-container">
                {<div className="deckName">
                    <form className="form-input-container"  onSubmit={(event) => handleSaveDeckName(event, props.deckId)}>
                        <input  onChange={(event) => handleDeckNameChange(event)} className="input-holder name" type="text" name="deckName" placeholder={deck.deckName.toUpperCase()} />
                        <button className="saveButton" type="submit"> Save deck</button>
                    </form>
                  </div> 
                }
                {deck.deckCards.map(card => 
                    <CardNameHolder key={card.toString()} deckId={deckId} cardId={card}  /> 
                )} 
            </div>
        );
    }

    return (
        <></>
    );
    
}

export default DeckCardContainer;