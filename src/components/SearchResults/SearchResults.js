import React from "react";
import { useEffect, useState } from 'react';

import './SearchResults.css';
import PokemonApi from "../../utils/PokemonApi";

import PokemonCard from '../../components/PokemonCard/PokemonCard'

const SearchResults = () => {
    const [cards, setCards] = useState();
    
    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:Pikachu`).then((cards) => {
            setCards(cards);
            
        });
    }, []); 

    return (
        <div className="search-results-container">
            <div className="view-image-container">
                {(cards?.slice(0,21))?.map(card => (
                    <PokemonCard cardId={card.id} />
                ) )}
            </div>
        </div>
    );
}

export default SearchResults;