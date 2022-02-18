import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faFolderOpen, faHouseChimney, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'

import { NavLink } from "react-router-dom";

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [color, setColor] = useState('purple');

    useEffect(() => {
        setColor(window.localStorage.getItem('color'));
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('color', color);
    }, [color]); 

    const handleExpandSidebar = (event) => {
        setIsExpanded(!isExpanded);
    };

    const handleChangeSidebarColor = (color) => {
        setColor(color);
    }

    return (
        <nav className=
            {`
            ${isExpanded ? "side-bar" : "side-bar collapsed"}
            ${color}
            `}>
            <div className="nav-items">
                <li>
                    <FontAwesomeIcon onClick={handleExpandSidebar} className={isExpanded ? "hamb rotate" : "hamb"} icon={ faAnglesRight } />
                </li>
                <NavLink className="link-item" to='/' onClick={() => handleChangeSidebarColor('purple')}>
                    <FontAwesomeIcon className="link-icon" icon={ faHouseChimney } />
                    <span className="link-text" href="#top">Home</span>
                </NavLink>
                <NavLink className="link-item" to='/main' onClick={() => handleChangeSidebarColor('purple')}>
                    <FontAwesomeIcon className="link-icon" icon={ faFolderOpen } />
                    <span className="link-text" href="#top">My Decks</span>
                </NavLink>
                <NavLink className="link-item" to='/DeckEditor' onClick={() => handleChangeSidebarColor('black')}>
                    <FontAwesomeIcon className="link-icon" icon={ faSquarePlus } />
                    <span className="link-text" href="#top">Deck Editor</span>
                </NavLink>
                <NavLink className="link-item" to='/CardDataBase' onClick={() => handleChangeSidebarColor('purple')}>
                    <FontAwesomeIcon className="link-icon" icon={ faMagnifyingGlass } />
                    <span className="link-text" href="#top">Card Data Base</span>
                </NavLink>
            </div>
        </nav>
    );

}

export default SideBar;