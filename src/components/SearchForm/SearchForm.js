import React, { useEffect, useState } from "react";

import './SearchForm.css';

const SearchForm = (props) => {


    return (
        <div className="search-form-container">
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleOnChange} className="input-holder" type="text" name="cardName" placeholder="Card name" />
                <input className="input-holder" type="text" name="supertype" placeholder="Supertype" />
                <input className="input-holder" type="number" name="crc" placeholder="Converted retreat cost" />
                <input className="input-holder" type="number" name="cec" placeholder="Converted energy cost" />
                <input className="input-holder" type="text" name="attacks" placeholder="Attack name" />
                <select name = "dropdown">
                    <option value = "expansion1" selected>expansion1</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm