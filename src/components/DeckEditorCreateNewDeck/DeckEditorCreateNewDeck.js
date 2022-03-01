import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import './DeckEditorCreateNewDeck.css';
import DeckCardContainer from "../DeckCardContainer/DeckCardContainer"
import CardDataBase from '../CardDataBase/CardDataBase'

const DeckEditorCreateNewDeck = (props) => {
    const firebaseManager = useOutletContext();
    const [searchParams] = useSearchParams();
    const deckId = searchParams.get("deckId");
    
    useEffect(() => {
        if(deckId) {
            firebaseManager.getDeck(deckId); 
        }
    }, [deckId]);

    return (
        <div className="createNewDeck-container">
            <CardDataBase deckId={deckId} />
            <DeckCardContainer deckId={deckId} />
        </div>
    );
}

export default DeckEditorCreateNewDeck;