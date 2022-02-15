import React from "react";
import { useState, useEffect } from "react";

import './CardDataBase.css'
import PokemonApi from "../../utils/PokemonApi";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";



const CardDataBase = () => {
    const [inputData, setInputData] = useState({
        cardName: '',
        supertype: '',
    });
    const handleOnChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name] : event.target.value
        }); 
    }

    const [dataToSearch, setDataToSearch] = useState('Pikachu');

    const handleSubmit = (event) => {
        setDataToSearch(inputData.cardName)
        event.preventDefault();
    }

    const [cards, setCards] = useState();
    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}`).then((cards) => {
            setCards(cards);
        });
    }, [dataToSearch]); 

    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}*`).then((cards) => {
            setCards(cards);
            
        });
    }, [dataToSearch]); 

    

    return (
        <div className="card-data-base">
            <div className="cdb-container">
                <SearchForm handleSubmit={handleSubmit} handleOnChange={handleOnChange} />
                <SearchResults cards={cards} />
            </div>
        </div>
    );
}

export default CardDataBase;