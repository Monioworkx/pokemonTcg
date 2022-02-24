import React from "react";
import { useState, useEffect } from "react";

import './CardDataBase.css'

import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

import useSearchCardData from "../../Hooks/useSearchCardData";
import { setUserProperties } from "firebase/analytics";
import { useOutletContext } from "react-router-dom";



const CardDataBase = (props) => {
    let firebaseManager = useOutletContext();
    const [polla, setPolla] = useState();
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

/*     useEffect(() => {
        console.log(polla)
    }) */
    
    const handleShowUserDeckCards = (event) => {
        setPolla(firebaseManager.deck.cardList)
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
                               deckCards={props.deck} 
                               viewUserDeck={viewUserDeck}
                               polla={polla}
                               />
            </div>
    );
}

export default CardDataBase;