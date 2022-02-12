import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faFolderOpen, faHouseChimney, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'

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
                <li><FontAwesomeIcon onClick={handleToggler} className="hamb" icon={ faAnglesRight } /></li>
                <li><FontAwesomeIcon className="link-icon" icon={ faHouseChimney } /><a href="#top">Home</a></li>
                <li><FontAwesomeIcon className="link-icon" icon={ faFolderOpen } /><a href="#top">My Decks</a></li>
                <li><FontAwesomeIcon className="link-icon" icon={ faSquarePlus } /><a href="#top">Deck Editor</a></li>
                <li><FontAwesomeIcon className="link-icon" icon={ faMagnifyingGlass } /><a href="#top">Card Data Base</a></li>
            </ul>
        </nav>
    );

}

export default SideBar;