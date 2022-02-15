import React from "react";
import { useState } from "react";

import './SearchBar.css';

const SearchBar = () => {
    const [isActive, setIsActive] = useState(true);

    const handleSearch = (event) => {
        setIsActive(!isActive);
        event.preventDefault();
    };
    return (
        <div className="searchbar-container">
            <div className={isActive ? "search-wrapper active" : "search-wrapper"}>
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button onClick={handleSearch} className={isActive ? "search-icon" : "search-icon"}><span></span></button>
                </div>
                <span onClick={handleSearch} className={isActive ? "close active" : "close"}></span>
            </div>
            <div className={isActive ? "search-wrapper active" : "search-wrapper"}>
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button onClick={handleSearch} className={isActive ? "search-icon" : "search-icon"}><span></span></button>
                </div>
                <span onClick={handleSearch} className={isActive ? "close active" : "close"}></span>
            </div>
        </div>
    );
}

export default SearchBar;


