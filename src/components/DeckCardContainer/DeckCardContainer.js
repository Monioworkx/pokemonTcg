import React, { useEffect, useState } from "react";

import './DeckCardContainer.css';
import CardNameHolder from "../CardNameHolder/CardNameHolder";

const DeckCardContainer = (props) => {
    
    const deckData = props.deckData;
    if (deckData !== null) {
        return (
            <div className="deckCards-container">
                { <div className="deckName">
                    <h2>{deckData.name.toUpperCase()}</h2>
                  </div> 
                }
                { deckData.cardList.map(card => <CardNameHolder cardId={card} key={card.toString() } /> )} 
            </div>
        );
    }

    return (
        <></>
    );
    
}

export default DeckCardContainer;