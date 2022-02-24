import React, { useEffect } from "react";
import { useState } from "react";

import './DeckEditorCreateNewDeck.css';
import DeckCardContainer from "../DeckCardContainer/DeckCardContainer"
import { useSearchParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import CardDataBase from '../CardDataBase/CardDataBase'

const DeckEditorCreateNewDeck = (props) => {
    let firebaseManager = useOutletContext();
    const [searchParams] = useSearchParams();
    const deckId = searchParams.get("deckId");
    
    useEffect(() => {
        if(deckId) {
            firebaseManager.getDeck(deckId);  
        } 
    }, [deckId]);

    const style = {
        'display': 'flex'
    }
    
    return (
            <div className="createNewDeck-container">
                <CardDataBase deckCards={firebaseManager.deck?.cardList} deckId={deckId} />
                <DeckCardContainer deckId={deckId} />
            </div>
    );
}

export default DeckEditorCreateNewDeck;