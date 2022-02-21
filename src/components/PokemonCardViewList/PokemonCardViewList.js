import React, { useEffect, useState} from "react";

import './PokemonCardViewList.css';
import useMounted from "../../Hooks/useMounted";
import PokemonApi from '../../utils/PokemonApi'

const PokemonCardViewList = (props) => {
    const isMounted = useMounted();
    const cardId = props.cardId;
    const [cardData, setCardData] = useState();
    
    useEffect(() =>{
        PokemonApi.getCardData(cardId)
            .then(cardData => {
                if (!isMounted) return;
                setCardData(cardData)
            });
            
    }, []); 

    return (
        <tr className="tr-card">
            <td className="column1">{cardData && cardData.name ? cardData.name : "'Not available'"}</td>
            <td className="column2">{cardData && cardData.types ? cardData.types : "'Not available'"}</td>
            <td className="column3">{cardData && cardData.rarity ? cardData.rarity : "'Not available'"}</td>
            <td className="column4"><img className="set-logo" src={cardData?.set.images.symbol} alt="not" /></td>        
            <td className="column5">{cardData && cardData.set.name ? cardData.set.name : "'Not available'"}</td>
            <td className="column6">{cardData && cardData.set.series ? cardData.set.series : "'Not available'"}</td>
        </tr>
    );
}

export default PokemonCardViewList;