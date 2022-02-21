import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useOutletContext } from 'react-router-dom';

import './DeckEditorMain.css'
import DeckEditorCreateNewDeck from "../DeckEditorCreateNewDeck/DeckEditorCreateNewDeck";
import DeckHolder from "../DeckHolder/DeckHolder";
import DeckHolderNewDeck from "../DeckHolderNewDeck/DeckHoldernewDeck";

import './DeckEditorMain.css';

const DeckEditorMain = () => {
    const firebaseManager = useOutletContext();
    
    return (
        
        <div className="deck-editor-container">
            <DeckHolderNewDeck />
                {firebaseManager.decks?.map(deck => (                    
                    <DeckHolder deckCards={deck.cardList} key={deck.id.toString()} deckName={deck.name} deckId={deck.id}/>
                ))}
        </div>
    );
}

export default DeckEditorMain;