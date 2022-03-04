import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './DeckHolder.css';
import mewtwo from '../../images/mewtwo.jpg'

const DeckHolder = (props) => {
    const navigate = useNavigate();
    const deckId = props.deckId;
    const deckName = props.deckName;
    const [mouseOver, setMouseOver] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleNavigateOnClick = () => {
        navigate(`create-deck?deckId=${deckId}`);
    }

    const handleVisibleOnClick = () => {
        if (visible === false) {
            setVisible(true);
        }
        if (visible === true) {
            setVisible(false);
        }
    }

    const handleOnMouseEnter = () => {
        setMouseOver(true);
    }

    const handleOnMouseLeave = () => {
        setMouseOver(false);
        setVisible(false);
    }

    return (
        
            <div onMouseEnter={() => handleOnMouseEnter()} onMouseLeave={() => handleOnMouseLeave()} onClick={() => handleVisibleOnClick()} className="deckholder-container">
                <div className={visible && mouseOver ? "action-box visible" : "action-box"}>
                    <button onClick={() => handleNavigateOnClick()}>Edit</button>
                    <button>Delete</button>
                </div>
                <img className="layer1-img" src={mewtwo} alt="mew"/>
                <div className="deckName-container">
                    <h2>{deckName.toUpperCase()}</h2>
                </div>
            </div>
        
    );
}

export default DeckHolder;
{/* <Link  to={{ pathname: `create-deck?deckId=${deckId}`}}>
        </Link> */}