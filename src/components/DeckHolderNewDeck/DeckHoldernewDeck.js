import React from "react";
import { useNavigate } from "react-router-dom";

import './DeckHolderNewDeck.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../Hooks/useFirebase";

const DeckHolderNewDeck = () => {
    const firebaseManager = useFirebase();
    const navigate = useNavigate();

    const handleOnClick = (event) => {
        firebaseManager.createNewDeck().then(deckId => navigate(`create-deck?deckId=${deckId}`));
    }

    return (
        <button onClick={handleOnClick} className="deckholder-container">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
        </button>
    );
}

export default DeckHolderNewDeck;