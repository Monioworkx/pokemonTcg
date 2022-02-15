import React from "react";
import { useEffect, useState } from 'react';

import './SearchResults.css';

import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonCardViewList from "../PokemonCardViewList/PokemonCardViewList";

const SearchResults = (props) => {


    return (
        <div className="search-results-container">
{/*             <div className={props.loading ? "lds-ring" : "lds-ring not-visible"}><div></div><div></div><div></div><div></div></div>
            <div className={props.loading ? "not-visible" : "image-container"}>
                {(props.cards?.slice(0,21))?.map(card => (
                    <PokemonCard cardId={card.id} />
                ) )}
            </div> */}
            <div className="list-container">
                <table className="table-head-container">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Weaknesses</th>
                        <th>Converted cost</th>
                        <th>Rarity</th>
                        <th>Set</th>
                        <th>Series</th>
                    </tr>
                </table>
            {(props.cards?.slice(0,1))?.map(card => (
                    <PokemonCardViewList cardId={card.id} />
                ) )}
            </div>
        </div>
    );
}

export default SearchResults;