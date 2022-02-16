import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faFolderOpen, faHouseChimney, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'

import { Link , NavLink } from "react-router-dom";

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

    const handleChangeSidebarColor = (event) => {
        setColor(event.currentTarget.id);
    }

    return (
        <nav className=
            {`
            ${isExpanded ? "side-bar" : "side-bar collapsed"}
            ${color}
            `}>
            <ul>
                <li>
                    <FontAwesomeIcon onClick={handleExpandSidebar} className={isExpanded ? "hamb rotate" : "hamb"} icon={ faAnglesRight } />
                </li>
                <NavLink className="link-item" to='/'>
                    <FontAwesomeIcon className="link-icon" icon={ faHouseChimney } />
                    <a className="link-text" href="#top">Home</a>
                </NavLink>
                <NavLink className="link-item" to='/main'>
                    <FontAwesomeIcon className="link-icon" icon={ faFolderOpen } />
                    <a className="link-text" href="#top">My Decks</a>
                </NavLink>
                <NavLink id="black"  className="link-item" to='/DeckEditor' onClick={handleChangeSidebarColor}>
                    <FontAwesomeIcon className="link-icon" icon={ faSquarePlus } />
                    <a className="link-text" href="#top">Deck Editor</a>
                </NavLink>
                <NavLink id="purple" className="link-item" to='/CardDataBase' onClick={handleChangeSidebarColor}>
                    <FontAwesomeIcon className="link-icon" icon={ faMagnifyingGlass } />
                    <a className="link-text" href="#top">Card Data Base</a>
                </NavLink>
            </ul>
        </nav>
    );

}

export default SideBar;