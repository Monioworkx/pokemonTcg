import React, { useEffect } from "react";
import { useState } from "react";

import './DeckEditorCreateNewDeck.css';
import useFirebase from "../../Hooks/useFirebase";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import useSearchCardData from "../../Hooks/useSearchCardData";
import DeckCardContainer from "../DeckCardContainer/DeckCardContainer"
import { useSearchParams } from "react-router-dom";

const DeckEditorCreateNewDeck = (props) => {
    const firebaseManager = useFirebase()
    const [loading, cards, handleOnChange, handleSubmit] = useSearchCardData();
    const [activeImages, setActiveImages] = useState(true);
    const [activeList, setActiveList] = useState(false);
    const [searchParams] = useSearchParams();
    const deckId = searchParams.get("deckId");
    
    useEffect(() => {
        if(deckId) {
            firebaseManager.getDeck(deckId);
        } 
    }, [deckId]);

    const handleListIconOnClick = (event) => {
        setActiveImages(false);
        setActiveList(true);
    }

    const handleImagesIconOnClick = (event) => {
        setActiveImages(true);
        setActiveList(false);
    }
    
    return (
            <div className="createNewDeck-container">
                <p>{JSON.stringify(firebaseManager.deck)}</p>
                <SearchForm activeList={activeList} 
                            activeImages={activeImages} 
                            handleImagesIconOnClick={handleImagesIconOnClick} 
                            handleListIconOnClick={handleListIconOnClick} 
                            handleSubmit={handleSubmit} 
                            handleOnChange={handleOnChange} />
                <SearchResults activeList={activeList}
                               activeImages={activeImages}
                               loading={loading}
                               cards={cards} />
                <DeckCardContainer deckCards={props.deckCards} deckName={props.deckName} />
            </div>
    );
}

export default DeckEditorCreateNewDeck;