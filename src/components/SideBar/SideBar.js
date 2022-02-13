import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faFolderOpen, faHouseChimney, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'

import { Link , NavLink } from "react-router-dom";

const SideBar = () => {
    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? true : false);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-collapsed')
    };

    return (
        <nav className={isExpanded ? "side-bar" : "side-bar collapsed"}>
            <ul>
                <li>
                    <FontAwesomeIcon onClick={handleToggler} className="hamb" icon={ faAnglesRight } />
                </li>
                <NavLink className="link-item" to='/'>
                    <FontAwesomeIcon className="link-icon" icon={ faHouseChimney } />
                    <a className="link-text" href="#top">Home</a>
                </NavLink>
                <NavLink className="link-item" to='/main'>
                    <FontAwesomeIcon className="link-icon" icon={ faFolderOpen } />
                    <a className="link-text" href="#top">My Decks</a>
                </NavLink>
                <NavLink className="link-item" to='/main'>
                    <FontAwesomeIcon className="link-icon" icon={ faSquarePlus } />
                    <a className="link-text" href="#top">Deck Editor</a>
                </NavLink>
                <NavLink className="link-item" to='/CardDataBase'>
                    <FontAwesomeIcon className="link-icon" icon={ faMagnifyingGlass } />
                    <a className="link-text" href="#top">Card Data Base</a>
                </NavLink>
            </ul>
        </nav>
    );

}

export default SideBar;