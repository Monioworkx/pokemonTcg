import React from "react";

import './DeckCardContainer.css';
import CardNameHolder from "../CardNameHolder/CardNameHolder";
import { useOutletContext } from "react-router-dom";

const DeckCardContainer = (props) => {
    let firebaseManager = useOutletContext();
    const handleDeckNameChange = firebaseManager.handleDeckNameChange;
    const handleSaveDeckName = firebaseManager.handleSaveDeckName;
    const deck = firebaseManager.deck;
    
    if (deck !== null) {
        return (
            <div className="deckCards-container">
                { <div className="deckName">
                    <form className="form-input-container"  onSubmit={(event) => handleSaveDeckName(event, props.deckId)}>
                        <input onChange={(event) => handleDeckNameChange(event)} className="input-holder" type="text" name="deckName" placeholder={deck.name.toUpperCase()} />
                        <button type="submit"> Save deck</button>
                    </form>
                  </div> 
                }
                { deck.cardList.map(card => <CardNameHolder cardId={card} key={card.toString() } /> )} 
            </div>
        );
    }

    return (
        <></>
    );
    
}

export default DeckCardContainer;