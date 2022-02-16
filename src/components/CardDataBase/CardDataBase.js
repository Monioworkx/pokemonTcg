import React from "react";
import { useState, useEffect } from "react";

import './CardDataBase.css'

import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

import useSearchCardData from "../../Hooks/useSearchCardData";



const CardDataBase = () => {
    const [loading, cards, handleOnChange, handleSubmit] = useSearchCardData();
    const [activeImages, setActiveImages] = useState(true);
    const [activeList, setActiveList] = useState(false);

    const handleListIconOnClick = (event) => {
        setActiveImages(false);
        setActiveList(true);
    }

    const handleImagesIconOnClick = (event) => {
        setActiveImages(true);
        setActiveList(false);
    }
    
    return (
            <div className="cdb-container">
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
            </div>
    );
}

export default CardDataBase;