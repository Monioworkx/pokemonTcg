import React from "react";

import './Menu.css'

import MenuButton from '../MenuButton/MenuButton';

const Menu = () => {

    return (
        <div className="menu">
            <div className="menu-container">
                <div className="menu-inner-container">
                    <MenuButton />
                </div>
            </div>
        </div>
    );
}

export default Menu;