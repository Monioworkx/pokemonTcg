import React from "react";

import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="hero-container">
                <h1 className="logo-header">PokéMoN</h1>
                <h2 className="catch-them">{/* Gotta catch them all! */}Trading Card Game!</h2>
            </div>
        </div>
    );
}

export default Header;