import React from "react";

import './MenuButton.css';

const MenuButton = () => {
    const state = {
        text: ["START: Find game", "Join Chat", "Rooms"]
    };

    return (
        <div className="menu-button-container button">
            <h2>{state.text}</h2>
        </div>
    );
}

export default MenuButton;