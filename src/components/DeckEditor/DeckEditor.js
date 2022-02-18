import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

import useFirebase from '../../Hooks/useFirebase';


import './DeckEditor.css';

import DeckEditorMain from "../DeckEditorMain/DeckEditorMain";
import DeckEditorCreateNewDeck from "../DeckEditorCreateNewDeck/DeckEditorCreateNewDeck";

const Deck = () => {
    const [decks, deckCards, handleSaveDeck, handleDeckNameChange] = useFirebase();
    /* if (decks.length > 0) {
        console.log(decks);
    } */
    
    
}

const DeckEditor = () => {
    const [decks, deckCards, handleSaveDeck, handleDeckNameChange] = useFirebase();
    
    return (
        <div className="section-container">
            <div className="deck-editor-container">
                
                    
                <form className="form-input-container" onSubmit={handleSaveDeck}>
                    <input onChange={handleDeckNameChange} className="input-holder" type="text" name="deckName" placeholder="Card name" />
                    <button type="submit"> Create deck</button>
                </form>
                <Outlet />
            </div>
        </div>
    );
}

export default DeckEditor;