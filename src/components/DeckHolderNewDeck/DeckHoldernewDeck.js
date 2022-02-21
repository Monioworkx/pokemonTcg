import react, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './DeckHolderNewDeck.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../Hooks/useFirebase";

const DeckHolderNewDeck = () => {
    const firebaseManager = useFirebase();
    const navigate = useNavigate();
    const [deckId, setDeckId] = useState();
    /* const [pathName, setPathName] = useState("create-deck?deckId=rBxF3phne9jd2eXvqb9i"); */

    const handleOnClick = (event) => {
        firebaseManager.createNewDeck().then(deckId => navigate(`create-deck?deckId=${deckId}`));
    }

/*      if(deckId !== undefined) {
        setPathName(`create-deck?deckId=${deckId}`) */
    return (
        <button onClick={handleOnClick} /* to={{ pathname: `create-deck?deckId=${deckId}`}} */ className="deckholder-container">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
        </button>
    );
    
    
}

export default DeckHolderNewDeck;