import React from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import './CardDataBase.css'
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import useSearchCardData from "../../Hooks/useSearchCardData";

const CardDataBase = (props) => {
    const firebaseManager = useOutletContext();
    const [userDeckCards, setUserDeckCards] = useState();
    const [activeUserDeckIcon, setActiveUserDeckIcon] = useState(false)
    const [loading, cards, handleOnChange, handleSubmit] = useSearchCardData();
    const [activeImages, setActiveImages] = useState(true);
    const [activeList, setActiveList] = useState(false);
    const [viewUserDeck, setViewUserDeck] = useState(false);

    const handleListIconOnClick = (event) => {
        setActiveImages(false);
        setActiveList(true);
    }

    const handleImagesIconOnClick = (event) => {
        setActiveImages(true);
        setActiveList(false);
    }

    const handleShowUserDeckCards = (event) => {
        setUserDeckCards(firebaseManager.deck.deckCards)
        setViewUserDeck(true); 
        setActiveUserDeckIcon(true);
        
        if (viewUserDeck === true) {
            setActiveUserDeckIcon(false);
            setViewUserDeck(false);
        }
    } 
    
    return (
            <div className="cdb-container">
                <SearchForm activeList={activeList} 
                            activeImages={activeImages} 
                            handleImagesIconOnClick={handleImagesIconOnClick} 
                            handleListIconOnClick={handleListIconOnClick} 
                            handleSubmit={handleSubmit} 
                            handleOnChange={handleOnChange} 
                            handleShowUserDeckCards={handleShowUserDeckCards}
                            activeUserDeckIcon={activeUserDeckIcon}
                            deckId={props.deckId}
                            
                />
                <SearchResults activeList={activeList}
                               activeImages={activeImages}
                               loading={loading}
                               cards={cards}
                               deckId={props.deckId}
                               viewUserDeck={viewUserDeck}
                               userDeckCards={userDeckCards}
                />
            </div>
    );
}

export default CardDataBase;