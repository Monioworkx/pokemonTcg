import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useOutletContext } from 'react-router-dom';

import useFirebase from '../../Hooks/useFirebase';

import './DeckEditorMain.css'
import DeckEditorCreateNewDeck from "../DeckEditorCreateNewDeck/DeckEditorCreateNewDeck";
import DeckHolder from "../DeckHolder/DeckHolder";
import DeckHolderNewDeck from "../DeckHolderNewDeck/DeckHoldernewDeck";

import './DeckEditorMain.css';

const DeckEditorMain = () => {
    let decks = useOutletContext();
    /* console.log(decks); */
    return (
        
        <div className="deck-editor-container">
            <DeckHolderNewDeck />
                {decks?.map(deck => (
                    
                    <DeckHolder deckCards={deck.cardList} key={deck.id.toString()} deckName={deck.name} deckId={deck.id}/>
                ))}
        </div>
    );
}

export default DeckEditorMain;