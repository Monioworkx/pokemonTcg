import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';


import './DeckEditorMain.css';

const DeckEditorMain = () => {
    return (
        <div className="deck-editor-main-container">
            <Link className="toCreate-link" to={'./create-deck'} />
            polla
        </div>
    );
}

export default DeckEditorMain;