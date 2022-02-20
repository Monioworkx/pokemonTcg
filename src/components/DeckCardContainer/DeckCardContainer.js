import React from "react";

import './DeckCardContainer.css';
import CardNameHolder from "../CardNameHolder/CardNameHolder";

const DeckCardContainer = (props) => {
    let deckCards = props.deckCards;
    return (
        <div className="deckCards-container">
            <h2>{props.deckName}</h2>
            {/* {deckCards.map(cardId => (
                <CardNameHolder cardId={cardId} />
            ))} */}
        </div>
    );
}

export default DeckCardContainer;