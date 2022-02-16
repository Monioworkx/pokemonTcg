import React from "react";
import { useEffect, useState } from 'react';

import './SearchResults.css';

import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonCardViewList from "../PokemonCardViewList/PokemonCardViewList";
import SearchForm from "../SearchForm/SearchForm";

import useChangeListViewMode from "../../Hooks/useChangeListViewMode";

const SearchResults = (props) => {
    
 
    return (
        <div className="search-results-container">             
            <div className={props.loading ? "lds-ring" : "lds-ring not-visible"}><div></div><div></div><div></div><div></div></div>
            <div id="image" className=
                {
                `${props.loading ? "not-visible image-container" : "image-container"}  
                 ${props.activeImages ? " " : "not-active"}`
                }>
                {(props.cards?.slice(0,24))?.map(card => (
                    <PokemonCard cardId={card.id} />
                ) )}
            </div> 
            <div id="list" className={props.activeList ? "list-container" : "list-container not-active"}>
                <table className="table-container">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Rarity</th>
                        <th>Logo</th>
                        <th>Set</th>
                        <th>Series</th>
                    </tr>
                    {(props.cards?.slice(0,33))?.map(card => (
                            <PokemonCardViewList cardId={card.id} />
                    ) )}
                </table>
            </div> 
        </div>
    );
}

export default SearchResults;