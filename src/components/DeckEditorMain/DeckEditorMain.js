import React from "react";
import { useOutletContext } from 'react-router-dom';

import './DeckEditorMain.css'
import DeckHolder from "../DeckHolder/DeckHolder";
import DeckHolderNewDeck from "../DeckHolderNewDeck/DeckHoldernewDeck";


const DeckEditorMain = () => {
    const firebaseManager = useOutletContext();
    const decks = firebaseManager?.decks;
    
    return (
        
        <div className="deck-editor-container">
            <DeckHolderNewDeck />
            {decks?.map(deck => (                    
                <DeckHolder key={deck.deckId.toString()} {...deck}/>
            ))}  
        </div>
    );
}

export default DeckEditorMain;

