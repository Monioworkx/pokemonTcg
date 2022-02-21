import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet , context } from 'react-router-dom';

import './DeckEditor.css';
import useFirebase from '../../Hooks/useFirebase';
import DeckEditorMain from "../DeckEditorMain/DeckEditorMain";
import DeckEditorCreateNewDeck from "../DeckEditorCreateNewDeck/DeckEditorCreateNewDeck";
import DeckHolder from "../DeckHolder/DeckHolder";
import DeckHolderNewDeck from "../DeckHolderNewDeck/DeckHoldernewDeck";


const DeckEditor = () => {
    const firebaseManager = useFirebase();
    return (
        <div className="section-container">
                {/* <div className="navbar-deckEditor">
                    <span>Decks</span>
                    <span>Edit Deck</span>
                </div> */}
                

{/*                 <div className="decks-test">{decks.map(deck => (
                    <div>
                        <div>{deck.name}</div>
                        <div>{deck.cardList}</div>
                    </div>)
                    
                )}</div>
                    
                <form className="form-input-container" onSubmit={handleSaveDeck}>
                    <input onChange={handleDeckNameChange} className="input-holder" type="text" name="deckName" placeholder="Card name" />
                    <button type="submit"> Create deck</button>
                </form> */}
                <Outlet context={firebaseManager} />
        </div>
    );
}

export default DeckEditor;