import { useEffect, useState } from "react";

import PokemonApi from "../utils/PokemonApi";
import useMounted from "./useMounted";

const useSearchCardData = () =>{
    const isMounted = useMounted();
    const [dataToSearch, setDataToSearch] = useState('Pikachu');
    const [search, setSearch] = useState();
    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState({
        cardName: '',
        supertype: '',
    });
    
    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}`).then((cards) => {
            if (!isMounted) return;
            setLoading(false);
            setCards(cards);
            
        });
    }, []);

    useEffect(() =>{
        PokemonApi.getPokemonAll(`q=name:${dataToSearch}*`).then((cards) => {
            if (!isMounted) return;
            setLoading(false);
            setCards(cards);
            
        });
    }, [dataToSearch, isMounted]); 

    useEffect(() => {
        setSearch(inputData.cardName);
    },[inputData]);

    const handleOnChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name] : event.target.value
        }); 
        
    }
    const handleSubmit = (event) => {
        setDataToSearch(search);
        setLoading(true);
        event.preventDefault();
    }

    return [loading, cards, handleOnChange, handleSubmit];
}

export default useSearchCardData;