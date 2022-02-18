import { useEffect, useState } from "react";

import PokemonApi from "../utils/PokemonApi";

const useSearchCardData = () =>{
    const [dataToSearch, setDataToSearch] = useState('Pikachu');
    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState({
        cardName: '',
        supertype: '',
    });
    let isMounted = true;
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
            setCards(cards);
        });
    }, [dataToSearch]); 

    const handleOnChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name] : event.target.value
        }); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDataToSearch(inputData.cardName)
        
    }
    return [loading, cards, handleOnChange, handleSubmit];
}

export default useSearchCardData;