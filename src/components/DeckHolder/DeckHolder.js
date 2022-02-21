import React from "react";
import { Link } from "react-router-dom";

import './DeckHolder.css';
import mewtwo from '../../images/mewtwo.jpg'



const DeckHolder = (props) => {
    const deckId = props.deckId;
    const deckName = props.deckName;

    return (
        <Link  to={{ pathname: `create-deck?deckId=${deckId}`}}>
            <div className="deckholder-container">
                <img className="layer1-img" src={mewtwo} alt="mew"/>
                <div className="deckName-container">
                    <h2>{deckName.toUpperCase()}</h2>
                </div>
            </div>
        </Link>
    );
}

export default DeckHolder;