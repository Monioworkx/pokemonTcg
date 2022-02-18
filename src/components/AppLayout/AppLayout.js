import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../SideBar/SideBar";

import './AppLayout.css';



const AppLayout = () => {
    return (
        <div className="appLayout">
            <div className="side">
                <SideBar />
            </div>
            <div className="app-container">
                <div className="page-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AppLayout;