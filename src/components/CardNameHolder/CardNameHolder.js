import React from "react";

import './CardNameHolder.css'

const CardNameHolder = (props) => {
    return (
        <div className="card">
            <p>{props.cardId}</p>
        </div>
    );
}

export default CardNameHolder;