import React from "react";
import { useState, useEffect } from "react";

import './CardDataBase.css'
import PokemonApi from "../../utils/PokemonApi";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";



const CardDataBase = () => {
    const [dataToSearch, setDataToSearch] = useState('Pikachu');
    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState({
        cardName: '',
        supertype: '',
    });
    
    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}`).then((cards) => {
            setLoading(false);
            setCards(cards);
            setLoading(true);
        });
    }, [dataToSearch]); 

    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}*`).then((cards) => {
            setLoading(false);
            setTimeout(setCards(cards), 1000);
        });
    }, [dataToSearch]); 


    const handleOnChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name] : event.target.value
        }); 
    }

    const handleSubmit = (event) => {
        setDataToSearch(inputData.cardName)
        event.preventDefault();
    }

    return (
        <div className="card-data-base">
            <div className="cdb-container">
                <SearchForm  handleSubmit={handleSubmit} handleOnChange={handleOnChange} />
                <SearchResults loading={loading} cards={cards} />
            </div>
        </div>
    );
}

export default CardDataBase;