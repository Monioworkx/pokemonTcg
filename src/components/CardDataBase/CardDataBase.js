import React from "react";
import { useState, useEffect } from "react";

import './CardDataBase.css'

import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

import useDataToSearch from "../../Hooks/useDataToSearch";



const CardDataBase = () => {
    const [loading, cards, handleOnChange, handleSubmit] = useDataToSearch();
    
    return (
            <div className="cdb-container">
                <SearchForm  handleSubmit={handleSubmit} handleOnChange={handleOnChange} />
                <SearchResults loading={loading} cards={cards} />
            </div>
    );
}

export default CardDataBase;