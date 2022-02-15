import React, { useEffect, useState } from "react";

import './SearchForm.css';

const SearchForm = () => {
    const [inputData, setInputData] = useState({
        cardName: '',
        supertype: '',
    });
    const handleOnChange = (event) => {
        setInputData({
            ...inputData,
            [event.target.name] : event.target.value
        }); 
        event.preventDefault();
        console.log(inputData);
    }

    return (
        <div className="search-form-container">
            <form>
                <input onChange={handleOnChange} className="input-holder" type="text" name="cardName" placeholder="Card name" />
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