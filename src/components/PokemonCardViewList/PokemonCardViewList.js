import React, { useEffect, useState} from "react";

import './PokemonCardViewList.css';

import PokemonApi from '../../utils/PokemonApi'

const PokemonCardViewList = (props) => {
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    
    useEffect(() =>{
        PokemonApi.getCardData(cardId)
            .then(cardData => setCardData(cardData));
            
    }, []); 

    return (
        <>
            <td>{cardData && cardData.name ? cardData.name : "'Not available'"}</td>
            <td>{cardData && cardData.types ? cardData.types : "'Not available'"}</td>
            <td>{cardData && cardData.rarity ? cardData.rarity : "'Not available'"}</td>
            <img className="set-logo" src={cardData?.set.images.symbol} alt="not" />             <td>{cardData && cardData.set.name ? cardData.set.name : "'Not available'"}</td>
            <td>{cardData && cardData.set.series ? cardData.set.series : "'Not available'"}</td>
        </>
    );
}

export default PokemonCardViewList;