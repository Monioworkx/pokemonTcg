import React from "react";

import './CardDataBase.css'

import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";



const CardDataBase = () => {

    return (
        <div className="card-data-base">
            <div className="cdb-container">
                <SearchForm />
                <SearchResults />
            </div>
        </div>
    );
}

export default CardDataBase;