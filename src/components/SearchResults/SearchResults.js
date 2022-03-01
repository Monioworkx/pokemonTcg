import React from "react";

import './SearchResults.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonCardViewList from "../PokemonCardViewList/PokemonCardViewList";

const SearchResults = (props) => {
    const viewUserDeck = props.viewUserDeck;
    const pokemonApiSearchResultsCards = props.cards;
    const userDeckCards = props.userDeckCards;
       
    return (
        <div className="search-results-deck-container">             
            <div className={props.loading ? "lds-ring" : "lds-ring not-visible"}><div></div><div></div><div></div><div></div></div>
            <div id="image" 
                className={
                    `${props.loading ? "not-visible image-container" : "image-container"}  
                    ${props.activeImages ? " " : "not-active"}`
                }
            >
                {((viewUserDeck === true ? userDeckCards : pokemonApiSearchResultsCards)?.slice(0,24))?.map(card => (
                    <PokemonCard  
                        deckId={props.deckId} 
                        key={viewUserDeck === true ? card.toString() : card.id.toString()} 
                        cardId={viewUserDeck === true ? card : card.id} 
                    />
                ))}
            </div>
            <div id="list" className={props.activeList ? "list-container" : "list-container not-active"}>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Name</th>
                                <th className="column2">Type</th>
                                <th className="column3">Rarity</th>
                                <th className="column4">Logo</th>
                                <th className="column5">Set</th>
                                <th className="column6">Series</th>
                            </tr>
                        </thead>
                        <tbody>
                            {((viewUserDeck === true ? userDeckCards : pokemonApiSearchResultsCards)?.slice(0,33))?.map(card => (
                                <PokemonCardViewList 
                                    key={viewUserDeck === true ? card.toString() : card.id.toString()} 
                                    cardId={viewUserDeck === true ? card : card.id} 
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    ) 
}

export default SearchResults;