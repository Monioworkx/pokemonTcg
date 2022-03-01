import React from "react";
import { useOutletContext } from 'react-router-dom';

import './DeckEditorMain.css'
import DeckHolder from "../DeckHolder/DeckHolder";
import DeckHolderNewDeck from "../DeckHolderNewDeck/DeckHoldernewDeck";

import './DeckEditorMain.css';

const DeckEditorMain = () => {
    const firebaseManager = useOutletContext();
    const decks = firebaseManager.decks;

    return (
        
        <div className="deck-editor-container">
            <DeckHolderNewDeck />
            {decks?.map(deck => (                    
                <DeckHolder deckCards={deck.deckCards} key={deck.id.toString()} deckName={deck.name} deckId={deck.id}/>
            ))}
        </div>
    );
}

export default DeckEditorMain;

