import React from "react";

import './Home.css';

import Header from "../Header/Header";
import Menu from "../Menu/Menu";


const Home = () => {
    return (
        <div className="home-content">
            <Header />
            <Menu />
        </div>
    );
}

export default Home;