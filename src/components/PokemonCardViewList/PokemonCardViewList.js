import React, { useEffect, useState} from "react";

import './PokemonCardViewList.css';

import PokemonApi from '../../utils/PokemonApi'

const PokemonCardViewList = (props) => {
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    
    useEffect(() =>{
        PokemonApi.getCardData(cardId)
            .then(cardData => setCardData(cardData));
            
    }, [cardId]); 

    return (
        <div className="pokemon-card-list-container">
            <table>
                <tr>
                    <td>{cardData?.name}</td>
                    <td>{cardData?.types}</td>
                    <td>{cardData?.weaknesses[0].type}</td>
                    <td>{cardData?.convertedRetdeatCost}</td>
                    <td>{cardData?.rarity}</td>
                    <td>{cardData?.set.name}</td>
                    <td>{cardData?.set.series}</td>
                </tr>
            </table>
        </div>
    );
}

export default PokemonCardViewList;