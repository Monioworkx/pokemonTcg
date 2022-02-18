import React, { useEffect, useState } from "react";

import './SearchForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faList } from "@fortawesome/free-solid-svg-icons";

import SearchResults from "../SearchResults/SearchResults";

const SearchForm = (props) => {
    return (
        <div className="search-form-container">
            <form className="form-input-container" onSubmit={props.handleSubmit}>
                <input onChange={props.handleOnChange} className="input-holder" type="text" name="cardName" placeholder="Card name" />
                <input className="input-holder" type="text" name="supertype" placeholder="Supertype" />
                <input className="input-holder" type="number" name="crc" placeholder="Converted retreat cost" />
                <input className="input-holder" type="number" name="cec" placeholder="Converted energy cost" />
                <input className="input-holder" type="text" name="attacks" placeholder="Attack name" />
{/*                 <select name = "dropdown">
                    <option value = "expansion1" selected>expansion1</option>
                </select>
 */}                <button type="submit">Search</button>
            </form>
            <div className="view-list-select-mode">
                <FontAwesomeIcon 
                    onClick={props.handleImagesIconOnClick} 
                    className={props.activeImages ? "view-icon onGreen" : "view-icon"} 
                    icon={faImage} 
                />
                <FontAwesomeIcon 
                    onClick={props.handleListIconOnClick}
                    className={props.activeList ? "view-icon onGreen" : "view-icon"}
                    icon={faList} 
                /> 
            </div>    
        </div>
    );
}

export default SearchForm