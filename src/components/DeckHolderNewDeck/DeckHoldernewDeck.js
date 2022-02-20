import react from "react";
import { Link } from "react-router-dom";

import './DeckHolderNewDeck.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DeckHolderNewDeck = () => {
    return (
        <Link to="create-deck" className="deckholder-container">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
{/*         <img className="layer1-img" src={mewtwo} alt="mew"/>
        <div className="deckName-container">
            <h2>{props.deckName.toUpperCase()}</h2>
        </div> */}
        </Link>
    );
}

export default DeckHolderNewDeck;